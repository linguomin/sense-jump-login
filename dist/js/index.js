(()=>{"use strict";var e,t={390:(e,t,o)=>{function r(e){if(401!==e.response.status)return e;sessionStorage.setItem("locationCache",window.location.href),window.location.replace(e.response.data.authurl)}o.d(t,{Z:()=>r})}},o={};function r(e){if(o[e])return o[e].exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=r(390),document.getElementById("btn").onclick=()=>{console.log(1),(0,e.Z)()}})();