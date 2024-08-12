---
title: Request pipeline
sidebar_position: 1
---

# Kopflos request pipeline

```
Incoming Request
  │
  └─▶ Kopflos handler
             │
   4**/5** ◀─┴─▶ Resource Shape Lookup
                   │
         4**/5** ◀─┴─▶ Resource Loader Lookup
                         │
               4**/5** ◀─┴─▶ Load Resource
                               │
                         4** ◀─┴─▶ Authorization
                                     │
                               400 ◀─┴─▶ Validate payload
                                           │
                                 4**/5** ◀─┴─▶ Run handler
                                                 │
                                                 └─▶ Reply
```

## Incoming request

Incoming request is handled by the server library, such as express or fastify and then forwarded to Kopflos.

## Kopflos handler

Kopflos handler is the main entry point for all incoming requests. It is responsible for orchestrating the request pipeline.

## Resource Shape Lookup

Resource Shape Lookup executes SPARQL against the `default` query endpoint to find the shape targeting the requested resource.

:::tip
See also: [How to Select which resources should be served by the API](../how-to/resource-shape.md)
:::

## Resource Loader Lookup + Load Resource

When the Resource Shape is found, a resource loader is selected based from `kopflos:resourceLoader` property, going bottom-up from the Resource/Property Shape to the share `kopflos:Config` resource.

It is used to load the requested resource's Core Representation.

:::info
The Core Representation are the triples returned by the resource loader. Typically, that would the result of a SPARQL `DESCRIBE` query or contents of resource's "own graph".
:::

## Authorization

Not implemented yet.

## Validate payload

Not implemented yet.

## Run handler

Finally, the handler is executed. If no handler is defined, and the request method is a GET, the resource's Core Representation is returned.

The result of the handler is forwarded back to the server library to be sent as a response.
