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

## Variables

Variables can additionally be provided via CLI options, and they will override the configuration
file.

```json
{
  "variables": {
    "foo": "foo",
    "bar": "bar"
  }
}
```

```sh
kopflos --variable bar=baz
```

The above will result in the following variables:

```json
{
  "foo": "foo",
  "bar": "baz"
}
```

They can be accessed from the KopflosEnvironment. In handler, for example:

```ts
import {Handler} from 'kopflos'

export default (): Handler => ({env}) => {
  const {foo, bar} = env.kopflos.config.variables
}
```

They can also be used to parametrise handlers

```turtle
<#WebPage>
  a kl:ResourceShape ;
  kl:handler
    [
      a kl:Handler ;
      kl:method "GET" ;
      code:implementedBy
        [
          a code:EcmaScriptModule ;
          code:link <file:handler/foobar.js#default> ;
          code:arguments
            (
              "${foo}"^^code:EcmaScriptTemplateLiteral
              "${bar}"^^code:EcmaScriptTemplateLiteral
            ) ;
        ] ;
    ] ;
.
```
