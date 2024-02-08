# Validate RDF Data Cubes

RDF Data Cubes can be validated in a number of ways:

1. Check that observations are correct according to the cube's structure,
2. Check that the cube and its dimensions are correctly described according to a validation profile.

Both tasks are accomplished using [SHACL](https://www.w3.org/TR/shacl/), a W3C standard for validating RDF data.

## Preparation

Install globally the barnard59 CLI and the cube plugin:

```sh
npm install -g barnard59 barnard59-cube
```

To verify correct installation run the command below which should print the available `b59 cube` commands.

```sh
b59 cube --help
```

```
Usage: barnard59 cube [options] [command]

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  fetch-metadata [options]      Retrieves cube and its constraint shape from
                                SPARQL endpoint
  check-metadata [options]      Validate input cube and its constraint against
                                profile shapes
  fetch-observations [options]  Retrieves cube observations from SPARQL
                                endpoint
  check-observations [options]  Validate input observations against cube
                                constraint
  fetch-constraint [options]    Retrieves cube constraint from SPARQL endpoint
  fetch-cube [options]          Retrieves cube with observations from SPARQL
                                endpoint
  help [command]                display help for command
```

## Validate a cube from local file

Validating a cube which is stored completely in single file may need additional steps to separate the cube metadata and observations.

Validating the observations is done by checking them against the [cube's constraint shape](https://cube.link/#constraints).

Validating the cube metadata is done by checking it against a SHACL Shape called [profile](../explanations/profiles).

### Cube metadata

Small enough cube can be validated directly from the file which also includes all the observations.

```sh
b59 cube check-metadata --profile https://cube.link/latest/shape/standalone-cube-constraint < cube.nt
```

However, in case of large cubes, or sources which contain multiple cubes, the entire dataset will be unnecessarily loaded into memory. In such cases, it is better to separate the cube metadata from the observations. This can be done using a SPARQL query which removed the observation data from the cube.

```sparql
PREFIX cube: <https://cube.link/>

CONSTRUCT { 
  ?s ?p ?o . 
  ?ob cube:observedBy ?by .
}
where {
  {
    ?s ?p ?o .

    FILTER NOT EXISTS {
      ?s a cube:Observation .
    }
  }
  UNION {
    ?ob cube:observedBy ?by
  }
}
```

Save this file as `separate-metadata.sparql` and use its output as input for the validation. To execute the query, [Jena arq](https://jena.apache.org/documentation/query/) can be used:

```sh
arq --query separate-metadata.sparql --data cube.nt | \
  b59 cube check-metadata --profile https://cube.link/latest/shape/standalone-cube-constraint
```

### Observations

Similarly, the observations can be validated directly from the file which also includes the cube metadata.

```sh
b59 cube check-observations --constraint cube.nt < cube.nt
```

And again, when the input cube is large, it is better to separate the observations from the cube metadata. This can be done using a SPARQL query similar to that above:

```sparql
PREFIX cube: <https://cube.link/>

CONSTRUCT { 
  ?s ?p ?o . 
  ?ob cube:observedBy ?by .
}
where {
  ?s ?p ?o .

  FILTER NOT EXISTS {
    ?s a cube:Observation .
  }
}
```

Save the output to a file and use it as the `--constraint` argument for the validation:

```sh
arq --query separate-observations.sparql --data cube.nt > cube-constraint.nt
b59 cube check-observations --constraint cube-constraint.nt < cube.nt
```

## Validate a cube from SPARQL endpoint

TBD
