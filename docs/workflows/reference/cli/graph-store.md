---
title: graph-store
---

# `barnard59 graph-store`

## Commands

```shell
barnard59 graph-store --help             

Usage: barnard59 graph-store [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  put [options]   Upload RDF documents using SPARQL Graph Store Protocol
  help [command]  display help for command
```

## put command

```shell
barnard59.js graph-store put --help

Usage: barnard59 graph-store put [options]

Upload RDF documents using SPARQL Graph Store Protocol

Options:
  --source <source>        Glob of RDF documents to upload
  --graph <graph>
  --endpoint <endpoint>
  --user <user>
  --password <password>
  --variable <name=value>  variable key value pairs (default: {})
  --variable-all           Import all environment variables
  -v, --verbose            enable diagnostic console output
  -h, --help               display help for command
```

### --source

:::note
Required option
:::

When setting the value of `--source` make sure to wrap it in quotation to prevent the shell from expanding the globbed path.

```shell
barnard59 graph-store put --source "data/*.ttl"
```

### --endpoint

:::note
Required option
:::

### --graph

The URL of the target graph. If not given, the graph will be taken directly from the data stream.

When uploading RDF graph documents (n3, turtle, n-triples), the default graph will be used.

When uploading RDF dataset documents, the graphs will be used exactly as they are in the data.
