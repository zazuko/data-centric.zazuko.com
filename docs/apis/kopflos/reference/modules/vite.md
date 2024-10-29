# @kopflos-cms/vite

## Plugin configuration

```js
export default {
  plugins: {
    "@kopflos-cms/vite": {
      root: "ui",                  // required
      entrypoints: ["ui/*.html"]   // required for build
      configPath,                  // optional path to addtional vite config
      outDir,                      // optional, default: "dist"
    }
  }
}
```

## Template handler

The handler transforms the HTML template so that JavaScript code is served by vite. It must be 
preceded by another handler that serves the HTML, such as [@kopflos-cms/serve-file](./serve-file.md).

```turtle
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
        code:link <node:@kopflos-cms/vite/template.js#transform> ;
      ]
    )
] .
```
