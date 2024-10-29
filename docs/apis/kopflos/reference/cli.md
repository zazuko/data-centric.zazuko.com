# Command Line Interface

Use `kopflos` to manage a Kopflos API.

## `serve`

Start the Kopflos API server.

### `--config`

Path to the [configuration file](./configuration.md).

### `-m, --mode`

Mode to run in (`development` or `production`). Default is `production`.

### `--port`

Port to listen on. Default is `1429`.

### `--host`

Host to listen on. Default is `0.0.0.0`.

### `--trust-proxy`

Configuring how the API trusts the `X-Forwarded-For` header. See [Express documentation](https://expressjs.com/en/guide/behind-proxies.html) for details. 

Providing no value will be equivalent to `app.set('trust-proxy', true)`.

### `--variable name=value`

Provide overrides for configuration variables. Can be used multiple times.

## `build`

Executes `build` hooks from all plugins which implement it.
