"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={title:"Pipeline Concepts",sidebar_position:1},l="Pipeline",p={unversionedId:"workflows/explanations/pipeline",id:"workflows/explanations/pipeline",title:"Pipeline Concepts",description:"Concept",source:"@site/docs/workflows/explanations/pipeline.md",sourceDirName:"workflows/explanations",slug:"/workflows/explanations/pipeline",permalink:"/docs/workflows/explanations/pipeline",draft:!1,editUrl:"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/explanations/pipeline.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Pipeline Concepts",sidebar_position:1},sidebar:"workflowsSidebar",previous:{title:"Remove meta CSVW triples",permalink:"/docs/workflows/how-to/remove-meta-csvw-triples"},next:{title:"Operations",permalink:"/docs/workflows/explanations/operations"}},o={},s=[{value:"Concept",id:"concept",level:2},{value:"Internals",id:"internals",level:3},{value:"Pipeline Definition",id:"pipeline-definition",level:2},{value:"Pipeline",id:"pipeline-1",level:3},{value:"Step",id:"step",level:3},{value:"Variables",id:"variables",level:3},{value:"Definition attached to the Pipeline",id:"definition-attached-to-the-pipeline",level:4},{value:"Using Variables via Datatype",id:"using-variables-via-datatype",level:4},{value:"Using Variables in Template Literals",id:"using-variables-in-template-literals",level:4},{value:"Using Variables in ECMAScript Code",id:"using-variables-in-ecmascript-code",level:4},{value:"JavaScript Arguments",id:"javascript-arguments",level:3},{value:"EcmaScript",id:"ecmascript",level:4},{value:"EcmaScript Template Literal",id:"ecmascript-template-literal",level:4},{value:"Writing valid pipeline",id:"writing-valid-pipeline",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipeline"},"Pipeline"),(0,i.kt)("h2",{id:"concept"},"Concept"),(0,i.kt)("p",null,"A pipeline is a way to extract, transform, and load data (ETL). barnard59 pipelines are described in RDF format.\nMore specifically, they use the ",(0,i.kt)("a",{parentName:"p",href:"https://pipeline.described.at/"},"pipeline")," and ",(0,i.kt)("a",{parentName:"p",href:"https://code.described.at/"},"code")," ontology."),(0,i.kt)("p",null,"A barnard59 pipeline consists of steps, where each step returns a ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html"},"Stream"),".\nThe streams of all steps are combined via ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options"},(0,i.kt)("inlineCode",{parentName:"a"},".pipe")),".\nThe pipeline itself is also a stream."),(0,i.kt)("p",null,"Depending on the stream types of the first and last stream, the pipeline can be writable or readable.\nIf the pipeline is self-contained, a dummy readable interface is provided to handle events for end of processing and errors."),(0,i.kt)("h3",{id:"internals"},"Internals"),(0,i.kt)("p",null,"The code to process pipelines makes heavy usage of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zazuko/rdf-native-loader"},"RDF Loaders")," to create JavaScript objects and functions based on a RDF description.\nFor the steps, the ",(0,i.kt)("a",{parentName:"p",href:"https://code.described.at/"},"Code Ontology")," is used to point or define the code for each step.\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zazuko/rdf-native-loader-code"},"RDF Code Loader")," takes care of importing code referenced as IRIs or directly process literals as JavaScript code."),(0,i.kt)("h2",{id:"pipeline-definition"},"Pipeline Definition"),(0,i.kt)("p",null,"The following prefixes are used in the code segments of this section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},"@prefix code: <https://code.described.at/> .\n@prefix p: <https://pipeline.described.at/> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n")),(0,i.kt)("h3",{id:"pipeline-1"},"Pipeline"),(0,i.kt)("p",null,"The pipeline itself must have a ",(0,i.kt)("inlineCode",{parentName:"p"},"rdf:type")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"p:Pipeline"),".\nBased on the interfaces of the first and the last step, the pipeline itself is a ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html#stream_writable_streams"},"Writable")," and/or ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html#stream_readable_streams"},"Readable")," stream.\nAdditional to the ",(0,i.kt)("inlineCode",{parentName:"p"},"p:Pipeline")," ",(0,i.kt)("inlineCode",{parentName:"p"},"rdf:type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p:Writable")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"p:Readable")," must be defined accordingly.\nThat can look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},"<#pipeline> a p:Pipeline, p:Writable, p:Readable .\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The type of the streams could be also detected during runtime or based on metadata for the streams, but that would required deeper understanding of the pipeline and steps structures.\nTo simplify handling of pipeline definitions without runtime data, the stream types are attached to the pipeline definition and errors are thrown in the runtime if they don't match."),(0,i.kt)("h3",{id:"step"},"Step"),(0,i.kt)("p",null,"A pipeline consists of one or more steps, which are actually factories which return streams.\nEach step is linked with the previous one via ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options"},(0,i.kt)("inlineCode",{parentName:"a"},".pipe")),".\nAs this requires to process the steps in order, the steps must be provided as an RDF List.\nThis example shows a very simple pipeline which consists of two steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},"<#pipeline> a p:Pipeline ;\n  p:steps [\n    p:stepList ( <#readFile> <#writeFile> )\n  ] .\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," With the two levels (",(0,i.kt)("inlineCode",{parentName:"p"},"p:steps")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"p:stepList"),") it's possible to use a known identifier (Blank Node with name or Named Node) for a step list and reference to it in multiple pipelines.\nThis is useful if pipelines share the same steps, but have different variables."),(0,i.kt)("p",null,"The step itself must have a ",(0,i.kt)("inlineCode",{parentName:"p"},"rdf:type")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"p:Step"),".\nThe Code Ontology is used to point to the actual code.\nThis is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"code:implementedBy")," property and code description with the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdf:type")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"code:EcmaScript"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"code:link")," points to the JavaScript code file.\n",(0,i.kt)("inlineCode",{parentName:"p"},"node:")," IRIs can be used to use the Node.js resolve logic of ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," to find files and packages.\n",(0,i.kt)("inlineCode",{parentName:"p"},"file:")," IRIs will be expanded to full paths.\nThis example uses the Node.js file system function to create a readable stream.\n",(0,i.kt)("inlineCode",{parentName:"p"},"input.txt")," is used as the only parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<#readFile> a p:Step ;\n  code:implementedBy [ a code:EcmaScript ;\n    code:link <node:fs#createReadStream>\n  ] ;\n  code:arguments ( "input.txt" ) .\n')),(0,i.kt)("p",null,"It's also possible to give the arguments as key value pairs like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<#parseCsvw> a p:Step ;\n  code:implementedBy [ a code:EcmaScript ;\n    code:link <file:customStreamCode.js>\n  ] ;\n  code:arguments [\n    p:name "url";\n    p:value "http://example.org/"\n  ], [\n    p:name "method";\n    p:value "POST"\n  ] .\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customStreamCode.js")," should export a function which returns a stream.\nDuring the initialization of the pipeline the function is called with the arguments built based on ",(0,i.kt)("inlineCode",{parentName:"p"},"code:arguments"),".\nThe built argument for this example would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  url: 'http://example.org/',\n  method: 'POST'\n}\n")),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)("p",null,"Pipelines can have variables directly attached to the pipeline or injected from the runtime, like the cli tool.\nThe variables can be evaluated via a special RDF Datatype or in ES6 Literals."),(0,i.kt)("h4",{id:"definition-attached-to-the-pipeline"},"Definition attached to the Pipeline"),(0,i.kt)("p",null,"Variables attached to the pipeline are useful when steps, step lists or sub pipelines are reused.\nThe definition looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<#pipeline> a p:Pipeline ;\n  p:variables [\n    p:variable [ a p:Variable ;\n      p:name "filename" ;\n      p:value "example.txt"\n    ]\n  ] .\n')),(0,i.kt)("h4",{id:"using-variables-via-datatype"},"Using Variables via Datatype"),(0,i.kt)("p",null,"The values of the variable can be use via a literal with a ",(0,i.kt)("inlineCode",{parentName:"p"},"p:VariableName")," datatype.\nIn the example below, the argument will be replaced with the value of the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<#readFile> a p:Step;\n  code:implementedBy [ a code:EcmaScript ;\n    code:link <node:fs#createReadStream>\n  ] ;\n  code:arguments ("filename"^^p:VariableName) .\n')),(0,i.kt)("h4",{id:"using-variables-in-template-literals"},"Using Variables in Template Literals"),(0,i.kt)("p",null,"Variables can be also used in Template Literals.\nThe variable values are injected with their corresponding name, like shown in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<#readFile> a p:Step ;\n  code:implementedBy [ a code:EcmaScript ;\n    code:link <node:fs#createReadStream>\n  ] ;\n  code:arguments ( "${basePath}/input.txt"^^code:EcmaScriptTemplateLiteral ) .\n')),(0,i.kt)("h4",{id:"using-variables-in-ecmascript-code"},"Using Variables in ECMAScript Code"),(0,i.kt)("p",null,"Variables are also injected into the context provided to ECMAScript code.\nThe context can be accessed in the standard JavaScript way using ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),".\nThe variables are attached in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"this.variables"),".\nIn the following example you can see how the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," can be accessed in the JavaScript code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<#map> a p:Step ;\n  code:implementedBy [ a code:EcmaScript ;\n    code:link <node:barnard59-base#map>\n  ] ;\n  code:arguments ("""row => {\n    return this.variables.get(\'prefix\') + row\n  }"""^^code:EcmaScript) .\n')),(0,i.kt)("h3",{id:"javascript-arguments"},"JavaScript Arguments"),(0,i.kt)("p",null,"Part of the pipeline concept are JavaScript code arguments where describing a logic in a declarative way would be very complex, but is easy to code in one or few lines of JavaScript code.\nAlso for this usage the Code Ontology is used.\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zazuko/rdf-native-loader-code"},"RDF Code Loader package")," provides this functionality.\nSee the docs of the package for more details."),(0,i.kt)("h4",{id:"ecmascript"},"EcmaScript"),(0,i.kt)("p",null,"Here is a small example for a step which is using the ",(0,i.kt)("inlineCode",{parentName:"p"},"barnard59-base#map")," operation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<#map> a p:Step ;\n  code:implementedBy [ a code:EcmaScript ;\n    code:link <node:barnard59-base#map>\n  ] ;\n  code:arguments ("""row => {\n    // replace all \xf6 umlauts with oe\n    return row.split(\'\xf6\').join(\'oe\')\n  }"""^^code:EcmaScript) .\n')),(0,i.kt)("h4",{id:"ecmascript-template-literal"},"EcmaScript Template Literal"),(0,i.kt)("p",null,"Also Template Literals are supported.\nThe defined variables can be used directly.\nA typical use case are file name patterns, derivative from a variable value, like in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<#readFile> a p:Step ;\n  code:implementedBy [ a code:EcmaScript ;\n    code:link <node:fs#createReadStream>\n  ] ;\n  code:arguments ( "${basePath}/input.txt"^^code:EcmaScriptTemplateLiteral ) .\n')),(0,i.kt)("h2",{id:"writing-valid-pipeline"},"Writing valid pipeline"),(0,i.kt)("p",null,"Writing a valid pipeline can be tedious task. Pipelines are a chain of streams, and those streams have to match."),(0,i.kt)("p",null,"To learn more about correctly matching those streams, go ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflows/explanations/pipeline-validity"},"here"),"."),(0,i.kt)("p",null,"To automatically detect stream-matching errors, use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zazuko/barnard59-pipeline-validation"},"pipeline validator"),"."))}m.isMDXComponent=!0}}]);