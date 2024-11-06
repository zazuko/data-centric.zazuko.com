"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[376],{9328:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"workflows/how-to/automate-pipeline","title":"Automate pipelines","description":"There is lots of RDF data published as one can see in the Linked Open Data Cloud Diagram. Unfortunately a lot of this data was a one-time effort by a research project or an individual and is not kept up to date. One of the design goals of barnard59 is to simplify automation so RDF data can be kept up to date with little to no effort, at least as long as the data source stays stable.","source":"@site/docs/workflows/how-to/automate-pipeline.md","sourceDirName":"workflows/how-to","slug":"/workflows/how-to/automate-pipeline","permalink":"/docs/workflows/how-to/automate-pipeline","draft":false,"unlisted":false,"editUrl":"https://github.com/zazuko/data-centric.zazuko.com/tree/main/docs/workflows/how-to/automate-pipeline.md","tags":[],"version":"current","frontMatter":{},"sidebar":"workflowsSidebar","previous":{"title":"Implement steps","permalink":"/docs/workflows/how-to/implement-steps"},"next":{"title":"Extend barnard59 CLI","permalink":"/docs/workflows/how-to/extend-banard59-cli"}}');var o=i(4848),a=i(8453);const r={},s="Automate pipelines",l={},d=[{value:"Basics &amp; Prerequisite",id:"basics--prerequisite",level:2},{value:"Dockerize the pipeline",id:"dockerize-the-pipeline",level:2},{value:"Run the pipeline within a CI/CD environment",id:"run-the-pipeline-within-a-cicd-environment",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"automate-pipelines",children:"Automate pipelines"})}),"\n",(0,o.jsxs)(t.p,{children:["There is lots of RDF data published as one can see in the ",(0,o.jsx)(t.a,{href:"https://lod-cloud.net/",children:"Linked Open Data Cloud Diagram"}),". Unfortunately a lot of this data was a one-time effort by a research project or an individual and is not kept up to date. One of the design goals of barnard59 is to simplify automation so RDF data can be kept up to date with little to no effort, at least as long as the data source stays stable."]}),"\n",(0,o.jsxs)(t.p,{children:["Culture-wise it is similar to the ",(0,o.jsx)(t.a,{href:"https://en.m.wikipedia.org/wiki/DevOps",children:"DevOps"})," concept in programming, we simply apply some of the principles for data pipelines and use CI/CD tools for automating delivery of RDF data."]}),"\n",(0,o.jsx)(t.h2,{id:"basics--prerequisite",children:"Basics & Prerequisite"}),"\n",(0,o.jsxs)(t.p,{children:["Like code, we maintain the pipeline within a version control system like Git. This makes it easy to try out things by working in branches & you will get a full history of what you do in case you break something at one point. We usually do that in public GitHub repositories or from private data in private GitLab instances of our customers. So before you go any further, do a ",(0,o.jsx)(t.code,{children:"git init"})," and add whatever you did so far."]}),"\n",(0,o.jsxs)(t.p,{children:["To be able to automate something we typically start working on our workstation. We continue the work we did in the ",(0,o.jsx)(t.a,{href:"/docs/workflows/tutorial/first-pipeline",children:"Primer"}),". Running the pipeline locally is a good start as it facilitates developing and debugging in case something goes wrong. If you have a really large dataset it usually makes sense to work on a smaller version of the data, this makes it easier to verify and extend the mapping as you go."]}),"\n",(0,o.jsx)(t.p,{children:"Most likely you will read the source data from a local directory on your workstation so we do not have an overhead of downloading the data from an external source each time we run the pipeline. You can do that by adding steps that reads from the local filesystem and write the result to a file."}),"\n",(0,o.jsxs)(t.p,{children:["To run the pipeline in an automated way we usually fetch the data from a data source as a first step. Talk to whoever provides the data and see how they or you can automate delivery of the input data. This could be anything that can be accessed in the barnard59 pipelines, we worked with ",(0,o.jsx)(t.a,{href:"https://github.com/zazuko/barnard59-ftp/",children:"ftp, sftp"}),", WebDAV and simple ",(0,o.jsx)(t.a,{href:"https://github.com/zazuko/barnard59-http",children:"http"})," resources so far (including plain WebDAV resources and S3 buckets)."]}),"\n",(0,o.jsxs)(t.p,{children:["If you can't find a source for your data you might also consider using a generic cloud-sync tool like ",(0,o.jsx)(t.a,{href:"https://github.com/zazuko/barnard59-ftp/",children:"rclone"}),", this is what we use for WebDAV when accessing a single HTTP WebDAV resource is not enough. What we do in this case is running ",(0,o.jsx)(t.code,{children:"rclone"})," before we start the pipeline and let it write to the directory we declare as data source in our pipeline."]}),"\n",(0,o.jsxs)(t.p,{children:["Once you have access to the data implement an according step in your pipeline and test it. The output can still go to a file but alternatively you might want to write directly to a SPARQL endpoint using the ",(0,o.jsx)(t.a,{href:"https://github.com/zazuko/barnard59-graph-store",children:"SPARQL Graph Store Protocol"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"To summarize, you will:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Use some form of version control"}),"\n",(0,o.jsx)(t.li,{children:"Have a running pipeline on your local workstation."}),"\n",(0,o.jsx)(t.li,{children:"Be able to fetch data from an external resource so we can run it in a CI/CD environment."}),"\n",(0,o.jsx)(t.li,{children:"Write the result either to a file or to a SPARQL endpoint using the SPARQL Graph Store protocol."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"dockerize-the-pipeline",children:"Dockerize the pipeline"}),"\n",(0,o.jsxs)(t.p,{children:["Once the pipeline is running locally we can prepare to run it in a docker container. This is the first step for running this container in a CI/CD environment later. If you are fluent in Docker you might want to use your own container image. If you don't want to go the extra mile you can use ",(0,o.jsx)(t.a,{href:"https://github.com/zazukoians/docker-node-java-jena",children:"a container we developed"})," for working with barnard59 pipelines. Among others, it provides"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A full Node.js environment, in fact the ",(0,o.jsx)(t.a,{href:"https://github.com/zazukoians/docker-node-java",children:"base of the container"})," is the official ",(0,o.jsx)(t.code,{children:"node"})," image."]}),"\n",(0,o.jsx)(t.li,{children:"We add Java 11 JRE to the image as many of the RDF tooling is using Java and we might need that in the pipeline at some point."}),"\n",(0,o.jsxs)(t.li,{children:["In particular we add the ",(0,o.jsx)(t.a,{href:"https://github.com/zazukoians/docker-node-java-jena",children:"Apache Jena"})," stack, which gives you a file-based ",(0,o.jsx)(t.a,{href:"https://jena.apache.org/documentation/tdb/index.html",children:"TDB"})," implementation & a bunch of nice command-line tooling for working with and validating RDF data."]}),"\n",(0,o.jsxs)(t.li,{children:["A bunch of additional command-line utils like ",(0,o.jsx)(t.a,{href:"https://git-scm.com/",children:"git"}),", ",(0,o.jsx)(t.a,{href:"https://drobilla.net/software/serd",children:"serd"}),", ",(0,o.jsx)(t.a,{href:"http://librdf.org/",children:"rapper"})," and ",(0,o.jsx)(t.a,{href:"https://rclone.org/",children:"rclone"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Make sure you have a running Docker-environment like ",(0,o.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker-Desktop"})," on your system and then run:"]}),"\n",(0,o.jsx)(t.p,{children:"docker pull node-latest"}),"\n",(0,o.jsx)(t.p,{children:"Now you can run an instance on your system:"}),"\n",(0,o.jsx)(t.p,{children:"docker run -ti node-latest /bin/bash"}),"\n",(0,o.jsx)(t.p,{children:"This should give you a promt like this:"}),"\n",(0,o.jsx)(t.p,{children:"root@2b0bc8c3a58a:/rdf#"}),"\n",(0,o.jsxs)(t.p,{children:["Now you will have to get your git repository with the pipeline in there. If you can't access it via web you might also mount a local directory into the container by using ",(0,o.jsx)(t.a,{href:"https://docs.docker.com/storage/bind-mounts/",children:"Docker bind mounts"}),". Once your pipeline code is in there, change your working directory to it."]}),"\n",(0,o.jsx)(t.p,{children:"The process now is the same as when you would work locally, you have to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Run ",(0,o.jsx)(t.code,{children:"npm install"})," to get all the dependencies installed."]}),"\n",(0,o.jsxs)(t.li,{children:["Run ",(0,o.jsx)(t.code,{children:"npm start"})," or whatever run-script you defined."]}),"\n",(0,o.jsx)(t.li,{children:"Sit back and relax."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If everything went right, your pipeline did what it had to do, like writing data in a file in the docker container or post it towards a SPARQL endpoint. Make sure everything looks right & fix if it does not."}),"\n",(0,o.jsx)(t.p,{children:"Now it is time to move to the last step."}),"\n",(0,o.jsx)(t.h2,{id:"run-the-pipeline-within-a-cicd-environment",children:"Run the pipeline within a CI/CD environment"}),"\n",(0,o.jsxs)(t.p,{children:["Now we know that our pipeline not only works on our local workstation but also in a dockerized environment in a generic Linux image. This is all we need to automate the whole process for good. As mentioned before, we use CI/CD principles to automate it. In our example we use a GitLab CI/CD pipeline but barnard59 pipelines are in no way restricted or depending on ",(0,o.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/",children:"GitLab CI"}),". Other CI/CD solutions might work as well or better, just use what you are used to."]}),"\n",(0,o.jsx)(t.p,{children:"In a CI/CD we usually have to"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Put all username & passwords in environment variables. If you committed something into your git directly, start from scratch. You DO NOT want to have anything password related in a version control system."}),"\n",(0,o.jsxs)(t.li,{children:["This means you might have to adjust the barnard59 pipeline to get some parameters from GitLab ",(0,o.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/variables/",children:"environment variables"}),", see the ",(0,o.jsx)(t.a,{href:"https://github.com/zazuko/barnard59/blob/master/README.md#definition-via-command-line-arguments",children:"barnard59 docs"})," about how to do that."]}),"\n",(0,o.jsx)(t.li,{children:"Create some kind of definition about a CI/CD pipeline. In GitLab this is also called pipeline and this CI/CD pipeline will execute our barnard59 pipeline."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In GitLab we need a ",(0,o.jsx)(t.code,{children:".gitlab-ci.yml"})," file in the root directory of your GitLab repository. A minimal configuration for running our pipeline looks like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"image: node:latest\nbefore_script:\n  - npm install\n\nstages:\n  - build\n\npipeline_build:\n  stage: build\n  script:\n    - npm run start\n"})}),"\n",(0,o.jsx)(t.p,{children:"If you have CI/CD enabled on your pipeline GitLab should directly execute a pipeline once you commit this file and push it to the repository. And if everything was well tested before, your pipeline should run through without issues!"}),"\n",(0,o.jsxs)(t.p,{children:["Note that by definition a CI/CD process is completely nuked at the end so if you wrote data to a file, it will be gone unless you tell your configuration to make this file available. In GitLab this is called ",(0,o.jsx)(t.a,{href:"https://docs.gitlab.com/ce/ci/yaml/README.html#artifacts",children:"artifacts"}),", an extended version of the configuration that makes the N-Triples available might look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"image: node:latest\nbefore_script:\n  - npm install\n\nstages:\n  - build\n\npipeline_build:\n  stage: build\n  script:\n    - npm run start\n  artifacts:\n    paths:\n      - target/everything.nt\n    expire_in: 1 day\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This would expect a N-Triples file in ",(0,o.jsx)(t.code,{children:"target/everything.nt"})," and make this available for download for 1 day."]}),"\n",(0,o.jsxs)(t.p,{children:["And with that we end this tutorial. You can use this as a base and build more powerful and complex pipelines. If you want to automate your pipeline in GitLab you have multiple options, one of them is creating a cron-job like schedule that will execute your pipeline, see the ",(0,o.jsx)(t.a,{href:"https://docs.gitlab.com/ce/user/project/pipelines/schedules.html",children:"GitLab documentation"})," for more information."]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var n=i(6540);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);