(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gallery"],{"057f":function(t,e,i){var o=i("fc6a"),c=i("241c").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return c(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?s(t):c(o(t))}},"0b42":function(t,e,i){var o=i("861d"),c=i("e8b5"),r=i("b622"),a=r("species");t.exports=function(t){var e;return c(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!c(e.prototype)?o(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"1dde":function(t,e,i){var o=i("d039"),c=i("b622"),r=i("2d00"),a=c("species");t.exports=function(t){return r>=51||!o((function(){var e=[],i=e.constructor={};return i[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"236d":function(t,e,i){"use strict";i("4943")},"428f":function(t,e,i){var o=i("da84");t.exports=o},4943:function(t,e,i){},"4df4":function(t,e,i){"use strict";var o=i("0366"),c=i("7b0b"),r=i("9bdd"),a=i("e95a"),s=i("50c4"),l=i("8418"),d=i("35a1");t.exports=function(t){var e,i,n,m,u,f,O=c(t),b="function"==typeof this?this:Array,M=arguments.length,p=M>1?arguments[1]:void 0,x=void 0!==p,v=d(O),h=0;if(x&&(p=o(p,M>2?arguments[2]:void 0,2)),void 0==v||b==Array&&a(v))for(e=s(O.length),i=new b(e);e>h;h++)f=x?p(O[h],h):O[h],l(i,h,f);else for(m=v.call(O),u=m.next,i=new b;!(n=u.call(m)).done;h++)f=x?r(m,p,[n.value,h],!0):n.value,l(i,h,f);return i.length=h,i}},"642f":function(t,e,i){"use strict";i("c43d")},"65f0":function(t,e,i){var o=i("0b42");t.exports=function(t,e){return new(o(t))(0===e?0:e)}},"68ea":function(t,e,i){"use strict";i("d215")},"746f":function(t,e,i){var o=i("428f"),c=i("5135"),r=i("e538"),a=i("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});c(e,t)||a(e,t,{value:r.f(t)})}},8418:function(t,e,i){"use strict";var o=i("a04b"),c=i("9bf2"),r=i("5c6c");t.exports=function(t,e,i){var a=o(e);a in t?c.f(t,a,r(0,i)):t[a]=i}},"84af":function(t,e,i){"use strict";var o=i("7a23"),c=Object(o["G"])("data-v-169342fe");Object(o["u"])("data-v-169342fe");var r={class:"banner-cont d-none d-sm-block"},a={class:"banner overflow-hidden text-center"},s={class:"col-md-5 m-auto"},l={class:"display-4 fw-normal text-white"};Object(o["s"])();var d=c((function(t,e,i,c,d,n){return Object(o["r"])(),Object(o["e"])("div",r,[Object(o["y"])(t.$slots,"default",{},void 0,!0),Object(o["i"])("div",a,[Object(o["i"])("div",s,[Object(o["i"])("h1",l,Object(o["C"])(i.title),1)])])])})),n={name:"Banner",props:{title:String}};i("bc16");n.render=d,n.__scopeId="data-v-169342fe";e["a"]=n},"881b":function(t,e,i){"use strict";var o=i("7a23"),c=Object(o["G"])("data-v-ba79d942");Object(o["u"])("data-v-ba79d942");var r={class:"first"};Object(o["s"])();var a=c((function(t,e,i,c,a,s){return Object(o["r"])(),Object(o["e"])("div",r,[Object(o["y"])(t.$slots,"default",{},void 0,!0)])})),s={name:"First"};i("9dfb");s.render=a,s.__scopeId="data-v-ba79d942";e["a"]=s},8965:function(t,e,i){},9772:function(t,e,i){"use strict";i.r(e);var o=i("7a23"),c=i("b744"),r=i.n(c),a=Object(o["G"])("data-v-1decf228");Object(o["u"])("data-v-1decf228");var s={class:"gallery main"},l=Object(o["i"])("img",{src:r.a},null,-1),d={key:0,class:"container-fluid bg-dark"},n={key:1,class:"container-fluid"},m={class:"d-flex"},u=Object(o["i"])("span",null,null,-1),f={class:"container-fluid bg-dark"},O={class:"gallery-row row gx-2 gx-md-3"},b={class:"my-col col-6 col-md-4"},M={class:"my-col col-6 col-md-4"},p={class:"my-col d-none d-md-block col-md-4"};Object(o["s"])();var x=a((function(t,e,i,c,r,x){var v=Object(o["z"])("Banner"),h=Object(o["z"])("Slider"),y=Object(o["z"])("First"),g=Object(o["z"])("GalleryPicture");return Object(o["r"])(),Object(o["e"])("div",s,[Object(o["i"])(v,{title:"GALERÍA"},{default:a((function(){return[l]})),_:1}),t.$route.params.cat?(Object(o["r"])(),Object(o["e"])("div",d,[Object(o["i"])(h)])):Object(o["f"])("",!0),t.width>=576?(Object(o["r"])(),Object(o["e"])("div",n,[Object(o["i"])(y,{class:"category-nav"},{default:a((function(){return[Object(o["i"])("ul",m,[Object(o["i"])("li",{id:"cat_1",onClick:e[1]||(e[1]=function(){return x.selectorFirst&&x.selectorFirst.apply(x,arguments)})},"Cultural"),Object(o["i"])("li",{id:"cat_2",onClick:e[2]||(e[2]=function(){return x.selectorSecond&&x.selectorSecond.apply(x,arguments)})},"Religioso"),Object(o["i"])("li",{id:"cat_1",onClick:e[3]||(e[3]=function(){return x.selectorThird&&x.selectorThird.apply(x,arguments)})},"Personalizado"),u])]})),_:1})])):Object(o["f"])("",!0),Object(o["i"])("div",f,[Object(o["i"])(y,null,{default:a((function(){return[Object(o["i"])("div",O,[Object(o["i"])("div",b,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(t.items_1,(function(t,e){return Object(o["r"])(),Object(o["e"])("div",{class:"py-1 py-md-2",key:t.id},[Object(o["i"])(g,{picture_src:"https://drive.google.com/uc?id="+t.id,item:t,index:e+"_1"},null,8,["picture_src","item","index"])])})),128))]),Object(o["i"])("div",M,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(t.items_2,(function(t,e){return Object(o["r"])(),Object(o["e"])("div",{class:"py-1 py-md-2",key:t.id},[Object(o["i"])(g,{picture_src:"https://drive.google.com/uc?id="+t.id,item:t,index:e+"_2"},null,8,["picture_src","item","index"])])})),128))]),Object(o["i"])("div",p,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(t.items_3,(function(t,e){return Object(o["r"])(),Object(o["e"])("div",{class:"py-1 py-md-2",key:t.id},[Object(o["i"])(g,{picture_src:"https://drive.google.com/uc?id="+t.id,item:t,index:e+"_3"},null,8,["picture_src","item","index"])])})),128))])])]})),_:1})])])}));function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function h(t){if(Array.isArray(t))return v(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function y(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}i("fb6a"),i("b0c0");function g(t,e){if(t){if("string"===typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}function j(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(t){return h(t)||y(t)||g(t)||j()}i("a434");var C=i("84af"),B=Object(o["G"])("data-v-e0a0c3f0");Object(o["u"])("data-v-e0a0c3f0");var L={class:"slider"},R={class:"row px-4"},I={class:"col-12 col-sm-10 col-md-8 pic-view-cont"},N={class:"pic-view"},A=Object(o["i"])("div",{class:"arrow-cont-left"},[Object(o["i"])("div",{class:"arrow"},[Object(o["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 208.55 105.4"},[Object(o["i"])("defs"),Object(o["i"])("g",{id:"Capa_2","data-name":"Capa 2"},[Object(o["i"])("g",{id:"Layer_1","data-name":"Layer 1"},[Object(o["i"])("polygon",{class:"cls-1",points:"52.7 105.4 54.12 103.99 4.14 54.02 208.55 54.02 208.55 52.02 3.52 52.02 54.12 1.41 52.7 0 0 52.7 52.7 105.4"})])])])])],-1),z=Object(o["i"])("div",{class:"arrow-cont-right"},[Object(o["i"])("div",{class:"arrow"},[Object(o["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 208.55 105.4"},[Object(o["i"])("defs"),Object(o["i"])("g",{id:"Capa_2","data-name":"Capa 2"},[Object(o["i"])("g",{id:"Layer_1","data-name":"Layer 1"},[Object(o["i"])("polygon",{class:"cls-1",points:"155.85 0 154.44 1.41 204.41 51.39 0 51.39 0 53.39 205.03 53.39 154.44 103.99 155.85 105.4 208.55 52.7 155.85 0"})])])])])],-1),w={class:"thumbnail-cont my-3"},U=Object(o["g"])('<div class="pic-info" data-v-e0a0c3f0><h4 class="text-secondary" data-v-e0a0c3f0>La santa cena</h4><ul class="my-3" data-v-e0a0c3f0><li class="text-secondary small" data-v-e0a0c3f0><b data-v-e0a0c3f0>COBRE:</b> Max. 80 cm. de alto</li><li class="text-secondary small" data-v-e0a0c3f0><b data-v-e0a0c3f0>ALUMINIO</b> Max. 60 cm. de alto</li><li class="text-secondary small" data-v-e0a0c3f0><b data-v-e0a0c3f0>BRONCE</b> Max. 30 cm. de alto</li></ul><p class="fst-italic text-secondary small" data-v-e0a0c3f0>*El tamaño varía de acuerdo a las necesidades del cliente. Para tener más información comunicarse al +51 959856919 o enviar un mensaje de WhatsApp.</p></div>',1);Object(o["s"])();var _=B((function(t,e,i,c,r,a){return Object(o["r"])(),Object(o["e"])("div",L,[Object(o["i"])("div",R,[Object(o["i"])("div",I,[Object(o["i"])("div",N,[A,Object(o["i"])("img",{src:"".concat(r.publicPath,"/img/gallery/ID73539242_540876803341323_241.png")},null,8,["src"]),z]),Object(o["i"])("div",w,[Object(o["i"])("img",{src:"".concat(r.publicPath,"/img/gallery/Enmascarar_grupo_10.png")},null,8,["src"])]),U])])])})),S={name:"Slider",data:function(){return{publicPath:"/MetalArt/"}}};i("642f");S.render=_,S.__scopeId="data-v-e0a0c3f0";var k=S,P=i("881b"),W=Object(o["G"])("data-v-2f02af65");Object(o["u"])("data-v-2f02af65");var G={key:0,class:"picture"},T={class:"modal-dialog"},Y={class:"modal-content"},q={class:"modal-body"},J={class:"mb-5"},V=Object(o["i"])("p",{class:"mt-5"},[Object(o["i"])("i",null,"*El tamaño varía de acuerdo a las necesidades del cliente. Para tener más información comunicarse al +51 959856919 o enviar un mensaje de WhatsApp.")],-1),H=Object(o["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1);Object(o["s"])();var K=W((function(t,e,i,c,r,a){var s=Object(o["z"])("Loading");return Object(o["r"])(),Object(o["e"])(o["a"],null,[i.picture_src?(Object(o["r"])(),Object(o["e"])("div",G,[t.imgsrc?(Object(o["r"])(),Object(o["e"])("img",{key:0,class:"main-pic",src:t.imgsrc,"data-bs-toggle":"modal","data-bs-target":"#modal_"+i.index},null,8,["src","data-bs-target"])):(Object(o["r"])(),Object(o["e"])(s,{key:1}))])):Object(o["f"])("",!0),Object(o["i"])("div",{class:"modal fade",id:"modal_"+i.index,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[Object(o["i"])("div",T,[Object(o["i"])("div",Y,[Object(o["i"])("div",q,[t.imgsrc?(Object(o["r"])(),Object(o["e"])("img",{key:0,class:"main-pic",src:t.imgsrc},null,8,["src"])):Object(o["f"])("",!0),Object(o["i"])("div",null,[Object(o["i"])("h3",J,Object(o["C"])(i.item.title),1),(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(i.item.sizes,(function(t){return Object(o["r"])(),Object(o["e"])("p",{key:t},Object(o["C"])(t),1)})),128)),V]),H])])])],8,["id"])],64)})),D=Object(o["G"])("data-v-feb99130");Object(o["u"])("data-v-feb99130");var F={class:"loading"},Z=Object(o["g"])('<div class="galeria-side-container" data-v-feb99130><div class="galeria-side p-3" data-v-feb99130><div class="d-flex" data-v-feb99130><span class="cuadrado mx-2" data-v-feb99130><span class="p-2" data-v-feb99130><span class="cuadrado-movil" data-v-feb99130></span><span class="cuadrado-movil" data-v-feb99130></span></span></span></div></div></div>',1);Object(o["s"])();var Q=D((function(t,e,i,c,r,a){return Object(o["r"])(),Object(o["e"])("div",F,[Z])})),X={name:"GallerySide"};i("9794");X.render=Q,X.__scopeId="data-v-feb99130";var $=X,tt={name:"GalleryPicture",components:{Loading:$},props:{picture_src:String,item:Object,index:String},data:function(){return{imgsrc:""}},created:function(){var t=this;if(""!==this.picture_src){var e=new Image;e.src=this.picture_src,e.onload=function(){t.imgsrc=e.src}}else this.imgsrc=""}};i("68ea");tt.render=K,tt.__scopeId="data-v-2f02af65";var et=tt,it={name:"Gallery",components:{Banner:C["a"],Slider:k,First:P["a"],GalleryPicture:et},data:function(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,category:1,items:[],items_1:[],items_2:[],items_3:[],cult:[{id:"1O72Fz6u9ergaJb-hSCZE9fdi5KzSoaIt",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1iHklI6nNJf7YQBYBBJzrdjUDrkkjM4G6",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1Sens-kQWpAeAvPlqdbLUdHlcKv288qQ1",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"12gZAx8N43Utx80sO6e8KOn87fiDmYnuQ",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1rmMSicVuk-bRJEE6p29XJCjBBOM4qYiw",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1XRu4F51c5zP6aSGLTGLBUSoTkpGPv16E",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1JY8LTMug-NyWTLqBKLwEnRY2--bYXGjn",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1sk3bC9qYaP9xzbk5Zm8d2Q-R03jtt0Dg",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ogtcki2M_T0lURcV2iZnfRecBd0d4H8o",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"11jQhXZG07ITMHqWMotkCYmiDfKiZKkk1",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1DE1q7GPrCJcQVyVvz0p_kPO9guR_vpCq",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1-lTUR_H-yxeN6op0LNGVvRifKVvtbEsA",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1l8h4Rp7hF9srUZMAcHJxMvDOJTREyefX",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1rgA6vo_J2UVLPSn3_EKaPEkBocfO0y7H",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1g2JY0hpIX9vq-v1iLvRFLnCcYswOuprW",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1rmxZvE4iEB5Ft2Ib9x3O-ez2UR-7Kmuv",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"12SSedbOVDRH6uSzV9khw98aLGO-Rdfye",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"15PhSFt5QLAcE3jykraJel0sRLg5rUm_e",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1yoBGbeYSPk0GHxDS-s9VK4D8ERSsEqFU",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ZWN9Pg0sKiamOCZkWgmCNcHxjF5gT7gI",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]}],reli:[{id:"1m0364e7MjMzyEcobA5UMDM4MI0T0xLBU",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1sFpA595MC_zhKV-Z2JkNtcmE4n1Jmm1G",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1MhHfU3bv6WThIGQMmQqe1J1e0fx_xBOy",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1qOcOtwV26IYGQgMW_r1ogqKtYUthWTcd",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"19rI7hXhS7a0fzuMM952MEiZe2Mp6xzYd",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1VYxcyhV8z9vYWIDlDOYlBUydWIAPTOMH",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1mE6RPwTIgKRnt9lzbU1n9uAbzmZOgtB5",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ELytVP3pGK8GWCVPAq5BAtVoUiYupVmR",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1j3_DHWx1wMMNsHMW6e6zNrBWLFSdHsf7",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1uu182VbMgxVt58PiBRxADBUlLkhAmSNF",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1XE5bdHGAJWNQW3DouZk1eahC1_gWz3o7",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1RGYEWNSiSvA6LHU_WbJCA7BMs3PRzhJk",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ydeur5MT_kv6nzUw-Eo-zwQ1LmiiizGg",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1-qNutpYBRBBd77rhgxTdnFCFza1RDMAk",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]}],cust:[{id:"129M79uu9E-O8jPA8HAib5BPPplJ2R6nA",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1PRkguvyKOmclEsQ4BeE0cWsh7UecP300",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1K3aAF239H75C4g4ZZ91Ikv1mH7mZUO0O",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1RjAMLSs27rB_TuY6rI89dMIVrJaosiXs",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1JedGg3tp6stJ_KqxMV2UdYaY9PJigx7Z",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ux3u2-Y_sJXCKZbPKnKytAEwZGxyuMR_",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1dwI66zOQxk78Mm6C5F2PLEnkzxWbMkKd",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1Z0zWvheow3iSrEaRVIURW9zI5woGGb-W",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1rxhVt1OTXP-NraS7qE063sYCRiBhwNXr",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1wpZq4zqpwSKno4SBn6ix-GIZtat5nE2k",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1CqAh0E24RygOBgr_76tUmCuWNspketqE",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1bwT6jiqnU5LDBLdXQnXv1vPN8lsk5_Ty",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1FWbfH3Bmrddknoj_yCHdTxN3Ux5Y6uE6",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1z1uemMt5aBmeNBWByMmrsIlmhY72-SM6",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1hUfmdtGTRACLuVkbp9iKAnezMVKYWHzD",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1t_0dN_LM1NKoXYEYOmQotJgWTgIPSunl",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1iGdLjTetIhNOEsbdho5N9eDdfhB9jo0-",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1HXp5Q-rpcX_3DqVvGLvxrfrTn_L4qYl8",title:"Lorem ipsum dolor sit",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]}]}},mounted:function(){document.title="Metal Art | Galería"},created:function(){window.addEventListener("resize",this.getDimensions),this.setPicturesArray("cult"),this.setColumns()},methods:{getDimensions:function(){this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight,this.setColumns()},setPicturesArray:function(t){"cult"===t&&(this.items=this.cult),"reli"===t&&(this.items=this.reli),"cust"===t&&(this.items=this.cust)},selectorFirst:function(t){var e=t.currentTarget;document.querySelector(".category-nav span").setAttribute("style","left: 0; width: "+e.offsetWidth+"px"),this.items=this.cult,this.setColumns()},selectorSecond:function(t){var e=t.currentTarget,i=document.querySelector("#cat_1").offsetWidth;document.querySelector(".category-nav span").setAttribute("style","left: "+i+"px; width: "+e.offsetWidth+"px"),this.items=this.reli,this.setColumns()},selectorThird:function(t){var e=t.currentTarget,i=document.querySelector("#cat_1").offsetWidth+document.querySelector("#cat_2").offsetWidth;document.querySelector(".category-nav span").setAttribute("style","left: "+i+"px; width: "+e.offsetWidth+"px"),this.items=this.cust,this.setColumns()},setColumns:function(){if(this.width>=768){var t=this.splitToChunks(this.items,3);this.items_1=t[0],this.items_2=t[1],this.items_3=t[2]}else{var e=this.splitToChunks(this.items,2);this.items_1=e[0],this.items_2=e[1]}},splitToChunks:function(t,e){for(var i=E(t),o=[],c=e;c>0;c--)o.push(i.splice(0,Math.ceil(i.length/c)));return o}}};i("236d");it.render=x,it.__scopeId="data-v-1decf228";e["default"]=it},9794:function(t,e,i){"use strict";i("acb1")},"9bdd":function(t,e,i){var o=i("825a"),c=i("2a62");t.exports=function(t,e,i,r){try{return r?e(o(i)[0],i[1]):e(i)}catch(a){throw c(t),a}}},"9dfb":function(t,e,i){"use strict";i("8965")},a434:function(t,e,i){"use strict";var o=i("23e7"),c=i("23cb"),r=i("a691"),a=i("50c4"),s=i("7b0b"),l=i("65f0"),d=i("8418"),n=i("1dde"),m=n("splice"),u=Math.max,f=Math.min,O=9007199254740991,b="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!m},{splice:function(t,e){var i,o,n,m,M,p,x=s(this),v=a(x.length),h=c(t,v),y=arguments.length;if(0===y?i=o=0:1===y?(i=0,o=v-h):(i=y-2,o=f(u(r(e),0),v-h)),v+i-o>O)throw TypeError(b);for(n=l(x,o),m=0;m<o;m++)M=h+m,M in x&&d(n,m,x[M]);if(n.length=o,i<o){for(m=h;m<v-o;m++)M=m+o,p=m+i,M in x?x[p]=x[M]:delete x[p];for(m=v;m>v-o+i;m--)delete x[m-1]}else if(i>o)for(m=v-o;m>h;m--)M=m+o-1,p=m+i-1,M in x?x[p]=x[M]:delete x[p];for(m=0;m<i;m++)x[m+h]=arguments[m+2];return x.length=v-o+i,n}})},a4d3:function(t,e,i){"use strict";var o=i("23e7"),c=i("da84"),r=i("d066"),a=i("c430"),s=i("83ab"),l=i("4930"),d=i("d039"),n=i("5135"),m=i("e8b5"),u=i("861d"),f=i("d9b5"),O=i("825a"),b=i("7b0b"),M=i("fc6a"),p=i("a04b"),x=i("577e"),v=i("5c6c"),h=i("7c73"),y=i("df75"),g=i("241c"),j=i("057f"),E=i("7418"),C=i("06cf"),B=i("9bf2"),L=i("d1e7"),R=i("9112"),I=i("6eeb"),N=i("5692"),A=i("f772"),z=i("d012"),w=i("90e3"),U=i("b622"),_=i("e538"),S=i("746f"),k=i("d44e"),P=i("69f3"),W=i("b727").forEach,G=A("hidden"),T="Symbol",Y="prototype",q=U("toPrimitive"),J=P.set,V=P.getterFor(T),H=Object[Y],K=c.Symbol,D=r("JSON","stringify"),F=C.f,Z=B.f,Q=j.f,X=L.f,$=N("symbols"),tt=N("op-symbols"),et=N("string-to-symbol-registry"),it=N("symbol-to-string-registry"),ot=N("wks"),ct=c.QObject,rt=!ct||!ct[Y]||!ct[Y].findChild,at=s&&d((function(){return 7!=h(Z({},"a",{get:function(){return Z(this,"a",{value:7}).a}})).a}))?function(t,e,i){var o=F(H,e);o&&delete H[e],Z(t,e,i),o&&t!==H&&Z(H,e,o)}:Z,st=function(t,e){var i=$[t]=h(K[Y]);return J(i,{type:T,tag:t,description:e}),s||(i.description=e),i},lt=function(t,e,i){t===H&&lt(tt,e,i),O(t);var o=p(e);return O(i),n($,o)?(i.enumerable?(n(t,G)&&t[G][o]&&(t[G][o]=!1),i=h(i,{enumerable:v(0,!1)})):(n(t,G)||Z(t,G,v(1,{})),t[G][o]=!0),at(t,o,i)):Z(t,o,i)},dt=function(t,e){O(t);var i=M(e),o=y(i).concat(Ot(i));return W(o,(function(e){s&&!mt.call(i,e)||lt(t,e,i[e])})),t},nt=function(t,e){return void 0===e?h(t):dt(h(t),e)},mt=function(t){var e=p(t),i=X.call(this,e);return!(this===H&&n($,e)&&!n(tt,e))&&(!(i||!n(this,e)||!n($,e)||n(this,G)&&this[G][e])||i)},ut=function(t,e){var i=M(t),o=p(e);if(i!==H||!n($,o)||n(tt,o)){var c=F(i,o);return!c||!n($,o)||n(i,G)&&i[G][o]||(c.enumerable=!0),c}},ft=function(t){var e=Q(M(t)),i=[];return W(e,(function(t){n($,t)||n(z,t)||i.push(t)})),i},Ot=function(t){var e=t===H,i=Q(e?tt:M(t)),o=[];return W(i,(function(t){!n($,t)||e&&!n(H,t)||o.push($[t])})),o};if(l||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=w(t),i=function(t){this===H&&i.call(tt,t),n(this,G)&&n(this[G],e)&&(this[G][e]=!1),at(this,e,v(1,t))};return s&&rt&&at(H,e,{configurable:!0,set:i}),st(e,t)},I(K[Y],"toString",(function(){return V(this).tag})),I(K,"withoutSetter",(function(t){return st(w(t),t)})),L.f=mt,B.f=lt,C.f=ut,g.f=j.f=ft,E.f=Ot,_.f=function(t){return st(U(t),t)},s&&(Z(K[Y],"description",{configurable:!0,get:function(){return V(this).description}}),a||I(H,"propertyIsEnumerable",mt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:K}),W(y(ot),(function(t){S(t)})),o({target:T,stat:!0,forced:!l},{for:function(t){var e=x(t);if(n(et,e))return et[e];var i=K(e);return et[e]=i,it[i]=e,i},keyFor:function(t){if(!f(t))throw TypeError(t+" is not a symbol");if(n(it,t))return it[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),o({target:"Object",stat:!0,forced:!l,sham:!s},{create:nt,defineProperty:lt,defineProperties:dt,getOwnPropertyDescriptor:ut}),o({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ft,getOwnPropertySymbols:Ot}),o({target:"Object",stat:!0,forced:d((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(b(t))}}),D){var bt=!l||d((function(){var t=K();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}));o({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,i){var o,c=[t],r=1;while(arguments.length>r)c.push(arguments[r++]);if(o=e,(u(e)||void 0!==t)&&!f(t))return m(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!f(e))return e}),c[1]=e,D.apply(null,c)}})}K[Y][q]||R(K[Y],q,K[Y].valueOf),k(K,T),z[G]=!0},a630:function(t,e,i){var o=i("23e7"),c=i("4df4"),r=i("1c7e"),a=!r((function(t){Array.from(t)}));o({target:"Array",stat:!0,forced:a},{from:c})},acb1:function(t,e,i){},b727:function(t,e,i){var o=i("0366"),c=i("44ad"),r=i("7b0b"),a=i("50c4"),s=i("65f0"),l=[].push,d=function(t){var e=1==t,i=2==t,d=3==t,n=4==t,m=6==t,u=7==t,f=5==t||m;return function(O,b,M,p){for(var x,v,h=r(O),y=c(h),g=o(b,M,3),j=a(y.length),E=0,C=p||s,B=e?C(O,j):i||u?C(O,0):void 0;j>E;E++)if((f||E in y)&&(x=y[E],v=g(x,E,h),t))if(e)B[E]=v;else if(v)switch(t){case 3:return!0;case 5:return x;case 6:return E;case 2:l.call(B,x)}else switch(t){case 4:return!1;case 7:l.call(B,x)}return m?-1:d||n?n:B}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterReject:d(7)}},b744:function(t,e,i){t.exports=i.p+"img/Enmascarar_grupo_15.56ec738a.jpg"},bc16:function(t,e,i){"use strict";i("f1d9")},c43d:function(t,e,i){},d215:function(t,e,i){},d28b:function(t,e,i){var o=i("746f");o("iterator")},e01a:function(t,e,i){"use strict";var o=i("23e7"),c=i("83ab"),r=i("da84"),a=i("5135"),s=i("861d"),l=i("9bf2").f,d=i("e893"),n=r.Symbol;if(c&&"function"==typeof n&&(!("description"in n.prototype)||void 0!==n().description)){var m={},u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof u?new n(t):void 0===t?n():n(t);return""===t&&(m[e]=!0),e};d(u,n);var f=u.prototype=n.prototype;f.constructor=u;var O=f.toString,b="Symbol(test)"==String(n("test")),M=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=O.call(t);if(a(m,t))return"";var i=b?e.slice(7,-1):e.replace(M,"$1");return""===i?void 0:i}}),o({global:!0,forced:!0},{Symbol:u})}},e538:function(t,e,i){var o=i("b622");e.f=o},e8b5:function(t,e,i){var o=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},f1d9:function(t,e,i){},fb6a:function(t,e,i){"use strict";var o=i("23e7"),c=i("861d"),r=i("e8b5"),a=i("23cb"),s=i("50c4"),l=i("fc6a"),d=i("8418"),n=i("b622"),m=i("1dde"),u=m("slice"),f=n("species"),O=[].slice,b=Math.max;o({target:"Array",proto:!0,forced:!u},{slice:function(t,e){var i,o,n,m=l(this),u=s(m.length),M=a(t,u),p=a(void 0===e?u:e,u);if(r(m)&&(i=m.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?c(i)&&(i=i[f],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return O.call(m,M,p);for(o=new(void 0===i?Array:i)(b(p-M,0)),n=0;M<p;M++,n++)M in m&&d(o,n,m[M]);return o.length=n,o}})}}]);
//# sourceMappingURL=gallery.6a58ea70.js.map