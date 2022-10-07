"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[76],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="L1-L2 Postman integration",l={unversionedId:"guide/postman",id:"guide/postman",title:"L1-L2 Postman integration",description:"Postman is a Starknet utility that allows testing L1  L2 interaction. To utilize this, you can use starknet-hardhat-plugin, as witnessed in this example. Or you can directly interact with the two Postman-specific endpoints:",source:"@site/docs/guide/postman.md",sourceDirName:"guide",slug:"/guide/postman",permalink:"/starknet-devnet/docs/guide/postman",draft:!1,editUrl:"https://github.com/Shard-Labs/starknet-devnet/docs/guide/postman.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Hardhat integration",permalink:"/starknet-devnet/docs/guide/hardhat-integration"},next:{title:"Block explorer",permalink:"/starknet-devnet/docs/guide/block-explorer"}},p={},s=[{value:"Postman - Load",id:"postman---load",level:3},{value:"Postman - Flush",id:"postman---flush",level:3},{value:"Postman - disclaimer",id:"postman---disclaimer",level:3},{value:"Dumping",id:"dumping",level:2},{value:"Loading",id:"loading",level:3},{value:"Enabling dumping and loading with Docker",id:"enabling-dumping-and-loading-with-docker",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"l1-l2-postman-integration"},"L1-L2 Postman integration"),(0,r.kt)("p",null,"Postman is a Starknet utility that allows testing L1 <-> L2 interaction. To utilize this, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Shard-Labs/starknet-hardhat-plugin"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"starknet-hardhat-plugin"))),", as witnessed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Shard-Labs/starknet-hardhat-example/blob/master/test/postman.test.ts"},(0,r.kt)("strong",{parentName:"a"},"this example")),". Or you can directly interact with the two Postman-specific endpoints:"),(0,r.kt)("h3",{id:"postman---load"},"Postman - Load"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'POST /postman/load_l1_messaging_contract\n{\n  "networkUrl": "http://localhost:8545",\n  "address": "0x123...def"\n}\n')),(0,r.kt)("p",null,"Loads a ",(0,r.kt)("inlineCode",{parentName:"p"},"StarknetMockMessaging")," contract. The ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," parameter is optional; if provided, the ",(0,r.kt)("inlineCode",{parentName:"p"},"StarknetMockMessaging")," contract will be fetched from that address, otherwise a new one will be deployed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"networkUrl")," is the URL of the JSON-RPC API of the L1 node you've run locally or that already exists; possibilities include, and are not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://goerli.net/"},(0,r.kt)("strong",{parentName:"a"},"Goerli testnet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ganache"},(0,r.kt)("strong",{parentName:"a"},"Ganache"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/go-ethereum#docker-quick-start"},(0,r.kt)("strong",{parentName:"a"},"Geth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/hardhat-network/#running-stand-alone-in-order-to-support-wallets-and-other-software"},(0,r.kt)("strong",{parentName:"a"},"Hardhat node")),".")),(0,r.kt)("h3",{id:"postman---flush"},"Postman - Flush"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /postman/flush\n")),(0,r.kt)("p",null,"Goes through the newly enqueued messages, sending them from L1 to L2 and from L2 to L1. Requires no body."),(0,r.kt)("h3",{id:"postman---disclaimer"},"Postman - disclaimer"),(0,r.kt)("p",null,"This method of L1 <-> L2 communication testing differs from Starknet Alpha networks. Taking the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/_static/L1L2Example.sol"},(0,r.kt)("strong",{parentName:"a"},"L1 L2 Example .sol"))," contract in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/hello_starknet/l1l2.html"},(0,r.kt)("strong",{parentName:"a"},"starknet documentation"))," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"constructor(IStarknetCore starknetCore_) public {\n    starknetCore = starknetCore_;\n}\n")),(0,r.kt)("p",null,"The constructor takes an ",(0,r.kt)("inlineCode",{parentName:"p"},"IStarknetCore")," contract as argument, however for Devnet L1 <-> L2 communication testing, this will have to be replaced with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/starknet/testing/MockStarknetMessaging.sol"},(0,r.kt)("strong",{parentName:"a"},"MockStarknetMessaging.sol"))," contract :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"constructor(MockStarknetMessaging mockStarknetMessaging_) public {\n    starknetCore = mockStarknetMessaging_;\n}\n")),(0,r.kt)("h2",{id:"dumping"},"Dumping"),(0,r.kt)("p",null,"To preserve your Devnet instance for future use, there are several options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dumping on exit (handles Ctrl+C, i.e. SIGINT, doesn't handle SIGKILL):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"starknet-devnet --dump-on exit --dump-path <PATH>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dumping after each transaction (done in background, doesn't block):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"starknet-devnet --dump-on transaction --dump-path <PATH>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dumping on request (replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<HOST>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<PORT>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<PATH>")," with your own):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST http://<HOST>:<PORT>/dump -d \'{ "path": <PATH> }\' -H "Content-Type: application/json"\n')),(0,r.kt)("h3",{id:"loading"},"Loading"),(0,r.kt)("p",null,"To load a preserved Devnet instance, the options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loading on startup:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"starknet-devnet --load-path <PATH>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loading on request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST http://<HOST>:<PORT>/load -d \'{ "path": <PATH> }\' -H "Content-Type: application/json"\n')),(0,r.kt)("h3",{id:"enabling-dumping-and-loading-with-docker"},"Enabling dumping and loading with Docker"),(0,r.kt)("p",null,"To enable dumping and loading if running Devnet in a Docker container, you must bind the container path with the path on your host machine."),(0,r.kt)("p",null,"This example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Relies on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/bind-mounts/"},(0,r.kt)("strong",{parentName:"a"},"Docker bind mount")),"; try ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/volumes/"},(0,r.kt)("strong",{parentName:"a"},"Docker volume"))," instead."),(0,r.kt)("li",{parentName:"ul"},"Assumes that ",(0,r.kt)("inlineCode",{parentName:"li"},"/actual/dumpdir")," exists. If unsure, use absolute paths."),(0,r.kt)("li",{parentName:"ul"},"Assumes you are listening on ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:5050"),".")),(0,r.kt)("p",null,"If there is ",(0,r.kt)("inlineCode",{parentName:"p"},"dump.pkl")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/actual/dumpdir"),", you can load it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run \\\n  -p 127.0.0.1:5050:5050 \\\n  --mount type=bind,source=/actual/dumpdir,target=/dumpdir \\\n  shardlabs/starknet-devnet \\\n  --load-path /dumpdir/dump.pkl\n")),(0,r.kt)("p",null,"To dump to ",(0,r.kt)("inlineCode",{parentName:"p"},"/actual/dumpdir/dump.pkl")," on Devnet shutdown, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run \\\n  -p 127.0.0.1:5050:5050 \\\n  --mount type=bind,source=/actual/dumpdir,target=/dumpdir \\\n  shardlabs/starknet-devnet \\\n  --dump-on exit --dump-path /dumpdir/dump.pkl\n")))}u.isMDXComponent=!0}}]);