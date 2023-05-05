"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=o,f=u["".concat(p,".").concat(k)]||u[k]||d[k]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:16},i="Fork",l={unversionedId:"guide/fork",id:"guide/fork",title:"Fork",description:"To interact with contracts deployed on mainnet or testnet, you can use the forking feature to copy the remote origin and experiment with it locally with no changes to the origin.",source:"@site/docs/guide/fork.md",sourceDirName:"guide",slug:"/guide/fork",permalink:"/starknet-devnet/docs/guide/fork",draft:!1,editUrl:"https://github.com/0xSpaceShard/starknet-devnet/blob/master/page/docs/guide/fork.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"UDC",permalink:"/starknet-devnet/docs/guide/udc"},next:{title:"Devnet speed-up troubleshooting",permalink:"/starknet-devnet/docs/guide/devnet-speed-up"}},p={},s=[{value:"Chain ID",id:"chain-id",level:2},{value:"Get fork status",id:"get-fork-status",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fork"},"Fork"),(0,o.kt)("p",null,"To interact with contracts deployed on mainnet or testnet, you can use the forking feature to copy the remote origin and experiment with it locally with no changes to the origin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"starknet-devnet --fork-network <NAME|URL> [--fork-block <BLOCK_NUMBER>] [--fork-retries <NUMBER>]\n")),(0,o.kt)("p",null,"The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"--fork-network")," can either be a network name (",(0,o.kt)("inlineCode",{parentName:"p"},"alpha-goerli"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha-goerli2"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha-mainnet"),") or a URL (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://alpha4.starknet.io"),")."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--fork-block")," parameter is optional and its value should be the block number from which the forking is done. If none is provided, defaults to the ",(0,o.kt)("inlineCode",{parentName:"p"},'"latest"')," block at the time of Devnet's start-up."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--fork-retries")," parameter to specify the number of retries of failed HTTP requests sent to the network before giving up, defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")),(0,o.kt)("p",null,"All calls will first try Devnet's state and then fall back to the forking block."),(0,o.kt)("p",null,"If you are forking another Devnet instance, keep in mind that it doesn't support polling specific blocks, but will always fall back to the currently latest block."),(0,o.kt)("h2",{id:"chain-id"},"Chain ID"),(0,o.kt)("p",null,"Devnet defaults to using the ",(0,o.kt)("inlineCode",{parentName:"p"},"TESTNET")," chain ID (the one corresponding to Alpha Goerli). If you want Devnet to use another chain ID, you can provide it using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"starknet-devnet --chain-id [MAINNET | TESTNET | TESTNET2]\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"MAINNET")," refers to Alpha Mainnet, ",(0,o.kt)("inlineCode",{parentName:"p"},"TESTNET")," refers to Alpha Goerli and ",(0,o.kt)("inlineCode",{parentName:"p"},"TESTNET2")," refers to Alpha Goerli2."),(0,o.kt)("h2",{id:"get-fork-status"},"Get fork status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /fork_status\n")),(0,o.kt)("p",null,"Response when in fork mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "url": "https://alpha4.starknet.io",\n    "block": 438839\n}\n')),(0,o.kt)("p",null,"Response when not in fork mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{}\n")))}d.isMDXComponent=!0}}]);