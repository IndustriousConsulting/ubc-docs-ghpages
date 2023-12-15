"use strict";(self.webpackChunkubc_services=self.webpackChunkubc_services||[]).push([[7686],{3612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(5893),o=t(1151);const s={},a="IDOC integration (UBC.idoc)",c={id:"IDOC/documentation",title:"IDOC integration (UBC.idoc)",description:"Intro",source:"@site/docs/IDOC/documentation.md",sourceDirName:"IDOC",slug:"/IDOC/documentation",permalink:"/IDOC/documentation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ubcSidebar",previous:{title:"UBC Business objects (UBC.bo)",permalink:"/BO/documentation"},next:{title:"Workflows (UBC.flow)",permalink:"/FLOW/documentation"}},r={},d=[{value:"Intro",id:"intro",level:2},{value:"Customizing",id:"customizing",level:2},{value:"Development",id:"development",level:2},{value:"IDOC type generation",id:"idoc-type-generation",level:3},{value:"Handler",id:"handler",level:3},{value:"Outbound",id:"outbound",level:4},{value:"Standard implementation <code>/UBC/CL_BO_IDOC</code>",id:"standard-implementation-ubccl_bo_idoc",level:5},{value:"Inbound",id:"inbound",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"idoc-integration-ubcidoc",children:"IDOC integration (UBC.idoc)"}),"\n",(0,i.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,i.jsxs)(n.p,{children:["UBC - Unified Backend Connector comes with a component for elegant IDOC processing using UBC technique.\nThis allows to connect IDOCs with any process configured in UBC. ",(0,i.jsx)(n.strong,{children:"UBC.idoc"})," is the connection between SAP standard IDOC and the UBC process: started with ",(0,i.jsx)(n.a,{href:"/FLOW/documentation",children:"UBC.flow"})," inlc. message exchange and monitoring within ",(0,i.jsx)(n.a,{href:"/IO/documentation",children:"UBC.io"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"customizing",children:"Customizing"}),"\n",(0,i.jsxs)(n.p,{children:["The IDOC types have to be linked to a specific business object first and this combination message type/IDOC type/extension has to be unique from a business object perspective, as the object implementation is determined by these attributes.\nSee transaction ",(0,i.jsx)(n.code,{children:"/UBC/CUSTOMIZING"})," -> ",(0,i.jsx)(n.code,{children:"Business object configuration"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"IDOC basic type configuration",src:t(8946).Z+"",width:"314",height:"124"}),(0,i.jsx)(n.br,{}),"\n","The IDOC basic type (and extension) has to be specified for this object type at the top level. At the second level, all message types will be assigned which results in this object.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"IDOC message type link",src:t(9353).Z+"",width:"470",height:"109"}),(0,i.jsx)(n.br,{}),"\n",'Optional a versioning mechanism can be applied at "object type" level to a custom object. Making use of this mechanism allows to make structural changes without affecting previous versions. The default IDOC category handler always chooses the latest version.']}),"\n",(0,i.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,i.jsx)(n.h3,{id:"idoc-type-generation",children:"IDOC type generation"}),"\n",(0,i.jsxs)(n.p,{children:["Use transaction ",(0,i.jsx)(n.code,{children:"/UBC/IDOC_STRUCT_GEN"})," to generate ABAP types (for usage in public sections of classes/interfaces) for an IDOC.\nYou can then convert any IDOC (EDIDC, EDIDD) to an ABAP type (and back) using converter class ",(0,i.jsx)(n.code,{children:"/UBC/CL_IDOC_CONVERTER"}),".\nThis is rather a generic approach and can be used in any process withing SAP! It does not need a UBC business object. Use it wherever you like to simplify development a lot!"]}),"\n",(0,i.jsx)(n.h3,{id:"handler",children:"Handler"}),"\n",(0,i.jsxs)(n.p,{children:["It is important to specify a handler that inherits from ",(0,i.jsx)(n.code,{children:"/UBC/CL_BO_IDOC"})," or implements at least the interface ",(0,i.jsx)(n.code,{children:"/UBC/IF_BO_IDOC"})," for a custom outbound process."]}),"\n",(0,i.jsx)(n.h4,{id:"outbound",children:"Outbound"}),"\n",(0,i.jsx)(n.p,{children:'UBC integrates seamlessly in the SAP-standard outbound mechanism. This means, up to step "transmit IDOC to party xy" \u2013 it is a standard procedure.\nShort summary:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["configure EDI output message for the document to be transmitted",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"EDI output message",src:t(9871).Z+"",width:"401",height:"67"})]}),"\n",(0,i.jsxs)(n.li,{children:["configure partner determination (WE20) \u2013 outbound for specific partner",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"Partner determination",src:t(2382).Z+"",width:"373",height:"199"})]}),"\n",(0,i.jsxs)(n.li,{children:["now comes the UBC specific part and trigger when specifying the receiver port within  the partner determination. Usually, a port is used for a PI or any other direct connections. Specify ",(0,i.jsx)(n.code,{children:"/UBC/IDOC"})," to trigger UBC.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"Port /UBC/IDOC",src:t(761).Z+"",width:"394",height:"316"}),(0,i.jsx)(n.br,{}),"\n","This enables UBC to link the IDOC to the previously configured UBC object (by looking up message type, basic type, extension) and calling the method ",(0,i.jsx)(n.code,{children:"/UBC/IF_BO_IDOC->PROCESS_PORT"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Of course, the determination does not necessarily need to be partner-specific. The partner determination can be modelled once too, but this is just SAP standard:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"no specific partner",src:t(9578).Z+"",width:"470",height:"19"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"no specific partner",src:t(606).Z+"",width:"415",height:"205"})]})}),"\n",(0,i.jsxs)(n.h5,{id:"standard-implementation-ubccl_bo_idoc",children:["Standard implementation ",(0,i.jsx)(n.code,{children:"/UBC/CL_BO_IDOC"})]}),"\n",(0,i.jsxs)(n.p,{children:["When using standard implementation ",(0,i.jsx)(n.code,{children:"/UBC/CL_BO_IDOC"}),", a new ",(0,i.jsx)(n.a,{href:"/BO/documentation",children:"outbound workflow"})," will be started.\nBy default, a workflow is started for every registered proxy. If more than one proxy was registered, the company code can be used to distigunish which the proxy was registered. Most of the documents in SAP correlate to a specific company code. If such a distinction is needed, implement behavior in method ",(0,i.jsx)(n.code,{children:"GET_COMPANY_CODE_FOR_RESTR"}),". If the company code determination was implemented, the registered proxy for the specific company code will be automatically determined. Others will be ignored.\nIf, however, a different behavior with respect to the determination of the proxy is required, overwrite the method ",(0,i.jsx)(n.code,{children:"CHOOSE_PROXIES_FOR_IDOC"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"inbound",children:"Inbound"}),"\n",(0,i.jsxs)(n.p,{children:["Usually UBC only triggers the inbound of documents withing UBC processes. Thus there can be no generic description made here. For simplicity reasons we recommend using just one partner definition ",(0,i.jsx)(n.code,{children:"LS"})," ",(0,i.jsx)(n.code,{children:"/UBC/PROXY"})," for those cases and make UBC post the IDOC to this generic definition, requiring to do the custom mapping before creation of the IDOC. Usually the configuration/process code for this IDOC remains untouched and starts just the SAP standard processing.\n",(0,i.jsx)(n.img,{alt:"Inbound /UBC/PROXY",src:t(2380).Z+"",width:"365",height:"219"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8946:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image_001-d7d4418e05f73a1a00c7389c10b40a29.png"},9353:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image_002-c4aba0963ffe3806847c17c4e926cb20.png"},9871:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image_003-fd91edf003c952b5ea6ac0ec3a71fba7.png"},2382:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image_004-2edec3cf5c25ee6458bd3896545503d7.png"},761:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image_005-4a24974670f57d2ac1b1598e28df6329.png"},9578:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,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"},606:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image_007-53a9d6be9a7779dde8e6cc008cfad628.png"},2380:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image_008-000359dcc79bce47612fccfdfc2c545d.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);