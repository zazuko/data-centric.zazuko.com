"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[495],{1436:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=n(5893),r=n(1151);const a={displayed_sidebar:"workflowsSidebar",title:"Introduction to RDF Workflows",sidebar_label:"Introduction",sidebar_position:0},o=void 0,s={id:"workflows/workflows",title:"Introduction to RDF Workflows",description:"barnard59 primer",source:"@site/docs/workflows/workflows.md",sourceDirName:"workflows",slug:"/workflows/",permalink:"/docs/workflows/",draft:!1,unlisted:!1,editUrl:"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/workflows.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{displayed_sidebar:"workflowsSidebar",title:"Introduction to RDF Workflows",sidebar_label:"Introduction",sidebar_position:0},sidebar:"workflowsSidebar",next:{title:"Getting started",permalink:"/docs/workflows/tutorial/first-pipeline"}},d={},l=[{value:"barnard59 primer",id:"barnard59-primer",level:2},{value:"Modular system",id:"modular-system",level:2},{value:"Further resources",id:"further-resources",level:2}];function c(e){const i={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"barnard59-primer",children:"barnard59 primer"}),"\n",(0,t.jsxs)(i.p,{children:["barnard59 is the project name for our Linked Data pipelining system. ",(0,t.jsx)(i.code,{children:"barnard59"})," is a toolkit to automate ",(0,t.jsx)(i.em,{children:"extract"}),", ",(0,t.jsx)(i.em,{children:"transform"})," and ",(0,t.jsx)(i.em,{children:"load"})," (ETL) like tasks. Its main focus is on creating ",(0,t.jsx)(i.a,{href:"http://linked-data-training.zazuko.com/",children:"RDF & Linked Data"}),", a standardized graph data format by the W3C. ",(0,t.jsx)(i.code,{children:"barnard59"})," has a clear focus on creating RDF out of non-RDF data sources."]}),"\n",(0,t.jsx)(i.p,{children:"barnard59 can be used to:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"download the source the data"}),"\n",(0,t.jsx)(i.li,{children:"validate it"}),"\n",(0,t.jsx)(i.li,{children:"transform it to linked data"}),"\n",(0,t.jsx)(i.li,{children:"publish it"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"modular-system",children:"Modular system"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"https://github.com/zazuko/barnard59",children:"main library"})," provides basic functionality for running a ",(0,t.jsx)(i.a,{href:"https://github.com/zazuko/barnard59#executing-pipeline",children:"pipeline"}),". Additional functionalities are implemented in so-called operations. These operations can be integrated into a pipeline as a step. Between the steps, streams are used to send messages from the output of one step to the input of the next step. This is very similar to the ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Pipeline_(Unix)",children:"pipeline concept"})," of Unix-like operating systems."]}),"\n",(0,t.jsxs)(i.p,{children:["A properly designed pipeline can handle arbitrarily large datasets. However, some operations might break the streaming approach. They work on the complete dataset at once, which may be limiting in some ways (memory most probably). One example is the ",(0,t.jsx)(i.a,{href:"https://github.com/zazuko/barnard59-tdb",children:"barnard59-tdb"})," operator, which provides a file-based SPARQL endpoint for doing complex graph manipulations in a pipeline."]}),"\n",(0,t.jsxs)(i.p,{children:["barnard59 is written in JavaScript and is using the ",(0,t.jsx)(i.a,{href:"https://nodejs.org/",children:"Node.js"})," for execution. A typical pipeline is using standard functionality provided by barnard59, and additional steps appropriate for the dataset. These additional steps can be defined using plain JavaScript code. Using inline code allows to easily integrate advanced data manipulations. It gives user the flexibility without imposing additional constraints. The ability to integrate your own code to a pipeline definition is the main differentiator to existing solutions. It is also one of the reasons why barnard59 pipelines are so powerful."]}),"\n",(0,t.jsxs)(i.p,{children:["barnard59 pipelines are defined as RDF. The package ",(0,t.jsx)(i.code,{children:"barnard59"})," provides the core functionality to interpret and execute them. For more details on executing pipelines, go to ",(0,t.jsx)(i.a,{href:"https://github.com/zazuko/barnard59/blob/master/README.md",children:"barnard59 readme"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"further-resources",children:"Further resources"}),"\n",(0,t.jsxs)(i.p,{children:["You can learn more about ",(0,t.jsx)(i.code,{children:"barnard59"})," universe here:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/zazuko/barnard59/wiki/Getting-started",children:"Getting started"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/workflows/explanations/pipeline",children:"Pipeline concept"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/zazuko/barnard59/wiki/Validating-pipelines",children:"Pipeline validation"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"explanations/operations",children:"Operations"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"how-to/automate-pipeline",children:"Docker & GitLab CI"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>o});var t=n(7294);const r={},a=t.createContext(r);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);