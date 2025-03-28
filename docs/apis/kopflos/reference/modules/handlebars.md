# @kopflos-labs/handlebars

This module provides a Handlebars template engine for the [@kopflos-labs/html-template](./html-template.md) module.

## Helpers

### valueof

Prints the value of a SPARQL path at the current graph node. Requires exactly one argument,
which is any valid [SPARQL Property Path](https://www.w3.org/TR/sparql11-query/#propertypaths).

Predicate URIs can be prefixed with prefixes known to the [Zazuko prefix server](https://prefix.zazuko.com/prefixes).
Relative paths are resolved against the API base URL.

```handlebars
<template target-class="schema:Person">
  <p>
    {{ valueof "schema:name" }} lives in {{ valueof "schema:address/schema:addressLocality" }}
  </p>
</template>
```
