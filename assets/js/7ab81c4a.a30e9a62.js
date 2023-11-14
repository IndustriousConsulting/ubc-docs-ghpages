"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7964],{2649:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(5893),t=s(1151);const o={slug:"/"},a="Overview",r={id:"documentation",title:"Overview",description:"Intro",source:"@site/docs/documentation.md",sourceDirName:".",slug:"/",permalink:"/ubc-docs-ghpages/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"ubcSidebar",next:{title:"I/O Monitoring (UBC.io)",permalink:"/ubc-docs-ghpages/IO/documentation"}},c={},d=[{value:"Intro",id:"intro",level:2},{value:"Component Architecture",id:"component-architecture",level:2},{value:"System setup",id:"system-setup",level:2},{value:"Authorization",id:"authorization",level:2},{value:"UBC authorization objects",id:"ubc-authorization-objects",level:3},{value:"Template roles",id:"template-roles",level:3},{value:"Data Archiving",id:"data-archiving",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"UBC",src:s(8605).Z+"",width:"402",height:"186"})}),"\n",(0,n.jsx)(i.p,{children:"The Unified Backend Connector (UBC) is highly versatile and includes several functions which can improve processes in many industry sectors.\nThe main benefits of UBC:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:'UBC is an SAP certified "out of the box solution" to interface dedicated processes with SAP systems offering out-of-the-box integrations'}),"\n",(0,n.jsx)(i.li,{children:'Drives and enables digitalization of processes (also mobile access to critical or "fast moving" processes)'}),"\n",(0,n.jsx)(i.li,{children:"Automatization of workflows - easily built and self-service possibilities"}),"\n",(0,n.jsx)(i.li,{children:"Business users get direct access and insights to all relevant data outside and inside the chain directly within their well-known SAP apps/transactions"}),"\n",(0,n.jsx)(i.li,{children:"Improve visibility of your processes using the powerful monitoring and workflow techniques"}),"\n",(0,n.jsx)(i.li,{children:"Easily configured or enhanced mapping of data to ERP processes and back"}),"\n",(0,n.jsx)(i.li,{children:"First class developer tools for common requirements like IDOC and JSON mapping using well-known ABAP patterns"}),"\n",(0,n.jsx)(i.li,{children:"Full access to all SAP Standard Business Objects and Custom Objects"}),"\n",(0,n.jsx)(i.li,{children:'UBC leaves a "near-no" footprint in your SAP systems and needs no additional architectural components.'}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"component-architecture",children:"Component Architecture"}),"\n",(0,n.jsx)(i.p,{children:"UBC is organized by different components, but always delivered as a whole product."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"UBC",src:s(7105).Z+"",width:"720",height:"405"})}),"\n",(0,n.jsx)(i.p,{children:"You will find the parts of the product documentation in its sections in the sidebar on the left."}),"\n",(0,n.jsx)(i.h2,{id:"system-setup",children:"System setup"}),"\n",(0,n.jsx)(i.p,{children:"Each dedicated use case has its own setup routines, the following can be considered as common:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Execute the setup tasklist using transaction ",(0,n.jsx)(i.code,{children:"/UBC/SETUP_BASIC"})]}),"\n",(0,n.jsxs)(i.li,{children:["The task list creates bgRFC destinations, activates SICF services, checks workflow-configuration, activates BC-Set, etc.\nSee step documentation for further details.\nConsider having enough authorization! We have ",(0,n.jsx)(i.a,{href:"#authorization",children:"template roles"})," ready, reach out to us if needed!"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"authorization",children:"Authorization"}),"\n",(0,n.jsx)(i.p,{children:'There are a few template roles ready, reach out to us if needed. The standard delivery does not contain the template roles, but they can be some kind of "kick start".'}),"\n",(0,n.jsx)(i.h3,{id:"ubc-authorization-objects",children:"UBC authorization objects"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/UBC/RESTP"}),"to restrict for REST-service usage within ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/REST/documentation",children:"UBC.rest"})," (enabled parameter ",(0,n.jsx)(i.code,{children:"/UBC/AUTH_CHECK"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/UBC/IO_IF"})," to restrict for interface usage within ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/IO/documentation",children:"UBC.io"}),", available fields are activity and interface."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/UBC/IO_CC"})," to restrict the display of messages in ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/IO/documentation",children:"UBC.io"})," for a specific company code. Please note that the company code has to be linked for the proxy.\nDefaults in template roles enable to use all the conUBC interfaces without restricting for organization/company."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"template-roles",children:"Template roles"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/UBC/SERVICE"})," enables the usage of all exposed interfaces from ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/REST/documentation",children:"UBC.rest"})," which can also be seen in Swagger UI. Thus, this is ideal for a service and/or test user. Please note, that authorization for a specific REST service is only checked if parameter ",(0,n.jsx)(i.code,{children:"/UBC/AUTH_CHECK"})," was set for SICF node and thus, the role is not needed if the parameter is not set."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/UBC/MONITOR"})," is intended for users who need to monitor ",(0,n.jsx)(i.code,{children:"/UBC/"})," tasks. Read access to view in-/outbound messages in standard interfaces of ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/BO/documentation",children:"UBC.bo"}),", including payload. This role also includes SAP standard roles ",(0,n.jsx)(i.code,{children:"SAP_BC_BMT_WFM_CONTROLLER"})," and ",(0,n.jsx)(i.code,{children:"SAP_BC_SRV_USER"})," to be able to access SAP Standard workflow protocols within ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/FLOW/documentation",children:"UBC.flow"}),".\nIt is also possible to restrict by a company code in the IO monitor. The company code has to be linked to a proxy on its setup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/UBC/ADMINSTRATOR"})," includes roles ",(0,n.jsx)(i.code,{children:"/UBC/MONITOR"}),", ",(0,n.jsx)(i.code,{children:"/UBC/SERVICE"})," and adds authorization to research and adapt any customizing activity within UBC. Also, this role includes SAP standard roles ",(0,n.jsx)(i.code,{children:"SAP_BC_BMT_WFM_ADMIN"})," and ",(0,n.jsx)(i.code,{children:"SAP_BC_SRV_EDI_ADMIN"})," which enables to use standard functionalities, e.g., for IDOC monitoring which goes through ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/IDOC/documentation",children:"UBC.idoc"})," layer. This role extends the pure monitoring focused role ",(0,n.jsx)(i.code,{children:"/UBC/MONITOR"})," with some standard administration tasks. It is mandatory for the setup of UBC or any new business object within UBC (authorization for customizing transactions). This should be assigned to users who require full administration authorization and capabilities within UBC."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/UBC/DEVELOPER"})," includes ",(0,n.jsx)(i.code,{children:"/UBC/ADMINISTRATOR"})," and extends with developer roles to use developer transaction, debugging, etc. Intended to use for a UBC developer. Includes SAP standard roles like ",(0,n.jsx)(i.code,{children:"SAP_BC_BMT_WFM_DEVELOPER"}),", ",(0,n.jsx)(i.code,{children:"SAP_BC_DWB_ABAPDEVELOPER"})," or ",(0,n.jsx)(i.code,{children:"SAP_BC_SRV_EDI_DEVELOPER"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"data-archiving",children:"Data Archiving"}),"\n",(0,n.jsxs)(i.p,{children:["Every component with persistence (",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/BO/documentation",children:"BO"}),", ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/IO/documentation",children:"IO"}),", ",(0,n.jsx)(i.a,{href:"/ubc-docs-ghpages/FLOW/documentation",children:"FLOW"}),") has its own Data Archiving mechanism and is described in the relevant sections."]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8605:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/UBC-Logo-e523cd851aa8d87eb1df59e123adf3b8.png"},7105:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/image_001-ffbd857c93abd23cdd8271d204812109.png"}}]);