# @kopflos-cms/serve-file

Serves a file from the file system and sets `content-type` header based on the file extension.

By default, will read the contents to memory.

```turtle
PREFIX code: <https://code.described.at/>
PREFIX kl: <https://kopflos.described.at/>

[
  a kl:Handler ;
  code:implementedBy
    [
      a code:EcamScriptModule ;
      code:link <file:handler/serve-file.js#default> ;
      code:arguments ( "/path/to/file" ) ;
    ] ;
] .
```

## Return file stream

```turtle
PREFIX arg: <https://code.described.at/argument#>
PREFIX code: <https://code.described.at/>
PREFIX kl: <https://kopflos.described.at/>

[
  a kl:Handler ;
  code:implementedBy
    [
      a code:EcamScriptModule ;
      code:link <file:handler/serve-file.js#default> ;
      code:arguments
        [
          arg:path "/path/to/file" ;
          arg:stream true ;
        ] ;
    ] ;
] .
```

## Override content-type

If the content type cannot be correctly determined from the file extension, 
`application/octet-stream` will be used.

You can override it, if necessary.

```turtle
PREFIX arg: <https://code.described.at/argument#>
PREFIX code: <https://code.described.at/>
PREFIX kl: <https://kopflos.described.at/>

[
  a kl:Handler ;
  code:implementedBy
    [
      a code:EcamScriptModule ;
      code:link <file:handler/serve-file.js#default> ;
      code:arguments
        [
          arg:path "/path/to/file.xml" ;
          arg:contenType "application/rdf+xml" ;
        ] ;
    ] ;
] .
```
