"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[8304],{4168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>D,contentTitle:()=>C,default:()=>E,frontMatter:()=>V,metadata:()=>i,toc:()=>L});const i=JSON.parse('{"id":"workflows/tutorial/first-pipeline","title":"Getting started","description":"In this tutorial we will create a simple pipeline which fetches the current time from a Web API at","source":"@site/docs/workflows/tutorial/first-pipeline.mdx","sourceDirName":"workflows/tutorial","slug":"/workflows/tutorial/first-pipeline","permalink":"/docs/workflows/tutorial/first-pipeline","draft":false,"unlisted":false,"editUrl":"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/tutorial/first-pipeline.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"workflowsSidebar","previous":{"title":"Introduction","permalink":"/docs/workflows/"},"next":{"title":"Implement steps","permalink":"/docs/workflows/how-to/implement-steps"}}');var a=t(4848),r=t(8453),s=t(6540),l=t(4164),o=t(3104),c=t(6347),d=t(205),p=t(7485),u=t(1682),h=t(679);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const i=(0,c.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,p.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=f(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[o,c]=j({queryString:t,groupId:i}),[p,u]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,h.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),m=(()=>{const e=o??p;return b({value:e,tabValues:a})?e:null})();(0,d.A)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),u(e)}),[c,u,a]),tabValues:a}}var x=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==i&&(d(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:p,...r,className:(0,l.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=g(e);return(0,a.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,a.jsx)(w,{...n,...e}),(0,a.jsx)(y,{...n,...e})]})}function T(e){const n=(0,x.A)();return(0,a.jsx)(k,{...e,children:m(e.children)},String(n))}const N={tabItem:"tabItem_Ymn6"};function S(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(N.tabItem,i),hidden:t,children:n})}var A=t(1432),I=t(3672),z=t(3235);const V={},C="Getting started",D={},L=[{value:"Setting up the project",id:"setting-up-the-project",level:2},{value:"Pipeline definition",id:"pipeline-definition",level:2},{value:"Fetch time from API",id:"fetch-time-from-api",level:3},{value:"Parse time as JSON-LD",id:"parse-time-as-json-ld",level:3},{value:"Serialize",id:"serialize",level:3},{value:"Running the pipeline",id:"running-the-pipeline",level:2},{value:"Substituting variables",id:"substituting-variables",level:3}];function P(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,a.jsxs)(n.p,{children:["In this tutorial we will create a simple pipeline which fetches the current time from a Web API at\n",(0,a.jsx)(n.code,{children:"timeapi.io"}),", interprets it as RDF treating the response as JSON-LD, and finally serializes as n-triples."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(1621).A+"",width:"1578",height:"332"})}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-the-project",children:"Setting up the project"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you are not fluent with Node.js & NPM read more about how to ",(0,a.jsx)(n.a,{href:"https://docs.npmjs.com/creating-a-package-json-file",children:"create a package.json"})," file."]})}),"\n",(0,a.jsx)(n.p,{children:"First, install the main barnard59 package which serves a CLI to run pipelines. We will use it later in this tutorial."}),"\n",(0,a.jsxs)(T,{groupId:"nodePackageManager",children:[(0,a.jsx)(S,{value:"npm",label:"NPM",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm init -y\nnpm i --save barnard59\n"})})}),(0,a.jsx)(S,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn init -y\nyarn add barnard59\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Add ",(0,a.jsx)(n.code,{children:"type: module"})," to the package.json to use ESM Modules"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "name": "barnard59-time-zone",\n  "version": "1.0.0",\n+ "type": "module",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then, add necessary dependencies which provide the operations we will use in the pipeline:"}),"\n",(0,a.jsxs)(T,{groupId:"nodePackageManager",children:[(0,a.jsx)(S,{value:"npm",label:"NPM",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm i --save barnard59-formats barnard59-http barnard59-base\n"})})}),(0,a.jsx)(S,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn add barnard59-formats barnard59-http barnard59-base\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"pipeline-definition",children:"Pipeline definition"}),"\n",(0,a.jsxs)(n.p,{children:["Create a file ",(0,a.jsx)(n.code,{children:"pipeline/main.ttl"}),". It will contain the turtle definition of the pipeline and its steps. The ",(0,a.jsx)(n.code,{children:"barnard59"}),"\nCLI then parses this file and executes the processing."]}),"\n",(0,a.jsx)(n.p,{children:"First, add the necessary prefixes and a base URI."}),"\n",(0,a.jsx)(A.A,{language:"turtle",title:"pipeline/main.ttl",children:(0,I.a)(z.A,{to:4})}),"\n",(0,a.jsx)(n.p,{children:"Then add the pipeline resource itself."}),"\n",(0,a.jsx)(A.A,{language:"turtle",title:"pipeline/main.ttl",children:(0,I.a)(z.A,{from:6,num:19})}),"\n",(0,a.jsxs)(n.p,{children:["Here, you started a ",(0,a.jsx)(n.a,{href:"/docs/workflows/explanations/pipeline",children:(0,a.jsx)(n.code,{children:"Readable"})})," pipeline with 5 steps and a variable which\nwill be needed by those steps and is the means to parametrise a pipeline."]}),"\n",(0,a.jsx)(n.h3,{id:"fetch-time-from-api",children:"Fetch time from API"}),"\n",(0,a.jsxs)(n.p,{children:["Next, add implementation of ",(0,a.jsx)(n.code,{children:"<fetch>"})," step to retrieve the current time using a simple HTTP request."]}),"\n",(0,a.jsx)(A.A,{language:"turtle",title:"pipeline/main.ttl",children:(0,I.a)(z.A,{from:27,num:4})}),"\n",(0,a.jsx)(n.h3,{id:"parse-time-as-json-ld",children:"Parse time as JSON-LD"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"timeapi.io"})," returns a plain JSON response which represents a point in time. That response will be similar to:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "year": 2023,\n  "month": 7,\n  "day": 27,\n  "hour": 10,\n  "minute": 44,\n  "seconds": 23,\n  "milliSeconds": 88,\n  "dateTime": "2023-07-27T10:44:23.0884467",\n  "date": "07/27/2023",\n  "time": "10:44",\n  "timeZone": "UTC",\n  "dayOfWeek": "Thursday",\n  "dstActive": false\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This JSON will be pushed as a single string ",(0,a.jsx)(n.a,{href:"https://nodesource.com/blog/understanding-streams-in-nodejs/",children:"chunk"}),".\nTo convert it to RDF, first parse the JSON itself by using an operation from ",(0,a.jsx)(n.code,{children:"barnard59-base"}),":"]}),"\n",(0,a.jsx)(A.A,{language:"turtle",title:"pipeline/main.ttl",children:(0,I.a)(z.A,{from:20})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/zazuko/barnard59/blob/master/packages/base/manifest.ttl",children:(0,a.jsx)(n.code,{children:"barnard59-base"})})," contains many steps which\nwill be useful in stream processing, such as filtering chunks, merging multiple stream, or parsing JSON seen above."]})}),"\n",(0,a.jsxs)(n.p,{children:["Next, you'll want to apply a JSON-LD context to extract the ",(0,a.jsx)(n.code,{children:"dateTime"})," from the JSON and have it parsed as an\n",(0,a.jsx)(n.code,{children:"xsd:dateTime"})," literal. Hence, add the implementation for step ",(0,a.jsx)(n.code,{children:"<jsonldStructure>"}),":"]}),"\n",(0,a.jsx)(A.A,{language:"turtle",title:"pipeline/main.ttl",children:(0,I.a)(z.A,{from:33,num:5})}),"\n",(0,a.jsxs)(n.p,{children:["When processing a stream, a chunk can be modified by mapping to a new value. Here, the argument to the ",(0,a.jsx)(n.code,{children:"op:base\\/map"})," operation\nis a function which should return JSON-LD. As seen in the previous snippet, the implementation is ",(0,a.jsx)(n.code,{children:"addContext"})," function\nexported from a module ",(0,a.jsx)(n.code,{children:"jsonldStructure.js"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="lib/jsonldStructure.js"',children:"export function addContext(json) {\n    const TZ = this.variables.get('TZ')\n\n    return {\n        '@context': {\n            dateTime: 'http://purl.org/dc/elements/1.1/date'\n        },\n        '@id': `https://timeapi.io/api/Time/current/zone?timeZone=${TZ}`,\n        ...json\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Finally, the parsing itself is a dedicated operation provided by the package ",(0,a.jsx)(n.code,{children:"barnard59-formats"}),":"]}),"\n",(0,a.jsx)(A.A,{language:"turtle",title:"pipeline/main.ttl",children:(0,I.a)(z.A,{from:22})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Notice the final ",(0,a.jsx)(n.code,{children:"parse/object"})," segments used to parse JSON-LD which is used with object chunks. When processing a raw, string\nJSON-LD stream ",(0,a.jsx)(n.code,{children:"parse"})," would be used instead."]})}),"\n",(0,a.jsx)(n.h3,{id:"serialize",children:"Serialize"}),"\n",(0,a.jsx)(n.p,{children:"Finally, the last step is to serialize an RDF stream."}),"\n",(0,a.jsx)(A.A,{language:"turtle",title:"pipeline/main.ttl",children:(0,I.a)(z.A,{from:23})}),"\n",(0,a.jsx)(n.h2,{id:"running-the-pipeline",children:"Running the pipeline"}),"\n",(0,a.jsx)(n.p,{children:"You are now ready to run the pipeline:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npx barnard59 run pipeline/main.ttl --pipeline http://example.org/pipeline/tz\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The CLI ",(0,a.jsx)(n.code,{children:"run"})," action is called with the path of the pipeline's source and its identifier."]}),"\n",(0,a.jsx)(n.p,{children:"In the output, you should see a single triple"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-turtle",children:'<https://timeapi.io/api/Time/current/zone?timeZone=UTC>\n  <http://purl.org/dc/elements/1.1/date>\n    "2023-07-31T08:02:55.8602811" .\n'})}),"\n",(0,a.jsx)(n.h3,{id:"substituting-variables",children:"Substituting variables"}),"\n",(0,a.jsx)(n.p,{children:"To use a different timezone, you can provide an override for the variable declared in the pipeline definition from the\ncommand line."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npx barnard59 run pipeline/main.ttl \\\n  --pipeline http://example.org/pipeline/tz \\\n  --variable TZ=America/New_York\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output would be adjusted accordingly"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-turtle",children:'<https://timeapi.io/api/Time/current/zone?timeZone=America/New_York>\n  <http://purl.org/dc/elements/1.1/date>\n    "2023-07-31T04:02:55.8602811" .\n'})})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(P,{...e})}):P(e)}},3672:(e,n,t)=>{function i(e,n){let{from:t=1,to:i=t,num:a}=void 0===n?{}:n;const r=e.split("\n",t-1).join("\n").length;let s;return s=a?e.split("\n",t+a).join("\n").length:e.split("\n",i).join("\n").length,e.substring(r,s).trim()}t.d(n,{a:()=>i})},3235:(e,n,t)=>{t.d(n,{A:()=>i});const i='@base <http://example.org/pipeline/> .\n@prefix code: <https://code.described.at/> .\n@prefix p: <https://pipeline.described.at/> .\n@prefix op: <https://barnard59.zazuko.com/operations/> .\n\n<tz> a p:Pipeline, p:Readable ;\n  p:variables\n    [\n      p:variable\n        [\n          a p:Variable ;\n          p:name "TZ" ;\n          p:value "UTC" ;\n        ]\n    ] ;\n  p:steps\n    [\n      p:stepList (\n        <fetch>\n        [ op:base\\/json\\/parse () ]\n        <jsonldStructure>\n        [ op:formats\\/jsonld\\/parse\\/object () ]\n        [ op:formats\\/ntriples\\/serialize () ]\n      )\n    ] .\n\n<fetch> op:http\\/get\n  [\n    code:name "url" ;\n    code:value "https://timeapi.io/api/Time/current/zone?timeZone=${TZ}"^^code:EcmaScriptTemplateLiteral ;\n  ] .\n\n<jsonldStructure> op:base\\/map (\n  [\n    a code:EcmaScriptModule ;\n    code:link <file:../lib/jsonldStructure.js#addContext>\n  ]\n) .\n'},1621:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/first-pipeline-diagram-d7b7bf4193fddecc19b33bd8590cde7a.jpg"}}]);