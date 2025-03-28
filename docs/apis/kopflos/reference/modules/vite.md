# @kopflos-cms/vite

## Plugin configuration

```js
export default {
  plugins: {
    "@kopflos-cms/vite": {
      root: "ui",                  // required
      entrypoints: ["ui/*.html"],  // recommended for build
      configPath,                  // optional path to addtional vite config
      outDir,                      // optional, default: "dist"
    }
  }
}
```

The contents of `configPath` will be merged with the default vite configuration.

## Build command hook

When running `kopflos build`, the plugin will build the app using vite. The `entrypoints` are used to
determine which HTML files to process. If the `entrypoints` are not set, the plugin will fall back to
the default vite behaviour.

The build output will be placed in the `outDir` directory, which defaults to `dist`.

## Template handler

The handler transforms the HTML template so that JavaScript code is served by vite. It must be 
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
        code:arguments ( "${VITE.basePath}/templates/person.html"^^code:EcmaScriptTemplateLiteral ) ;
      ]
      [
        a code:EcmaScriptModule ;
        code:link <node:@kopflos-cms/vite/template.js#transform> ;
      ]
    )
] .
```

:::tip
Use the `VITE.basePath` variable to reference the correct path to the template file. It corresponds to the
`root` configuration option in the vite plugin in development mode and `outDir` path in production mode.
:::


## Serving static files

The plugin supports the vite's [`public` directory](https://vite.dev/guide/assets.html#the-public-directory) feature.
