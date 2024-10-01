# Configure SPARQL endpoints

Kopflos can be configured with one or more SPARQL endpoints which can be accessed at runtime by
handler implementors. A single endpoint is required, named `default`.

To configure the endpoints, one of three methods is supported.

## From endpoint URL

The simplest option is to provide a single unauthenticated endpoint URL which will be used for queries and updates.

```js
import Kopflos from '@kopflos-cms/core'

let graph

const kopflos = new Kopflos(graph, {
  sparql: {
    default: 'http://example.com/query',
  }
})
```

## From endpoint configuration object

A more complex scenario will often require separate query and update URLs and authentication. In such
cases, provide a full settings object as required by [`sparql-http-client`](https://github.com/rdf-ext/sparql-http-client).

```js
import Kopflos from '@kopflos-cms/core'

let graph

const kopflos = new Kopflos(graph, {
  sparql: {
    default: {
      endpointUrl
    }
  }
})
```

## Provide instances of SPARQL clients

Lastly, it is possible to create the clients manually in code and pass them to Kopflos. 
Both `stream` and `parsed` clients are required.

```js
import StreamClient from 'sparql-http-client'
import ParsingClient from 'sparql-http-client/ParsingClient.js'
import Kopflos from '@kopflos-cms/core'

let graph

const stream = new SparqlClient({ endpointUrl })
const parsed = new ParsingClient({ endpointUrl })

const kopflos = new Kopflos(graph, {
  sparql: {
    default: {
      stream,
      parsed
    }
  }
})
```
