"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[767],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:4},o="Dumping & Loading",l={unversionedId:"guide/dumping-and-loading",id:"guide/dumping-and-loading",title:"Dumping & Loading",description:"To preserve your Devnet instance for future use, there are several options:",source:"@site/docs/guide/dumping-and-loading.md",sourceDirName:"guide",slug:"/guide/dumping-and-loading",permalink:"/starknet-devnet/docs/guide/dumping-and-loading",draft:!1,editUrl:"https://github.com/Shard-Labs/starknet-devnet/blob/master/page/docs/guide/dumping-and-loading.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JSON-RPC API",permalink:"/starknet-devnet/docs/guide/json-rpc-api"},next:{title:"Hardhat integration",permalink:"/starknet-devnet/docs/guide/hardhat-integration"}},p={},d=[{value:"Loading",id:"loading",level:2},{value:"Enabling dumping and loading with Docker",id:"enabling-dumping-and-loading-with-docker",level:2}],u={toc:d};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dumping--loading"},"Dumping & Loading"),(0,a.kt)("p",null,"To preserve your Devnet instance for future use, there are several options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dumping on exit (handles Ctrl+C, i.e. SIGINT, doesn't handle SIGKILL):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"starknet-devnet --dump-on exit --dump-path <PATH>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dumping after each transaction (done in background, doesn't block):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"starknet-devnet --dump-on transaction --dump-path <PATH>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dumping on request (replace ",(0,a.kt)("inlineCode",{parentName:"li"},"<HOST>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<PORT>")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"<PATH>")," with your own):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -X POST http://<HOST>:<PORT>/dump -d \'{ "path": <PATH> }\' -H "Content-Type: application/json"\n')),(0,a.kt)("h2",{id:"loading"},"Loading"),(0,a.kt)("p",null,"To load a preserved Devnet instance, the options are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Loading on startup:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"starknet-devnet --load-path <PATH>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Loading on request:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -X POST http://<HOST>:<PORT>/load -d \'{ "path": <PATH> }\' -H "Content-Type: application/json"\n')),(0,a.kt)("h2",{id:"enabling-dumping-and-loading-with-docker"},"Enabling dumping and loading with Docker"),(0,a.kt)("p",null,"To enable dumping and loading if running Devnet in a Docker container, you must bind the container path with the path on your host machine."),(0,a.kt)("p",null,"This example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Relies on ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/bind-mounts/"},"Docker bind mount"),"; try ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/volumes/"},"Docker volume")," instead."),(0,a.kt)("li",{parentName:"ul"},"Assumes that ",(0,a.kt)("inlineCode",{parentName:"li"},"/actual/dumpdir")," exists. If unsure, use absolute paths."),(0,a.kt)("li",{parentName:"ul"},"Assumes you are listening on ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:5050"),".")),(0,a.kt)("p",null,"If there is ",(0,a.kt)("inlineCode",{parentName:"p"},"dump.pkl")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"/actual/dumpdir"),", you can load it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run \\\n  -p 127.0.0.1:5050:5050 \\\n  --mount type=bind,source=/actual/dumpdir,target=/dumpdir \\\n  shardlabs/starknet-devnet \\\n  --load-path /dumpdir/dump.pkl\n")),(0,a.kt)("p",null,"To dump to ",(0,a.kt)("inlineCode",{parentName:"p"},"/actual/dumpdir/dump.pkl")," on Devnet shutdown, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run \\\n  -p 127.0.0.1:5050:5050 \\\n  --mount type=bind,source=/actual/dumpdir,target=/dumpdir \\\n  shardlabs/starknet-devnet \\\n  --dump-on exit --dump-path /dumpdir/dump.pkl\n")))}s.isMDXComponent=!0}}]);