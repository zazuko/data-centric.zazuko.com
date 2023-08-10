# barnard59 CLI

## Main options

```shell
> barnard59 --help    

Usage: barnard59 [options] [command]

Options:
  --variable <name=value>                 variable key value pairs (default: {})
  --variable-all                          Import all environment variables
  -v, --verbose                           enable diagnostic console output
  --enable-buffer-monitor                 enable histogram of buffer usage
  --otel-debug <level>                    Enable OpenTelemetry console diagnostic output (choices: "NONE", "ERROR", "WARN", "INFO", "DEBUG", "VERBOSE", "ALL", default: "ERROR")
  --otel-metrics-exporter <exporter>      OpenTelemetry Metrics exporter to use (choices: "otlp", "none", default: "none")
  --otel-metrics-interval <milliseconds>  Export Metrics interval (default: 10000)
  --otel-traces-exporter <exporter>       OpenTelemetry Traces exporter to use (choices: "otlp", "none", default: "none")
  -h, --help                              display help for command

Commands:
  run [options] <filename>
  help [command]                          display help for command
```

:::note
The options `--variable`, `--variable-all` and `--verbose` are also available on every sub-command
:::

### --variable

Sets the value of a single pipeline variable

```shell
barnard59 --variable foo=bar run pipeline.ttl
```

The above will set the value `bar` to pipeline variable `foo`

:::caution
TODO: Create a page about pipeline variables
:::

### --variable-all

Sometimes it's tedious to map multiple variables from the environment on by one. `--variable-all` maps all environment
variables automatically.

```shell
FOO=bar BAR=baz barnard59 --variable-all run pipeline.ttl
```

The above will set the variables `FOO` and `BAR` alongside any other environment variable from the current shell.

### --verbose

Set once, increases the logging level to `WARN`. Set twice or thrice, increases logging level further to `DEBUG` and `TRACE`
respectively.

```shell
barnard59 -vv run pipeline.ttl
```

## run command

```shell
barnard59 run --help

Usage: barnard59 run [options] <filename>

Options:
  --output [filename]      output file (default: "-")
  --pipeline [iri]         IRI of the pipeline description
  --variable <name=value>  variable key value pairs (default: {})
  --variable-all           Import all environment variables
  -v, --verbose            enable diagnostic console output
  -h, --help               display help for command
```

### filename

:::note
Required argument
:::

Path to the pipeline definition

```shell
barnard59 run pipeline/main.ttl
```

### --pipeline

If the pipeline definition contains multiple pipelines or sub-pipelines, it is necessary to provide the URL of the root
pipeline to run

```shell
barnard59 run pipeline/main.ttl --pipeline http://example.com/pipeline/main
```

## Package-specific commands

When add to a project, certain `barnard59` packages install additional commands which run canned pipelines those packages provide.

See the sub-pages for their details and [How-To: Extend barnard59 CLI](../../how-to/extend-banard59-cli) for instructions
on adding dynamic pipeline commands to your barnard59 package.
