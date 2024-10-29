# Serve virtual resources

In addition to `sh:targetNode` and `sh:targetClass`, a specialised target can be used to match
resources based on URL patterns. Such resources do not have to exist as triples in the database
but can be generated on-the-fly by the server.

For example, if you have a collection resource, such as `http://example.org/projects`, and you would
like to implement pagination using URL query parameters, you can define a patterned target to match
requests to `http://example.org/projects/1`, `http://example.org/projects/2`, etc.

```turtle
PREFIX code: <https://code.described.at/>
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kl: <https://kopflos.described.at/>

[
  a kl:ResourceShape ;
  sh:target
    [
      a kl:PatternedTarget ;
      # Capture the page number in the URL
      kl:regex "/projects(/(?<page>\\d+))?" ;
    ] ;
  kl:handler
    [
      a kl:Handler ;
      kl:method "GET" ;
      code:implementedBy
        [
          a code:EcamScriptModule ;
          code:link <file:handler/projects.js#getCollection> ;
          # Pass the page number as an argument to the handler
          code:arguments ( "${page}"^^code:EcmaScriptTemplateLiteral ) ;
        ] ;
    ] ;
] .
```

:::tip
The pattern is matched against the path part of the URL only.
:::

By taking advantage of named capture groups in the regular expression, you can extract parts of the
URL. They can also be accessed programmatically from `subjectVariables` in a handler.

```ts
import { Handler } from '@kopflos-cms/core'

export function getCollection (page: string): Handler {
  return ({ subjectVariables }) => {
    // subjectVariables.page === page
  }
}
```

:::warning
Currently only regular expression patterns are supported. In a future release support for
[RFC6570 URI templates](https://datatracker.ietf.org/doc/html/rfc6570) and express-style will be
added.
:::
