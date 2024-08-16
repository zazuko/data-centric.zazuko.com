# Configure resource loaders

As explained on the [Request pipeline page](../explanations/request-pipeline.md), early in the request pipeline, Kopflos selects a resource loader to load the requested resource's Core Representation.

Resource Loaders can be declared on instances of `kopflos:ResourceShape`, `kopflos:Api`, and `kopflos:Config` resources.

## Predefined loaders

Kopflos recognizes two loaders out of the box. They are identified by their shorthand identifiers.

### Own graph loader

The "Own Graph" loader is the default.
It loads the requested resource from the same graph where the request was made.
For example,
a request to `https://example.org/person/1` will load the entire named graph `https://example.org/person/1` as Core Representation.

```turtle
PREFIX kopflos: <https://kopflos.described.at/>

<>
  # a kopflos:ResourceShape ; # or
  # a kopflos:Api ;           # or 
  # a kopflos:Config ;
  kopflos:resourceLoader kopflos:OwnGraphLoader ;
.
```

### `DESCRIBE` loader

The `DESCRIBE` loader is a built-in loader
that uses the SPARQL `DESCRIBE` query to load the requested resource.
The loader will issue a `DESCRIBE` query to the default SPARQL endpoint.

```turtle
PREFIX kopflos: <https://kopflos.described.at/>

<>
  # a kopflos:ResourceShape ; # or
  # a kopflos:Api ;           # or 
  # a kopflos:Config ;
  kopflos:resourceLoader kopflos:DescribeLoader ;
.
```

## Loader precedence

Kopflos selects a loader based on the `kopflos:resourceLoader` property,
going bottom-up from the Resource Shape to the shared `kopflos:Config` resource.

```turtle
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kopflos: <https://kopflos.described.at/>
PREFIX ex: <http://example.org/>

ex:PersonShape
  a kopflos:ResourceShape ;
  kopflos:api ex:PeopleApi ;
  sh:targetNode ex:Person ;
  kopflos:resourceLoader ex:ResourceLoader1 ;
.

ex:AddressShape
  a kopflos:ResourceShape ;
  kopflos:api ex:PeopleApi ;
  sh:targetNode ex:Person ;
.

ex:PeopleApi
  a kopflos:Api ;
  kopflos:config ex:Config ;
  kopflos:resourceLoader ex:ResourceLoader2 ;
.

ex:ArticleShape
  kopflos:api ex:PublishingApi ;
  sh:targetNode ex:Article ;
.

ex:PublishingApi
  a kopflos:Api ;
  kopflos:config ex:Config ;
.

ex:Config
  a kopflos:Config ;
  kopflos:resourceLoader ex:ResourceLoader3 ;
.
```

The algorithm is straightforward. For any given matched resource shape, Kopflos will:
1. Check if the resource shape has a `kopflos:resourceLoader` property. If it does, Kopflos will use the loader specified in the property.
2. If the resource shape does not have a `kopflos:resourceLoader` property, Kopflos will look for the `kopflos:resourceLoader` property in the resource's API resource.
3. If the API resource does not have a `kopflos:resourceLoader` property, Kopflos will look for the `kopflos:resourceLoader` property in the linked `kopflos:Config` resource.

In the example above:
- If a requested resource matches the `ex:PersonShape`, Kopflos will use `ex:ResourceLoader1` from the resource shape itself.
- If a requested resource matches the `ex:AddressShape`, Kopflos will use `ex:ResourceLoader2` from the API resource.
- If a requested resource matches the `ex:ArticleShape`, Kopflos will use `ex:ResourceLoader3` from the Config resource.

## Implementing and using custom Resource Loaders

A loader is a function that takes the requested URI
(in the form of a [NamedNode](https://rdf.js.org/data-model-spec/#namednode-interface))
and returns a Core Representation as an [RDF/JS Stream](https://rdf.js.org/stream-spec/#stream-interface).
It also takes a second argument: the instance of Kopflos that is processing the request.

For example, here is a loader which sends a request query to a Stardog database,
with a query hint to ensure that the Concise Bounded Description (CBD) is returned.

```ts
// src/resource-loaders/stardog-loaders.ts
import type { ResourceLoader } from '@kopflos-cms/core'

export const CBD: ResourceLoader = async (uri, kopflos) => {
  const query = `
#pragma describe.strategy cbd  
DESCRIBE <${uri.value}>`
  
  return kopflos.env.sparql.default.stream.query.construct(query)
}
```

To use it as the default in an API, declare the loader in the API's configuration:

```turtle
PREFIX code: <https://cube.link/code#>
PREFIX kopflos: <https://kopflos.described.at/>
PREFIX ex: <http://example.org/>

ex:Config
  a kopflos:Config ;
  kopflos:resourceLoader
    [
      a code:EcmaScriptModule ;
      code:link <file:src/resource-loaders/stardog-loaders.js#CBD> ;
    ] ;
.
```
