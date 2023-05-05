"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,k=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(k,c(c({ref:t},s),{},{components:r})):n.createElement(k,c({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:7},c="Block explorer",l={unversionedId:"guide/block-explorer",id:"guide/block-explorer",title:"Block explorer",description:"Starkscan",source:"@site/docs/guide/block-explorer.md",sourceDirName:"guide",slug:"/guide/block-explorer",permalink:"/starknet-devnet/docs/guide/block-explorer",draft:!1,editUrl:"https://github.com/0xSpaceShard/starknet-devnet/blob/master/page/docs/guide/block-explorer.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"L1-L2 Postman integration",permalink:"/starknet-devnet/docs/guide/postman"},next:{title:"Blocks",permalink:"/starknet-devnet/docs/guide/blocks"}},i={},p=[{value:"Starkscan",id:"starkscan",level:2},{value:"Voyager",id:"voyager",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-explorer"},"Block explorer"),(0,o.kt)("h2",{id:"starkscan"},"Starkscan"),(0,o.kt)("p",null,"Enter your Devnet port and have the Starkscan explorer available locally on your computer: ",(0,o.kt)("a",{parentName:"p",href:"https://devnet.starkscan.co/"},"https://devnet.starkscan.co/")),(0,o.kt)("h2",{id:"voyager"},"Voyager"),(0,o.kt)("p",null,"A local block explorer (Voyager), as noted ",(0,o.kt)("a",{parentName:"p",href:"https://voyager.online/local-version/"},(0,o.kt)("strong",{parentName:"a"},"here")),", apparently cannot be set up to work with Devnet. Read more in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xSpaceShard/starknet-devnet/issues/60"},(0,o.kt)("strong",{parentName:"a"},"this issue")),"."))}d.isMDXComponent=!0}}]);