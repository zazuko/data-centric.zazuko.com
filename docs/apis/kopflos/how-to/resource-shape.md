# Select which resources should be served by the API

The central concept of the Kopflos is the `Resource Shape`. Its main purpose is to define which resources should be served by the API and how they should be served. Resource Shapes reuse some SHACL concepts.

## Serving all instances of a class

To have all instances of a class served by the API, define a shape that targets that class with `sh:targetClass`.

```turtle
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kopflos: <https://kopflos.described.at/>
PREFIX ex: <http://example.org/>

<FooShape>
  a kopflos:ResourceShape ;
  sh:targetClass ex:Foo ;
.

<foo> a ex:Foo . # will be served by the API
<bar> a ex:Foo . # will be served by the API
<baz> a ex:Baz . # will not be served by the API
```

## Serving specific instances

To serve only specific instances of a class, define a shape that targets those instances with `sh:targetNode`.

```turtle
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kopflos: <https://kopflos.described.at/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

<Shape>
  a kopflos:ResourceShape ;
  sh:targetNode <foo>, <bar> ;
.

<foo> rdfs:label "foo" . # will be served by the API
<bar> rdfs:label "bar" . # will be served by the API
<baz> rdfs:label "baz" . # will not be served by the API
```

## Serving objects of a property

In some scenarios, it is useful to assign a specific handler to objects of a resource property. 

To do so, define a shape that targets the property with `sh:property/sh:path` and assign a `kopflos:handler` to that Property Shape.

```turtle
PREFIX ex: <http://example.org/>
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kopflos: <https://kopflos.described.at/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

<fooShape> 
  a kopflos:ResourceShape ;
  sh:targetClass ex:Foo ;
  sh:property [
    sh:path <foo#export> ;
    kopflos:handler [
      # ...
    ] ;
  ] ;
.

<foo>
  a ex:Foo ;
  <foo#export> <foo/export> ; # <foo/export> will be served by the API
  <foo#import> <foo/import> ; # but <foo/import> will not
.
```
