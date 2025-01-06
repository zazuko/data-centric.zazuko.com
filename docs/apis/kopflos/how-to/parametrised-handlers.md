# Implement parametrised handlers

## Positional arguments

It is possible to parametrise a handler so that it can be more easily adapted to various use cases.

For example, a handler which runs queries could be configured to run against different
endpoints configured in the app. To use such a handler, we can pass the endpoint as a parameter.
That is done by adding a list or object of `code:arguments` property inside the implementation node. 

```turtle
PREFIX code: <https://code.described.at/>
PREFIX kl: <https://kopflos.described.at/>

[
  a kl:Handler ;
  code:implementedBy [
    a code:EcmaScriptModule ;
    code:link <file:handler/query.js#runQuery> ;
    code:arguments ( "wikidata" ) ;
  ] ;
] . 
```

The handler implementation can then access the arguments as a parameters passed to the handler factory.

```ts
// handler/query.js#runQuery
import type { Handler } from '@kopflos-cms/core' 

export function runQuery (endpointName: string): Handler {
  return ({ env }) => {
    const endpoint = env.sparql[endpointName]
    if (!endpoint) {
      throw new Error(`Unknown endpoint: ${endpointName}`)
    }
    
    // Run the query against the endpoint
  }
}
```

## Named arguments

Named arguments are also supported.

```turtle
PREFIX code: <https://code.described.at/>
PREFIX arg: <https://code.described.at/argument#>
PREFIX kl: <https://kopflos.described.at/>

[
  a kl:Handler ;
  code:implementedBy [
    a code:EcamScriptModule ;
    code:link <file:handler/query.js#runQuery> ;
    code:arguments [
      arg:endpointName "wikidata" ;
    ] ;
  ] ;
] . 
```

The handler implementation can then access the arguments as a parameters passed to the handler factory.

```ts
// handler/query.js#runQuery
import type { Handler } from '@kopflos-cms/core' 

export function runQuery ({ endpointName }): Handler {
  return ({ env }) => {
    const endpoint = env.sparql[endpointName]
    if (!endpoint) {
      throw new Error(`Unknown endpoint: ${endpointName}`)
    }
    
    // Run the query against the endpoint
  }
}
```
