"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[221],{4759:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(5893),t=r(1151);const o={title:"Operations",sidebar_position:2},s=void 0,i={id:"workflows/explanations/operations",title:"Operations",description:"Obviously you want to convert your own data. To do that, barnard59 provides a bunch of default features in so called operations. To understand how you can add your own steps and pipelines, consult the barnard59 readme.",source:"@site/docs/workflows/explanations/operations.md",sourceDirName:"workflows/explanations",slug:"/workflows/explanations/operations",permalink:"/docs/workflows/explanations/operations",draft:!1,unlisted:!1,editUrl:"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/explanations/operations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Operations",sidebar_position:2},sidebar:"workflowsSidebar",previous:{title:"Pipeline Concepts",permalink:"/docs/workflows/explanations/pipeline"},next:{title:"Simplified Syntax",permalink:"/docs/workflows/explanations/simplified-syntax"}},d={},l=[{value:"Core",id:"core",level:3},{value:"Protocols &amp; Formats",id:"protocols--formats",level:3},{value:"Other",id:"other",level:3}];function c(e){const a={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Obviously you want to convert your own data. To do that, barnard59 provides a bunch of default features in so called operations. To understand how you can add your own steps and pipelines, consult the barnard59 ",(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59/blob/master/README.md",children:"readme"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Technically, operations are just normal JavaScript functions which return ",(0,n.jsx)(a.a,{href:"https://nodejs.org/api/stream.html",children:"streams"})," (sync or async). The special thing about the operations in barnard59 packages is the interface (named arguments) and that they are adapted to the use-case."]}),"\n",(0,n.jsxs)(a.p,{children:["This becomes more clear by having a look at one of the packages, ",(0,n.jsx)(a.code,{children:"barnard59-ftp"}),": From an FTP client library in JavaScript one would expect that we have to create an instance, maybe call connect and then read files. The barnard59 package provides a function that does all this in a single function call. However, there are existing functions that can be integrated with only little or (almost) no additional wrapping. This is for example the case for reading and writing files, where only the ",(0,n.jsx)(a.code,{children:"fs.create*Stream"}),"-functions are used with index arguments."]}),"\n",(0,n.jsxs)(a.p,{children:["While barnard59 is written in JavaScript, nothing stops you of integrating operators in other languages. ",(0,n.jsx)(a.code,{children:"barnard59-tdb"})," for example is wrapping Java based tooling. You can also use existing Node.js wrappers for other libraries which can be found in package registries like ",(0,n.jsx)(a.a,{href:"https://www.npmjs.com/",children:"npm"}),". In the future, we plan to support other languages as well with virtual machine based approaches like ",(0,n.jsx)(a.a,{href:"https://webassembly.org/",children:"WebAssembly"})," and/or ",(0,n.jsx)(a.a,{href:"https://www.graalvm.org/",children:"GraalVM"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["You do not have to write a full barnard59 operator if you just want to manipulate some of the data, for that you can for example use the ",(0,n.jsx)(a.code,{children:"filter()"})," and ",(0,n.jsx)(a.code,{children:"map()"})," functions of the ",(0,n.jsx)(a.code,{children:"barnard59-base"})," package."]}),"\n",(0,n.jsx)(a.p,{children:"The following operators are available."}),"\n",(0,n.jsx)(a.h3,{id:"core",children:"Core"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59",children:"barnard59"}),": The base package of barnard59. This is typically the default dependency for npm and it provides the ",(0,n.jsx)(a.code,{children:"barnard59"})," executable used to run the pipeline on command line."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-core",children:"barnard59-core"}),": The core component to create and run pipelines."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-base",children:"barnard59-base"}),": This package provides basic operations like ",(0,n.jsx)(a.code,{children:"filter"}),"and ",(0,n.jsx)(a.code,{children:"map"}),"for pipelines. Operations that are used all the time."]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"protocols--formats",children:"Protocols & Formats"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-formats",children:"barnard59-formats"}),": Support for various formats like CSV on the Web, JSON-LD and N-Triples."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-sparql",children:"barnard59-sparql"}),": Run SPARQL queries on endpoints that support the SPARQL protocol."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-tdb",children:"barnard59-tdb"}),": SPARQL data processing support using Jena TDB."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-ftp",children:"barnard59-ftp"}),": Interact with data on ftp and sftp servers."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-graph-store",children:"barnard59-graph-store"}),": SPARQL Graph Store protocol support."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-kafka",children:"barnard59-kafka"}),": Apache Kafka support."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-mqtt",children:"barnard59-mqtt"}),": MQTT support."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-px",children:"barnard59-px"}),": Support for the PC-Axis (PX) format (Cube)."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-shell",children:"barnard59-shell"}),": Shell command support."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-http",children:"barnard59-http"}),": Generic HTTP protocol support."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-rdf",children:"barnard59-rdf"}),": RDF support."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-csvw",children:"barnard59-csvw"}),": Simplifies handling CSVW mapping documents."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-tdb",children:"barnard59-tbd"}),": SPARQL data processing support for Barnard59 Linked Data pipelines using Jena TDB"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-protocols",children:"barnard59-protocols"}),": Linked Data pipelines"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"other",children:"Other"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-server",children:"barnard59-server"}),": Linked Data pipeline server to run and develop pipelines."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-ui",children:"barnard59-ui"}),": User interface for creating and maintaining barnard59 based pipelines. Proof of Concept, needs more love."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/zazuko/barnard59-pipeline-validation",children:"barnard59-pipeline-validation"}),": A tool to validate barnard59 pipeline definition files."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>i,a:()=>s});var n=r(7294);const t={},o=n.createContext(t);function s(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);