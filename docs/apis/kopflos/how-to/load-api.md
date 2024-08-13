# Load API description

A Kopflos API is composed of triples that describe the API's structure and behavior. These triples need to be loaded into the API's store before the API can be used.

## Load from named graphs

The simplest and recommended way to load the API is to use named graphs. A single API can be loaded from multiple named graphs, and there can be multiple APIs served from a single Kopflos instance. Use the code below to load the API from named graphs:

```js
import Kopflos from '@kopflos-cms/core'

let config
const api = new Kopflos(config)
await Kopflos.fromGraphs(api, 'http://example.com/api1', 'http://example.com/api2', 'http://example.com/shared')
```

:::hint
[RDF/JS NamedNode](https://rdf.js.org/data-model-spec/#namednode-interface) objects can be used as well.
:::

The given named graphs will be loaded from the default SPARQL endpoint.

## Initialise with preloaded data

If you have the API triples in memory, you can initialise the API with it directly:

```typescript
import Kopflos from '@kopflos-cms/core'

let config
let dataset: DatasetCore

const api = new Kopflos(config, { dataset })
```
