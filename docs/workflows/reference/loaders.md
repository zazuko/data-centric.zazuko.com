# Loaders

In addition to those provided by [rdf-loader-code](https://npm.im/rdf-loader-code), 
the `barnard59-core` package provides additional loaders to simplify the definition of pipelines.

## `p:Pipeline`

TBD

## `p:Variable(Name)`

TBD

## `p:FileContents`

Reads file from a given path and returns its raw contents.

:::note
`p:FileContents` is a literal node
:::

:::caution

This loader may not be suitable for loading large files because they are synchronously put into memory

:::

### Basic usage

```turtle
@prefix code: <https://code.described.at/> .
@prefix p: <https://pipeline.described.at/> .

<step>
    code:arguments
        (
            "/full/path/myKeyFile.key"^^p:FileContents
        )
.
```

### Path in variable

The `p:FileContents` literal can also be the name of a variable.

```turtle
@prefix code: <https://code.described.at/> .
@prefix p: <https://pipeline.described.at/> .

<pipeline>
    p:variables [
        p:variable [ p:name "KEY_PATH" ; p:value "/full/path/myKeyFile.key" ] ;
    ] ;
.

<step>
    code:arguments
        (
            "KEY_PATH"^^p:FileContents
        )
.
```

### Home dir paths

For convenience, bash-style paths stating with `~` are also supported.

```turtle
@prefix code: <https://code.described.at/> .
@prefix p: <https://pipeline.described.at/> .

<step>
    a p:Step ;
    code:implementedBy
        [
            a code:EcmaScriptModule ;
            code:link <node:barnard59-ftp/list.js#default> ;
        ] ;
    code:arguments
        [
            code:name "privateKey" ;
            code:value "~/.ssh/id_ed25519"^^p:FileContents ;
        ] ;
.
```
