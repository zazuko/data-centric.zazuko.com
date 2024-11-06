# Render Web Components on the server

This guide will show you how to serve server-side rendered content with Kopflos.

The problem with Web Components is that styles and Shadow DOM which they encapsulate will only be
applied after the components are loaded. This means that the page will be rendered incomplete at first
and only finish rendering later. This is known as the flash of unstyled content (FOUC).

By applying server-side rendering, we ensure that the content is available sooner to the user. This
is especially important for search engine optimization.

:::warning
These features are a work in progress.
:::

## Prerequisites

First, please make sure to follow the instructions in the [Getting Started](./html-templates.md)
guide.

Then, install the following dependencies:

```sh
npm install @kopflos-cms/vite @kopflos-labs/lit lit
```

## Loading web components in a page

Web Components are a powerful way to encapsulate your UI components, making pages dynamic without
sacrificing the declarative nature of HTML.

Since they are just HTML, Kopflos can render any Web Components in the resulting HTML. However, not
all Web Components are designed to be rendered on the server. Currently, Kopflos supports rendering
[lit](https://lit.dev) components which follow the
[Authoring components for Lit SSR](https://lit.dev/docs/ssr/authoring/) guide.

Let's swap some plain HTML with lit components in the `/templates/page.html` file. For the sake of
an
example, these components will mainly encapsulate their styles.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Code in head unchanged -->
</head>
<body>
<template target-class="schema:Person">
  <my-header level="1">{{ valueof schema:name }}</my-header>

  <template property="schema:address">
    <my-dl>
      <dt>Street</dt>
      <dd>{{ valueof schema:streetAddress }}</dd>
      <dt>City</dt>
      <dd>{{ valueof schema:addressLocality }}</dd>
      <dt>Postal Code</dt>
      <dd>{{ valueof schema:postalCode }}</dd>
    </my-dl>
  </template>
</template>

<script src="/page.js" type="module"></script>
</body>
</html>
```

In `page.js`, we only import the components.

```js
import './my-header.js';
import './my-dl.js';
```

Below are the components.

```js
// my-header.js
import { html, css, LitElement } from 'lit';

class MyHeader extends LitElement {
  static get styles () {
    return css`
      h1 {
        color: red;
      }
    `;
  }

  static get properties () {
    return {
      level: { type: Number }
    }
  };

  render () {
    switch (this.level) {
      case 1:
        return html`<h1><slot></slot></h1>`;
      case 2:
        return html`<h2><slot></slot></h2>`;
      case 3:
        return html`<h3><slot></slot></h3>`;
      default:
        return html`<h4><slot></slot></h4>`;
    }
  }
}

customElements.define('my-header', MyHeader);
```

```js
// my-dl.js
import { html, css, LitElement } from 'lit';

class MyDl extends LitElement {
  static get styles () {
    return css`
      dl {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1em;
      }
    `;
  }

  render () {
    return html`<dl><slot></slot></dl>`;
  }
}

customElements.define('my-dl', MyDl);
```

Do refer to lit's documentation for more information on how to create components.

## Preprocessing JS code

Loaded from installed `node-modules`, Web Components cannot be imported directly in the browser.
Also, some components might rely on APIs that are not available in the browser. Kopflos provides the
package [`@kopflos-cms/vite`](../reference/modules/vite) to preprocess the JS code before serving it
to the browser. It also provides a build functionality to produce optimized code for production.

To use it, first add a vite plugin following to your `kopflos.config.js`:

```js
export default {
  // existing config
  plugins: {
    '@kopflos-cms/vite': {
      root: 'templates',
      entrypoints: ['templates/*.html'],
    },
  },
}
```

Then add a handler to the chain between `<node:@kopflos-cms/serve-file#default>` and
`<node:@kopflos-labs/handlebars#default>`. This handler will preprocess the HTML so that JavaScript
code is served by vite.

```turtle
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kl: <https://kopflos.described.at/>
PREFIX code: <https://code.described.at/>

<person-page>
  # ... abridged
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
            code:link <node:@kopflos-cms/vite/template.js#transform> ;
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

## Rendering on the server

Finally, add another handler to the end of the chain.

```turtle
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kl: <https://kopflos.described.at/>
PREFIX code: <https://code.described.at/>

<person-page>
  # ... abridged
  kl:handler
    [
      a kl:Handler ;
      kl:method "GET" ;
      code:implementedBy
        (
          # ... abridged
          [
            a code:EcmaScriptModule ;
            code:link <node:@kopflos-labs/lit#ssr> ;
            code:arguments
              (
                [ code:link <file:templates/my-header.js> ; a code:EcmaScriptModule ]
              )
          ]
        )
    ] ;
.
```

By passing modules to the `ssr` function, Kopflos will render the components on the server. Here, we
only `my-header`. The other component `my-dl` will only be running on the client.
