"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[226],{8783:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(5893),l=a(1151);const r={},o="barnard59 CLI",s={id:"workflows/reference/cli/index",title:"barnard59 CLI",description:"Main options",source:"@site/docs/workflows/reference/cli/index.md",sourceDirName:"workflows/reference/cli",slug:"/workflows/reference/cli/",permalink:"/docs/workflows/reference/cli/",draft:!1,unlisted:!1,editUrl:"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/reference/cli/index.md",tags:[],version:"current",frontMatter:{},sidebar:"workflowsSidebar",previous:{title:"Writing valid pipelines",permalink:"/docs/workflows/explanations/pipeline-validity"},next:{title:"graph-store",permalink:"/docs/workflows/reference/cli/graph-store"}},t={},c=[{value:"Main options",id:"main-options",level:2},{value:"--variable",id:"--variable",level:3},{value:"--variable-all",id:"--variable-all",level:3},{value:"--verbose",id:"--verbose",level:3},{value:"run command",id:"run-command",level:2},{value:"filename",id:"filename",level:3},{value:"--pipeline",id:"--pipeline",level:3},{value:"Package-specific commands",id:"package-specific-commands",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"barnard59-cli",children:"barnard59 CLI"}),"\n",(0,i.jsx)(n.h2,{id:"main-options",children:"Main options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'> barnard59 --help    \n\nUsage: barnard59 [options] [command]\n\nOptions:\n  --variable <name=value>                 variable key value pairs (default: {})\n  --variable-all                          Import all environment variables\n  -v, --verbose                           enable diagnostic console output\n  --enable-buffer-monitor                 enable histogram of buffer usage\n  --otel-debug <level>                    Enable OpenTelemetry console diagnostic output (choices: "NONE", "ERROR", "WARN", "INFO", "DEBUG", "VERBOSE", "ALL", default: "ERROR")\n  --otel-metrics-exporter <exporter>      OpenTelemetry Metrics exporter to use (choices: "otlp", "none", default: "none")\n  --otel-metrics-interval <milliseconds>  Export Metrics interval (default: 10000)\n  --otel-traces-exporter <exporter>       OpenTelemetry Traces exporter to use (choices: "otlp", "none", default: "none")\n  -h, --help                              display help for command\n\nCommands:\n  run [options] <filename>\n  help [command]                          display help for command\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The options ",(0,i.jsx)(n.code,{children:"--variable"}),", ",(0,i.jsx)(n.code,{children:"--variable-all"})," and ",(0,i.jsx)(n.code,{children:"--verbose"})," are also available on every sub-command"]})}),"\n",(0,i.jsx)(n.h3,{id:"--variable",children:"--variable"}),"\n",(0,i.jsx)(n.p,{children:"Sets the value of a single pipeline variable"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"barnard59 --variable foo=bar run pipeline.ttl\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The above will set the value ",(0,i.jsx)(n.code,{children:"bar"})," to pipeline variable ",(0,i.jsx)(n.code,{children:"foo"})]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"TODO: Create a page about pipeline variables"})}),"\n",(0,i.jsx)(n.h3,{id:"--variable-all",children:"--variable-all"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes it's tedious to map multiple variables from the environment on by one. ",(0,i.jsx)(n.code,{children:"--variable-all"})," maps all environment\nvariables automatically."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"FOO=bar BAR=baz barnard59 --variable-all run pipeline.ttl\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The above will set the variables ",(0,i.jsx)(n.code,{children:"FOO"})," and ",(0,i.jsx)(n.code,{children:"BAR"})," alongside any other environment variable from the current shell."]}),"\n",(0,i.jsx)(n.h3,{id:"--verbose",children:"--verbose"}),"\n",(0,i.jsxs)(n.p,{children:["Set once, increases the logging level to ",(0,i.jsx)(n.code,{children:"WARN"}),". Set twice or thrice, increases logging level further to ",(0,i.jsx)(n.code,{children:"DEBUG"})," and ",(0,i.jsx)(n.code,{children:"TRACE"}),"\nrespectively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"barnard59 -vv run pipeline.ttl\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-command",children:"run command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'barnard59 run --help\n\nUsage: barnard59 run [options] <filename>\n\nOptions:\n  --output [filename]      output file (default: "-")\n  --pipeline [iri]         IRI of the pipeline description\n  --variable <name=value>  variable key value pairs (default: {})\n  --variable-all           Import all environment variables\n  -v, --verbose            enable diagnostic console output\n  -h, --help               display help for command\n'})}),"\n",(0,i.jsx)(n.h3,{id:"filename",children:"filename"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Required argument"})}),"\n",(0,i.jsx)(n.p,{children:"Path to the pipeline definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"barnard59 run pipeline/main.ttl\n"})}),"\n",(0,i.jsx)(n.h3,{id:"--pipeline",children:"--pipeline"}),"\n",(0,i.jsx)(n.p,{children:"If the pipeline definition contains multiple pipelines or sub-pipelines, it is necessary to provide the URL of the root\npipeline to run"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"barnard59 run pipeline/main.ttl --pipeline http://example.com/pipeline/main\n"})}),"\n",(0,i.jsx)(n.h2,{id:"package-specific-commands",children:"Package-specific commands"}),"\n",(0,i.jsxs)(n.p,{children:["When add to a project, certain ",(0,i.jsx)(n.code,{children:"barnard59"})," packages install additional commands which run canned pipelines those packages provide."]}),"\n",(0,i.jsxs)(n.p,{children:["See the sub-pages for their details and ",(0,i.jsx)(n.a,{href:"../../how-to/extend-banard59-cli",children:"How-To: Extend barnard59 CLI"})," for instructions\non adding dynamic pipeline commands to your barnard59 package."]})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>o});var i=a(7294);const l={},r=i.createContext(l);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);