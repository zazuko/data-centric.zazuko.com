"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[3607],{2938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"workflows/how-to/fail-pipeline-gently","title":"Fail pipeline gracefully","description":"The easiest way to stop a pipeline is to throw an exception. However, this will stop the pipeline immediately.","source":"@site/docs/workflows/how-to/fail-pipeline-gently.md","sourceDirName":"workflows/how-to","slug":"/workflows/how-to/fail-pipeline-gently","permalink":"/docs/workflows/how-to/fail-pipeline-gently","draft":false,"unlisted":false,"editUrl":"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/how-to/fail-pipeline-gently.md","tags":[],"version":"current","frontMatter":{},"sidebar":"workflowsSidebar","previous":{"title":"Extend barnard59 CLI","permalink":"/docs/workflows/how-to/extend-banard59-cli"},"next":{"title":"Remove meta CSVW triples","permalink":"/docs/workflows/how-to/remove-meta-csvw-triples"}}');var i=t(4848),r=t(8453);const l={},s="Fail pipeline gracefully",a={},c=[{value:"<code>this.error()</code> to the rescue",id:"thiserror-to-the-rescue",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"fail-pipeline-gracefully",children:"Fail pipeline gracefully"})}),"\n",(0,i.jsx)(n.p,{children:"The easiest way to stop a pipeline is to throw an exception. However, this will stop the pipeline immediately.\nConsider the simple step implementation below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default function streamFailingRandomly() {\n  return async function * (source) {\n    let total = 0;\n\n    for await (const chunk of source) {\n      if (Math.random() > 0.5) {\n        throw new Error('Random error');\n      } else {\n        total += chunk.length;\n        yield chunk;\n      }\n    }\n   \n    this.logger.info(`Total processed: ${total}`);\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"When the error is thrown, the pipeline will stop immediately. No further chunks will be processed and the code following\nthe async loop will not be reached.\nThis is quite clear in generator-style implementations but can be a surprise when implementing steps using low-level streams.\nIn the latter case, the flush callback will not be called."}),"\n",(0,i.jsx)(n.p,{children:"What's more, an exception thrown in one step affects other steps in the pipeline, preventing their respective flush\ncallbacks from being called."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"try..catch"})," block will not help here. When an error is thrown inside the async generator, it will be caught by the\npipeline and the processing is stopped immediately."]})}),"\n",(0,i.jsxs)(n.h2,{id:"thiserror-to-the-rescue",children:[(0,i.jsx)(n.code,{children:"this.error()"})," to the rescue"]}),"\n",(0,i.jsxs)(n.p,{children:["The solution is to use the ",(0,i.jsx)(n.code,{children:"this.error()"})," method. It will instruct barnard that an error occurred but will not stop\nprocessing. It is the responsibility of the step implementor how to handle the rest of the stream."]}),"\n",(0,i.jsxs)(n.p,{children:["For the example above, the implementation could be changed to break the loop and call ",(0,i.jsx)(n.code,{children:"this.error"})," instead of throwing."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default function streamFailingRandomly() {\n  return async function * (source) {\n    let total = 0;\n    \n    for await (const chunk of source) {\n      if (Math.random() > 0.5) {\n        this.error(new Error('Random error'));\n        break;\n      } else {\n        total += chunk.length;\n        yield chunk;\n      }\n    }\n\n    this.logger.info(`Total processed: ${total}`);\n  }.bind(this)\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"this.error"})," is called, even when the implementor breaks the loop, the pipeline will still continue to the end.\nAll chunks which were already processed will be passed to the subsequent steps and the pipeline itself will not break.\nThis is important for example when writing to a HTTP endpoint. Unlike when throwing an exception, the HTTP request will\nbe sent, albeit possibly incomplete."]})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var o=t(6540);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);