(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,b=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-36259d86":"89be1a9f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o={id:"nav"},a={id:"container"},i=Object(r["e"])("button",{type:"button",id:"applyButton"},null,-1);function u(e,t,n,u,c,s){const l=Object(r["t"])("navbar"),p=Object(r["t"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(l)]),Object(r["e"])("div",a,[Object(r["g"])(p),i])],64)}const c={class:"navbar"},s=Object(r["f"])('<span class="logo"></span><span class="navbar-item-group"><a class="navbar-item-group-item item-link">關卡資訊</a><a class="navbar-item-group-item item-link">作品列表</a><a class="navbar-item-group-item item-link">攻略資源</a><a class="navbar-item-group-item item-link">求職專區</a><button class="navbar-item-group-item item-button">註冊報名</button><button class="navbar-item-group-item item-button">登入</button></span>',2),l=[s];function p(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("div",c,l)}var b={name:"navbar"},f=n("6b0d"),d=n.n(f);const m=d()(b,[["render",p]]);var v=m,h={name:"main",components:{navbar:v}};const g=d()(h,[["render",u]]);var j=g,O=n("6605");const y=[{path:"/",name:"Home",component:()=>n.e("chunk-36259d86").then(n.bind(null,"bb51"))}],w=Object(O["a"])({history:Object(O["b"])(),routes:y});var k=w;n("ef4e");Object(r["c"])(j).use(k).mount("#app")},ef4e:function(e,t,n){}});