(function(t){function a(a){for(var c,l,i=a[0],o=a[1],r=a[2],d=0,b=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&b.push(s[l][0]),s[l]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);h&&h(a);while(b.length)b.shift()();return n.push.apply(n,r||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],c=!0,l=1;l<e.length;l++){var i=e[l];0!==s[i]&&(c=!1)}c&&(n.splice(a--,1),t=o(o.s=e[0]))}return t}var c={},l={app:0},s={app:0},n=[];function i(t){return o.p+"js/"+({about:"about",contact:"contact",gallery:"gallery",home:"home"}[t]||t)+"."+{about:"c5cf0493",contact:"d51ee67c",gallery:"6a58ea70",home:"90425011"}[t]+".js"}function o(a){if(c[a])return c[a].exports;var e=c[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e={about:1,contact:1,gallery:1,home:1};l[t]?a.push(l[t]):0!==l[t]&&e[t]&&a.push(l[t]=new Promise((function(a,e){for(var c="css/"+({about:"about",contact:"contact",gallery:"gallery",home:"home"}[t]||t)+"."+{about:"3e9ab324",contact:"9d1fd836",gallery:"f12f63a9",home:"7a66c727"}[t]+".css",s=o.p+c,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],d=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(d===c||d===s))return a()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){r=b[i],d=r.getAttribute("data-href");if(d===c||d===s)return a()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=a,h.onerror=function(a){var c=a&&a.target&&a.target.src||s,n=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=c,delete l[t],h.parentNode.removeChild(h),e(n)},h.href=s;var u=document.getElementsByTagName("head")[0];u.appendChild(h)})).then((function(){l[t]=0})));var c=s[t];if(0!==c)if(c)a.push(c[2]);else{var n=new Promise((function(a,e){c=s[t]=[a,e]}));a.push(c[2]=n);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=i(t);var b=new Error;r=function(a){d.onerror=d.onload=null,clearTimeout(h);var e=s[t];if(0!==e){if(e){var c=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;b.message="Loading chunk "+t+" failed.\n("+c+": "+l+")",b.name="ChunkLoadError",b.type=c,b.request=l,e[1](b)}s[t]=void 0}};var h=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(a)},o.m=t,o.c=c,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var c in t)o.d(e,c,function(a){return t[a]}.bind(null,c));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/MetalArt/",o.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=a,r=r.slice();for(var b=0;b<r.length;b++)a(r[b]);var h=d;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2373:function(t,a,e){"use strict";e("fba8")},"2a50":function(t,a,e){},4140:function(t,a,e){},"444d":function(t,a,e){},"49bb":function(t,a,e){"use strict";e("bd52")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var c=e("7a23");function l(t,a,e,l,s,n){var i=Object(c["z"])("Header"),o=Object(c["z"])("GallerySide"),r=Object(c["z"])("SocialSide"),d=Object(c["z"])("router-view"),b=Object(c["z"])("Footer");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["i"])("div",null,[n.hasHeader?(Object(c["r"])(),Object(c["e"])(i,{key:0})):Object(c["f"])("",!0),n.hasGallerySide?(Object(c["r"])(),Object(c["e"])(o,{key:1})):Object(c["f"])("",!0),n.hasSocialSide?(Object(c["r"])(),Object(c["e"])(r,{key:2})):Object(c["f"])("",!0),Object(c["i"])(d,null,{default:Object(c["F"])((function(t){var a=t.Component;return[Object(c["i"])(c["b"],{name:"route",mode:"out-in"},{default:Object(c["F"])((function(){return[(Object(c["r"])(),Object(c["e"])(Object(c["A"])(a)))]})),_:2},1024)]})),_:1})]),n.hasFooter?(Object(c["r"])(),Object(c["e"])(b,{key:0})):Object(c["f"])("",!0)],64)}e("b0c0");var s={class:"px-2 text-white"},n={class:"navbar navbar-expand-lg navbar-light"},i={class:"container-fluid"},o={class:"navbar-brand navbar-gallery"},r=Object(c["i"])("button",{class:"navbar-toggler menu-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["i"])("span",{class:"icon-menu"},[Object(c["i"])("span"),Object(c["i"])("span"),Object(c["i"])("span")])],-1),d={class:"collapse navbar-collapse",id:"navbarText"},b={class:"navbar-nav me-auto my-md-5 my-lg-0"},h={class:"nav-item"},u=Object(c["h"])("Inicio"),p={class:"nav-item"},j=Object(c["h"])("La Marca"),O=Object(c["i"])("li",{class:"nav-item"},[Object(c["i"])("a",{href:"#",class:"nav-link disable mx-3 text-white"},"Aprende")],-1),m={class:"nav-item"},v=Object(c["h"])("Contacto"),f={class:"navbar-text text-white text-center"},g={href:"https://www.facebook.com/pages/category/Arts---Crafts-Store/Metal-Art-433001477462190/",target:"_blank"},y={href:"https://wa.link/go0slp",target:"_blank"};function w(t,a,e,l,w,Z){var M=Object(c["z"])("LogoIcon"),_=Object(c["z"])("router-link"),x=Object(c["z"])("GallerySide"),V=Object(c["z"])("FacebookSimpleIcon"),A=Object(c["z"])("WhatsappSimpleIcon");return Object(c["r"])(),Object(c["e"])("header",s,[Object(c["i"])("nav",n,[Object(c["i"])("div",i,[Object(c["i"])(_,{to:"/",class:"navbar-brand",href:"#"},{default:Object(c["F"])((function(){return[Object(c["i"])(M)]})),_:1}),Object(c["i"])("div",o,[Object(c["i"])(x,{class:"d-sm-none"})]),r,Object(c["i"])("div",d,[Object(c["i"])("ul",b,[Object(c["i"])("li",h,[Object(c["i"])(_,{to:"/",class:"nav-link mx-3 text-white"},{default:Object(c["F"])((function(){return[u]})),_:1})]),Object(c["i"])("li",p,[Object(c["i"])(_,{to:"/about",class:"nav-link mx-3 text-white"},{default:Object(c["F"])((function(){return[j]})),_:1})]),O,Object(c["i"])("li",m,[Object(c["i"])(_,{to:"/contact",class:"nav-link mx-3 text-white"},{default:Object(c["F"])((function(){return[v]})),_:1})])]),Object(c["i"])("span",f,[Object(c["i"])("a",g,[Object(c["i"])(V)]),Object(c["i"])("a",y,[Object(c["i"])(A)])])])])]),Object(c["y"])(t.$slots,"default")])}var Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 211.62 101.83"},M=Object(c["i"])("g",{id:"Capa_2","data-name":"Capa 2"},[Object(c["i"])("g",{id:"Capa_1-2","data-name":"Capa 1"},[Object(c["i"])("g",{id:"Grupo_22","data-name":"Grupo 22"},[Object(c["i"])("g",{id:"Grupo_11","data-name":"Grupo 11"},[Object(c["i"])("path",{id:"Trazado_48","data-name":"Trazado 48",class:"cls-1",d:"M77.56,46.18A136.62,136.62,0,0,0,95.11,53l.2,23.64H82.67l-.24-21c-1.36-.45-3.21-1.11-4.87-1.69ZM68.75,76.63H64.08l-.19-27.79c-2.5-1-5.29-2.08-7.93-3.14V35.27c4.47,2.4,7.66,4.08,12,6.32ZM17.89,20.47H31.36c1.33.88,2.8,1.82,4.1,2.64l.12,13.69C34,36,32.81,35.5,30.92,34.58l.37,42.05h-13Zm32.35-4.71A82.35,82.35,0,0,0,68.55,31.63l1.1,45h4.8L73.3,28.09C63.63,21.69,57.08,11.37,51.38,0H36.54l1.14,76.63h13.7Z"})]),Object(c["i"])("path",{class:"cls-2",d:"M131.16,60.68a.12.12,0,0,0-.1-.09c-1.56-.14-3.15-.32-4.64-.49a.13.13,0,0,0-.13.09c-.74,2.71-1.46,5.37-2.16,8.07-.77,2.94-1.46,5.6-2.16,8.35a.12.12,0,0,0,0,.1.13.13,0,0,0,.1,0h3.6a.12.12,0,0,0,.11-.09l.18-.75.3-1.31c.11-.49.22-1,.34-1.48l.11-.48.85,0,2.94.08.16.73.24,1.19c.13.63.28,1.27.42,1.9l0,.1a.12.12,0,0,0,.12.09h3.66a.11.11,0,0,0,.09,0,.11.11,0,0,0,0-.1c-.68-2.56-1.38-5.22-2.05-7.87S131.84,63.39,131.16,60.68Zm-1.24,9.42L127.26,70h0c.2-.85.39-1.71.58-2.56s.42-1.78.64-2.69c.05-.53.11-1.07.17-1.6.07.55.13,1.11.2,1.67s.17.85.25,1.28.2,1,.29,1.45.25,1.23.37,1.85C129.81,69.62,129.86,69.86,129.92,70.1Z"}),Object(c["i"])("path",{class:"cls-2",d:"M122.87,62.32a.12.12,0,0,0,0-.09v-2.5a.12.12,0,0,0-.1-.12c-3.82-.59-7.7-1.33-11.33-2.14h0a.12.12,0,0,0-.12.12v2.78a.12.12,0,0,0,.1.12l3.89.73V76.63a.12.12,0,0,0,.12.12h3.4a.12.12,0,0,0,.12-.12V61.82c1.2.17,2.44.35,3.81.52A.1.1,0,0,0,122.87,62.32Z"}),Object(c["i"])("path",{class:"cls-2",d:"M110,73.69,104,73.44v-6.3c1.79.24,3.6.48,5.54.71a.09.09,0,0,0,.09,0,.13.13,0,0,0,0-.09V64.9a.12.12,0,0,0-.1-.12c-2-.32-3.83-.63-5.57-.94V58.75c1.94.49,4,1,6,1.43a.1.1,0,0,0,.09,0,.14.14,0,0,0,.05-.1V57.19a.12.12,0,0,0-.09-.11c-3.18-.69-6.33-1.46-9.59-2.38a.11.11,0,0,0-.11,0,.12.12,0,0,0,0,.1V76.63a.12.12,0,0,0,.12.12H110a.12.12,0,0,0,.11-.13V73.81A.11.11,0,0,0,110,73.69Z"}),Object(c["i"])("path",{class:"cls-2",d:"M181.07,76.16c-.09,0-.37-.1-.51-1.4a32.73,32.73,0,0,1-.22-3.4c0-.55,0-1,0-1.45a4.79,4.79,0,0,0-.25-1.24,2.12,2.12,0,0,0-.84-1,2.53,2.53,0,0,0-1.05-.39,3.24,3.24,0,0,0,1.67-1.51,6.57,6.57,0,0,0,.7-3.43,3.7,3.7,0,0,0-1.18-2.88c-.87-.69-2.18-.87-4-.53-2.24.41-4.5.74-6.61,1a.12.12,0,0,0-.1.12v16.6h0a.11.11,0,0,0,.11.12h3.43a.12.12,0,0,0,.12-.12V69.42l1.09-.07.6,0c1.1-.07,1.86.07,2.17.42a2.64,2.64,0,0,1,.5,1.8c0,.13,0,.26,0,.4a7.48,7.48,0,0,0,0,.82c0,.16,0,.34.06.53a13.43,13.43,0,0,1,.14,1.46,17.71,17.71,0,0,0,.14,1.92.12.12,0,0,0,.11.1h3.95a.12.12,0,0,0,.12-.12v-.35a.18.18,0,0,0,0-.09A.11.11,0,0,0,181.07,76.16Zm-8.76-14,1.59-.23.79-.12a1.84,1.84,0,0,1,1.59.29,2.53,2.53,0,0,1,.44,1.73,2.85,2.85,0,0,1-.55,1.76,2.19,2.19,0,0,1-1.6.82l-.74.07-1.52.14Z"}),Object(c["i"])("path",{class:"cls-2",d:"M193.42,54.27a.14.14,0,0,0-.11,0c-3.73,1.19-7.54,2.29-11.33,3.25a.12.12,0,0,0-.09.12v2.83a.12.12,0,0,0,.14.09c1.21-.25,2.51-.53,3.84-.83V76.63a.12.12,0,0,0,.12.12h3.41a.12.12,0,0,0,.12-.12V58.82c1.27-.33,2.56-.69,3.82-1h0a.12.12,0,0,0,.09-.11V54.37A.12.12,0,0,0,193.42,54.27Z"}),Object(c["i"])("path",{class:"cls-2",d:"M165,68.54c-.59-2.34-1.2-4.67-1.8-7l-.23-.9a.14.14,0,0,0-.13-.09c-1.62.15-3.26.26-4.64.36a.13.13,0,0,0-.11.09c-.33,1.21-.66,2.42-1,3.62q-.58,2.13-1.17,4.23L154.46,74c-.24.86-.48,1.71-.71,2.56a0,0,0,0,0,0,0,.12.12,0,0,0,.12.12h3.6a.12.12,0,0,0,.11-.09l.48-2,.45-1.88,3.8-.07.12.58c.1.44.19.88.28,1.32.14.65.28,1.33.43,2a.12.12,0,0,0,.11.09h3.67a.11.11,0,0,0,.09,0,.12.12,0,0,0,0-.1l-.73-2.87Zm-4.55-5.05c.06.52.13,1.05.2,1.58.07.37.15.73.22,1.09.11.51.22,1,.32,1.53s.24,1.17.37,1.75c.05.25.1.5.16.74l-2.65.08.09-.4c.16-.7.33-1.4.48-2.1.21-.88.41-1.77.63-2.67C160.31,64.55,160.36,64,160.43,63.49Z"}),Object(c["i"])("path",{class:"cls-2",d:"M146.79,74.3h-6.25v-13a.11.11,0,0,0-.11-.12L137.05,61a.14.14,0,0,0-.09,0,.18.18,0,0,0,0,.09v15.5h0a.12.12,0,0,0,.12.12h9.75a.12.12,0,0,0,.12-.12V74.42A.13.13,0,0,0,146.79,74.3Z"}),Object(c["i"])("g",{id:"Grupo_14","data-name":"Grupo 14"},[Object(c["i"])("path",{id:"Trazado_51","data-name":"Trazado 51",class:"cls-1",d:"M0,82.2H211.62v3.21H0Zm0-3.75H211.62v2.29H0Z"})]),Object(c["i"])("polygon",{class:"cls-2",points:"22.59 95.94 19.84 95.94 19.84 92.52 17.89 92.52 17.89 101.7 19.84 101.7 19.84 97.86 22.59 97.86 22.59 101.7 24.55 101.7 24.55 92.52 22.59 92.52 22.59 95.94"}),Object(c["i"])("polygon",{class:"cls-2",points:"28.22 97.87 31.2 97.87 31.19 95.99 28.21 95.99 28.21 94.41 31.37 94.41 31.37 92.52 26.27 92.52 26.27 101.7 31.54 101.7 31.54 99.81 28.22 99.81 28.22 97.87"}),Object(c["i"])("path",{class:"cls-2",d:"M37.66,96.44c0,.41,0,.8,0,1.16l-.41-.7-2.6-4.38H32.83v9.18h1.89v-4c0-.46,0-.88,0-1.28l.51.89,2.58,4.39h1.75V92.52H37.66Z"}),Object(c["i"])("path",{class:"cls-2",d:"M46.64,98.91a2.65,2.65,0,0,0-.71-1.56,2.71,2.71,0,0,0,1-2.15,2.65,2.65,0,0,0-.79-2,3.41,3.41,0,0,0-2.51-.77,9.45,9.45,0,0,0-2,.18l-.39.07v9h1.95V98.16h.44c.59,0,.88.19,1.07,1.17a12.14,12.14,0,0,0,.54,2l.12.32h2L47.2,101A13,13,0,0,1,46.64,98.91ZM45,95.3c0,.66-.47,1.06-1.25,1.06h-.53V94.3a3.91,3.91,0,0,1,.49,0C45,94.29,45,95,45,95.3Z"}),Object(c["i"])("path",{class:"cls-2",d:"M51.45,95.33c-.08.16-.15.32-.22.47l-.35-.75-1.22-2.53H47.44l2.75,5.33v3.85h2V97.85l2.92-5.33H52.82Z"}),Object(c["i"])("path",{class:"cls-2",d:"M64.65,93.25a3.47,3.47,0,0,0-2.47-.79,11.69,11.69,0,0,0-2,.16l-.4.07v9h2V98.5h.29a3.56,3.56,0,0,0,2.73-1.07,3,3,0,0,0,.71-2.06A2.8,2.8,0,0,0,64.65,93.25Zm-1.1,2.15c0,.83-.48,1.25-1.44,1.25h-.34V94.31h.45C63.55,94.3,63.55,95.13,63.55,95.4Z"}),Object(c["i"])("path",{class:"cls-2",d:"M68,92.52l-2.93,9.18h2l.79-2.57h2l.82,2.57h2.07l-2.94-9.18Zm.43,4.78.49-1.54.49,1.54Z"}),Object(c["i"])("polygon",{class:"cls-2",points:"80.57 93.82 80.57 92.52 74.43 92.52 74.43 94.41 77.93 94.41 74.06 100.43 74.06 101.7 80.62 101.7 80.62 99.81 76.73 99.81 80.57 93.82"}),Object(c["i"])("rect",{class:"cls-2",x:"84.18",y:"97.02",width:"3.77",height:"1.79"}),Object(c["i"])("path",{class:"cls-2",d:"M96.54,93.25a3.46,3.46,0,0,0-2.46-.79,11.69,11.69,0,0,0-2,.16l-.4.07v9h2V98.5H94a3.56,3.56,0,0,0,2.73-1.07,3,3,0,0,0,.72-2.06A2.78,2.78,0,0,0,96.54,93.25ZM95.45,95.4c0,.83-.48,1.25-1.44,1.25h-.34V94.31h.45C95.45,94.3,95.45,95.13,95.45,95.4Z"}),Object(c["i"])("path",{class:"cls-2",d:"M99.94,92.52,97,101.7h2l.8-2.57h2l.82,2.57h2.07l-2.94-9.18Zm.43,4.78.49-1.54.49,1.54Z"}),Object(c["i"])("path",{class:"cls-2",d:"M108.68,96.1c-1.14-.47-1.22-.75-1.22-1.12s.25-.72,1-.72a2.43,2.43,0,0,1,1.23.33l.5.29.59-1.84-.37-.2a3.63,3.63,0,0,0-1.86-.45l-.21,0a2.65,2.65,0,0,0-1.94.75,2.83,2.83,0,0,0-.86,2c0,1.29.76,2.2,2.33,2.79,1,.43,1.14.77,1.14,1.16,0,.81-.79.9-1.12.9a3,3,0,0,1-1.53-.46l-.54-.34-.53,1.88.33.2a4.31,4.31,0,0,0,2.14.59A2.86,2.86,0,0,0,110.94,99,3,3,0,0,0,108.68,96.1Z"}),Object(c["i"])("rect",{class:"cls-2",x:"111.96",y:"92.52",width:"1.95",height:"9.18"}),Object(c["i"])("path",{class:"cls-2",d:"M119.13,92.38h0c-2.38,0-4,2-4,4.8s1.61,4.65,3.92,4.65c2,0,4-1.48,4-4.8C123.06,94.29,121.44,92.39,119.13,92.38Zm0,1.87c1.35,0,2,1.46,2,2.82s-.61,2.9-2,2.9-2-1.46-2-2.81S117.62,94.25,119.08,94.25Z"}),Object(c["i"])("path",{class:"cls-2",d:"M129.39,96.44V97.6c-.13-.23-.26-.47-.4-.7l-2.6-4.38h-1.83v9.18h1.89v-4c0-.46,0-.89,0-1.28l.51.89,2.58,4.39h1.75V92.52h-1.89Z"}),Object(c["i"])("path",{class:"cls-2",d:"M138.9,95.31c-.09.17-.16.33-.24.49l-.35-.75-1.21-2.53h-2.23l2.75,5.33v3.85h2V97.85l2.92-5.33h-2.24Z"}),Object(c["i"])("path",{class:"cls-2",d:"M148.53,92.46a13,13,0,0,0-2.16.18l-.41.06v8.92l.43,0a14.17,14.17,0,0,0,1.82.1l.38,0a5,5,0,0,0,3.4-1.36A4.93,4.93,0,0,0,153.21,97,4.4,4.4,0,0,0,152,93.59,4.66,4.66,0,0,0,148.53,92.46Zm-.11,7.46a4.34,4.34,0,0,1-.51,0V94.33q.3,0,.6,0A2.38,2.38,0,0,1,151.23,97a2.91,2.91,0,0,1,0,.59h0A2.53,2.53,0,0,1,148.42,99.92Z"}),Object(c["i"])("polygon",{class:"cls-2",points:"156.43 97.87 159.41 97.87 159.4 95.99 156.42 95.99 156.42 94.41 159.58 94.41 159.58 92.52 154.48 92.52 154.48 101.7 159.75 101.7 159.75 99.81 156.43 99.81 156.43 97.87"}),Object(c["i"])("polygon",{class:"cls-2",points:"167.71 92.52 161.07 92.52 161.07 94.42 163.41 94.42 163.41 101.7 165.37 101.7 165.37 94.42 167.71 94.42 167.71 92.52"}),Object(c["i"])("path",{class:"cls-2",d:"M169.77,92.52l-2.93,9.18h2l.8-2.57h2l.82,2.57h2.06l-2.94-9.18Zm.43,4.78.49-1.53.49,1.53Z"}),Object(c["i"])("polygon",{class:"cls-2",points:"177.48 92.52 175.53 92.52 175.53 101.7 180.76 101.7 180.76 99.81 177.48 99.81 177.48 92.52"}),Object(c["i"])("polygon",{class:"cls-2",points:"183.81 92.52 181.86 92.52 181.86 101.7 187.09 101.7 187.09 99.81 183.81 99.81 183.81 92.52"}),Object(c["i"])("polygon",{class:"cls-2",points:"190.14 99.81 190.14 97.87 193.13 97.87 193.12 95.99 190.14 95.99 190.14 94.41 193.3 94.41 193.3 92.52 188.2 92.52 188.2 101.7 193.47 101.7 193.47 99.81 190.14 99.81"})])])],-1);function _(t,a){return Object(c["r"])(),Object(c["e"])("svg",Z,[M])}const x={};x.render=_;var V=x,A={xmlns:"http://www.w3.org/2000/svg",width:"10.604",height:"19.799",viewBox:"0 0 10.604 19.799"},C=Object(c["i"])("g",{id:"Grupo_83","data-name":"Grupo 83",transform:"translate(0 0)"},[Object(c["i"])("path",{id:"Trazado_117","data-name":"Trazado 117",d:"M764.057,107.236l.549-3.584h-3.437v-2.325a1.791,1.791,0,0,1,2.02-1.936h1.563V96.341a19.047,19.047,0,0,0-2.775-.242c-2.831,0-4.682,1.716-4.682,4.823v2.731h-3.147v3.584h3.147V115.9h3.874v-8.662Z",transform:"translate(-754.148 -96.099)",fill:"#fff"})],-1);function H(t,a){return Object(c["r"])(),Object(c["e"])("svg",A,[C])}const G={};G.render=H;var k=G,S={id:"Grupo_84","data-name":"Grupo 84",xmlns:"http://www.w3.org/2000/svg",width:"22.026",height:"22.079",viewBox:"0 0 22.026 22.079"},z=Object(c["i"])("g",{id:"Grupo_64","data-name":"Grupo 64",transform:"translate(0)"},[Object(c["i"])("path",{id:"Trazado_108","data-name":"Trazado 108",d:"M745.975,391.149l1.583-5.906a10.928,10.928,0,1,1,4.353,4.316Zm6.232-3.8.374.223a8.872,8.872,0,1,0-3.036-3.008l.229.376-.884,3.3Z",transform:"translate(-745.975 -369.07)",fill:"#fff"}),Object(c["i"])("path",{id:"Trazado_109","data-name":"Trazado 109",d:"M764.675,385.06a1.836,1.836,0,0,0-1.562-.352c-.406.166-.665.8-.927,1.126a.389.389,0,0,1-.5.109,7.077,7.077,0,0,1-3.53-3.024.433.433,0,0,1,.055-.592,2.381,2.381,0,0,0,.641-1.041,2.278,2.278,0,0,0-.286-1.232,2.923,2.923,0,0,0-.91-1.371,1.247,1.247,0,0,0-1.354.2,2.75,2.75,0,0,0-.953,2.178,3.1,3.1,0,0,0,.085.691,5.743,5.743,0,0,0,.663,1.528,12.177,12.177,0,0,0,.692,1.052,10.679,10.679,0,0,0,3,2.786,9.075,9.075,0,0,0,1.872.891,4.16,4.16,0,0,0,2.179.344,2.639,2.639,0,0,0,1.976-1.47,1.274,1.274,0,0,0,.091-.75C765.792,385.617,765.093,385.31,764.675,385.06Z",transform:"translate(-749.498 -372.638)",fill:"#fff","fill-rule":"evenodd"})],-1);function T(t,a){return Object(c["r"])(),Object(c["e"])("svg",S,[z])}const L={};L.render=T;var E=L,F=Object(c["G"])("data-v-25357280");Object(c["u"])("data-v-25357280");var I={class:"galeria-side-container"},P={class:"galeria-side bg-dark p-3"},B=Object(c["i"])("span",{class:"mx-2"},"GALERÍA",-1),q=Object(c["i"])("span",{class:"cuadrado mx-2"},[Object(c["i"])("span",{class:"p-1"},[Object(c["i"])("span",{class:"cuadrado-movil"}),Object(c["i"])("span",{class:"cuadrado-movil"})])],-1);Object(c["s"])();var $=F((function(t,a,e,l,s,n){var i=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["e"])("div",I,[Object(c["i"])("div",P,[Object(c["i"])(i,{to:"/gallery"},{default:F((function(){return[B,q]})),_:1})])])})),N={name:"GallerySide"};e("e657");N.render=$,N.__scopeId="data-v-25357280";var D=N,W={name:"Header",components:{LogoIcon:V,FacebookSimpleIcon:k,WhatsappSimpleIcon:E,GallerySide:D},data:function(){return{collapsed:!1}},methods:{toggleClass:function(){this.collapsed=!this.collapsed}}};e("f0e5");W.render=w;var J=W,K=Object(c["G"])("data-v-391201d2");Object(c["u"])("data-v-391201d2");var R={class:"social-side-container"},U=Object(c["i"])("div",{class:"facemetal p-2"},[Object(c["i"])("a",{href:"https://www.facebook.com/pages/category/Arts---Crafts-Store/Metal-Art-433001477462190/",target:"_blank"},[Object(c["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 74 74",width:"40"},[Object(c["i"])("defs"),Object(c["i"])("g",{id:"Capa_2","data-name":"Capa 2"},[Object(c["i"])("g",{id:"Capa_1-2","data-name":"Capa 1"},[Object(c["i"])("g",{id:"Grupo_66","data-name":"Grupo 66"},[Object(c["i"])("circle",{id:"Elipse_3","data-name":"Elipse 3",class:"cls-1",cx:"37",cy:"37",r:"37"}),Object(c["i"])("path",{id:"Trazado_117","data-name":"Trazado 117",class:"cls-2",d:"M46.34,39.51l1.12-7.27h-7V27.53c0-2,1-3.93,4.1-3.93h3.17V17.42a38.1,38.1,0,0,0-5.63-.49c-5.74,0-9.49,3.48-9.49,9.78v5.53H26.25v7.27h6.39V57.07h7.85V39.51Z"})])])])])])],-1),Y=Object(c["i"])("div",{class:"whatsmetal p-2"},[Object(c["i"])("a",{href:"https://wa.link/go0slp",target:"_blank"},[Object(c["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 74 74"},[Object(c["i"])("defs"),Object(c["i"])("g",{id:"Capa_2","data-name":"Capa 2"},[Object(c["i"])("g",{id:"Capa_1-2","data-name":"Capa 1"},[Object(c["i"])("g",{id:"Grupo_65","data-name":"Grupo 65"},[Object(c["i"])("circle",{id:"Elipse_3","data-name":"Elipse 3",class:"cls-1",cx:"37",cy:"37",r:"37"}),Object(c["i"])("g",{id:"Grupo_64","data-name":"Grupo 64"},[Object(c["i"])("path",{id:"Trazado_108","data-name":"Trazado 108",class:"cls-2",d:"M14.67,59.38l3.21-12a22.17,22.17,0,1,1,8.83,8.75Zm12.64-7.71.75.45A18,18,0,1,0,21.91,46l.46.77-1.79,6.68Z"}),Object(c["i"])("path",{id:"Trazado_109","data-name":"Trazado 109",class:"cls-3",d:"M45.44,39.8c-.91-.54-2.09-1.15-3.16-.71-.82.33-1.35,1.62-1.88,2.28a.78.78,0,0,1-1,.22,14.36,14.36,0,0,1-7.16-6.13.87.87,0,0,1,.11-1.2,4.84,4.84,0,0,0,1.3-2.11,4.64,4.64,0,0,0-.58-2.5c-.43-.93-.91-2.26-1.85-2.78a2.53,2.53,0,0,0-2.74.41,5.55,5.55,0,0,0-1.93,4.41,6,6,0,0,0,.17,1.4A11.55,11.55,0,0,0,28,36.19a23.7,23.7,0,0,0,1.4,2.13A21.72,21.72,0,0,0,35.53,44a17.9,17.9,0,0,0,3.8,1.81,8.35,8.35,0,0,0,4.41.7,5.35,5.35,0,0,0,4-3A2.57,2.57,0,0,0,47.93,42C47.71,40.93,46.29,40.31,45.44,39.8Z"})])])])])])])],-1);Object(c["s"])();var Q=K((function(t,a,e,l,s,n){return Object(c["r"])(),Object(c["e"])("div",R,[U,Y])})),X={name:"SocialSide"};e("78e0");X.render=Q,X.__scopeId="data-v-391201d2";var tt=X,at=Object(c["G"])("data-v-7d3b5887");Object(c["u"])("data-v-7d3b5887");var et={class:"page-footer bg-dark text-white container-fluid px-2 p-md-1"},ct={class:"row my-md-5 mx-0"},lt=Object(c["i"])("div",{class:"col col-12 col-sm-4 text-center border-bottom"},[Object(c["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 211.62 101.83",width:"120"},[Object(c["i"])("g",{id:"Capa_2","data-name":"Capa 2"},[Object(c["i"])("g",{id:"Capa_1-2","data-name":"Capa 1"},[Object(c["i"])("g",{id:"Grupo_22","data-name":"Grupo 22"},[Object(c["i"])("g",{id:"Grupo_11","data-name":"Grupo 11"},[Object(c["i"])("path",{id:"Trazado_48","data-name":"Trazado 48",class:"cls-1",d:"M77.56,46.18A136.62,136.62,0,0,0,95.11,53l.2,23.64H82.67l-.24-21c-1.36-.45-3.21-1.11-4.87-1.69ZM68.75,76.63H64.08l-.19-27.79c-2.5-1-5.29-2.08-7.93-3.14V35.27c4.47,2.4,7.66,4.08,12,6.32ZM17.89,20.47H31.36c1.33.88,2.8,1.82,4.1,2.64l.12,13.69C34,36,32.81,35.5,30.92,34.58l.37,42.05h-13Zm32.35-4.71A82.35,82.35,0,0,0,68.55,31.63l1.1,45h4.8L73.3,28.09C63.63,21.69,57.08,11.37,51.38,0H36.54l1.14,76.63h13.7Z"})]),Object(c["i"])("path",{class:"cls-2",d:"M131.16,60.68a.12.12,0,0,0-.1-.09c-1.56-.14-3.15-.32-4.64-.49a.13.13,0,0,0-.13.09c-.74,2.71-1.46,5.37-2.16,8.07-.77,2.94-1.46,5.6-2.16,8.35a.12.12,0,0,0,0,.1.13.13,0,0,0,.1,0h3.6a.12.12,0,0,0,.11-.09l.18-.75.3-1.31c.11-.49.22-1,.34-1.48l.11-.48.85,0,2.94.08.16.73.24,1.19c.13.63.28,1.27.42,1.9l0,.1a.12.12,0,0,0,.12.09h3.66a.11.11,0,0,0,.09,0,.11.11,0,0,0,0-.1c-.68-2.56-1.38-5.22-2.05-7.87S131.84,63.39,131.16,60.68Zm-1.24,9.42L127.26,70h0c.2-.85.39-1.71.58-2.56s.42-1.78.64-2.69c.05-.53.11-1.07.17-1.6.07.55.13,1.11.2,1.67s.17.85.25,1.28.2,1,.29,1.45.25,1.23.37,1.85C129.81,69.62,129.86,69.86,129.92,70.1Z"}),Object(c["i"])("path",{class:"cls-2",d:"M122.87,62.32a.12.12,0,0,0,0-.09v-2.5a.12.12,0,0,0-.1-.12c-3.82-.59-7.7-1.33-11.33-2.14h0a.12.12,0,0,0-.12.12v2.78a.12.12,0,0,0,.1.12l3.89.73V76.63a.12.12,0,0,0,.12.12h3.4a.12.12,0,0,0,.12-.12V61.82c1.2.17,2.44.35,3.81.52A.1.1,0,0,0,122.87,62.32Z"}),Object(c["i"])("path",{class:"cls-2",d:"M110,73.69,104,73.44v-6.3c1.79.24,3.6.48,5.54.71a.09.09,0,0,0,.09,0,.13.13,0,0,0,0-.09V64.9a.12.12,0,0,0-.1-.12c-2-.32-3.83-.63-5.57-.94V58.75c1.94.49,4,1,6,1.43a.1.1,0,0,0,.09,0,.14.14,0,0,0,.05-.1V57.19a.12.12,0,0,0-.09-.11c-3.18-.69-6.33-1.46-9.59-2.38a.11.11,0,0,0-.11,0,.12.12,0,0,0,0,.1V76.63a.12.12,0,0,0,.12.12H110a.12.12,0,0,0,.11-.13V73.81A.11.11,0,0,0,110,73.69Z"}),Object(c["i"])("path",{class:"cls-2",d:"M181.07,76.16c-.09,0-.37-.1-.51-1.4a32.73,32.73,0,0,1-.22-3.4c0-.55,0-1,0-1.45a4.79,4.79,0,0,0-.25-1.24,2.12,2.12,0,0,0-.84-1,2.53,2.53,0,0,0-1.05-.39,3.24,3.24,0,0,0,1.67-1.51,6.57,6.57,0,0,0,.7-3.43,3.7,3.7,0,0,0-1.18-2.88c-.87-.69-2.18-.87-4-.53-2.24.41-4.5.74-6.61,1a.12.12,0,0,0-.1.12v16.6h0a.11.11,0,0,0,.11.12h3.43a.12.12,0,0,0,.12-.12V69.42l1.09-.07.6,0c1.1-.07,1.86.07,2.17.42a2.64,2.64,0,0,1,.5,1.8c0,.13,0,.26,0,.4a7.48,7.48,0,0,0,0,.82c0,.16,0,.34.06.53a13.43,13.43,0,0,1,.14,1.46,17.71,17.71,0,0,0,.14,1.92.12.12,0,0,0,.11.1h3.95a.12.12,0,0,0,.12-.12v-.35a.18.18,0,0,0,0-.09A.11.11,0,0,0,181.07,76.16Zm-8.76-14,1.59-.23.79-.12a1.84,1.84,0,0,1,1.59.29,2.53,2.53,0,0,1,.44,1.73,2.85,2.85,0,0,1-.55,1.76,2.19,2.19,0,0,1-1.6.82l-.74.07-1.52.14Z"}),Object(c["i"])("path",{class:"cls-2",d:"M193.42,54.27a.14.14,0,0,0-.11,0c-3.73,1.19-7.54,2.29-11.33,3.25a.12.12,0,0,0-.09.12v2.83a.12.12,0,0,0,.14.09c1.21-.25,2.51-.53,3.84-.83V76.63a.12.12,0,0,0,.12.12h3.41a.12.12,0,0,0,.12-.12V58.82c1.27-.33,2.56-.69,3.82-1h0a.12.12,0,0,0,.09-.11V54.37A.12.12,0,0,0,193.42,54.27Z"}),Object(c["i"])("path",{class:"cls-2",d:"M165,68.54c-.59-2.34-1.2-4.67-1.8-7l-.23-.9a.14.14,0,0,0-.13-.09c-1.62.15-3.26.26-4.64.36a.13.13,0,0,0-.11.09c-.33,1.21-.66,2.42-1,3.62q-.58,2.13-1.17,4.23L154.46,74c-.24.86-.48,1.71-.71,2.56a0,0,0,0,0,0,0,.12.12,0,0,0,.12.12h3.6a.12.12,0,0,0,.11-.09l.48-2,.45-1.88,3.8-.07.12.58c.1.44.19.88.28,1.32.14.65.28,1.33.43,2a.12.12,0,0,0,.11.09h3.67a.11.11,0,0,0,.09,0,.12.12,0,0,0,0-.1l-.73-2.87Zm-4.55-5.05c.06.52.13,1.05.2,1.58.07.37.15.73.22,1.09.11.51.22,1,.32,1.53s.24,1.17.37,1.75c.05.25.1.5.16.74l-2.65.08.09-.4c.16-.7.33-1.4.48-2.1.21-.88.41-1.77.63-2.67C160.31,64.55,160.36,64,160.43,63.49Z"}),Object(c["i"])("path",{class:"cls-2",d:"M146.79,74.3h-6.25v-13a.11.11,0,0,0-.11-.12L137.05,61a.14.14,0,0,0-.09,0,.18.18,0,0,0,0,.09v15.5h0a.12.12,0,0,0,.12.12h9.75a.12.12,0,0,0,.12-.12V74.42A.13.13,0,0,0,146.79,74.3Z"}),Object(c["i"])("g",{id:"Grupo_14","data-name":"Grupo 14"},[Object(c["i"])("path",{id:"Trazado_51","data-name":"Trazado 51",class:"cls-1",d:"M0,82.2H211.62v3.21H0Zm0-3.75H211.62v2.29H0Z"})]),Object(c["i"])("polygon",{class:"cls-2",points:"22.59 95.94 19.84 95.94 19.84 92.52 17.89 92.52 17.89 101.7 19.84 101.7 19.84 97.86 22.59 97.86 22.59 101.7 24.55 101.7 24.55 92.52 22.59 92.52 22.59 95.94"}),Object(c["i"])("polygon",{class:"cls-2",points:"28.22 97.87 31.2 97.87 31.19 95.99 28.21 95.99 28.21 94.41 31.37 94.41 31.37 92.52 26.27 92.52 26.27 101.7 31.54 101.7 31.54 99.81 28.22 99.81 28.22 97.87"}),Object(c["i"])("path",{class:"cls-2",d:"M37.66,96.44c0,.41,0,.8,0,1.16l-.41-.7-2.6-4.38H32.83v9.18h1.89v-4c0-.46,0-.88,0-1.28l.51.89,2.58,4.39h1.75V92.52H37.66Z"}),Object(c["i"])("path",{class:"cls-2",d:"M46.64,98.91a2.65,2.65,0,0,0-.71-1.56,2.71,2.71,0,0,0,1-2.15,2.65,2.65,0,0,0-.79-2,3.41,3.41,0,0,0-2.51-.77,9.45,9.45,0,0,0-2,.18l-.39.07v9h1.95V98.16h.44c.59,0,.88.19,1.07,1.17a12.14,12.14,0,0,0,.54,2l.12.32h2L47.2,101A13,13,0,0,1,46.64,98.91ZM45,95.3c0,.66-.47,1.06-1.25,1.06h-.53V94.3a3.91,3.91,0,0,1,.49,0C45,94.29,45,95,45,95.3Z"}),Object(c["i"])("path",{class:"cls-2",d:"M51.45,95.33c-.08.16-.15.32-.22.47l-.35-.75-1.22-2.53H47.44l2.75,5.33v3.85h2V97.85l2.92-5.33H52.82Z"}),Object(c["i"])("path",{class:"cls-2",d:"M64.65,93.25a3.47,3.47,0,0,0-2.47-.79,11.69,11.69,0,0,0-2,.16l-.4.07v9h2V98.5h.29a3.56,3.56,0,0,0,2.73-1.07,3,3,0,0,0,.71-2.06A2.8,2.8,0,0,0,64.65,93.25Zm-1.1,2.15c0,.83-.48,1.25-1.44,1.25h-.34V94.31h.45C63.55,94.3,63.55,95.13,63.55,95.4Z"}),Object(c["i"])("path",{class:"cls-2",d:"M68,92.52l-2.93,9.18h2l.79-2.57h2l.82,2.57h2.07l-2.94-9.18Zm.43,4.78.49-1.54.49,1.54Z"}),Object(c["i"])("polygon",{class:"cls-2",points:"80.57 93.82 80.57 92.52 74.43 92.52 74.43 94.41 77.93 94.41 74.06 100.43 74.06 101.7 80.62 101.7 80.62 99.81 76.73 99.81 80.57 93.82"}),Object(c["i"])("rect",{class:"cls-2",x:"84.18",y:"97.02",width:"3.77",height:"1.79"}),Object(c["i"])("path",{class:"cls-2",d:"M96.54,93.25a3.46,3.46,0,0,0-2.46-.79,11.69,11.69,0,0,0-2,.16l-.4.07v9h2V98.5H94a3.56,3.56,0,0,0,2.73-1.07,3,3,0,0,0,.72-2.06A2.78,2.78,0,0,0,96.54,93.25ZM95.45,95.4c0,.83-.48,1.25-1.44,1.25h-.34V94.31h.45C95.45,94.3,95.45,95.13,95.45,95.4Z"}),Object(c["i"])("path",{class:"cls-2",d:"M99.94,92.52,97,101.7h2l.8-2.57h2l.82,2.57h2.07l-2.94-9.18Zm.43,4.78.49-1.54.49,1.54Z"}),Object(c["i"])("path",{class:"cls-2",d:"M108.68,96.1c-1.14-.47-1.22-.75-1.22-1.12s.25-.72,1-.72a2.43,2.43,0,0,1,1.23.33l.5.29.59-1.84-.37-.2a3.63,3.63,0,0,0-1.86-.45l-.21,0a2.65,2.65,0,0,0-1.94.75,2.83,2.83,0,0,0-.86,2c0,1.29.76,2.2,2.33,2.79,1,.43,1.14.77,1.14,1.16,0,.81-.79.9-1.12.9a3,3,0,0,1-1.53-.46l-.54-.34-.53,1.88.33.2a4.31,4.31,0,0,0,2.14.59A2.86,2.86,0,0,0,110.94,99,3,3,0,0,0,108.68,96.1Z"}),Object(c["i"])("rect",{class:"cls-2",x:"111.96",y:"92.52",width:"1.95",height:"9.18"}),Object(c["i"])("path",{class:"cls-2",d:"M119.13,92.38h0c-2.38,0-4,2-4,4.8s1.61,4.65,3.92,4.65c2,0,4-1.48,4-4.8C123.06,94.29,121.44,92.39,119.13,92.38Zm0,1.87c1.35,0,2,1.46,2,2.82s-.61,2.9-2,2.9-2-1.46-2-2.81S117.62,94.25,119.08,94.25Z"}),Object(c["i"])("path",{class:"cls-2",d:"M129.39,96.44V97.6c-.13-.23-.26-.47-.4-.7l-2.6-4.38h-1.83v9.18h1.89v-4c0-.46,0-.89,0-1.28l.51.89,2.58,4.39h1.75V92.52h-1.89Z"}),Object(c["i"])("path",{class:"cls-2",d:"M138.9,95.31c-.09.17-.16.33-.24.49l-.35-.75-1.21-2.53h-2.23l2.75,5.33v3.85h2V97.85l2.92-5.33h-2.24Z"}),Object(c["i"])("path",{class:"cls-2",d:"M148.53,92.46a13,13,0,0,0-2.16.18l-.41.06v8.92l.43,0a14.17,14.17,0,0,0,1.82.1l.38,0a5,5,0,0,0,3.4-1.36A4.93,4.93,0,0,0,153.21,97,4.4,4.4,0,0,0,152,93.59,4.66,4.66,0,0,0,148.53,92.46Zm-.11,7.46a4.34,4.34,0,0,1-.51,0V94.33q.3,0,.6,0A2.38,2.38,0,0,1,151.23,97a2.91,2.91,0,0,1,0,.59h0A2.53,2.53,0,0,1,148.42,99.92Z"}),Object(c["i"])("polygon",{class:"cls-2",points:"156.43 97.87 159.41 97.87 159.4 95.99 156.42 95.99 156.42 94.41 159.58 94.41 159.58 92.52 154.48 92.52 154.48 101.7 159.75 101.7 159.75 99.81 156.43 99.81 156.43 97.87"}),Object(c["i"])("polygon",{class:"cls-2",points:"167.71 92.52 161.07 92.52 161.07 94.42 163.41 94.42 163.41 101.7 165.37 101.7 165.37 94.42 167.71 94.42 167.71 92.52"}),Object(c["i"])("path",{class:"cls-2",d:"M169.77,92.52l-2.93,9.18h2l.8-2.57h2l.82,2.57h2.06l-2.94-9.18Zm.43,4.78.49-1.53.49,1.53Z"}),Object(c["i"])("polygon",{class:"cls-2",points:"177.48 92.52 175.53 92.52 175.53 101.7 180.76 101.7 180.76 99.81 177.48 99.81 177.48 92.52"}),Object(c["i"])("polygon",{class:"cls-2",points:"183.81 92.52 181.86 92.52 181.86 101.7 187.09 101.7 187.09 99.81 183.81 99.81 183.81 92.52"}),Object(c["i"])("polygon",{class:"cls-2",points:"190.14 99.81 190.14 97.87 193.13 97.87 193.12 95.99 190.14 95.99 190.14 94.41 193.3 94.41 193.3 92.52 188.2 92.52 188.2 101.7 193.47 101.7 193.47 99.81 190.14 99.81"})])])])]),Object(c["i"])("p",{class:"copyright text-center d-none d-sm-block"},"Copyright © 2021")],-1),st={class:"col col-12 col-sm-3 py-5 border-bottom"},nt={class:"row"},it={class:"col col-6 col-sm-12"},ot={class:"my-auto"},rt=Object(c["h"])("Inicio"),dt={class:"col col-6 col-sm-12"},bt={class:"my-auto"},ht=Object(c["h"])("Galería"),ut={class:"col col-6 col-sm-12"},pt={class:"my-auto"},jt=Object(c["h"])("La marca"),Ot={class:"col col-6 col-sm-12"},mt={class:"my-auto"},vt=Object(c["h"])("Aprende"),ft={class:"col col-6 col-sm-12"},gt={class:"my-auto"},yt=Object(c["h"])("Contacto"),wt=Object(c["i"])("div",{class:"col col-12 col-sm-5 px-4 py-5 border-bottom"},[Object(c["i"])("ul",{class:"justify-content-between"},[Object(c["i"])("li",null,"+51 959856919"),Object(c["i"])("li",null,"henry.paz.arte@gmail.com"),Object(c["i"])("li",null,[Object(c["h"])("Calle Ampatacocha 217"),Object(c["i"])("br"),Object(c["h"])("Yanahuara - Arequipa - Perú")])])],-1),Zt=Object(c["i"])("div",{class:"col col-12 d-sm-none pt-4"},[Object(c["i"])("p",{class:"copyright text-center"},"Copyright © 2021")],-1);Object(c["s"])();var Mt=at((function(t,a,e,l,s,n){var i=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["e"])("footer",et,[Object(c["i"])("div",ct,[lt,Object(c["i"])("div",st,[Object(c["i"])("ul",null,[Object(c["i"])("div",nt,[Object(c["i"])("div",it,[Object(c["i"])("li",ot,[Object(c["i"])(i,{to:"/",class:"nav-link text-white"},{default:at((function(){return[rt]})),_:1})])]),Object(c["i"])("div",dt,[Object(c["i"])("li",bt,[Object(c["i"])(i,{to:"/gallery",class:"nav-link text-white"},{default:at((function(){return[ht]})),_:1})])]),Object(c["i"])("div",ut,[Object(c["i"])("li",pt,[Object(c["i"])(i,{to:"/about",class:"nav-link text-white"},{default:at((function(){return[jt]})),_:1})])]),Object(c["i"])("div",Ot,[Object(c["i"])("li",mt,[Object(c["i"])(i,{to:"/",class:"nav-link disable text-white"},{default:at((function(){return[vt]})),_:1})])]),Object(c["i"])("div",ft,[Object(c["i"])("li",gt,[Object(c["i"])(i,{to:"/contact",class:"nav-link text-white"},{default:at((function(){return[yt]})),_:1})])])])])]),wt,Zt])])})),_t={name:"Footer"};e("2373");_t.render=Mt,_t.__scopeId="data-v-7d3b5887";var xt=_t,Vt={name:"app",data:function(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}},components:{Header:J,GallerySide:D,SocialSide:tt,Footer:xt},created:function(){window.addEventListener("resize",this.getDimensions)},methods:{getDimensions:function(){this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight}},computed:{hasHeader:function(){return"Home"!==this.$route.name},hasGallerySide:function(){return"Gallery"!==this.$route.name&&"Home"!==this.$route.name&&this.width>=576},hasSocialSide:function(){return"Home"!==this.$route.name},hasFooter:function(){return"Home"!==this.$route.name}}};e("49bb");Vt.render=l;var At=Vt,Ct=e("5502"),Ht=Object(Ct["a"])({state:{},mutations:{},actions:{},modules:{}}),Gt=(e("d3b7"),e("3ca3"),e("ddb0"),e("6c02")),kt=[{path:"/",name:"Home",component:function(){return e.e("home").then(e.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/gallery/:cat?",name:"Gallery",component:function(){return e.e("gallery").then(e.bind(null,"9772"))}},{path:"/contact",name:"Contact",component:function(){return e.e("contact").then(e.bind(null,"b8fa"))}}],St=Object(Gt["a"])({mode:"history",history:Object(Gt["b"])("/MetalArt/"),routes:kt}),zt=St;Object(c["d"])(At).use(zt).use(Ht).mount("#app")},"78e0":function(t,a,e){"use strict";e("2a50")},bd52:function(t,a,e){},e657:function(t,a,e){"use strict";e("444d")},f0e5:function(t,a,e){"use strict";e("4140")},fba8:function(t,a,e){}});
//# sourceMappingURL=app.d5ba1b7c.js.map