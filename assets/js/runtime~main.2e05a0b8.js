(()=>{"use strict";var e,t,r,a,d,o={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=o,n.c=f,e=[],n.O=(t,r,a,d)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],d=e[u][2];for(var f=!0,c=0;c<r.length;c++)(!1&d||o>=d)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(f=!1,d<o&&(o=d));if(f){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[r,a,d]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var o={};t=t||[null,r({}),r([]),r(r)];for(var f=2&a&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,n.d(d,o),d},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({38:"5ea6e2e6",53:"935f2afb",76:"586f18af",85:"1f391b9e",95:"55806762",171:"c9e30d76",178:"313492da",195:"c4f5d8e4",248:"5413218d",293:"0b050157",398:"3edf2547",414:"393be207",455:"16d62623",514:"1be78505",522:"2d651fb3",550:"d136e2ac",561:"7f34ec46",639:"dfe810f6",650:"5440f302",671:"0e384e19",700:"63055d2c",767:"5cfa5ff2",781:"0d3fb930",825:"52597425",918:"17896441",930:"4e1747e0",971:"b22a6dc7"}[e]||e)+"."+{38:"079c73ea",53:"bf1bb1da",76:"582576a6",85:"4e5866c9",95:"8cc9eb9a",171:"3a2978fd",178:"9fc9cf93",195:"a8caeacf",248:"eafbdbf0",293:"ac638b49",398:"0008c7a1",414:"f2b0d152",455:"bb46d89f",514:"320be76d",522:"a634d241",550:"b2212296",561:"c8a94ac5",639:"9eba03df",650:"bf27eb44",666:"1b314df7",671:"3189ddc8",700:"4a517b2e",767:"b38d7e7e",781:"f8af00f3",825:"c6dbb11f",918:"1812c82f",930:"f96a0693",971:"5f10c2f8",972:"3b71a023"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},d="starknet-devnet:",n.l=(e,t,r,o)=>{if(a[e])a[e].push(t);else{var f,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var l=i[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+r){f=l;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",d+r),f.src=e),a[e]=[t];var b=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var d=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),d&&d.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),c&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/starknet-devnet/",n.gca=function(e){return e={17896441:"918",52597425:"825",55806762:"95","5ea6e2e6":"38","935f2afb":"53","586f18af":"76","1f391b9e":"85",c9e30d76:"171","313492da":"178",c4f5d8e4:"195","5413218d":"248","0b050157":"293","3edf2547":"398","393be207":"414","16d62623":"455","1be78505":"514","2d651fb3":"522",d136e2ac:"550","7f34ec46":"561",dfe810f6:"639","5440f302":"650","0e384e19":"671","63055d2c":"700","5cfa5ff2":"767","0d3fb930":"781","4e1747e0":"930",b22a6dc7:"971"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var d=new Promise(((r,d)=>a=e[t]=[r,d]));r.push(a[2]=d);var o=n.p+n.u(t),f=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var d=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+d+": "+o+")",f.name="ChunkLoadError",f.type=d,f.request=o,a[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,d,o=r[0],f=r[1],c=r[2],i=0;if(o.some((t=>0!==e[t]))){for(a in f)n.o(f,a)&&(n.m[a]=f[a]);if(c)var u=c(n)}for(t&&t(r);i<o.length;i++)d=o[i],n.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return n.O(u)},r=self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();