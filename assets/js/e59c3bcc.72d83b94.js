"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[3004],{9467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"apis/kopflos/how-to/seed-database","title":"Seed database on app start","description":"When you start your app, you might want to seed the database with some initial data. This can be done","source":"@site/docs/apis/kopflos/how-to/seed-database.md","sourceDirName":"apis/kopflos/how-to","slug":"/apis/kopflos/how-to/seed-database","permalink":"/docs/apis/kopflos/how-to/seed-database","draft":false,"unlisted":false,"editUrl":"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/apis/kopflos/how-to/seed-database.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apisSidebar","previous":{"title":"Select which resources should be served by the API","permalink":"/docs/apis/kopflos/how-to/resource-shape"},"next":{"title":"Render Web Components on the server","permalink":"/docs/apis/kopflos/how-to/server-side-rendering"}}');var o=n(4848),i=n(8453);const r={},a="Seed database on app start",d={},c=[{value:"Plugin configuration",id:"plugin-configuration",level:2},{value:"Seed files",id:"seed-files",level:2},{value:"Concrete example",id:"concrete-example",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"seed-database-on-app-start",children:"Seed database on app start"})}),"\n",(0,o.jsxs)(t.p,{children:["When you start your app, you might want to seed the database with some initial data. This can be done\nby creating seed file(s) and configuring the plugin ",(0,o.jsx)(t.code,{children:"@kopflos-cms/plugin-deploy-resources"})," to insert\nthem into the database when the app starts."]}),"\n",(0,o.jsx)(t.h2,{id:"plugin-configuration",children:"Plugin configuration"}),"\n",(0,o.jsxs)(t.p,{children:["In your config, add the plugin with an array of ",(0,o.jsx)(t.code,{children:"paths"})," relative to the working directory."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "baseIri": "https://my-api.tech",\n  "plugins": {\n    "@kopflos-cms/plugin-deploy-resources": {\n      "paths": ["resources"]\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"seed-files",children:"Seed files"}),"\n",(0,o.jsxs)(t.p,{children:["The contents of the ",(0,o.jsx)(t.code,{children:"resources"})," directory can be any RDF files. You can use relative URLs without\nan explicit base URL. The plugin will parse the files using the app's configured ",(0,o.jsx)(t.code,{children:"baseIri"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Documents in formats which do not support graph, such as Turtle, will be inserted into individual\nnamed graphs."}),"\n",(0,o.jsx)(t.p,{children:"Dataset documents will insert their contents into graphs as they appear in the source. Default graph\nwill be inserted into the named graph, like in the case of non-dataset formats."}),"\n",(0,o.jsx)(t.p,{children:"The extension of the files are excluded from the resulting graph names."}),"\n",(0,o.jsxs)(t.p,{children:["A special name ",(0,o.jsx)(t.code,{children:"index.[ext]"})," is handled similarly to how ",(0,o.jsx)(t.code,{children:"index.html"})," is handled in a web server. For\nexample, contents of ",(0,o.jsx)(t.code,{children:"/foo/bar/index.ttl"})," will be inserted into the graph ",(0,o.jsx)(t.code,{children:"https://my-api.tech/foo/bar"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"concrete-example",children:"Concrete example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"resources/\n\u251c\u2500\u2500 person/\n\u2502   \u2514\u2500\u2500 john-doe.ttl\n\u251c\u2500\u2500 api.ttl\n\u2514\u2500\u2500 schema.trig\n"})}),"\n",(0,o.jsx)(t.p,{children:"The above will insert graphs:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"source"}),(0,o.jsx)(t.th,{children:"graph(s)"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"person/john-doe.ttl"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"https://my-api.tech/person/john-doe"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"api.ttl"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"https://my-api.tech/api"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"schema.trig"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"https://my-api.tech/schema"})," and/or explicit named graphs"]})]})]})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);