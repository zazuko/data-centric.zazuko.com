# Use express middleware

The package `@kopflos-cms/express` allows you to use existing express middleware in your Kopflos project.
To do that, add a plugin `@kopflos-cms/express/middleware` to your `kopflos.config.js` file with `before`
and `after` keys.

The `after` middleware are only executed when kopflos handler returns a `404` status code or throws an error.

## Middleware from NPM packages

In your `kopflos.config.js` file, you can add references to other modules, such as `cors` or `compression`. 

The requirements are that every such module default-exports a function which returns the actual middleware. 

To provide an additional config, add a two element array instead of just the module name, as shown below
on the example of `compression`.

```javascript
export default {
  // ...other settings
  plugins: {
    '@kopflos-cms/express/middleware': {
      before: [
        'cors',      
        ['compression', { level: 9 }],
      ],
    },
  },
}
```

You can also reference named exports by adding a `#name` after the modue name. For example, 
to use [express-rate-limit](https://www.npmjs.com/package/express-rate-limit), you can do the following:

```javascript
export default {
  // ...other settings
  plugins: {
    '@kopflos-cms/express/middleware': {
      before: [
        ['express-rate-limit#rateLimit', {
          windowMs: 15 * 60 * 1000,
          limit: 100,
        }],      
      ],
    },
  },
}
```

## Your own middleware or NPM packages which do not export a function

If you want to include your own middleware or a package which does not export a function, you can do so by
exporting a function from your own module.

```js
// ./lib/my-middleware.js
export default function myMiddleware() {
  return (req, res, next) => {
    // your middleware code here
    next();
  };
}
```

Then, you can reference it in your `kopflos.config.js` file by the absolute path:

```javascript
import * as url from 'node:url'

export default {
  // ...other settings
  plugins: {
    '@kopflos-cms/express/middleware': {
      before: [
        url.fileURLToPath(new URL('./lib/my-middleware.js', import.meta.url)),
      ],
    },
  },
}
```

:::warning
The path must be absolute, thus the usage of `import.meta.url` to resolve the path relative to the 
config file itself. For that reason, this method will only work with configuration files written as
code. (for commonjs, you can use `__dirname` instead)
:::
