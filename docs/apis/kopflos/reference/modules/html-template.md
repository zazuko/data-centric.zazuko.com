# @kopflos-labs/html-template

## Handler

The handler transforms the HTML template by binding [templates][#templates] with provided data. It must be
preceded by another handler that serves the HTML, such as [@kopflos-cms/serve-file](./serve-file.md).

```turtle
PREFIX code: <https://code.described.at/>
PREFIX kl: <https://kopflos.described.at/>

[
  kl:handler
    (
      [
        a code:EcmaScriptModule ;
        code:link <node:@kopflos-cms/serve-file#default> ;
        code:arguments ( "templates/person.html" ) ;
      ]
      [
        a code:EcmaScriptModule ;
        code:link <node:@kopflos-labs/html-template#default> ;
        code:arguments
          (
            [
              a code:EcmaScriptModule ;
              code:link <node:@kopflos-labs/handlebars#default>
            ]
          ) ;
      ]
    )
] .
```

One argument is required for the handler, which is the module that will be used to process the templates.
You can also provide a second argument which is the data source for the template. Any additional arguments
will be passed to the template data function.

:::tip
If no data source is provided, the handler will use the [Core Representation](../glossary.md#core-representation).
:::

```turtle
PREFIX code: <https://code.described.at/>
PREFIX kl: <https://kopflos.described.at/>

[
  kl:handler
    (
      [
        a code:EcmaScriptModule ;
        code:link <node:@kopflos-labs/html-template#default> ;
        code:arguments
          (
            [
              a code:EcmaScriptModule ;
              code:link <node:@kopflos-labs/handlebars#default>
            ]
            [
              a code:EcmaScriptModule ;
              code:link <file:lib/templateData.js#default> ;
            ]
            "arg"
          ) ;
      ]
    )
] .
```

To implement the data source, create a module that exports a function like below.

```ts
// lib/templateData.js
import type { TemplateDataFunc } from '@kopflos-labs/html-template'

export default function(arg: string): TemplateDataFunc {
  return ({ env }) => {
    // return an RDf/JS Stream or RDF/JS Dataset (can be async) 
    return env.sparql.default.stream.query.construct(yourQuery(arg))
  }
}
```

