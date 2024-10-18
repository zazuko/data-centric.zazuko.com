# Configuration

Kopflos can be configured via a configuration file, which can be in various formats and locations. If not provided, it will try various default locations:

- `kopflos` key in `package.json`
- `.kopflosrc` (YAML or JSON)
- `.kopflosrc.(json|yaml|yml|js|ts|mjs|cjs)`
- any of the above in `.config` directory
- `kopflos.config.(js|ts|mjs|cjs)`

## Structure

```ts
interface KopflosConfig {
  mode?: 'development' | 'production'
  // Base IRI for the API and all its resources
  baseIri: string
  // SPARQL endpoints. `default` endpoint is required.
  sparql: {
    default: string | import('sparql-http-client/StreamClient.js').Options
    [key: string]: string | import('sparql-http-client/StreamClient.js').Options
  }
  // Named graphs which contain the API description.
  apiGraphs: Array<NamedNode | string>
  // Base path for resolving `code:link` imports
  codeBase?: string
  // Plugin configuration
  plugins?: Record<string, unknown>
  // Custom configuration variables
  variables?: Record<string, unknown>
}
```
