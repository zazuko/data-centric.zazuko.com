# Request handlers

Depending on the kind of Resource Shape matched to the request, different arguments will be passed
to the handler.

## Subject handlers

```turtle
PREFIX kl: <https://kopflos.described.at/>
PREFIX sh: <http://www.w3.org/ns/shacl#>

<#plaque>
  a kl:ResourceShape ;
  kl:api <> ;
  sh:targetClass </api/schema/Plaque> ;
.

<#about>
  a kl:ResourceShape ;
  kl:api <> ;
  sh:targetNode </about-page.html> ;
.
```

The most common kind of request, when a resource is matched by its URL (`sh:targetNode`) or class (
`sh:targetClass`).

Such handlers will receive as the first argument an object in the form of this interface.

```ts
interface SubjectHandlerArgs {
  resourceShape: GraphPointer<NamedNode, D>
  env: KopflosEnvironment
  subject: GraphPointer<NamedNode, D>
  subjectVariables: Record<string, string>
  body: Body<D>
  query: Query
  headers: IncomingHttpHeaders
}
```

## Object handlers

```turtle
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kl: <https://kopflos.described.at/>

<#plaque>
  a kl:ResourceShape ;
  kl:api <> ;
  sh:property
    [
      sh:path </api/schema/tags> ;
      kl:handler
        [
          a kl:Handler ;
          kl:method "GET" ;
          # ...
        ] ;
    ] ;
.
```

Requests matched to objects by following resource shape properties additionally receive the
`predicate` and the `object`.

```ts
interface ObjectHandlerArgs extends SubjectHandlerArgs {
  property: NamedNode
  object: GraphPointer<NamedNode, D>
}
```

:::warning
Note that the `object` is the requested resource and the `subject` is the subject in the respective triple.
This differs from subject handlers where the `subject` is the requested resource.
:::

## Subject variables

Requests matched to a patterned target will fill the `subjectVariables` with values extracted from the URL pattern.

```turtle
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX kl: <https://kopflos.described.at/>

<person-page>
  a kl:ResourceShape ;
  kl:api <> ;
  sh:target
    [
      a kl:PatternedTarget ;
      kl:regex "/page/person/(?<id>.+)$" ;
    ] ;
.
```

Requesting `/page/person/123/abc` will result in the following `subjectVariables`:

```json
{
  "id": "123/abc"
}
```
