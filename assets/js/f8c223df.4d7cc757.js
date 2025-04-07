"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[2165],{8700:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"apis/kopflos/reference/configuration","title":"Configuration","description":"Kopflos can be configured via a configuration file, which can be in various formats and locations. If not provided, it will try various default locations:","source":"@site/docs/apis/kopflos/reference/configuration.md","sourceDirName":"apis/kopflos/reference","slug":"/apis/kopflos/reference/configuration","permalink":"/docs/apis/kopflos/reference/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/apis/kopflos/reference/configuration.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apisSidebar","previous":{"title":"Command Line Interface","permalink":"/docs/apis/kopflos/reference/cli"},"next":{"title":"Glossary","permalink":"/docs/apis/kopflos/reference/glossary"}}');var i=o(4848),a=o(8453);const s={},t="Configuration",l={},c=[{value:"Structure",id:"structure",level:2},{value:"Variables",id:"variables",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,i.jsx)(n.p,{children:"Kopflos can be configured via a configuration file, which can be in various formats and locations. If not provided, it will try various default locations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"kopflos"})," key in ",(0,i.jsx)(n.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".kopflosrc"})," (YAML or JSON)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".kopflosrc.(json|yaml|yml|js|ts|mjs|cjs)"})}),"\n",(0,i.jsxs)(n.li,{children:["any of the above in ",(0,i.jsx)(n.code,{children:".config"})," directory"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"kopflos.config.(js|ts|mjs|cjs)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface KopflosConfig {\n  mode?: 'development' | 'production'\n  // Base IRI for the API and all its resources\n  baseIri: string\n  // SPARQL endpoints. `default` endpoint is required.\n  sparql: {\n    default: string | import('sparql-http-client/StreamClient.js').Options\n    [key: string]: string | import('sparql-http-client/StreamClient.js').Options\n  }\n  // Named graphs which contain the API description.\n  apiGraphs: Array<NamedNode | string>\n  // Base path for resolving `code:link` imports\n  codeBase?: string\n  // Plugin configuration\n  plugins?: Record<string, unknown>\n  // Custom configuration variables\n  variables?: Record<string, unknown>\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsx)(n.p,{children:"Variables can additionally be provided via CLI options, and they will override the configuration\nfile."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "variables": {\n    "foo": "foo",\n    "bar": "bar"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"kopflos --variable bar=baz\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above will result in the following variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "foo": "foo",\n  "bar": "baz"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"They can be accessed from the KopflosEnvironment. In handler, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import {Handler} from 'kopflos'\n\nexport default (): Handler => ({env}) => {\n  const {foo, bar} = env.kopflos.config.variables\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"They can also be used to parametrise handlers"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-turtle",children:'<#WebPage>\n  a kl:ResourceShape ;\n  kl:handler\n    [\n      a kl:Handler ;\n      kl:method "GET" ;\n      code:implementedBy\n        [\n          a code:EcmaScriptModule ;\n          code:link <file:handler/foobar.js#default> ;\n          code:arguments\n            (\n              "${foo}"^^code:EcmaScriptTemplateLiteral\n              "${bar}"^^code:EcmaScriptTemplateLiteral\n            ) ;\n        ] ;\n    ] ;\n.\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>t});var r=o(6540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);