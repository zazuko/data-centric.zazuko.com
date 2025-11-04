# Create Cube Observations

The package `barnard59-cube` provides an operation `toObservation` to create cube data according to the [Cube Schema](https://cube.link/) specification.

Given an input file `data.ttl`:

```turtle
@prefix schema: <http://schema.org/> .
@base <http://ex.org/> .

<prices/item1> 
        schema:category <cat1> ;
        schema:price 25 .
<prices/item2> 
        schema:category <cat2> ;
        schema:price 30 .

```

the following workflow `pipeline.ttl`:

```turtle
@prefix rdf: <https://barnard59.zazuko.com/operations/rdf/> .
@prefix p: <https://pipeline.described.at/> .
@prefix base: <https://barnard59.zazuko.com/operations/base/> .
@prefix cube: <https://barnard59.zazuko.com/operations/cube/> .
@prefix ntriples: <https://barnard59.zazuko.com/operations/formats/ntriples/> .
@prefix corefs: <https://barnard59.zazuko.com/operations/core/fs/> .
@prefix splitDataset: <https://barnard59.zazuko.com/operations/rdf/splitDataset/> .

<> a p:Pipeline ;
  p:steps [ 
    p:stepList (
        [ rdf:open ("dataFile"^^p:VariableName) ]
        [ splitDataset:bySubject () ]
        [ cube:toObservation () ]     
        [ base:flatten () ]
        [ ntriples:serialize ()]
        [ corefs:createWriteStream ("outputFile"^^p:VariableName) ]
    ) 
  ].
```
executed with the [`barnard59` CLI](../reference/cli):
```sh
barnard59 run -v pipeline.ttl --variable=dataFile=data.ttl --variable=outputFile=output.ttl
```

will produce an enhanced dataset `output.ttl`:

```turtle
<http://ex.org/prices/observation/item1> <http://schema.org/category> <http://ex.org/cat1> .
<http://ex.org/prices/observation/item1> <http://schema.org/price> "25"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://ex.org/prices/observation/item1> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://cube.link/Observation> .
<http://ex.org/prices/observation/item1> <https://cube.link/observedBy> <http://ex.org/> .
<http://ex.org/prices/observation/> <https://cube.link/observation> <http://ex.org/prices/observation/item1> .
<http://ex.org/prices/observation/item2> <http://schema.org/category> <http://ex.org/cat2> .
<http://ex.org/prices/observation/item2> <http://schema.org/price> "30"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://ex.org/prices/observation/item2> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://cube.link/Observation> .
<http://ex.org/prices/observation/item2> <https://cube.link/observedBy> <http://ex.org/> .
<http://ex.org/prices/observation/> <https://cube.link/observation> <http://ex.org/prices/observation/item2> .
```

where each input subject is turned into an instance of `cube:Observation`, belonging to a default observation set `<http://ex.org/prices/observation/>` and having a default value `<http://ex.org/>` for the property `cube:observedBy`.


Default values for `cube:observedBy` are created only if not already present in input.

:::caution
Input data is expected to be sorted by subject, in order for `splitDataset:bySubject` to properly emit one dataset for each observation.
:::

:::caution
The pipeline works out of the box with the example data because all subject IRIs in input follow the same pattern, with the same base IRI (interpreted as the observer organization) followed by the path segment `prices` (interpreted as cube name) and finally a unique identifier (`item1`, `item2`...)
:::

In case input subjects have a different structure, you may need to call `toObservation` with appropriate input parameters in order to customize the IRIs for the observations, the observer or the observation set (describing each available parameter is beyond the scope of this article).


## Creating Cube Shapes

`buildCubeShape` is another useful operation and you may want to add it right after  `toObservation` to derive SHACL shapes from actual data.

It will append more triples to the output:

```turtle
<http://ex.org/prices> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://cube.link/Cube> .
<http://ex.org/prices> <https://cube.link/observationSet> <http://ex.org/prices/observation/> .
<http://ex.org/prices> <https://cube.link/observationConstraint> <http://ex.org/prices/shape> .
<http://ex.org/prices/observation/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://cube.link/ObservationSet> .
<http://ex.org/prices/shape> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/shacl#NodeShape> .
<http://ex.org/prices/shape> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://cube.link/Constraint> .
# ....
```

including a property shape for each dimension, with the node kind, the datatype and facets like `sh:minInclusive` and `sh:maxInclusive`.

Also this operation has many parameters to customize the IRIs.
Among the parameters, an interesting one is `metadata`. It allows to merge the derived shapes
with manually curated data like names, scale types and type of dimension.

The improved workflow will look like this:

```turtle
@prefix rdf: <https://barnard59.zazuko.com/operations/rdf/> .
@prefix p: <https://pipeline.described.at/> .
@prefix code: <https://code.described.at/> .
@prefix base: <https://barnard59.zazuko.com/operations/base/> .
@prefix cube: <https://barnard59.zazuko.com/operations/cube/> .
@prefix ntriples: <https://barnard59.zazuko.com/operations/formats/ntriples/> .
@prefix corefs: <https://barnard59.zazuko.com/operations/core/fs/> .
@prefix splitDataset: <https://barnard59.zazuko.com/operations/rdf/splitDataset/> .

<> a p:Pipeline ;
  p:steps [ 
    p:stepList (
        [ rdf:open ("dataFile"^^p:VariableName) ]
        [ splitDataset:bySubject () ]
        [ cube:toObservation () ]     
        [ 
          cube:buildCubeShape 
            [ 
              code:name "metadata"; 
              code:value <parseCubeMetadata>
            ]
        ]  
        [ base:flatten () ]
        [ ntriples:serialize ()]
        [ corefs:createWriteStream ("outputFile"^^p:VariableName) ]
    ) 
  ].

<parseCubeMetadata> a p:Pipeline, p:ReadableObjectMode;
  p:steps [
    p:stepList (
        [ rdf:open ("metadataFile"^^p:VariableName) ]
    )
  ].
```

This is a complete generic pipeline that you can copy/paste and use as is,
passing proper input data and metadata.

In our example, it will match the cube IRI and merge metadata from the following file `metadata.ttl`:

```turtle
@prefix qudt: <http://qudt.org/schema/qudt/> .
@prefix schema: <http://schema.org/> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix cube:   <https://cube.link/> .

<http://ex.org/prices> cube:observationConstraint <http://ex.org/prices/shape> .

<http://ex.org/prices/shape>
    sh:property [
      a cube:KeyDimension ;
      sh:path schema:category ;
      schema:name "Category"@en ;
      qudt:scaleType qudt:NominalScale
    ],[
      a cube:MeasureDimension ;
      sh:path schema:price ;
      schema:name "Price"@en ;
      qudt:scaleType qudt:IntervalScale
    ].

```

The CLI command needs the additional value for the variable `metadataFile`: 

```sh
barnard59 run -v pipeline.ttl --variable=metadataFile=metadata.ttl --variable=dataFile=data.ttl --variable=outputFile=output.ttl 
```

