# Seed database on app start

When you start your app, you might want to seed the database with some initial data. This can be done
by creating seed file(s) and configuring the plugin `@kopflos-cms/plugin-deploy-resources` to insert
them into the database when the app starts.

## Plugin configuration

In your config, add the plugin with an array of `paths` relative to the working directory.

```json
{
  "baseIri": "https://my-api.tech",
  "plugins": {
    "@kopflos-cms/plugin-deploy-resources": {
      "paths": ["resources"]
    }
  }
}
```

## Seed files

The contents of the `resources` directory can be any RDF files. You can use relative URLs without 
an explicit base URL. The plugin will parse the files using the app's configured `baseIri`. 

Documents in formats which do not support graph, such as Turtle, will be inserted into individual
named graphs.

Dataset documents will insert their contents into graphs as they appear in the source. Default graph
will be inserted into the named graph, like in the case of non-dataset formats.

The extension of the files are excluded from the resulting graph names.

A special name `index.[ext]` is handled similarly to how `index.html` is handled in a web server. For
example, contents of `/foo/bar/index.ttl` will be inserted into the graph `https://my-api.tech/foo/bar`.

### Concrete example 

```
resources/
├── person/
│   └── john-doe.ttl
├── api.ttl
└── schema.trig
```

The above will insert graphs:

| source                | graph(s)                                                  |
|-----------------------|-----------------------------------------------------------|
| `person/john-doe.ttl` | `https://my-api.tech/person/john-doe`                     |
| `api.ttl`             | `https://my-api.tech/api`                                 |
| `schema.trig`         | `https://my-api.tech/schema` and/or explicit named graphs |
```
