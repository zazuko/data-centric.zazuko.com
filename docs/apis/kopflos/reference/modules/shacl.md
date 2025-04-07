# @kopflos-cms/shacl

Validates request payloads against SHACL shapes.

## Setup

Add a plugin to `kopflos.config.js`. All parameters are optional.

```typescript
export default <KopflosConfig> {
  plugins: {
    '@kopflos-cms/shacl': {
      // loadDataGraph
    },
  }
}
```

### `loadDataGraph`

An optional function which changes how the Data Graph loaded. By default, the request payload is used.

## Usage

To validate a request payload, add `sh:shapesGraph` to the Request Handler:

```turtle
PREFIX kl: <https://kopflos.described.at/>
PREFIX sh: <http://www.w3.org/ns/shacl#>

<#ResourceShape>
  a kl:ResourceShape ;
  kl:handler 
    [
      kl:method "PUT" ;
      sh:shapesGraph </class/Resource> ;
    ] ;
.
```

Multiple graphs can be specified and the can use `owl:imports` to include other graphs.

The objects of `sh:shapesGraph` can also be code references:

```turtle
PREFIX code: <https://code.described.at/>
PREFIX kl: <https://kopflos.described.at/>
PREFIX sh: <http://www.w3.org/ns/shacl#>

<#ResourceShape>
  a kl:ResourceShape ;
  kl:handler 
    [
      kl:method "PUT" ;
      sh:shapesGraph [
        code:implementedBy [
          a code:EcmaScript ;
          code:link <file:lib/generated-shapes-graph.js#resource>
        ] ;
      ] ;
    ] ;
.
```

The implementation must be a function which has a single `HandlerArgs` parameter and returns an RDF/JS DatasetCore (can be async).
