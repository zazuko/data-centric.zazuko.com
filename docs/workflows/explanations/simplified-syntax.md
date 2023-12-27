---
title: Simplified Syntax
sidebar_position: 3
---

To avoid verbose step definitions, a simplified syntax allows to reduce boilerplate for common operations.

Step definitions are based on the [code](https://code.described.at/) ontology and include details necessary to locate, load and call the implementation code.
For example, the following snippet (already described in greater detail in the [pipeline concepts](pipeline#step) page) allows to load and call a node library function.

```turtle
<#readFile> a p:Step ;
  code:implementedBy [ a code:EcmaScriptModule ;
    code:link <node:fs#createReadStream>
  ] ;
  code:arguments ( "input.txt" ) .
```



The above step definition would likely be used in the step list of a pipeline:

```turtle
<#pipeline> a p:Pipeline ;
  p:steps [
    p:stepList ( 
      <#readFile> 
      <#doSomethingElse> 
    )
  ] .
```

The `barnard59-core` package already defines the `createReadStream` operation in its [manifest](https://github.com/zazuko/barnard59-core/blob/master/manifest.ttl):

```turtle
@base <http://barnard59.zazuko.com/operations/core/> .

<fs/createReadStream> a p:Operation, p:Readable;
  rdfs:label "Read file";
  rdfs:comment "Reads a file from the local file system.";
  code:implementedBy [ a code:EcmaScriptModule;
    code:link <node:fs#createReadStream>
  ].
```

Hence, we can inline the call to such a well-known operation:

```turtle
@prefix fs: <http://barnard59.zazuko.com/operations/core/fs/> .

<#pipeline> a p:Pipeline ;
  p:steps [
    p:stepList ( 
      [ fs:createReadStream ( "input.txt" ) ]
      <#doSomethingElse> 
    )
  ] .
```

As you can see, an step declared in simplified syntax is a node with a single predicate which is the operation's identifier. 
Arguments are passed as usual. As a list, if the operation uses positional parameters, or key/value pairs, if the operation has named parameters.
See [this page](./pipeline) for more details.

Other examples of simplified syntax are in the [getting started](../tutorial/first-pipeline) tutorial.

Each barnard59 package listed in the [operations](./operations) page has a `manifest.ttl` file with the available operations.
Frequently used ones are in the manifests of [barnard59-base](https://github.com/zazuko/barnard59-base/blob/master/manifest.ttl) and [barnard59-formats](https://github.com/zazuko/barnard59-formats/blob/master/manifest.ttl).


Once imported in a project, the barnard59 CLI will find the manifest in the `node_modules` directory, enabling the use of simplified syntax for the operations found.
