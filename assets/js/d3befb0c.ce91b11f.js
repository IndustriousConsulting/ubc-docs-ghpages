"use strict";(self.webpackChunkubc_services=self.webpackChunkubc_services||[]).push([[3295],{6973:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=n(5893),r=n(1151);const t={},s="Workflows (UBC.flow)",l={id:"FLOW/documentation",title:"Workflows (UBC.flow)",description:"Intro",source:"@site/docs/FLOW/documentation.md",sourceDirName:"FLOW",slug:"/FLOW/documentation",permalink:"/FLOW/documentation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ubcSidebar",previous:{title:"IDOC integration (UBC.idoc)",permalink:"/IDOC/documentation"},next:{title:"JSON integration (UBC.json)",permalink:"/JSON/documentation"}},a={},d=[{value:"Intro",id:"intro",level:2},{value:"Custom Workflows",id:"custom-workflows",level:2},{value:"Message handler",id:"message-handler",level:3},{value:"Workflow handler",id:"workflow-handler",level:3},{value:"Determine Workflow for Business Object",id:"determine-workflow-for-business-object",level:3}];function c(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"workflows-ubcflow",children:"Workflows (UBC.flow)"}),"\n",(0,i.jsx)(o.h2,{id:"intro",children:"Intro"}),"\n",(0,i.jsxs)(o.p,{children:["UBC - Unified Backend Connector comes with a component for building your process - easily and powerful - using workflow technique. With ",(0,i.jsx)(o.strong,{children:"UBC.flow"}),", complex workflows can be mapped without SAP workflow know-how using simple ABAP-based customizing. Any number of workflows can be defined. These workflow definitions determine the flow of a process.\nWithin UBC, two standard workflows are defined using UBC.flow that handle the entire flow of processing data integrated with ",(0,i.jsx)(o.a,{href:"/IO/documentation",children:"UBC.io"}),'. Each workflow for a specific business object will be attached to GOS in "workflow overview".']}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.img,{alt:"GOS workflow",src:n(6412).Z+"",width:"365",height:"182"}),"\n",(0,i.jsx)(o.img,{alt:"GOS workflow overview",src:n(2283).Z+"",width:"1537",height:"740"})]}),"\n",(0,i.jsxs)(o.p,{children:["It is possible to jump into details for a specific work item or directly jump to the linked objects like a ",(0,i.jsx)(o.a,{href:"/IO/documentation",children:"UBC.io"})," message.\nMonitoring and analysis of the flow itself can be performed as follows, by either:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["jumping from message to associated workflow in ",(0,i.jsx)(o.a,{href:"/IO/documentation",children:"UBC.io"})," monitoring"]}),"\n",(0,i.jsx)(o.li,{children:"jumping via object, GOS, workflow overview"}),"\n",(0,i.jsxs)(o.li,{children:["directly starting the monitoring transaction ",(0,i.jsx)(o.code,{children:"/UBC/CFL_ADMIN_CON"})]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"custom-workflows",children:"Custom Workflows"}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"You are always free to change/enhance the standard workflows in your system."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["To define custom workflows within ",(0,i.jsx)(o.strong,{children:"UBC.flow"})," linked to an object of ",(0,i.jsx)(o.a,{href:"/BO/documentation",children:"UBC.bo"}),", please read first ",(0,i.jsx)(o.a,{href:"https://conflow-help.com",children:"this document"})," as a basis as the integration is based on ",(0,i.jsx)(o.a,{href:"https://conflow-help.com",children:"conFLOW"}),". Start with the customizing in ",(0,i.jsx)(o.code,{children:"/UBC/CUSTOMIZING"}),"->",(0,i.jsx)(o.code,{children:"UBC.flow configuration"}),". For a kick-start, you are free to copy from in-/outbound workflows ",(0,i.jsx)(o.code,{children:"80000"}),"/",(0,i.jsx)(o.code,{children:"80001"}),".\nAs a difference to the above mentioned document, it is not required to create a new enhancement implementation. Instead, workflow behavior is controlled by a ",(0,i.jsx)(o.a,{href:"#workflow-handler",children:"Workflow handler"})," mentioned later."]}),"\n",(0,i.jsx)(o.h3,{id:"message-handler",children:"Message handler"}),"\n",(0,i.jsxs)(o.p,{children:["In order to decouple message persistency of ",(0,i.jsx)(o.a,{href:"/IO/documentation",children:"UBC.io"})," from the workflow you will find a dedicated section in ",(0,i.jsx)(o.code,{children:"/UBC/CUSTOMIZING"}),"->",(0,i.jsx)(o.code,{children:"Message handler configuration"}),".\nChoose the Scenario (STD/any custom) and Engine (CIO/AIF) and specify your custom message handler implementation. It has some generic implementation regarding the message, scenario and engine dependent."]}),"\n",(0,i.jsx)(o.h3,{id:"workflow-handler",children:"Workflow handler"}),"\n",(0,i.jsxs)(o.p,{children:["In order to decouple workflow handler from the message persistency of ",(0,i.jsx)(o.a,{href:"/IO/documentation",children:"UBC.io"})," you will find a dedicated section in ",(0,i.jsx)(o.code,{children:"/UBC/CUSTOMIZING"}),"->",(0,i.jsx)(o.code,{children:"Workflow handler configuration"}),".\nLink the previously configured workflow to a scenari/engine (see ",(0,i.jsx)(o.a,{href:"#message-handler",children:"Message handler"}),') and a target workflow handler. The workflow handler allows to implement the specific workflow methods like "getting actors by code" or "get datasource for mail sending".']}),"\n",(0,i.jsx)(o.h3,{id:"determine-workflow-for-business-object",children:"Determine Workflow for Business Object"}),"\n",(0,i.jsxs)(o.p,{children:["Workflows are started by ",(0,i.jsx)(o.a,{href:"/IO/documentation",children:"UBC.io"})," as per default. Go to transaction ",(0,i.jsx)(o.code,{children:"/UBC/CUSTOMIZING"})," -> ",(0,i.jsx)(o.code,{children:"UBC.io configuration for UBC.flow"}),".\nFind your interface group and go to ",(0,i.jsx)(o.strong,{children:"mapping groups <-> messages"}),". There you can change the workflow definition to your custom one.\nIf the workflow definition has to be determined at runtime of your object of ",(0,i.jsx)(o.a,{href:"/BO/documentation",children:"UBC.bo"})," then implement method ",(0,i.jsx)(o.code,{children:"/UBC/CL_BO->CHANGE_WORKFLOW_DEFINITION"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6412:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/image_001-6783a258781291a105ce3b8b62911ca1.png"},2283:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/image_002-bb30e9cd304c29045e733dfdcd66ec44.png"}}]);