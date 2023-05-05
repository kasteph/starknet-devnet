"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:14},i="Mint token - Local faucet",l={unversionedId:"guide/mint-token",id:"guide/mint-token",title:"Mint token - Local faucet",description:"Other than using prefunded predeployed accounts, you can also add funds to an account that you deployed yourself.",source:"@site/docs/guide/mint-token.md",sourceDirName:"guide",slug:"/guide/mint-token",permalink:"/starknet-devnet/docs/guide/mint-token",draft:!1,editUrl:"https://github.com/0xSpaceShard/starknet-devnet/blob/master/page/docs/guide/mint-token.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Accounts",permalink:"/starknet-devnet/docs/guide/accounts"},next:{title:"UDC",permalink:"/starknet-devnet/docs/guide/udc"}},s={},c=[{value:"Query fee token address",id:"query-fee-token-address",level:2},{value:"Mint with a transaction",id:"mint-with-a-transaction",level:2},{value:"Mint lite",id:"mint-lite",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mint-token---local-faucet"},"Mint token - Local faucet"),(0,a.kt)("p",null,"Other than using prefunded predeployed accounts, you can also add funds to an account that you deployed yourself."),(0,a.kt)("p",null,"The ERC20 contract used for minting ETH tokens and charging fees is at: ",(0,a.kt)("inlineCode",{parentName:"p"},"0x49D36570D4E46F48E99674BD3FCC84644DDD6B96F7C741B1562B82F9E004DC7")),(0,a.kt)("h2",{id:"query-fee-token-address"},"Query fee token address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /fee_token\n")),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "symbol":"ETH",\n  "address":"0x...",\n}\n')),(0,a.kt)("h2",{id:"mint-with-a-transaction"},"Mint with a transaction"),(0,a.kt)("p",null,"By not setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"lite")," parameter or by setting it to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", new tokens will be minted in a separate transaction. You will receive the hash of this transaction, as well as the new balance after minting in the response."),(0,a.kt)("p",null,"The value of ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," is in WEI and needs to be an integer (or a float whose fractional part is 0, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"1000.0")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"1e21"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /mint\n{\n    "address": "0x6e3205f...",\n    "amount": 500000\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "new_balance": 500000,\n    "unit": "wei",\n    "tx_hash": "0xa24f23..."\n}\n')),(0,a.kt)("h2",{id:"mint-lite"},"Mint lite"),(0,a.kt)("p",null,"By setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"lite")," parameter, new tokens will be minted without generating a transaction, thus executing faster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /mint\n{\n    "address": "0x6e3205f...",\n    "amount": 500000,\n    "lite": true\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "new_balance": 500000,\n    "unit": "wei",\n    "tx_hash": null\n}\n')))}d.isMDXComponent=!0}}]);