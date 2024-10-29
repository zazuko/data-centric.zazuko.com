# Serve RDF in data-bound HTML

This guide will show you how to serve HTML templates bound to RDF data.

:::warning
These features are a work in progress.
:::

## Prerequisites

In an existing kopflos application, install the following dependencies:

```sh
npm install @kopflos-labs/html-template @kopflos-labs/handlebars
```

## Create a template

A template is a combination of HTML `<template>` elements and Handlebars expressions. It is
important,
however, that the HTML is only processed on the server and not in the browser. This is where the
handlebars package comes in, providing a familiar syntax to fill in the templates with your data.

First, create a new HTML file, for example `/templates/page.html` which will be used to serve a page
with a title and a body simple. We will be serving instances of the `schema:Person` class.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <template target-class="schema:Person">
    <template property="schema:name">
      <title>{{ pointer.value }}</title>
    </template>
  </template>
</head>
<body>
<template target-class="schema:Person">
  <h1>{{ valueof schema:name }}</h1>

  <template property="schema:address">
    <dl>
      <dt>Street</dt>
      <dd>{{ valueof schema:streetAddress }}</dd>
      <dt>City</dt>
      <dd>{{ valueof schema:addressLocality }}</dd>
      <dt>Postal Code</dt>
      <dd>{{ valueof schema:postalCode }}</dd>
    </dl>
  </template>
</template>
</body>
</html>
```

The template elements are used to find the correct data to fill in the placeholders.

Similarly to [SHACL's `sh:targetClass`](https://www.w3.org/TR/shacl/#targetClass), the
`target-class`
attribute is used to find the root node in the template data. It is required on the top level
template
element.

Templates with a `property` attribute are used to navigate the data graph, just like
[Property Shapes](https://www.w3.org/TR/shacl/#property-shapes).

Inside any template, you can use template binding expressions to fill in the data.

:::tip
Here we use handlebars, but it is possible to replace it with other templating languages.
:::

The current node in the data graph is available as `pointer`. The `valueof` helper is used to output
value of a property, thus being an alternative to nested templates with `property` attributes.
For example, since complex properties are supported,

```html
<img src="{{ valueof schema:image/schema:tumbnail/schema:contentUrl }}">
``` 

is a terser equivalent to:

```html

<template property="schema:image">
  <template property="schema:thumbnail">
    <template property="schema:contentUrl">
      <img src="{{ pointer.value }}">
    </template>
  </template>
</template>
```

## Create a page resource shape

To serve the template, we need to create [Resource Shape](./resource-shape.md) which will
act as a dynamic resource, meaning that it will serve resources which do no actually exist in the
store. Instead, other resource data will be fetched and the page itself is only a URL pattern. In
other words, a single resource shape will match and serve multiple resources.

```turtle
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kl: <https://kopflos.described.at/>
PREFIX code: <https://code.described.at/>

<person-page>
  a kl:ResourceShape ;
  kl:api <> ;
  sh:target
    [
      a kl:PatternedTarget ;
      kl:regex "/page/person/(?<id>\\w+)$" ;
    ] ;
  kl:handler
    [
      a kl:Handler ;
      kl:method "GET" ;
      code:implementedBy
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
                  code:link <node:@kopflos-labs/handlebars#default> ;
                ]
                [
                  a code:EcmaScriptModule ;
                  code:link <file:lib/templateData.js#describe> ;
                ]
                "/person/${id}"^^code:EcmaScriptTemplateLiteral
              ) ;
          ]
        )
    ] ;
.
```

The patterned target is used to match the URL pattern similar to `/page/person/:id` where `:id` is
stored as a [request subject variable](../reference/request-handlers#subject-variables).

The handler is a sequence of modules which will load the template file using `@kopflos-cms/serve-file`
and the process the templates using `@kopflos-labs/html-template` and `@kopflos-labs/handlebars`.

## Create a data source

Finally, you need to create the `lib/templateData.js#describe` module which will provide the data
for the template:

```ts
import type { TemplateDataFunc } from '@kopflos-labs/html-template'

export const describe = (resourcePath: string): TemplateDataFunc => ({ env }) => {
  return env.sparql.default.stream.query.construct(`
BASE <${env.kopflos.config.baseIri}>
DESCRIBE <${resourcePath}>`)
}
```

The implementation is a minimal query to describe the person resource, whose identifier is taken from
the resource pattern. Notice how it's declaratively set in the handler as a template literal and
forwarded to the `describe` function.
