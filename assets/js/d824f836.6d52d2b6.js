"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[353],{6150:(e,t,n)=>{function a(e,t){let{from:n=1,to:a=n,num:i}=void 0===t?{}:t;const r=e.split("\n",n-1).join("\n").length;let l;return l=i?e.split("\n",n+i).join("\n").length:e.split("\n",a).join("\n").length,e.substring(r,l).trim()}n.d(t,{I:()=>a})},2800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>Z,default:()=>O,frontMatter:()=>j,metadata:()=>z,toc:()=>V});var a=n(7462),i=n(7294),r=n(3905),l=n(6010),o=n(2466),s=n(6550),p=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function m(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,p]=f({queryString:n,groupId:a}),[u,c]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??u;return h({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),c(e)}),[p,c,r]),tabValues:r}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==r&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return i.createElement(y,(0,a.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:n,className:a}=e;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(T.tabItem,a),hidden:n},t)}var C=n(614),I=n(6150),S=n(2916);const j={},Z="Getting started",z={unversionedId:"workflows/tutorial/first-pipeline",id:"workflows/tutorial/first-pipeline",title:"Getting started",description:"In this tutorial we will create a simple pipeline which fetches the current time from a Web API at",source:"@site/docs/workflows/tutorial/first-pipeline.mdx",sourceDirName:"workflows/tutorial",slug:"/workflows/tutorial/first-pipeline",permalink:"/docs/workflows/tutorial/first-pipeline",draft:!1,editUrl:"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/tutorial/first-pipeline.mdx",tags:[],version:"current",frontMatter:{},sidebar:"workflowsSidebar",previous:{title:"Introduction",permalink:"/docs/workflows/"},next:{title:"Automate pipelines",permalink:"/docs/workflows/how-to/automate-pipeline"}},E={},V=[{value:"Setting up the project",id:"setting-up-the-project",level:2},{value:"Pipeline definition",id:"pipeline-definition",level:2},{value:"Fetch time from API",id:"fetch-time-from-api",level:3},{value:"Parse time as JSON-LD",id:"parse-time-as-json-ld",level:3},{value:"Serialize",id:"serialize",level:3},{value:"Running the pipeline",id:"running-the-pipeline",level:2},{value:"Substituting variables",id:"substituting-variables",level:3}],D={toc:V},L="wrapper";function O(e){let{components:t,...i}=e;return(0,r.kt)(L,(0,a.Z)({},D,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"In this tutorial we will create a simple pipeline which fetches the current time from a Web API at\n",(0,r.kt)("inlineCode",{parentName:"p"},"timeapi.io"),", interprets it as RDF treating the response as JSON-LD, and finally serializes as n-triples."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(787).Z,width:"1578",height:"332"})),(0,r.kt)("h2",{id:"setting-up-the-project"},"Setting up the project"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are not fluent with Node.js & NPM read more about how to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/creating-a-package-json-file"},"create a package.json")," file.")),(0,r.kt)("p",null,"First, install the main barnard59 package which serves a CLI to run pipelines. We will use it later in this tutorial."),(0,r.kt)(N,{mdxType:"Tabs"},(0,r.kt)(x,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm init -y\nnpm i --save barnard59\n"))),(0,r.kt)(x,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn init -y\nyarn add barnard59\n")))),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"type: module")," to the package.json to use ESM Modules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "name": "barnard59-time-zone",\n  "version": "1.0.0",\n+ "type": "module",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,r.kt)("p",null,"Then, add necessary dependencies which provide the operations we will use in the pipeline:"),(0,r.kt)(N,{mdxType:"Tabs"},(0,r.kt)(x,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i --save barnard59-formats barnard59-http barnard59-base\n"))),(0,r.kt)(x,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add barnard59-formats barnard59-http barnard59-base\n")))),(0,r.kt)("h2",{id:"pipeline-definition"},"Pipeline definition"),(0,r.kt)("p",null,"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline/main.ttl"),". It will contain the turtle definition of the pipeline and its steps. The ",(0,r.kt)("inlineCode",{parentName:"p"},"barnard59"),"\nCLI then parses this file and executes the processing."),(0,r.kt)("p",null,"First, add the necessary prefixes and a base URI."),(0,r.kt)(C.Z,{language:"turtle",title:"pipeline/main.ttl",mdxType:"CodeBlock"},(0,I.I)(S.Z,{to:4})),(0,r.kt)("p",null,"Then add the pipeline resource itself."),(0,r.kt)(C.Z,{language:"turtle",title:"pipeline/main.ttl",mdxType:"CodeBlock"},(0,I.I)(S.Z,{from:6,num:19})),(0,r.kt)("p",null,"Here, you started a ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflows/explanations/pipeline"},(0,r.kt)("inlineCode",{parentName:"a"},"Readable"))," pipeline with 5 steps and a variable which\nwill be needed by those steps and is the means to parametrise a pipeline."),(0,r.kt)("h3",{id:"fetch-time-from-api"},"Fetch time from API"),(0,r.kt)("p",null,"Next, add implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"<fetch>")," step to retrieve the current time using a simple HTTP request."),(0,r.kt)(C.Z,{language:"turtle",title:"pipeline/main.ttl",mdxType:"CodeBlock"},(0,I.I)(S.Z,{from:27,num:4})),(0,r.kt)("h3",{id:"parse-time-as-json-ld"},"Parse time as JSON-LD"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"timeapi.io")," returns a plain JSON response which represents a point in time. That response will be similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "year": 2023,\n  "month": 7,\n  "day": 27,\n  "hour": 10,\n  "minute": 44,\n  "seconds": 23,\n  "milliSeconds": 88,\n  "dateTime": "2023-07-27T10:44:23.0884467",\n  "date": "07/27/2023",\n  "time": "10:44",\n  "timeZone": "UTC",\n  "dayOfWeek": "Thursday",\n  "dstActive": false\n}\n')),(0,r.kt)("p",null,"This JSON will be pushed as a single string ",(0,r.kt)("a",{parentName:"p",href:"https://nodesource.com/blog/understanding-streams-in-nodejs/"},"chunk"),".\nTo convert it to RDF, first parse the JSON itself by using an operation from ",(0,r.kt)("inlineCode",{parentName:"p"},"barnard59-base"),":"),(0,r.kt)(C.Z,{language:"turtle",title:"pipeline/main.ttl",mdxType:"CodeBlock"},(0,I.I)(S.Z,{from:20})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/zazuko/barnard59/blob/master/packages/base/manifest.ttl"},(0,r.kt)("inlineCode",{parentName:"a"},"barnard59-base"))," contains many steps which\nwill be useful in stream processing, such as filtering chunks, merging multiple stream, or parsing JSON seen above.")),(0,r.kt)("p",null,"Next, you'll want to apply a JSON-LD context to extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"dateTime")," from the JSON and have it parsed as an\n",(0,r.kt)("inlineCode",{parentName:"p"},"xsd:dateTime")," literal. Hence, add the implementation for step ",(0,r.kt)("inlineCode",{parentName:"p"},"<jsonldStructure>"),":"),(0,r.kt)(C.Z,{language:"turtle",title:"pipeline/main.ttl",mdxType:"CodeBlock"},(0,I.I)(S.Z,{from:33,num:5})),(0,r.kt)("p",null,"When processing a stream, a chunk can be modified by mapping to a new value. Here, the argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"op:base\\/map")," operation\nis a function which should return JSON-LD. As seen in the previous snippet, the implementation is ",(0,r.kt)("inlineCode",{parentName:"p"},"addContext")," function\nexported from a module ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonldStructure.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lib/jsonldStructure.js"',title:'"lib/jsonldStructure.js"'},"export function addContext(json) {\n    const TZ = this.variables.get('TZ')\n\n    return {\n        '@context': {\n            dateTime: 'http://purl.org/dc/elements/1.1/date'\n        },\n        '@id': `https://timeapi.io/api/Time/current/zone?timeZone=${TZ}`,\n        ...json\n    }\n}\n")),(0,r.kt)("p",null,"Finally, the parsing itself is a dedicated operation provided by the package ",(0,r.kt)("inlineCode",{parentName:"p"},"barnard59-formats"),":"),(0,r.kt)(C.Z,{language:"turtle",title:"pipeline/main.ttl",mdxType:"CodeBlock"},(0,I.I)(S.Z,{from:22})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Notice the final ",(0,r.kt)("inlineCode",{parentName:"p"},"parse/object")," segments used to parse JSON-LD which is used with object chunks. When processing a raw, string\nJSON-LD stream ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," would be used instead.")),(0,r.kt)("h3",{id:"serialize"},"Serialize"),(0,r.kt)("p",null,"Finally, the last step is to serialize an RDF stream."),(0,r.kt)(C.Z,{language:"turtle",title:"pipeline/main.ttl",mdxType:"CodeBlock"},(0,I.I)(S.Z,{from:23})),(0,r.kt)("h2",{id:"running-the-pipeline"},"Running the pipeline"),(0,r.kt)("p",null,"You are now ready to run the pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx barnard59 run pipeline/main.ttl --pipeline http://example.org/pipeline/tz\n")),(0,r.kt)("p",null,"The CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," action is called with the path of the pipeline's source and its identifier."),(0,r.kt)("p",null,"In the output, you should see a single triple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-turtle"},'<https://timeapi.io/api/Time/current/zone?timeZone=UTC>\n  <http://purl.org/dc/elements/1.1/date>\n    "2023-07-31T08:02:55.8602811" .\n')),(0,r.kt)("h3",{id:"substituting-variables"},"Substituting variables"),(0,r.kt)("p",null,"To use a different timezone, you can provide an override for the variable declared in the pipeline definition from the\ncommand line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx barnard59 run pipeline/main.ttl \\\n  --pipeline http://example.org/pipeline/tz \\\n  --variable TZ=America/New_York\n")),(0,r.kt)("p",null,"The output would be adjusted accordingly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-turtle"},'<https://timeapi.io/api/Time/current/zone?timeZone=America/New_York>\n  <http://purl.org/dc/elements/1.1/date>\n    "2023-07-31T04:02:55.8602811" .\n')))}O.isMDXComponent=!0},2916:(e,t,n)=>{n.d(t,{Z:()=>a});const a='@base <http://example.org/pipeline/> .\n@prefix code: <https://code.described.at/> .\n@prefix p: <https://pipeline.described.at/> .\n@prefix op: <https://barnard59.zazuko.com/operations/> .\n\n<tz> a p:Pipeline, p:Readable ;\n  p:variables\n    [\n      p:variable\n        [\n          a p:Variable ;\n          p:name "TZ" ;\n          p:value "UTC" ;\n        ]\n    ] ;\n  p:steps\n    [\n      p:stepList (\n        <fetch>\n        [ op:base\\/json\\/parse () ]\n        <jsonldStructure>\n        [ op:formats\\/jsonld\\/parse\\/object () ]\n        [ op:formats\\/ntriples\\/serialize () ]\n      )\n    ] .\n\n<fetch> op:http\\/get\n  [\n    code:name "url" ;\n    code:value "https://timeapi.io/api/Time/current/zone?timeZone=${TZ}"^^code:EcmaScriptTemplateLiteral ;\n  ] .\n\n<jsonldStructure> op:base\\/map (\n  [\n    a code:EcmaScriptModule ;\n    code:link <file:../lib/jsonldStructure.js#addContext>\n  ]\n) .\n'},787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/first-pipeline-diagram-d7b7bf4193fddecc19b33bd8590cde7a.jpg"}}]);