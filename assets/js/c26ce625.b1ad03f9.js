"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},a="Writing valid pipelines",o={unversionedId:"workflows/explanations/pipeline-validity",id:"workflows/explanations/pipeline-validity",title:"Writing valid pipelines",description:"Step Lists",source:"@site/docs/workflows/explanations/pipeline-validity.md",sourceDirName:"workflows/explanations",slug:"/workflows/explanations/pipeline-validity",permalink:"/docs/workflows/explanations/pipeline-validity",draft:!1,editUrl:"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/explanations/pipeline-validity.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"workflowsSidebar",previous:{title:"Simplified Syntax",permalink:"/docs/workflows/explanations/simplified-syntax"},next:{title:"barnard59 CLI",permalink:"/docs/workflows/reference/cli/"}},p={},s=[{value:"Step Lists",id:"step-lists",level:2},{value:"Pipeline",id:"pipeline",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-valid-pipelines"},"Writing valid pipelines"),(0,r.kt)("h2",{id:"step-lists"},"Step Lists"),(0,r.kt)("p",null,"Pipelines are just a chain of streams.\nThat makes it possible to check if the types of the streams are suitable to combine them."),(0,r.kt)("p",null,"The following streams can be connected:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Readable")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Writable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReadableObjectMode")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"WritableObjectMode"))),(0,r.kt)("p",null,"Every combination not in the list must throw an error."),(0,r.kt)("h3",{id:"pipeline"},"Pipeline"),(0,r.kt)("p",null,"A pipeline itself is also represented as a stream.\nThat requires to have ",(0,r.kt)("inlineCode",{parentName:"p"},"Readable")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Writable")," interface depending on the first and last stream of the step list."),(0,r.kt)("p",null,"The pipeline should have the same type if the first stream in the step list has one of the following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Writable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WritableObjectMode"))),(0,r.kt)("p",null,"The pipeline should have the same type if the last stream in the step list has one of the following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Readable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReadableObjectMode"))))}u.isMDXComponent=!0}}]);