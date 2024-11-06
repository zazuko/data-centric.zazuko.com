"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[4815],{2962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"apis/kopflos/reference/modules/vite","title":"@kopflos-cms/vite","description":"Plugin configuration","source":"@site/docs/apis/kopflos/reference/modules/vite.md","sourceDirName":"apis/kopflos/reference/modules","slug":"/apis/kopflos/reference/modules/vite","permalink":"/docs/apis/kopflos/reference/modules/vite","draft":false,"unlisted":false,"editUrl":"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/apis/kopflos/reference/modules/vite.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apisSidebar","previous":{"title":"@kopflos-cms/serve-file","permalink":"/docs/apis/kopflos/reference/modules/serve-file"},"next":{"title":"Command Line Interface","permalink":"/docs/apis/kopflos/reference/cli"}}');var s=t(4848),r=t(8453);const i={},l="@kopflos-cms/vite",a={},c=[{value:"Plugin configuration",id:"plugin-configuration",level:2},{value:"Template handler",id:"template-handler",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kopflos-cmsvite",children:"@kopflos-cms/vite"})}),"\n",(0,s.jsx)(n.h2,{id:"plugin-configuration",children:"Plugin configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'export default {\n  plugins: {\n    "@kopflos-cms/vite": {\n      root: "ui",                  // required\n      entrypoints: ["ui/*.html"]   // required for build\n      configPath,                  // optional path to addtional vite config\n      outDir,                      // optional, default: "dist"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"template-handler",children:"Template handler"}),"\n",(0,s.jsxs)(n.p,{children:["The handler transforms the HTML template so that JavaScript code is served by vite. It must be\npreceded by another handler that serves the HTML, such as ",(0,s.jsx)(n.a,{href:"/docs/apis/kopflos/reference/modules/serve-file",children:"@kopflos-cms/serve-file"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-turtle",children:'PREFIX kl: <https://kopflos.described.at/>\n\n[\n  kl:handler\n    (\n      [\n        a code:EcmaScriptModule ;\n        code:link <node:@kopflos-cms/serve-file#default> ;\n        code:arguments ( "templates/person.html" ) ;\n      ]\n      [\n        a code:EcmaScriptModule ;\n        code:link <node:@kopflos-cms/vite/template.js#transform> ;\n      ]\n    )\n] .\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);