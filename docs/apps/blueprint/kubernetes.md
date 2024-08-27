---
displayed_sidebar: appsSidebar
title: Deploy Zazuko Blueprint on Kubernetes
sidebar_label: Deploy on Kubernetes
sidebar_position: 2
---

You can deploy Zazuko Blueprint on Kubernetes using the provided Helm chart.

## Prerequisites

- A running Kubernetes cluster
- [Helm](https://helm.sh/docs/intro/install/) installed

## Installation steps

### Add the Zazuko Helm repository

First, you will need to add the Zazuko Helm repository:

```sh
helm repo add zazuko https://charts.zazuko.com
```

So that you can install any of the Zazuko Helm charts.

### Create a `values.yaml` file

You can take a look at the [Artifact Hub](https://artifacthub.io/packages/helm/zazuko/blueprint) to see the available configuration options.

To get started, you can create a `values.yaml` file with the following content:

```yaml
endpointUrl: https://ld.example.com/query
sparqlConsoleUrl: https://ld.example.com/sparql/#query
graphExplorerUrl: https://ld.example.com/graph-explorer/?resource
fullTextSearchDialect: fuseki
neptuneFtsEndpoint: ""

# Ingress configuration
ingress:
  enabled: true
  className: ""
  annotations:
    kubernetes.io/tls-acme: "true"
    # kubernetes.io/ingress.class: nginx

  # Make sure to configure the following fields if you enable the Ingress
  hosts:
    - host: blueprint.example.com
      paths:
        - path: /
          pathType: ImplementationSpecific
  tls:
    - secretName: blueprint-example-com-tls
      hosts:
        - blueprint.example.com

# Trifid configuration
trifid:
  enabled: true # Let's deploy a Trifid instance

  # Information about the SPARQL endpoint
  sparql:
    endpoint: "http://blueprint-fuseki:3030/ds/query" # Feel free to change this to your own SPARQL endpoint
    # Uncomment the following lines if you need to authenticate
    # username: ""
    # password: ""

  # Set the base URL for the dataset, to allow some rewriting features
  dataset:
    baseUrl: "" # You can leave this empty if you don't need it

  # Ingress configuration
  ingress:
    enabled: true
    className: ""
    annotations:
      kubernetes.io/tls-acme: "true"
      # kubernetes.io/ingress.class: nginx

    # Make sure to configure the following fields if you enable the Ingress
    hosts:
      - host: ld.example.com
        paths:
          - path: /
            pathType: ImplementationSpecific
    tls:
      - secretName: ld-example-com-tls
        hosts:
          - ld.example.com

# Fuseki configuration
fuseki:
  enabled: true # Let's deploy a Fuseki instance also

  config:
    adminPassword: super-secret-password
    javaOpts: "-Xmx2048m -Xms2048m"

  storage:
    enabled: true
    size: 10Gi
```

It assumes that the Trifid instance will be deployed at `ld.example.com` and the Blueprint instance at `blueprint.example.com`.
You can change these values to match your domain.

The Fuseki endpoint is not exposed, that's why you can see that Trifid is configured to use `blueprint-fuseki:3030/ds/query` as the endpoint.
Feel free to change this to your own SPARQL endpoint, if you want to use a different one.

Make sure to update the different ingress configurations to match your domain and TLS configuration.
Relevant keys are `ingress` and `trifid.ingress`.
You can disable them by setting `enabled: false`, and then you can access the services using port-forwarding or by creating the ingresses manually.

You might want to see for more configuration options by checking the [Artifact Hub](https://artifacthub.io/packages/helm/zazuko/blueprint#values) page.

### Install the chart

Using the `values.yaml` file you created, you can install the chart:

```sh
helm install blueprint-release zazuko/blueprint --values values.yaml # --namespace default
```

You can specify the namespace where you want to install the chart using the `--namespace` flag.

You can also use another name for the release by changing `blueprint-release` to your desired name.
