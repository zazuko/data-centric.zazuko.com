"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>x,default:()=>D,frontMatter:()=>S,metadata:()=>C,toc:()=>E});var a=n(7462),r=n(7294),i=n(3905),l=n(6010),o=n(2466),p=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[p,s]=f({queryString:n,groupId:a}),[u,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=p??u;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),d(e)}),[s,d,i]),tabValues:i}}var k=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(c(t),p(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(T.tabItem,a),hidden:n},t)}const S={},x="Getting started",C={unversionedId:"workflows/tutorial/first-pipeline",id:"workflows/tutorial/first-pipeline",title:"Getting started",description:"In this tutorial we will create a simple pipeline which fetches the current time from a Web API at",source:"@site/docs/workflows/tutorial/first-pipeline.mdx",sourceDirName:"workflows/tutorial",slug:"/workflows/tutorial/first-pipeline",permalink:"/docs/workflows/tutorial/first-pipeline",draft:!1,editUrl:"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/tutorial/first-pipeline.mdx",tags:[],version:"current",frontMatter:{},sidebar:"workflowsSidebar",previous:{title:"Introduction",permalink:"/docs/workflows/"},next:{title:"Automate pipelines",permalink:"/docs/workflows/how-to/automate-pipeline"}},O={},E=[{value:"Setting up the project",id:"setting-up-the-project",level:2},{value:"Pipeline definition",id:"pipeline-definition",level:2},{value:"Fetch time from API",id:"fetch-time-from-api",level:3},{value:"Parse time as JSON-LD",id:"parse-time-as-json-ld",level:3},{value:"Serialize",id:"serialize",level:3},{value:"Running the pipeline",id:"running-the-pipeline",level:2},{value:"Substituting variables",id:"substituting-variables",level:3}],I={toc:E},P="wrapper";function D(e){let{components:t,...r}=e;return(0,i.kt)(P,(0,a.Z)({},I,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"In this tutorial we will create a simple pipeline which fetches the current time from a Web API at\n",(0,i.kt)("inlineCode",{parentName:"p"},"timeapi.io"),", interprets it as RDF treating the response as JSON-LD, and finally serializes as n-triples."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(787).Z,width:"1578",height:"332"})),(0,i.kt)("h2",{id:"setting-up-the-project"},"Setting up the project"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are not fluent with Node.js & NPM read more about how to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/creating-a-package-json-file"},"create a package.json")," file.")),(0,i.kt)("p",null,"First, install the main barnard59 package which serves a CLI to run pipelines. We will use it later in this tutorial."),(0,i.kt)(N,{mdxType:"Tabs"},(0,i.kt)(j,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm init -y\nnpm i --save barnard59\n"))),(0,i.kt)(j,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn init -y\nyarn add barnard59\n")))),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"type: module")," to the package.json to use ESM Modules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "name": "b59",\n  "version": "1.0.0",\n+ "type": "module",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,i.kt)("p",null,"Then, add necessary dependencies which provide the operations we will use in the pipeline:"),(0,i.kt)(N,{mdxType:"Tabs"},(0,i.kt)(j,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i --save barnard59-formats barnard59-http barnard59-base\n"))),(0,i.kt)(j,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add barnard59-formats barnard59-http barnard59-base\n")))),(0,i.kt)("h2",{id:"pipeline-definition"},"Pipeline definition"),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline/main.ttl"),". It will contain the turtle definition of the pipeline and its steps. The ",(0,i.kt)("inlineCode",{parentName:"p"},"barnard59"),"\nCLI then parses this file and executes the processing."),(0,i.kt)("p",null,"First, add the necessary prefixes and a base URI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle",metastring:'title="pipeline/main.ttl"',title:'"pipeline/main.ttl"'},"@base <http://example.org/pipeline/> .\n@prefix code: <https://code.described.at/> .\n@prefix p: <https://pipeline.described.at/> .\n")),(0,i.kt)("p",null,"Then add the pipeline resource itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle",metastring:'title="pipeline/main.ttl"',title:'"pipeline/main.ttl"'},'<> a p:Pipeline, p:Readable ;\n  p:variables [\n    p:variable [\n      a p:Variable;\n      p:name "apiBase" ;\n      p:value "https://timeapi.io/api/Time/current/zone?timeZone=" ;\n    ] ;\n    p:variable [\n      a p:Variable;\n      p:name "TZ" ;\n      p:value "UTC" ;\n    ]\n  ] ;\n  p:steps [\n    p:stepList ( <fetch> <parseJson> <jsonldStructure> <parse> <serialize> )\n  ] .\n')),(0,i.kt)("p",null,"Here, you started a ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflows/explanations/pipeline"},(0,i.kt)("inlineCode",{parentName:"a"},"Readable"))," pipeline with 5 steps and a variable which\nwill be needed by those steps and is the means to parametrise a pipeline."),(0,i.kt)("h3",{id:"fetch-time-from-api"},"Fetch time from API"),(0,i.kt)("p",null,"Next, add implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"<fetch>")," step to retrieve the current time using a simple HTTP request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle",metastring:'title="pipeline/main.ttl"',title:'"pipeline/main.ttl"'},'<fetch> a p:Step ;\n  code:implementedBy [\n    a code:EcmaScriptModule;\n    code:link <node:barnard59-http#get> ;\n  ];\n  code:arguments [\n    code:name "url";\n    code:value "https://timeapi.io/api/Time/current/zone?timeZone=${TZ}"^^code:EcmaScriptTemplateLiteral ;\n  ].\n')),(0,i.kt)("h3",{id:"parse-time-as-json-ld"},"Parse time as JSON-LD"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"timeapi.io")," returns a plain JSON response which represents a point in time. That response will be similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "year": 2023,\n  "month": 7,\n  "day": 27,\n  "hour": 10,\n  "minute": 44,\n  "seconds": 23,\n  "milliSeconds": 88,\n  "dateTime": "2023-07-27T10:44:23.0884467",\n  "date": "07/27/2023",\n  "time": "10:44",\n  "timeZone": "UTC",\n  "dayOfWeek": "Thursday",\n  "dstActive": false\n}\n')),(0,i.kt)("p",null,"This JSON will be pushed as a single string ",(0,i.kt)("a",{parentName:"p",href:"https://nodesource.com/blog/understanding-streams-in-nodejs/"},"chunk"),".\nTo convert it to RDF, first parse the JSON itself by using an operation from ",(0,i.kt)("inlineCode",{parentName:"p"},"barnard59-base"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle",metastring:'title="pipeline/main.ttl"',title:'"pipeline/main.ttl"'},"<parseJson> a p:Step ;\n  code:implementedBy [\n    a code:EcmaScriptModule;\n    code:link <node:barnard59-base/json.js#parse> ;\n  ].\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/zazuko/barnard59/blob/master/packages/base/manifest.ttl"},(0,i.kt)("inlineCode",{parentName:"a"},"barnard59-base"))," contains many steps which\nwill be useful in stream processing, such as filtering chunks, merging multiple stream, or parsing JSON seen above.")),(0,i.kt)("p",null,"Next, you'll want to apply a JSON-LD context to extract the ",(0,i.kt)("inlineCode",{parentName:"p"},"dateTime")," from the JSON and have it parsed as an\n",(0,i.kt)("inlineCode",{parentName:"p"},"xsd:dateTime")," literal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle",metastring:'title="pipeline/main.ttl"',title:'"pipeline/main.ttl"'},"<jsonldStructure>\n  a p:Step ;\n  code:implementedBy [\n    a code:EcmaScriptModule;\n    // highlight-next-line\n    code:link <node:barnard59-base/map.js#default> ;\n  ];\n  code:arguments (\n    [\n      a code:EcmaScriptModule ;\n      // highlight-next-line\n      code:link <file:lib/jsonldStructure.js#addContext>\n    ]\n  ).\n")),(0,i.kt)("p",null,"When processing a stream, a chunk can be modified by mapping to a new value. Here, the argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"map.js")," module\nis a function which should return JSON-LD. As seen in the previous snippet, the implementation is ",(0,i.kt)("inlineCode",{parentName:"p"},"addContext")," function\nexported from a module ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/jsonldStructure.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lib/jsonldStructure.js"',title:'"lib/jsonldStructure.js"'},"export function addContext(json) {\n    const apiBase = this.variables.get('apiBase')\n    const TZ = this.variables.get('TZ')\n\n    return {\n        '@context': {\n            dateTime: 'http://purl.org/dc/elements/1.1/date'\n        },\n        '@id': `${apiBase}${TZ}`,\n        ...json\n    }\n}\n")),(0,i.kt)("p",null,"Finally, the parsing itself is a dedicated operation provided by the package ",(0,i.kt)("inlineCode",{parentName:"p"},"barnard59-formats"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle",metastring:'title="pipeline/main.ttl"',title:'"pipeline/main.ttl"'},"<parse> a p:Step ;\n  code:implementedBy [\n    a code:EcmaScriptModule;\n    code:link <node:barnard59-formats/jsonld.js#parse.object> ;\n  ].\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"#parse.object")," export used to parse JSON-LD which is used with object chunks. When processing a raw, string\nJSON-LD stream ",(0,i.kt)("inlineCode",{parentName:"p"},"#parse")," would be used instead.")),(0,i.kt)("h3",{id:"serialize"},"Serialize"),(0,i.kt)("p",null,"Finally, to serialize an RDF stream, simply add the last, simple step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},"<serialize>\n  a p:Step ;\n  code:implementedBy [\n    a code:EcmaScriptModule ;\n    code:link <node:barnard59-formats/ntriples.js#serialize> ;\n  ] .\n")),(0,i.kt)("h2",{id:"running-the-pipeline"},"Running the pipeline"),(0,i.kt)("p",null,"You are now ready to run the pipeline:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx barnard59 run pipeline/main.ttl --pipeline http://example.org/pipeline/\n")),(0,i.kt)("p",null,"The CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," action is called the path of the pipeline's source and its identifier."),(0,i.kt)("p",null,"In the output, you should see a single triple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<https://timeapi.io/api/Time/current/zone?timeZone=UTC>\n  <http://purl.org/dc/elements/1.1/date>\n    "2023-07-31T08:02:55.8602811" .\n')),(0,i.kt)("h3",{id:"substituting-variables"},"Substituting variables"),(0,i.kt)("p",null,"To use a different timezone, you can provide an override for the variable declared in the pipeline definition from the\ncommand line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx barnard59 run pipeline/main.ttl \\\n  --pipeline http://example.org/pipeline/ \\\n  --variable TZ=America/New_York\n")),(0,i.kt)("p",null,"The output would be adjusted accordingly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-turtle"},'<https://timeapi.io/api/Time/current/zone?timeZone=America/New_York>\n  <http://purl.org/dc/elements/1.1/date>\n    "2023-07-31T04:02:55.8602811" .\n')))}D.isMDXComponent=!0},787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/first-pipeline-diagram-d7b7bf4193fddecc19b33bd8590cde7a.jpg"}}]);