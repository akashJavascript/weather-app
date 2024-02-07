(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"body {\n    font-family: 'Roboto', sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f5f5f5;\n}\n.card-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n.card {\n    width: 300px;\n    height: 500px;\n    background-color: #fff;\n    margin: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 10px;\n}\n.search {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n}\n.header {\n    margin-right: 15px;\n}\n.temp-container {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n    margin-top: 50px;\n    align-items: center;\n    gap: 10px;\n}\n.condition-icon {\n    height: 150px;\n}\n.today-current-temp {\n    margin-bottom: 30px;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),u=n.n(d),p=n(589),l=n.n(p),f=n(426),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h="75b9a99ff5ee4179b7c175556230910",y=document.querySelector("#search-input"),v=document.querySelector(".search-btn");let g="Foster City";async function x(e){if(!e)return alert("Please enter a city");const t=fetch(`https://api.weatherapi.com/v1/forecast.json?key=${h}&q=${e}&days=3`),n=fetch(`https://api.weatherapi.com/v1/history.json?key=${h}&q=${e}&dt=${(new Date).toISOString().slice(0,10)}`).catch((e=>{console.error("Error:",e)})),[o,r]=await Promise.all([t,n]),a=await o.json(),i=await r.json();if(a.error)return alert(a.error.message);if(i.error)return alert(i.error.message);console.log(a,i);const c=await a.forecast.forecastday[0],s=await a.forecast.forecastday[1],d=await i.forecast.forecastday[0],u=e=>({high:e.day.maxtemp_f,low:e.day.mintemp_f,conditionIcon:e.day.condition.icon,conditionText:e.day.condition.text}),{high:p,low:l,conditionIcon:f}=u(c),{high:m,low:y,conditionIcon:v}=u(s),{high:g,low:x,conditionIcon:w}=u(d),b=a.current.temp_f;return console.log(g,x,w),async function(e,t,n,o,r,a,i,c,s,d){function u(e,t){".today-current-temp"===e||".today-high-temp"===e||".today-low-temp"===e||".tomorrow-high-temp"===e||".tomorrow-low-temp"===e||".yesterday-high-temp"===e||".yesterday-low-temp"===e?(document.querySelector(e).textContent="",document.querySelector(e).textContent+=` ${t}° F`):document.querySelector(e).textContent=t}function p(e,t){document.querySelector(e).src=t}u(".yesterday-high-temp",i),u(".yesterday-low-temp",c),p(".yesterday-condition-icon",s),u(".today-high-temp",e),u(".today-low-temp",t),p(".today-condition-icon",n),u(".tomorrow-high-temp",o),u(".tomorrow-low-temp",r),p(".tomorrow-condition-icon",a),u(".today-current-temp",d)}(p,l,f,m,y,v,g,x,w,b)}v.addEventListener("click",(async()=>{g=y.value;const e=await x(g);console.log(e)})),x("Foster City")})()})();