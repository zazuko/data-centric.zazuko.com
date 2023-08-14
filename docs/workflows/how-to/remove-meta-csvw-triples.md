# Remove meta CSVW triples

The CSVW specification requires the output to produce certain meta-triples which annotate 
the resulting data with its origin in the source files (table + row number). 

This greatly increases the total output by adding 4 triples for every CSV row, and it's unnecessary
in many scenarios.

To easily remove these triples, as of version `1.1.0` the `barnard59-csvw` package exports a simple
filter function which can be used with `barnard59-base/filter.js`:

```turtle
@prefix code: <https://code.described.at/> .
@prefix p: <https://pipeline.described.at/> .

<transform> a p:Pipeline, p:ReadableObjectMode ;
    p:steps
        [
            p:stepList
                (
                    _:readCsv
                    _:parseCsv
                    _:toDataset
                    _:toObservation
                    _:buildCubeShape
                    _:flatten
    # highlight-next-line
                    _:removeCsvwTriples
                    _:generateShapeTarget
                ) ;
        ] ;
.

_:removeCsvwTriples a p:Step ;
    code:implementedBy
        [
            a code:EcmaScriptModule ;
            code:link <node:barnard59-base/filter.js#default> ;
        ] ;
    code:arguments
        (
            [
                a code:EcmaScriptModule ;
                code:link <node:barnard59-csvw/filter.js#excludeCsvwTriples> ;
            ]
        ) ;
.
```
