"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[6094],{851:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"apis/kopflos/explanations/request-pipeline","title":"Request pipeline","description":"Incoming request","source":"@site/docs/apis/kopflos/explanations/request-pipeline.md","sourceDirName":"apis/kopflos/explanations","slug":"/apis/kopflos/explanations/request-pipeline","permalink":"/docs/apis/kopflos/explanations/request-pipeline","draft":false,"unlisted":false,"editUrl":"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/apis/kopflos/explanations/request-pipeline.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Request pipeline","sidebar_position":1},"sidebar":"apisSidebar","previous":{"title":"Integrate with web server libraries","permalink":"/docs/apis/kopflos/how-to/web-server-libraries"},"next":{"title":"@kopflos-cms/serve-file","permalink":"/docs/apis/kopflos/reference/modules/serve-file"}}');var s=r(4848),i=r(8453);const t={title:"Request pipeline",sidebar_position:1},a="Kopflos request pipeline",l={},d=[{value:"Incoming request",id:"incoming-request",level:2},{value:"Kopflos handler",id:"kopflos-handler",level:2},{value:"Resource Shape Lookup",id:"resource-shape-lookup",level:2},{value:"Resource Loader Lookup + Load Resource",id:"resource-loader-lookup--load-resource",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Validation",id:"validation",level:2},{value:"User handler",id:"user-handler",level:2}];function p(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"kopflos-request-pipeline",children:"Kopflos request pipeline"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Incoming Request\n  \u2502\n  \u2514\u2500\u25b6 Kopflos handler\n             \u2502\n   4**/5** \u25c0\u2500\u2534\u2500\u25b6 Resource Shape Lookup\n                   \u2502\n         4**/5** \u25c0\u2500\u2534\u2500\u25b6 Resource Loader Lookup\n                         \u2502\n               4**/5** \u25c0\u2500\u2534\u2500\u25b6 Load Resource\n                               \u2502\n                         4** \u25c0\u2500\u2534\u2500\u25b6 Authorization\n                                     \u2502\n                               400 \u25c0\u2500\u2534\u2500\u25b6 Validation\n                                           \u2502\n                                 4**/5** \u25c0\u2500\u2534\u2500\u25b6 (User handler)\n                                                 \u2502\n                                                 \u2514\u2500\u25b6 Reply\n"})}),"\n",(0,s.jsx)(o.h2,{id:"incoming-request",children:"Incoming request"}),"\n",(0,s.jsx)(o.p,{children:"Incoming request is handled by the server library, such as express or fastify and then forwarded to Kopflos."}),"\n",(0,s.jsx)(o.h2,{id:"kopflos-handler",children:"Kopflos handler"}),"\n",(0,s.jsx)(o.p,{children:"Kopflos handler is the main entry point for all incoming requests. It is responsible for orchestrating the request pipeline."}),"\n",(0,s.jsx)(o.h2,{id:"resource-shape-lookup",children:"Resource Shape Lookup"}),"\n",(0,s.jsxs)(o.p,{children:["Resource Shape Lookup executes SPARQL against the ",(0,s.jsx)(o.code,{children:"default"})," query endpoint to find the shape targeting the requested resource."]}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["See also: ",(0,s.jsx)(o.a,{href:"/docs/apis/kopflos/how-to/resource-shape",children:"How to Select which resources should be served by the API"})]})}),"\n",(0,s.jsx)(o.h2,{id:"resource-loader-lookup--load-resource",children:"Resource Loader Lookup + Load Resource"}),"\n",(0,s.jsxs)(o.p,{children:["When the Resource Shape is found, a resource loader is selected based from ",(0,s.jsx)(o.code,{children:"kopflos:resourceLoader"})," property, going bottom-up from the Resource/Property Shape to the share ",(0,s.jsx)(o.code,{children:"kopflos:Config"})," resource."]}),"\n",(0,s.jsx)(o.p,{children:"It is used to load the requested resource's Core Representation."}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["The Core Representation are the triples returned by the resource loader. Typically, that would be the result of a SPARQL ",(0,s.jsx)(o.code,{children:"DESCRIBE"}),' query or contents of resource\'s "own graph".']})}),"\n",(0,s.jsx)(o.admonition,{type:"warning",children:(0,s.jsx)(o.p,{children:"By default, a loader which returns the resource's own graph is used."})}),"\n",(0,s.jsx)(o.h2,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsx)(o.p,{children:"Not implemented yet."}),"\n",(0,s.jsx)(o.h2,{id:"validation",children:"Validation"}),"\n",(0,s.jsx)(o.p,{children:"Not implemented yet."}),"\n",(0,s.jsx)(o.h2,{id:"user-handler",children:"User handler"}),"\n",(0,s.jsx)(o.p,{children:"Finally, the handler is executed. If no handler is defined, and the request method is a GET, the resource's Core Representation is returned."}),"\n",(0,s.jsx)(o.p,{children:"The result of the handler is forwarded back to the server library to be sent as a response."})]})}function c(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>t,x:()=>a});var n=r(6540);const s={},i=n.createContext(s);function t(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);