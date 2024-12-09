# Create Your First API

This tutorial will guide you through the process of creating a minimal Kopflos API from scratch. The API will handle GET requests for RDF instances of `schema:Person` stored in the backing triplestore.

In addition to _Node.js_, you will need _Docker_ to set up a local triplestore.


## Setup

First, create a new directory for your project and navigate into it:

```bash 
mkdir my-api && cd my-api
```

## Setting Up the Database

Kopflos requires a database (a SPARQL endpoint) to store RDF resources and the API description. We will use Docker Compose to create a local Oxigraph triplestore.

Create a Docker Compose file:
```bash
touch docker-compose.yaml
```

Add the following content to `docker-compose.yaml`:

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
Once the database is running, open [http://localhost:7878](http://localhost:7878) to access the database UI.


## Creating the Node.js Project

Next, we will create the Kopflos API using [Node.js](http://nodejs.org/).

Initialize a new Node.js project:

```bash
npm init -y
```

Edit the file `package.json` created by the above command, and set the `"type"` field to `"module"` :

```json
"type": "module"
```

Your `package.json` should now look something like this:

```js
{
  "name": "my-api",
  "type": "module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
Install `kopflos`:

```bash
npm install kopflos
```

## The configuration file

Create a Kopflos [configuration file](../reference/configuration):
```bash
touch kopflos.config.js
```
Add the following content to `kopflos.config.js`:
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
This configuration tells Kopflos about the SPARQL endpoint and specifies that RDF files in the `resources` directory should be loaded into the triplestore at startup (see [Seed database on app start](../how-to/seed-database.md)). 

If we create a file named `api.ttl` in the `resources` directory, Kopflos will load its contents at startup into the named graph `http://localhost:1429/api`, which is where the API description should be according to the value of `apiGraphs`.

Let's create this file.


## The API description

Create the `resources` directory and the `api.ttl` file:

```bash
mkdir resources && touch resources/api.ttl
```

Add the following content to `api.ttl`:

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
recognized as API resources (see [Request Handlers](../reference/request-handlers)), 
and their core representation is the contents of the named graph identified by the resource URI (see [Resource Loaders](../how-to/resource-loaders)).

## Add resource data
In the `resources` folder we can add also resource data.
Let's add a file for a person named Alice in a `people` subdirectory:
```bash
mkdir resources/people && touch resources/people/p1.ttl
```

Add the following content to `p1.ttl`:

```turtle
@prefix schema: <http://schema.org/> .

<> a schema:Person ;
    schema:name "Alice" .
```

## Start it!
You can finally start kopflos:

```bash
npx kopflos serve
```
You should see some log messages, the last one similar to:
```
Server running on 1429. API URL: http://localhost:1429 
```

Opening [http://localhost:1429/people/p1](http://localhost:1429/people/p1) you should see the RDF data for Alice:

```json
[
  {
    "@id": "http://localhost:1429/people/p1",
    "@type": "http://schema.org/Person"
  },
  {
    "@id": "http://localhost:1429/people/p1",
    "http://schema.org/name": "Alice"
  }
]
```
The response is serialized as JSON-LD. To request another format you can use `curl`
with a proper accept header:

```bash
curl --header "Accept: text/turtle" http://localhost:1429/people/p1
```

Congratulations! You have successfully created your first Kopflos API. You can now handle GET requests for RDF instances of `schema:Person` stored in your triplestore. Happy coding!
