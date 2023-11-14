"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1444],{8298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var s=t(5893),a=t(1151);const o={},i="JSON integration (UBC.json)",r={id:"JSON/documentation",title:"JSON integration (UBC.json)",description:"Imagine having a rather complex JSON schema definition you have to create and map your data out of SAP ABAP into it.",source:"@site/docs/JSON/documentation.md",sourceDirName:"JSON",slug:"/JSON/documentation",permalink:"/ubc-docs-ghpages/JSON/documentation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ubcSidebar",previous:{title:"Workflows (UBC.flow)",permalink:"/ubc-docs-ghpages/FLOW/documentation"},next:{title:"MQTT integration (UBC.mqtt)",permalink:"/ubc-docs-ghpages/MQTT/documentation"}},c={},h=[{value:"One-Stop-Shop &quot;Type Generator&quot;",id:"one-stop-shop-type-generator",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"json-integration-ubcjson",children:"JSON integration (UBC.json)"}),"\n",(0,s.jsxs)(n.p,{children:["Imagine having a rather complex ",(0,s.jsx)(n.a,{href:"https://json-schema.org/specification",children:"JSON schema definition"})," you have to create and map your data out of SAP ABAP into it."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.p,{children:"JSON schema:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "$id": "https://example.com/person.schema.json",\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "firstName": {\n      "type": "string",\n      "description": "The person\'s first name."\n    },\n    "lastName": {\n      "type": "string",\n      "description": "The person\'s last name."\n    },\n    "age": {\n      "description": "Age in years which must be equal to or greater than zero.",\n      "type": "integer",\n      "minimum": 0\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"JSON matching to schema:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "firstName": "John",\n  "lastName": "Doe",\n  "age": 21\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:'The basic concept is to see the JSON schema as a kind of "type definition" and the JSON as the actual payload "data definition".\nThis is a rather simple schema example which could be translated quite easily to an ABAP definition:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-abap",children:"types begin of s_schema.\ntypes first_name type string.\ntypes last_name type string.\ntypes age type i.\ntypes end of s_schema\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Declaring an ABAP structure based on this type allows to map to static types using all the IDE-features like auto-completion, code-checking and so on.\nProducing a JSON out of the ABAP type then is quite easy:\n",(0,s.jsx)(n.code,{children:"/UBC/CL_JSON=>GET_INSTANCE( )->SERIALIZE( )"})]}),"\n",(0,s.jsx)(n.p,{children:"Consider the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"there are some JSON names which could not be translated to JSON and vice-versa. Consider using Name-Mappings."}),"\n",(0,s.jsx)(n.li,{children:"the pretty mode (snake-case, camel-case, ...) for your target."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f"," Imagine having more complex scenarios like wrapped/referenced JSON schemas, version updates, etc. This could lead in a very high effort over and over again and prone to errors!"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"one-stop-shop-type-generator",children:'One-Stop-Shop "Type Generator"'}),"\n",(0,s.jsxs)(n.p,{children:["To speed up the development and eraising possible errors while copying type definitions (which can really be ",(0,s.jsx)(n.strong,{children:"very"})," complex according to the ",(0,s.jsx)(n.a,{href:"https://json-schema.org/specification",children:"JSON schema specification"}),"), make use of our Type Generator!"]}),"\n",(0,s.jsxs)(n.p,{children:["To do so, start the transaction ",(0,s.jsx)(n.code,{children:"/UBC/SCHEMA_STRUCT_G"}),".\n",(0,s.jsx)(n.img,{alt:"Schema generator input",src:t(5977).Z+"",width:"1417",height:"635"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Specify the Schema Id (URL)"}),"\n",(0,s.jsxs)(n.li,{children:["Choose wether to","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Upload each JSON schema by opening and downloading\nYou will be prompted for every Schema not given yet. This especially is needed for system without internet connection"}),"\n",(0,s.jsxs)(n.li,{children:["Automatically download JSON schema\nYou will be prompted for RFC destinations pointint to the base URLs of the JSON schemas (because of the possibility for cross-domain referencing).\nSo for example, if the JSON schema is located at ",(0,s.jsx)(n.a,{href:"https://json-schema.org/schema1.json",children:"https://json-schema.org/schema1.json"})," you will be prompted for a RFC destination pointing to the base URL ",(0,s.jsx)(n.a,{href:"https://json-schema.org",children:"https://json-schema.org"}),". If the schema1 is referring types from ",(0,s.jsx)(n.a,{href:"https://json-schema.org/schema2.json",children:"https://json-schema.org/schema2.json"})," you will then not be prompted again."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As a result you will be able to copy the types definition to your class/interface making use of it.\n",(0,s.jsx)(n.img,{alt:"Schema generator result",src:t(2562).Z+"",width:"1918",height:"949"}),"\nOptionally, if a name cannot be represented with a name-mapping (special characters in definition) there will be a name mapping table given to apply later to the JSON deserializiation."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Do your mapping to the ABAP type and then simply call ",(0,s.jsx)(n.code,{children:"/UBC/CL_JSON=>GET_INSTANCE( )->SERIALIZE( )"}),". Make sure to provide the name-mapping for ABAP field names to JSON field names(if given by the generator)."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5977:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image_001-b0a929e3eba74264a1570339803b14fb.png"},2562:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image_002-17dafad5d8f85eed90fc7beb27c59b55.png"}}]);