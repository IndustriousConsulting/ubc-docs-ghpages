"use strict";(self.webpackChunkubc_services=self.webpackChunkubc_services||[]).push([[6382],{391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),s=t(8453);const o={},a="MQTT integration (UBC.mqtt)",r={id:"MQTT/documentation",title:"MQTT integration (UBC.mqtt)",description:"UBC - Unified Backend Connector comes with a component for acting as a MQTT client (over websocket), usable from 750 onwards. It enables real-time, fail safe messaging without having to handling with middlewares and topics like system availability, buffering, firewalls...",source:"@site/docs/MQTT/documentation.md",sourceDirName:"MQTT",slug:"/MQTT/documentation",permalink:"/MQTT/documentation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ubcSidebar",previous:{title:"JSON integration (UBC.json)",permalink:"/JSON/documentation"},next:{title:"MES Integration",permalink:"/integrations/MES/documentation"}},l={},c=[{value:"Proxy implementation",id:"proxy-implementation",level:2},{value:"MQTT client",id:"mqtt-client",level:2},{value:"Customizing",id:"customizing",level:2},{value:"Handler",id:"handler",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mqtt-integration-ubcmqtt",children:"MQTT integration (UBC.mqtt)"}),"\n",(0,i.jsxs)(n.p,{children:["UBC - Unified Backend Connector comes with a component for acting as a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/MQTT",children:"MQTT"})," client (over websocket), usable from 750 onwards. It enables real-time, fail safe messaging without having to handling with middlewares and topics like system availability, buffering, firewalls...\nIn contrast to SAP standard's implementation, UBC.mqtt can work with persistent sessions unlocking completely new capabilities of your SAP system, without the need to involve Middleware technology.\nThis document describes the technology and how-to integrate a new use-case. There are already project-specific implementations which documentation can be found at its place."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Summary of the top most advantages using UBC.mqtt:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['no firewall issues, connection is established "from" the SAP system via MQTT ',(0,i.jsx)(n.strong,{children:"over websocket"}),' "inside out"']}),"\n",(0,i.jsx)(n.li,{children:'"clean session" configuration enables the use of persistent sessions, making the MQTT broker store the messages when disconnected.'}),"\n",(0,i.jsx)(n.li,{children:"available from 750 onwards"}),"\n",(0,i.jsx)(n.li,{children:"the only needed component is - of course - a MQTT broker where all the messages will be distributed to its clients"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Overview from a ",(0,i.jsx)(n.strong,{children:"SAP perspective"}),":"]}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n    autonumber\n    participant SAP as SAP MQTT Client\n    participant Client as Other MQTT Client\n    participant Broker as MQTT Broker\n\n    SAP ->> Broker: Initiate (CONNECT over websocket)\n    SAP ->> Broker: Subscribe to relevant topics (persistent session)\n    Client ->> Broker: Initiate (CONNECT)\n    Client ->> Broker: Send Message to a topic (PUBLISH)\n    Broker ->> SAP: Forward Message, because was subscribed to relevant topic\n    alt QoS <> at most once\n        SAP ->> Broker: Confirm the message was received\n    end\n    SAP ->> SAP: start asynchronous processing using bgRFC"}),"\n",(0,i.jsx)(n.h2,{id:"proxy-implementation",children:"Proxy implementation"}),"\n",(0,i.jsxs)(n.p,{children:["In your Proxy implementation (custom), redefine method ",(0,i.jsx)(n.code,{children:"create_mqtt_client_config"})," by returning an object of type ",(0,i.jsx)(n.code,{children:"/UBC/IF_MQTT_CLIENT_CONFIG"}),".\nThis is needed for configuring, wether it has to be a persistent session, configuring the username/password (deriving from Proxy table), ...\nExample: ",(0,i.jsx)(n.code,{children:"/UBC/CL_S17_PROXY"})]}),"\n",(0,i.jsx)(n.h2,{id:"mqtt-client",children:"MQTT client"}),"\n",(0,i.jsx)(n.p,{children:"There are basically two options to set up UBC as a MQTT client:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Running the client in a periodically scheduled job:\nIf the job is scheduled e.g. every minute, the client (SAP-UBC) connects to the broker, waits for messages for a predetermined number of seconds and then disconnects again.\nIt is not reasonable to configure a \u201cclean session\u201d for this scenario thus it always have to be persistent.\nTemplate: ",(0,i.jsx)(n.code,{children:"/UBC/S17_MQTT_WS_CLIENT"})]}),"\n",(0,i.jsxs)(n.li,{children:["Running client as ABAP Daemon: An MQTT daemon runs once per client and keeps the web socket connection to the MQTT broker alive.\nIf there are any new messages, they get pushed immediately to your SAP system/MQTT client.\nIt is needed to subclass /UBC/CL_MQTT_DAEMON_ABS and schedule the daemon. Daemons are available from S/4 HANA upwards. For ECC releases, daemons could not be used. Instead, job solution is to be used.\nExample: ",(0,i.jsx)(n.code,{children:"/UBC/CL_S17_MQTT_DAEMON"})," for S1Seven use case`"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'General recomendation: Use Daemons, if available in your system. Nevertheless, you cannot ensure your daemon is running 24/7 (due to downtimes, ...) thus it is also recommended to configure a "persistent session".'}),"\n",(0,i.jsx)(n.h2,{id:"customizing",children:"Customizing"}),"\n",(0,i.jsxs)(n.p,{children:["Every proxy automatically registers to all topics specified in ",(0,i.jsx)(n.code,{children:"/UBC/CUSTOMIZING"})," chapter ",(0,i.jsx)(n.strong,{children:"MQTT handler configuration"})," for its Proxy type:\n",(0,i.jsx)(n.img,{alt:"MQTT handler configuration",src:t(228).A+"",width:"1251",height:"241"}),"\nBasically, you link a topic to its ",(0,i.jsx)(n.a,{href:"#handler",children:"implementation"})," and specify the ",(0,i.jsx)(n.a,{href:"https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/",children:"QoS (quality of service)"}),'. We recommend using "at least once" in order to ensure the message is received in SAP.']}),"\n",(0,i.jsx)(n.h2,{id:"handler",children:"Handler"}),"\n",(0,i.jsxs)(n.p,{children:["As soon as a message is received, it is transmitted to the bgRFC destination ",(0,i.jsx)(n.code,{children:"/UBC/INBOUND"}),". (The destination was created automatically on system setup for UBC, please see also transaction ",(0,i.jsx)(n.code,{children:"SBGRFCCONF"}),")\nThis mechanism makes use of parallelization depending on your scheduler and server group settings.\nThe bgRFC then executes the handler class specified in chapter ",(0,i.jsx)(n.strong,{children:"MQTT handler configuration"}),". Depending on the Quality-of-Service setting, the messages will be directly acknowledged after transmitting to bgRFC runtime. If there are any technical errors, please see SAP standard monitoring transaction ",(0,i.jsx)(n.code,{children:"SBGRFCMON"}),".\nYour handler implementation have to inherit from class ",(0,i.jsx)(n.code,{children:"/UBC/CL_MQTT_HDL_REC_ABS"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},228:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image_001-1e59ef36f7e0e211b9d4933abfd2321e.png"}}]);