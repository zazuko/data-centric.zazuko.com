# Integrate with web server libraries

All libraries integrated with Kopflos require the same configuration, at the very least the SPARQL endpoint URL and the API graph URL(s).

## Express

```ts
import express from 'express'
import kopflos from '@kopflos-cms/express'

const app = express()

app.use(kopflos({
  sparql: {
    default: 'http://localhost:3030/ds/query',
  },
  apiGraphs: [
    'https://example.com/api',
  ]
}))

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
```
