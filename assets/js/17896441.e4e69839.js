"use strict";(self.webpackChunkdata_centric_zazuko_com=self.webpackChunkdata_centric_zazuko_com||[]).push([[918],{5559:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var s=n(7294),a=n(833),i=n(902),o=n(5893);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(512),m=n(7524),h=n(5999),b=n(3692);function x(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,o.jsxs)(b.Z,{className:(0,u.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}function p(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(x,{...t,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(x,{...n,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=c();return(0,o.jsx)(p,{previous:e.previous,next:e.next})}var g=n(2263),j=n(143),f=n(5281),_=n(373),N=n(4477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){const t=C[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(b.Z,{to:n,onClick:s,children:(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function Z(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.Z)(),{pluginId:a}=(0,j.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,_.J)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,j.Jo)(a),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.Z)(t,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(k,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(L,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,N.E)();return n.banner?(0,o.jsx)(Z,{className:t,versionMetadata:n}):null}function M(e){let{className:t}=e;const n=(0,N.E)();return n.badge?(0,o.jsx)("span",{className:(0,u.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const I={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function w(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,o.jsxs)(b.Z,{href:t,title:a,className:(0,u.Z)(I.tag,s?I.tagWithCount:I.tagRegular),children:[n,s&&(0,o.jsx)("span",{children:s})]})}const B={tags:"tags_jXut",tag:"tag_QGVx"};function V(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.Z)(B.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:B.tag,children:(0,o.jsx)(w,{...e})},e.permalink)))})]})}var H=n(8268);function y(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(t||n||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.Z)("row margin-top--sm",f.k.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(V,{tags:a})})}),l&&(0,o.jsx)(H.Z,{className:(0,u.Z)("margin-top--sm",f.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var E=n(6043),A=n(3743);const P={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function z(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",P.tocCollapsibleButton,!t&&P.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const F={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function R(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,E.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.Z)(F.tocCollapsible,!i&&F.tocCollapsibleExpanded,n),children:[(0,o.jsx)(z,{collapsed:i,onClick:l}),(0,o.jsx)(E.z,{lazy:!0,className:F.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(A.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const S={tocMobile:"tocMobile_ITEo"};function U(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(R,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,S.tocMobile)})}var D=n(9407);function O(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(D.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var G=n(2503),W=n(5896);function J(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(G.Z,{as:"h1",children:n})}),(0,o.jsx)(W.Z,{children:t})]})}var Q=n(3438),X=n(8596),Y=n(4996);function $(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const q={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function K(){const e=(0,Y.ZP)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(b.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)($,{className:q.breadcrumbHomeIcon})})})}const ee={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function te(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,o.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,o.jsx)(b.Z,{className:a,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:a,children:t})}function ne(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function se(){const e=(0,Q.s1)(),t=(0,X.Ns)();return e?(0,o.jsx)("nav",{className:(0,u.Z)(f.k.docs.docBreadcrumbs,ee.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(K,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(ne,{active:s,index:n,addMicrodata:!!a,children:(0,o.jsx)(te,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var ae=n(2212);const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function oe(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,o.jsx)(U,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(O,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&ie.docItemCol),children:[s&&(0,o.jsx)(ae.Z,{}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:ie.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(se,{}),(0,o.jsx)(M,{}),n.mobile,(0,o.jsx)(J,{children:t}),(0,o.jsx)(y,{})]}),(0,o.jsx)(v,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function le(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.FG,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(oe,{children:(0,o.jsx)(n,{})})]})})}}}]);