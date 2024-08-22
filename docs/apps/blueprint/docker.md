---
displayed_sidebar: appsSidebar
title: Deploy Zazuko Blueprint using Docker
sidebar_label: Deploy using Docker
sidebar_position: 1
---

We are providing a [container image](https://github.com/zazuko/blueprint/pkgs/container/blueprint) for Zazuko Blueprint, that gets built automatically on every push to the [main branch](https://github.com/zazuko/blueprint).
We also tag some releases, so you can use a specific version of Blueprint.

You can pull the latest version of the container image using the following command:

```sh
docker pull ghcr.io/zazuko/blueprint:latest
```

The container exposes the Blueprint instance on port 80.

When deploying the container in production, make sure to use a specific version of the container image, instead of `latest`.

## Configuration

You will need to provide some configuration to the container, using environment variables.

The following environment variables are available:

| Variable                 | Description                                 | Default                                     |
| ------------------------ | ------------------------------------------- | ------------------------------------------- |
| ENDPOINT_URL             | SPARQL endpoint URL                         | **required**                                |
| SPARQL_CONSOLE_URL       | SPARQL console URL                          | http://example.com/sparql/#query            |
| GRAPH_EXPLORER_URL       | Graph Explorer URL                          | http://example.com/graph-explorer/?resource |
| FULL_TEXT_SEARCH_DIALECT | Full text search dialect                    | fuseki                                      |
| NEPTUNE_FTS_ENDPOINT     | OpenSearch endpoint for the Neptune dialect | http://example.com/                         |

Currently, the supported full text search dialects are `stardog`, `fuseki` and `neptune`.

If you are using `neptune` as the full text search dialect, you will need to provide the `NEPTUNE_FTS_ENDPOINT` environment variable.

In case you are using a Trifid instance, which is deployed at `http://example.com`, that is configured over a Fuseki endpoint, you can use the following configuration:

```env
ENDPOINT_URL=http://example.com/query
SPARQL_CONSOLE_URL=http://example.com/sparql/#query
GRAPH_EXPLORER_URL=http://example.com/graph-explorer/?resource
FULL_TEXT_SEARCH_DIALECT=fuseki
```

## Running the container

Using the configuration above, you can run the container with the following command:

```sh
docker run -d -p 8080:80 \
  -e ENDPOINT_URL=http://example.com/query \
  -e SPARQL_CONSOLE_URL=http://example.com/sparql/#query \
  -e GRAPH_EXPLORER_URL=http://example.com/graph-explorer/?resource \
  -e FULL_TEXT_SEARCH_DIALECT=fuseki \
  ghcr.io/zazuko/blueprint:latest
```

And open your browser at `http://localhost:8080`.
