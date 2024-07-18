"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[88],{6462:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"aboutSidebar":[{"type":"link","label":"Intro","href":"/docs/about/","docId":"about/about","unlisted":false},{"type":"link","label":"Di\xe1taxis","href":"/docs/about/diataxis","docId":"about/diataxis","unlisted":false}],"rdfjsSidebar":[{"type":"link","label":"RDF/JS","href":"/docs/rdfjs/","docId":"rdfjs/rdfjs","unlisted":false}],"workflowsSidebar":[{"type":"link","label":"Introduction","href":"/docs/workflows/","docId":"workflows/workflows","unlisted":false},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting started","href":"/docs/workflows/tutorial/first-pipeline","docId":"workflows/tutorial/first-pipeline","unlisted":false}]},{"type":"category","label":"How-To","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Implement steps","href":"/docs/workflows/how-to/implement-steps","docId":"workflows/how-to/implement-steps","unlisted":false},{"type":"link","label":"Automate pipelines","href":"/docs/workflows/how-to/automate-pipeline","docId":"workflows/how-to/automate-pipeline","unlisted":false},{"type":"link","label":"Extend barnard59 CLI","href":"/docs/workflows/how-to/extend-banard59-cli","docId":"workflows/how-to/extend-banard59-cli","unlisted":false},{"type":"link","label":"Fail pipeline gracefully","href":"/docs/workflows/how-to/fail-pipeline-gently","docId":"workflows/how-to/fail-pipeline-gently","unlisted":false},{"type":"link","label":"Remove meta CSVW triples","href":"/docs/workflows/how-to/remove-meta-csvw-triples","docId":"workflows/how-to/remove-meta-csvw-triples","unlisted":false}]},{"type":"category","label":"Explanations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Pipeline Concepts","href":"/docs/workflows/explanations/pipeline","docId":"workflows/explanations/pipeline","unlisted":false},{"type":"link","label":"Operations","href":"/docs/workflows/explanations/operations","docId":"workflows/explanations/operations","unlisted":false},{"type":"link","label":"Simplified Syntax","href":"/docs/workflows/explanations/simplified-syntax","docId":"workflows/explanations/simplified-syntax","unlisted":false},{"type":"link","label":"Writing valid pipelines","href":"/docs/workflows/explanations/pipeline-validity","docId":"workflows/explanations/pipeline-validity","unlisted":false}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"barnard59 CLI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"graph-store","href":"/docs/workflows/reference/cli/graph-store","docId":"workflows/reference/cli/graph-store","unlisted":false}],"href":"/docs/workflows/reference/cli/"},{"type":"link","label":"Loaders","href":"/docs/workflows/reference/loaders","docId":"workflows/reference/loaders","unlisted":false}]}],"cubesSidebar":[{"type":"link","label":"RDF Data Cubes","href":"/docs/cubes/","docId":"cubes/cubes","unlisted":false},{"type":"category","label":"How-To","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Validate RDF Data Cubes","href":"/docs/cubes/how-to/validate-cube","docId":"cubes/how-to/validate-cube","unlisted":false}]},{"type":"category","label":"Explanations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cube validation profiles","href":"/docs/cubes/explanations/profiles","docId":"cubes/explanations/profiles","unlisted":false}]}]},"docs":{"about/about":{"id":"about/about","title":"Intro","description":"These pages present various methods for building data-centric software using RDF and (mostly) JavaScript.","sidebar":"aboutSidebar"},"about/diataxis":{"id":"about/diataxis","title":"Di\xe1taxis","description":"All documentation is written according to Di\xe1taxis principles,","sidebar":"aboutSidebar"},"cubes/cubes":{"id":"cubes/cubes","title":"RDF Data Cubes","description":"This sections contains information about practical usage of RDF Data Cubes represented with the cube.link Cube Schema.","sidebar":"cubesSidebar"},"cubes/explanations/profiles":{"id":"cubes/explanations/profiles","title":"Cube validation profiles","description":"For new, see https://github.com/zazuko/cube-link/?tab=readme-ov-file#validation-shapes","sidebar":"cubesSidebar"},"cubes/how-to/validate-cube":{"id":"cubes/how-to/validate-cube","title":"Validate RDF Data Cubes","description":"RDF Data Cubes can be validated in a number of ways:","sidebar":"cubesSidebar"},"rdfjs/rdfjs":{"id":"rdfjs/rdfjs","title":"RDF/JS","description":"RDF/JS is a set of W3C community specifications which give developers a common denominator","sidebar":"rdfjsSidebar"},"workflows/explanations/operations":{"id":"workflows/explanations/operations","title":"Operations","description":"Obviously you want to convert your own data. To do that, barnard59 provides a bunch of default features in so called operations. To understand how you can add your own steps and pipelines, consult the barnard59 readme.","sidebar":"workflowsSidebar"},"workflows/explanations/pipeline":{"id":"workflows/explanations/pipeline","title":"Pipeline Concepts","description":"Concept","sidebar":"workflowsSidebar"},"workflows/explanations/pipeline-validity":{"id":"workflows/explanations/pipeline-validity","title":"Writing valid pipelines","description":"Step Lists","sidebar":"workflowsSidebar"},"workflows/explanations/simplified-syntax":{"id":"workflows/explanations/simplified-syntax","title":"Simplified Syntax","description":"To avoid verbose step definitions, a simplified syntax allows to reduce boilerplate for common operations.","sidebar":"workflowsSidebar"},"workflows/how-to/automate-pipeline":{"id":"workflows/how-to/automate-pipeline","title":"Automate pipelines","description":"There is lots of RDF data published as one can see in the Linked Open Data Cloud Diagram. Unfortunately a lot of this data was a one-time effort by a research project or an individual and is not kept up to date. One of the design goals of barnard59 is to simplify automation so RDF data can be kept up to date with little to no effort, at least as long as the data source stays stable.","sidebar":"workflowsSidebar"},"workflows/how-to/extend-banard59-cli":{"id":"workflows/how-to/extend-banard59-cli","title":"Extend barnard59 CLI","description":"To create additional CLI commands for the barnard59 CLI you will need to first create and publish","sidebar":"workflowsSidebar"},"workflows/how-to/fail-pipeline-gently":{"id":"workflows/how-to/fail-pipeline-gently","title":"Fail pipeline gracefully","description":"The easiest way to stop a pipeline is to throw an exception. However, this will stop the pipeline immediately.","sidebar":"workflowsSidebar"},"workflows/how-to/implement-steps":{"id":"workflows/how-to/implement-steps","title":"Implement steps","description":"As explained on the Pipeline Concepts page, steps are linked from a pipeline using","sidebar":"workflowsSidebar"},"workflows/how-to/remove-meta-csvw-triples":{"id":"workflows/how-to/remove-meta-csvw-triples","title":"Remove meta CSVW triples","description":"The CSVW specification requires the output to produce certain meta-triples which annotate","sidebar":"workflowsSidebar"},"workflows/reference/cli/graph-store":{"id":"workflows/reference/cli/graph-store","title":"graph-store","description":"Commands","sidebar":"workflowsSidebar"},"workflows/reference/cli/index":{"id":"workflows/reference/cli/index","title":"barnard59 CLI","description":"Main options","sidebar":"workflowsSidebar"},"workflows/reference/loaders":{"id":"workflows/reference/loaders","title":"Loaders","description":"In addition to those provided by rdf-loader-code,","sidebar":"workflowsSidebar"},"workflows/tutorial/first-pipeline":{"id":"workflows/tutorial/first-pipeline","title":"Getting started","description":"In this tutorial we will create a simple pipeline which fetches the current time from a Web API at","sidebar":"workflowsSidebar"},"workflows/workflows":{"id":"workflows/workflows","title":"Introduction to RDF Workflows","description":"barnard59 primer","sidebar":"workflowsSidebar"}}}}')}}]);