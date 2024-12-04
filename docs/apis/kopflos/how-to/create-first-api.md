# Create your first API

This tutorial will walk you through the creation of a Kopflos API from scratch.
The API will serve GET requests for RDF instances of `schema:Person`
found in the backing triplestore.

Besides _nodejs_, you will need also _docker_ for the creation of a local triplestore. 

Let's start creating a new directory and moving inside it:

```bash 
mkdir my-api && cd my-api
```

## The database
Kopflos requires a database (a SPARQL endpoint) to hold the API
description as well as the RDF resources to be served.
We can create a local Oxigraph triplestore with docker compose.

Create a docker compose file:
```bash
touch docker-compose.yaml
```

and copy/paste the following content into it:

```yaml
version: '2'
services:
  oxigraph:
    image: ghcr.io/oxigraph/oxigraph:0.4.2
    user: root
    command: serve --location /data --bind 0.0.0.0:7878
    ports:
      - 7878:7878
    volumes:
      - ./oxigraph:/data
```
Start the database:
```bash
docker compose up -d
```

Opening http://localhost:7878/, you should see the database UI.

# The node project

Initialize a new _nodejs_ project:

```bash
npm init -y
```

Edit the file `package.json` created by the above command, adding the field `"type": "module"`.

Now install `kopflos` and `express`:
```bash
npm install kopflos express
```

Create a Kopflos configuration file:
```bash
touch kopflos.config.js
```
and copy/paste the following contents into it:
```js
export default {
  baseIri: 'http://localhost:1429',
  apiGraphs: ['http://localhost:1429/api'],
  sparql: {
    default: {
      endpointUrl: 'http://localhost:7878/query?union-default-graph',
      updateUrl: 'http://localhost:7878/update',
    },
  },
  plugins: {
    '@kopflos-cms/plugin-deploy-resources': {
      paths: ['resources'],
    },
  },
}
```
The configuration tells Kopflos about the SPARQL endpoint. It also
specifies to look for RDF files in the `resources` directory,
and to load such data at start-up into the triplestore.
Among such data, the API description is expected in a file named `api.ttl`. Let's create it.

## Create the API description
```bash
mkdir resources && touch resources/api.ttl
```

The content of `api.ttl` is:
```turtle
@prefix schema: <http://schema.org/> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix kl: <https://kopflos.described.at/> .

<>
  a kl:Api ;
  kl:resourceLoader kl:OwnGraphLoader ;
.

<#person>
  a kl:ResourceShape ;
  kl:api <> ;
  sh:targetClass schema:Person ;
.
```
The API description above ensures that instances of `schema:Person` are
recognized as API resources, and their default representation is the contents of the named graph having the resource URI.

## Add resource data
In the `resources` folder we can also add resource data.
Let's add a file for a person:
```bash
mkdir resources/people && touch resources/people/p1.ttl
```

with contents:

```turtle
@prefix schema: <http://schema.org/> .

<> a schema:Person ;
    schema:name "Alice" .
```

## Start it!
Now you can start kopflos:

```bash
npx kopflos serve
```

Opening http://localhost:1429/people/p1 you should get the RDF data for Alice.

## Additional data
So far we have a single resource, which was added at start-up together with the API description.

But we can add more data. Open the user interface for the triple store (http://localhost:7878/),
set the write endpoint to `http://localhost:7878/update`
and run the following SPARQL insert command:


```sparql
PREFIX schema: <http://schema.org/>

INSERT DATA {
  GRAPH <http://localhost:1429/people/p2> {
  	<http://localhost:1429/people/p2> a schema:Person;
    	schema:name "Bob"
  }
}
```
It's important to use the resource URI for the named graph, as well
as an instance of `schema:Person` in that graph.

Now open http://localhost:1429/people/p2 and you should get also Bob's data.
