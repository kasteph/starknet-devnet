"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="JSON-RPC API",s={unversionedId:"guide/json-rpc-api",id:"guide/json-rpc-api",title:"JSON-RPC API",description:"Devnet also supports JSON-RPC API v0.2.1",source:"@site/docs/guide/json-rpc-api.md",sourceDirName:"guide",slug:"/guide/json-rpc-api",permalink:"/starknet-devnet/docs/guide/json-rpc-api",draft:!1,editUrl:"https://github.com/0xSpaceShard/starknet-devnet/blob/master/page/docs/guide/json-rpc-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interaction",permalink:"/starknet-devnet/docs/guide/Interaction"},next:{title:"Dumping & Loading",permalink:"/starknet-devnet/docs/guide/dumping-and-loading"}},p={},c=[{value:"starknet_getEvents",id:"starknet_getevents",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-rpc-api"},"JSON-RPC API"),(0,a.kt)("p",null,"Devnet also supports JSON-RPC API v0.2.1: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/starknet-specs/releases/tag/v0.2.1"},"specifications")," . It can be reached under ",(0,a.kt)("inlineCode",{parentName:"p"},"/rpc"),". For an example:"),(0,a.kt)("p",null,"Requests to rpc and devnet responses are automatically validated against JSON schema in runtime.\nIn case of problems, this validations can be disabled by ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-rpc-request-validation")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-rpc-response-validation")," run flags. If you encounter issues with validation, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xSpaceShard/starknet-devnet/issues"},"report it on github"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /rpc\n{\n  "jsonrpc": "2.0",\n  "method": "starknet_getBlockTransactionCount",\n  "params": {\n    "block_id": "latest"\n  },\n  "id": 0\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "id": 0,\n  "jsonrpc": "2.0",\n  "result": 1\n}\n')),(0,a.kt)("h2",{id:"starknet_getevents"},"starknet_getEvents"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disclaimer!")," JSON-RPC specifications are not completely in sync with those of gateway. While ",(0,a.kt)("inlineCode",{parentName:"p"},"starknet_getEvents")," is supported for the pending block, the official schema does not allow the block hash and the block number in the response to be empty or anything other than a number. Since these values are undefined for the pending block and since they must be set to something, we decided to go with the compromise of setting them to zero-values."))}u.isMDXComponent=!0}}]);