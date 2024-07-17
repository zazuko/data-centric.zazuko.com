"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[480],{6911:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=n(5893),s=n(1151);const l={sidebar_position:4},o="Writing valid pipelines",r={id:"workflows/explanations/pipeline-validity",title:"Writing valid pipelines",description:"Step Lists",source:"@site/docs/workflows/explanations/pipeline-validity.md",sourceDirName:"workflows/explanations",slug:"/workflows/explanations/pipeline-validity",permalink:"/docs/workflows/explanations/pipeline-validity",draft:!1,unlisted:!1,editUrl:"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/explanations/pipeline-validity.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"workflowsSidebar",previous:{title:"Simplified Syntax",permalink:"/docs/workflows/explanations/simplified-syntax"},next:{title:"barnard59 CLI",permalink:"/docs/workflows/reference/cli/"}},a={},c=[{value:"Step Lists",id:"step-lists",level:2},{value:"Pipeline",id:"pipeline",level:3}];function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"writing-valid-pipelines",children:"Writing valid pipelines"}),"\n",(0,t.jsx)(i.h2,{id:"step-lists",children:"Step Lists"}),"\n",(0,t.jsx)(i.p,{children:"Pipelines are just a chain of streams.\nThat makes it possible to check if the types of the streams are suitable to combine them."}),"\n",(0,t.jsx)(i.p,{children:"The following streams can be connected:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Readable"})," -> ",(0,t.jsx)(i.code,{children:"Writable"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"ReadableObjectMode"})," -> ",(0,t.jsx)(i.code,{children:"WritableObjectMode"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Every combination not in the list must throw an error."}),"\n",(0,t.jsx)(i.h3,{id:"pipeline",children:"Pipeline"}),"\n",(0,t.jsxs)(i.p,{children:["A pipeline itself is also represented as a stream.\nThat requires to have ",(0,t.jsx)(i.code,{children:"Readable"})," or ",(0,t.jsx)(i.code,{children:"Writable"})," interface depending on the first and last stream of the step list."]}),"\n",(0,t.jsx)(i.p,{children:"The pipeline should have the same type if the first stream in the step list has one of the following types:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"Writable"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"WritableObjectMode"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The pipeline should have the same type if the last stream in the step list has one of the following types:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"Readable"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"ReadableObjectMode"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var t=n(7294);const s={},l=t.createContext(s);function o(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);