(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gallery"],{"0080":function(e,t,i){"use strict";i("205d")},"057f":function(e,t,i){var o=i("fc6a"),a=i("241c").f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(e){try{return a(e)}catch(t){return l.slice()}};e.exports.f=function(e){return l&&"[object Window]"==c.call(e)?r(e):a(o(e))}},"0b42":function(e,t,i){var o=i("861d"),a=i("e8b5"),c=i("b622"),l=c("species");e.exports=function(e){var t;return a(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!a(t.prototype)?o(t)&&(t=t[l],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"1dde":function(e,t,i){var o=i("d039"),a=i("b622"),c=i("2d00"),l=a("species");e.exports=function(e){return c>=51||!o((function(){var t=[],i=t.constructor={};return i[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"205d":function(e,t,i){},"428f":function(e,t,i){var o=i("da84");e.exports=o},"4df4":function(e,t,i){"use strict";var o=i("0366"),a=i("7b0b"),c=i("9bdd"),l=i("e95a"),r=i("50c4"),d=i("8418"),n=i("35a1");e.exports=function(e){var t,i,s,m,u,O,f=a(e),M="function"==typeof this?this:Array,b=arguments.length,x=b>1?arguments[1]:void 0,v=void 0!==x,p=n(f),E=0;if(v&&(x=o(x,b>2?arguments[2]:void 0,2)),void 0==p||M==Array&&l(p))for(t=r(f.length),i=new M(t);t>E;E++)O=v?x(f[E],E):f[E],d(i,E,O);else for(m=p.call(f),u=m.next,i=new M;!(s=u.call(m)).done;E++)O=v?c(m,x,[s.value,E],!0):s.value,d(i,E,O);return i.length=E,i}},"642f":function(e,t,i){"use strict";i("c43d")},"65f0":function(e,t,i){var o=i("0b42");e.exports=function(e,t){return new(o(e))(0===t?0:t)}},"746f":function(e,t,i){var o=i("428f"),a=i("5135"),c=i("e538"),l=i("9bf2").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});a(t,e)||l(t,e,{value:c.f(e)})}},8418:function(e,t,i){"use strict";var o=i("a04b"),a=i("9bf2"),c=i("5c6c");e.exports=function(e,t,i){var l=o(t);l in e?a.f(e,l,c(0,i)):e[l]=i}},"84af":function(e,t,i){"use strict";var o=i("7a23"),a=Object(o["G"])("data-v-169342fe");Object(o["u"])("data-v-169342fe");var c={class:"banner-cont d-none d-sm-block"},l={class:"banner overflow-hidden text-center"},r={class:"col-md-5 m-auto"},d={class:"display-4 fw-normal text-white"};Object(o["s"])();var n=a((function(e,t,i,a,n,s){return Object(o["r"])(),Object(o["e"])("div",c,[Object(o["y"])(e.$slots,"default",{},void 0,!0),Object(o["i"])("div",l,[Object(o["i"])("div",r,[Object(o["i"])("h1",d,Object(o["C"])(i.title),1)])])])})),s={name:"Banner",props:{title:String}};i("bc16");s.render=n,s.__scopeId="data-v-169342fe";t["a"]=s},"881b":function(e,t,i){"use strict";var o=i("7a23"),a=Object(o["G"])("data-v-ba79d942");Object(o["u"])("data-v-ba79d942");var c={class:"first"};Object(o["s"])();var l=a((function(e,t,i,a,l,r){return Object(o["r"])(),Object(o["e"])("div",c,[Object(o["y"])(e.$slots,"default",{},void 0,!0)])})),r={name:"First"};i("9dfb");r.render=l,r.__scopeId="data-v-ba79d942";t["a"]=r},8965:function(e,t,i){},"8c23":function(e,t,i){},9772:function(e,t,i){"use strict";i.r(t);var o=i("7a23"),a=i("b744"),c=i.n(a),l=Object(o["G"])("data-v-c176bd5e");Object(o["u"])("data-v-c176bd5e");var r={class:"gallery main"},d=Object(o["i"])("img",{src:c.a},null,-1),n={key:0,class:"container-fluid bg-dark"},s={key:1,class:"container-fluid"},m={class:"d-flex"},u=Object(o["i"])("span",null,null,-1),O={class:"container-fluid bg-dark"},f={class:"gallery-row row gx-2 gx-md-3"},M={class:"my-col col-6 col-md-4"},b={class:"my-col col-6 col-md-4"},x={class:"my-col d-none d-md-block col-md-4"};Object(o["s"])();var v=l((function(e,t,i,a,c,v){var p=Object(o["z"])("Banner"),E=Object(o["z"])("Slider"),h=Object(o["z"])("First"),C=Object(o["z"])("GalleryPicture");return Object(o["r"])(),Object(o["e"])("div",r,[Object(o["i"])(p,{title:"GALERÍA"},{default:l((function(){return[d]})),_:1}),e.$route.params.cat?(Object(o["r"])(),Object(o["e"])("div",n,[Object(o["i"])(E)])):Object(o["f"])("",!0),e.width>=576?(Object(o["r"])(),Object(o["e"])("div",s,[Object(o["i"])(h,{class:"category-nav"},{default:l((function(){return[Object(o["i"])("ul",m,[Object(o["i"])("li",{id:"cat_1",onClick:t[1]||(t[1]=function(){return v.selectorFirst&&v.selectorFirst.apply(v,arguments)})},"Cultural"),Object(o["i"])("li",{id:"cat_2",onClick:t[2]||(t[2]=function(){return v.selectorSecond&&v.selectorSecond.apply(v,arguments)})},"Religioso"),Object(o["i"])("li",{id:"cat_1",onClick:t[3]||(t[3]=function(){return v.selectorThird&&v.selectorThird.apply(v,arguments)})},"Personalizado"),u])]})),_:1})])):Object(o["f"])("",!0),Object(o["i"])("div",O,[Object(o["i"])(h,null,{default:l((function(){return[Object(o["i"])("div",f,[Object(o["i"])("div",M,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(e.items_1,(function(e,t){return Object(o["r"])(),Object(o["e"])("div",{class:"py-1 py-md-2",key:e.id},[Object(o["i"])(C,{picture_src:"https://drive.google.com/uc?id="+e.id,item:e,index:t+"_1"},null,8,["picture_src","item","index"])])})),128))]),Object(o["i"])("div",b,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(e.items_2,(function(e,t){return Object(o["r"])(),Object(o["e"])("div",{class:"py-1 py-md-2",key:e.id},[Object(o["i"])(C,{picture_src:"https://drive.google.com/uc?id="+e.id,item:e,index:t+"_2"},null,8,["picture_src","item","index"])])})),128))]),Object(o["i"])("div",x,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(e.items_3,(function(e,t){return Object(o["r"])(),Object(o["e"])("div",{class:"py-1 py-md-2",key:e.id},[Object(o["i"])(C,{picture_src:"https://drive.google.com/uc?id="+e.id,item:e,index:t+"_3"},null,8,["picture_src","item","index"])])})),128))])])]})),_:1})])])}));function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function E(e){if(Array.isArray(e))return p(e)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function h(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}i("fb6a"),i("b0c0");function C(e,t){if(e){if("string"===typeof e)return p(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(e,t):void 0}}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e){return E(e)||h(e)||C(e)||g()}i("a434");var R=i("84af"),I=Object(o["G"])("data-v-e0a0c3f0");Object(o["u"])("data-v-e0a0c3f0");var y={class:"slider"},N={class:"row px-4"},j={class:"col-12 col-sm-10 col-md-8 pic-view-cont"},A={class:"pic-view"},L=Object(o["i"])("div",{class:"arrow-cont-left"},[Object(o["i"])("div",{class:"arrow"},[Object(o["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 208.55 105.4"},[Object(o["i"])("defs"),Object(o["i"])("g",{id:"Capa_2","data-name":"Capa 2"},[Object(o["i"])("g",{id:"Layer_1","data-name":"Layer 1"},[Object(o["i"])("polygon",{class:"cls-1",points:"52.7 105.4 54.12 103.99 4.14 54.02 208.55 54.02 208.55 52.02 3.52 52.02 54.12 1.41 52.7 0 0 52.7 52.7 105.4"})])])])])],-1),z=Object(o["i"])("div",{class:"arrow-cont-right"},[Object(o["i"])("div",{class:"arrow"},[Object(o["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 208.55 105.4"},[Object(o["i"])("defs"),Object(o["i"])("g",{id:"Capa_2","data-name":"Capa 2"},[Object(o["i"])("g",{id:"Layer_1","data-name":"Layer 1"},[Object(o["i"])("polygon",{class:"cls-1",points:"155.85 0 154.44 1.41 204.41 51.39 0 51.39 0 53.39 205.03 53.39 154.44 103.99 155.85 105.4 208.55 52.7 155.85 0"})])])])])],-1),U={class:"thumbnail-cont my-3"},w=Object(o["g"])('<div class="pic-info" data-v-e0a0c3f0><h4 class="text-secondary" data-v-e0a0c3f0>La santa cena</h4><ul class="my-3" data-v-e0a0c3f0><li class="text-secondary small" data-v-e0a0c3f0><b data-v-e0a0c3f0>COBRE:</b> Max. 80 cm. de alto</li><li class="text-secondary small" data-v-e0a0c3f0><b data-v-e0a0c3f0>ALUMINIO</b> Max. 60 cm. de alto</li><li class="text-secondary small" data-v-e0a0c3f0><b data-v-e0a0c3f0>BRONCE</b> Max. 30 cm. de alto</li></ul><p class="fst-italic text-secondary small" data-v-e0a0c3f0>*El tamaño varía de acuerdo a las necesidades del cliente. Para tener más información comunicarse al +51 959856919 o enviar un mensaje de WhatsApp.</p></div>',1);Object(o["s"])();var _=I((function(e,t,i,a,c,l){return Object(o["r"])(),Object(o["e"])("div",y,[Object(o["i"])("div",N,[Object(o["i"])("div",j,[Object(o["i"])("div",A,[L,Object(o["i"])("img",{src:"".concat(c.publicPath,"/img/gallery/ID73539242_540876803341323_241.png")},null,8,["src"]),z]),Object(o["i"])("div",U,[Object(o["i"])("img",{src:"".concat(c.publicPath,"/img/gallery/Enmascarar_grupo_10.png")},null,8,["src"])]),w])])])})),S={name:"Slider",data:function(){return{publicPath:"/MetalArt/"}}};i("642f");S.render=_,S.__scopeId="data-v-e0a0c3f0";var P=S,T=i("881b"),k=Object(o["G"])("data-v-0a2f5293");Object(o["u"])("data-v-0a2f5293");var G={key:0,class:"picture"},W={class:"modal-dialog"},J={class:"modal-content"},q={class:"modal-body"},F={class:"row h-100"},K={class:"col d-flex picture-cont"},V={class:"col d-flex description-cont"},Y={class:"description ps-lg-5 pe-0"},H={class:"mb-5"},Z=Object(o["i"])("p",null,"Los trabajos son repujados en láminas de cobre, aluminio y bronce de acuerdo a la medida acordada.",-1),D=Object(o["i"])("p",null,"El trabajo acabado será entregado con un marco o moldura de madera, cuyas proporciones serán de acuerdo a la medidas del cuadro.",-1),Q=Object(o["i"])("p",null,"Por otro lado también incluye un paspatour o remarco interior al marco o moldura, este será en cuero o texturado en madera.",-1),X=Object(o["i"])("p",{class:"mt-5",style:{"font-size":"10px"}},[Object(o["i"])("i",null,"*El tamaño varía de acuerdo a las necesidades del cliente. Para tener más información comunicarse al +51 959856919 o enviar un mensaje de WhatsApp.")],-1),$=Object(o["i"])("p",{style:{"font-size":"10px"}},[Object(o["i"])("i",null,"*El marco queda a consideración del cliente, de acuerdo al tipo de marco o color")],-1),ee=Object(o["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1);Object(o["s"])();var te=k((function(e,t,i,a,c,l){var r=Object(o["z"])("Loading"),d=Object(o["z"])("First");return Object(o["r"])(),Object(o["e"])(o["a"],null,[i.picture_src?(Object(o["r"])(),Object(o["e"])("div",G,[e.imgsrc?(Object(o["r"])(),Object(o["e"])("img",{key:0,class:"main-pic",src:e.imgsrc,"data-bs-toggle":"modal","data-bs-target":"#modal_"+i.index},null,8,["src","data-bs-target"])):(Object(o["r"])(),Object(o["e"])(r,{key:1}))])):Object(o["f"])("",!0),Object(o["i"])("div",{class:"modal fade",id:"modal_"+i.index,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[Object(o["i"])("div",W,[Object(o["i"])("div",J,[Object(o["i"])("div",q,[Object(o["i"])(d,null,{default:k((function(){return[Object(o["i"])("div",F,[Object(o["i"])("div",K,[e.imgsrc?(Object(o["r"])(),Object(o["e"])("img",{key:0,class:"main-pic",src:e.imgsrc},null,8,["src"])):Object(o["f"])("",!0)]),Object(o["i"])("div",V,[Object(o["i"])("div",Y,[Object(o["i"])("h3",H,Object(o["C"])(i.item.title),1),Z,D,Q,X,$])])])]})),_:1}),ee])])])],8,["id"])],64)})),ie=Object(o["G"])("data-v-feb99130");Object(o["u"])("data-v-feb99130");var oe={class:"loading"},ae=Object(o["g"])('<div class="galeria-side-container" data-v-feb99130><div class="galeria-side p-3" data-v-feb99130><div class="d-flex" data-v-feb99130><span class="cuadrado mx-2" data-v-feb99130><span class="p-2" data-v-feb99130><span class="cuadrado-movil" data-v-feb99130></span><span class="cuadrado-movil" data-v-feb99130></span></span></span></div></div></div>',1);Object(o["s"])();var ce=ie((function(e,t,i,a,c,l){return Object(o["r"])(),Object(o["e"])("div",oe,[ae])})),le={name:"GallerySide"};i("9794");le.render=ce,le.__scopeId="data-v-feb99130";var re=le,de={name:"GalleryPicture",components:{Loading:re,First:T["a"]},props:{picture_src:String,item:Object,index:String},data:function(){return{imgsrc:"",width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}},created:function(){var e=this;if(window.addEventListener("resize",this.getDimensions),""!==this.picture_src){var t=new Image;t.src=this.picture_src,t.onload=function(){e.imgsrc=t.src}}else this.imgsrc=""},methods:{getDimensions:function(){this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight}}};i("0080");de.render=te,de.__scopeId="data-v-0a2f5293";var ne=de,se={name:"Gallery",components:{Banner:R["a"],Slider:P,First:T["a"],GalleryPicture:ne},data:function(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,category:1,items:[],items_1:[],items_2:[],items_3:[],cult:[{id:"1O72Fz6u9ergaJb-hSCZE9fdi5KzSoaIt",title:"Máscara",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1qBh7viEosa1xODuAgnCKFsGuI9zyxGm8",title:"Belleza azteca",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1Sens-kQWpAeAvPlqdbLUdHlcKv288qQ1",title:"Marinera norteña (Perú)",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"12gZAx8N43Utx80sO6e8KOn87fiDmYnuQ",title:"Niña de Chivay",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1rmMSicVuk-bRJEE6p29XJCjBBOM4qYiw",title:"Chalan",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1XRu4F51c5zP6aSGLTGLBUSoTkpGPv16E",title:"Indio de Calca (Cusco Perú)",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1JY8LTMug-NyWTLqBKLwEnRY2--bYXGjn",title:"Balza totora (Puno Perú)",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1sk3bC9qYaP9xzbk5Zm8d2Q-R03jtt0Dg",title:"Desmochando",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ogtcki2M_T0lURcV2iZnfRecBd0d4H8o",title:"Titicaca",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"11jQhXZG07ITMHqWMotkCYmiDfKiZKkk1",title:"Fuerza",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1DE1q7GPrCJcQVyVvz0p_kPO9guR_vpCq",title:"Labrando",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1-lTUR_H-yxeN6op0LNGVvRifKVvtbEsA",title:"Chullpas de Sillustani",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1l8h4Rp7hF9srUZMAcHJxMvDOJTREyefX",title:"Pelea de toros (Arequipa Perú)",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1rgA6vo_J2UVLPSn3_EKaPEkBocfO0y7H",title:"Lobos",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1g2JY0hpIX9vq-v1iLvRFLnCcYswOuprW",title:"Guerrero azteca",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1rmxZvE4iEB5Ft2Ib9x3O-ez2UR-7Kmuv",title:"Moreno puneño",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"12SSedbOVDRH6uSzV9khw98aLGO-Rdfye",title:"Fortaleza",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"15PhSFt5QLAcE3jykraJel0sRLg5rUm_e",title:"Dualidad",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1yoBGbeYSPk0GHxDS-s9VK4D8ERSsEqFU",title:"Caballo peruano de paso",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ZWN9Pg0sKiamOCZkWgmCNcHxjF5gT7gI",title:"Maravilla andina",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1WAgboxUakGgQMRX1U2YU3YodayDx-lwo",title:"Cultura",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1W9Z473NQrQFZSKSKJGybON5ZXD3KxU-P",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1h22xfyV9pk8E0IUcgeLFeRA6u5WcPARk",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1Ei5wV8o5wMaoxMNOVfnXNZ9d3_JEJofd",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1srh1WfUUvbxPOTe5rvxtsLpDumJCrdga",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"10fwQJ5p1QwZh0IiUtQoLMKI-9VR-TaFH",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"18TKgGqhL43Kdi0hjQdb1jMXIxEfrbbQU",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1-UW2YVV8Aau99EJramdGuM3fy8frUP-C",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1wRoKw6awzzGr2CRS361yYvd3bCgB-yPY",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1Ep7GLdTqMFEt2AEtE-va3GJ-4t-yl8gt",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]}],reli:[{id:"1m0364e7MjMzyEcobA5UMDM4MI0T0xLBU",title:"Jesús",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1sFpA595MC_zhKV-Z2JkNtcmE4n1Jmm1G",title:"Pasión de Cristo",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1MhHfU3bv6WThIGQMmQqe1J1e0fx_xBOy",title:"Señor de Luren (Perú)",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1qOcOtwV26IYGQgMW_r1ogqKtYUthWTcd",title:"Sagrado corazón (Perfil)",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"19rI7hXhS7a0fzuMM952MEiZe2Mp6xzYd",title:"Señor de los Milagros",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1VYxcyhV8z9vYWIDlDOYlBUydWIAPTOMH",title:"Última cena",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1mE6RPwTIgKRnt9lzbU1n9uAbzmZOgtB5",title:"María",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ELytVP3pGK8GWCVPAq5BAtVoUiYupVmR",title:"Jesús pastor",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1j3_DHWx1wMMNsHMW6e6zNrBWLFSdHsf7",title:"San Martín de Porres",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1uu182VbMgxVt58PiBRxADBUlLkhAmSNF",title:"San Pablo",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1XE5bdHGAJWNQW3DouZk1eahC1_gWz3o7",title:"Señor de Huanca",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1RGYEWNSiSvA6LHU_WbJCA7BMs3PRzhJk",title:"Señor de la Sentencia",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ydeur5MT_kv6nzUw-Eo-zwQ1LmiiizGg",title:"Señor de la Misericordia",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1-qNutpYBRBBd77rhgxTdnFCFza1RDMAk",title:"Virgen de Chapi",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1p7Xhm0fnFUAkYIOfy9T_8VlpjddpcvEZ",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]}],cust:[{id:"129M79uu9E-O8jPA8HAib5BPPplJ2R6nA",title:"Escalera de Jacob",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1PRkguvyKOmclEsQ4BeE0cWsh7UecP300",title:"Logo Ministerio Público Perú",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1K3aAF239H75C4g4ZZ91Ikv1mH7mZUO0O",title:"Logo Colegio de Ingenieros Perú",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1RjAMLSs27rB_TuY6rI89dMIVrJaosiXs",title:"Escudo Policia Nacional del Perú",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1JedGg3tp6stJ_KqxMV2UdYaY9PJigx7Z",title:"Composición",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1ux3u2-Y_sJXCKZbPKnKytAEwZGxyuMR_",title:"Escudo Melgar",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1dwI66zOQxk78Mm6C5F2PLEnkzxWbMkKd",title:"Pergamino",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1Z0zWvheow3iSrEaRVIURW9zI5woGGb-W",title:"Escudo de la Guardia Civil del Perú",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1rxhVt1OTXP-NraS7qE063sYCRiBhwNXr",title:"Escudo de la Guardia Republicana del Perú",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1wpZq4zqpwSKno4SBn6ix-GIZtat5nE2k",title:"Helicóptero Fuerza Aerea del Perú",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1CqAh0E24RygOBgr_76tUmCuWNspketqE",title:"Logo hotel Balsa Inn",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1bwT6jiqnU5LDBLdXQnXv1vPN8lsk5_Ty",title:"Logo hotel El Buho",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1FWbfH3Bmrddknoj_yCHdTxN3Ux5Y6uE6",title:"Logotipo facultad de ingeniería",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1z1uemMt5aBmeNBWByMmrsIlmhY72-SM6",title:"Pala eléctrica mina",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1hUfmdtGTRACLuVkbp9iKAnezMVKYWHzD",title:"Pala y camión minero",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1cZXAQWdAt75sEhTmTSpLzsHsqUUb5FX4",title:"Camión minero personalizado",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1t_0dN_LM1NKoXYEYOmQotJgWTgIPSunl",title:"Estrella del abogado",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1iGdLjTetIhNOEsbdho5N9eDdfhB9jo0-",title:"Logotipo de hotel",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1HXp5Q-rpcX_3DqVvGLvxrfrTn_L4qYl8",title:"Escudo de colegio de abogados de Arequipa",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1vxso2ud4CMNPjtSVGocP2aK9kty2Ib-R",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"10C2hThgsNOOMJPq0MoKJqCoof8F46j_C",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"12zH-ST92-_nTJBgy3rnfadun5HChMLjW",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1GA2tNQlOqZbhK1EdpIPqEWL8OQLtgGA6",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1u-SQBX6Ah5V2FB404Y6tPWA4RlFXczcs",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1cZvbiJIaP4HvtTe6Wm24BPeCRP4vR7DP",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]},{id:"1JwbZrWjK6Ez7h66O0CHexa8tlK_3wogl",title:"Título",sizes:["COBRE: Máximo 80 cm de alto.","ALUMINIO: Máximo 60 cm de alto.","BRONCE: Máximo 30 cm de alto."]}]}},mounted:function(){document.title="Metal Art | Galería"},created:function(){window.addEventListener("resize",this.getDimensions),this.setPicturesArray("cult"),this.setColumns()},methods:{getDimensions:function(){this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight,this.setColumns()},setPicturesArray:function(e){"cult"===e&&(this.items=this.cult),"reli"===e&&(this.items=this.reli),"cust"===e&&(this.items=this.cust)},selectorFirst:function(e){var t=e.currentTarget;document.querySelector(".category-nav span").setAttribute("style","left: 0; width: "+t.offsetWidth+"px"),this.items=this.cult,this.setColumns()},selectorSecond:function(e){var t=e.currentTarget,i=document.querySelector("#cat_1").offsetWidth;document.querySelector(".category-nav span").setAttribute("style","left: "+i+"px; width: "+t.offsetWidth+"px"),this.items=this.reli,this.setColumns()},selectorThird:function(e){var t=e.currentTarget,i=document.querySelector("#cat_1").offsetWidth+document.querySelector("#cat_2").offsetWidth;document.querySelector(".category-nav span").setAttribute("style","left: "+i+"px; width: "+t.offsetWidth+"px"),this.items=this.cust,this.setColumns()},setColumns:function(){if(this.width>=768){var e=this.splitToChunks(this.items,3);this.items_1=e[0],this.items_2=e[1],this.items_3=e[2]}else{var t=this.splitToChunks(this.items,2);this.items_1=t[0],this.items_2=t[1]}},splitToChunks:function(e,t){for(var i=B(e),o=[],a=t;a>0;a--)o.push(i.splice(0,Math.ceil(i.length/a)));return o}}};i("98b3");se.render=v,se.__scopeId="data-v-c176bd5e";t["default"]=se},9794:function(e,t,i){"use strict";i("acb1")},"98b3":function(e,t,i){"use strict";i("8c23")},"9bdd":function(e,t,i){var o=i("825a"),a=i("2a62");e.exports=function(e,t,i,c){try{return c?t(o(i)[0],i[1]):t(i)}catch(l){throw a(e),l}}},"9dfb":function(e,t,i){"use strict";i("8965")},a434:function(e,t,i){"use strict";var o=i("23e7"),a=i("23cb"),c=i("a691"),l=i("50c4"),r=i("7b0b"),d=i("65f0"),n=i("8418"),s=i("1dde"),m=s("splice"),u=Math.max,O=Math.min,f=9007199254740991,M="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var i,o,s,m,b,x,v=r(this),p=l(v.length),E=a(e,p),h=arguments.length;if(0===h?i=o=0:1===h?(i=0,o=p-E):(i=h-2,o=O(u(c(t),0),p-E)),p+i-o>f)throw TypeError(M);for(s=d(v,o),m=0;m<o;m++)b=E+m,b in v&&n(s,m,v[b]);if(s.length=o,i<o){for(m=E;m<p-o;m++)b=m+o,x=m+i,b in v?v[x]=v[b]:delete v[x];for(m=p;m>p-o+i;m--)delete v[m-1]}else if(i>o)for(m=p-o;m>E;m--)b=m+o-1,x=m+i-1,b in v?v[x]=v[b]:delete v[x];for(m=0;m<i;m++)v[m+E]=arguments[m+2];return v.length=p-o+i,s}})},a4d3:function(e,t,i){"use strict";var o=i("23e7"),a=i("da84"),c=i("d066"),l=i("c430"),r=i("83ab"),d=i("4930"),n=i("d039"),s=i("5135"),m=i("e8b5"),u=i("861d"),O=i("d9b5"),f=i("825a"),M=i("7b0b"),b=i("fc6a"),x=i("a04b"),v=i("577e"),p=i("5c6c"),E=i("7c73"),h=i("df75"),C=i("241c"),g=i("057f"),B=i("7418"),R=i("06cf"),I=i("9bf2"),y=i("d1e7"),N=i("9112"),j=i("6eeb"),A=i("5692"),L=i("f772"),z=i("d012"),U=i("90e3"),w=i("b622"),_=i("e538"),S=i("746f"),P=i("d44e"),T=i("69f3"),k=i("b727").forEach,G=L("hidden"),W="Symbol",J="prototype",q=w("toPrimitive"),F=T.set,K=T.getterFor(W),V=Object[J],Y=a.Symbol,H=c("JSON","stringify"),Z=R.f,D=I.f,Q=g.f,X=y.f,$=A("symbols"),ee=A("op-symbols"),te=A("string-to-symbol-registry"),ie=A("symbol-to-string-registry"),oe=A("wks"),ae=a.QObject,ce=!ae||!ae[J]||!ae[J].findChild,le=r&&n((function(){return 7!=E(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(e,t,i){var o=Z(V,t);o&&delete V[t],D(e,t,i),o&&e!==V&&D(V,t,o)}:D,re=function(e,t){var i=$[e]=E(Y[J]);return F(i,{type:W,tag:e,description:t}),r||(i.description=t),i},de=function(e,t,i){e===V&&de(ee,t,i),f(e);var o=x(t);return f(i),s($,o)?(i.enumerable?(s(e,G)&&e[G][o]&&(e[G][o]=!1),i=E(i,{enumerable:p(0,!1)})):(s(e,G)||D(e,G,p(1,{})),e[G][o]=!0),le(e,o,i)):D(e,o,i)},ne=function(e,t){f(e);var i=b(t),o=h(i).concat(fe(i));return k(o,(function(t){r&&!me.call(i,t)||de(e,t,i[t])})),e},se=function(e,t){return void 0===t?E(e):ne(E(e),t)},me=function(e){var t=x(e),i=X.call(this,t);return!(this===V&&s($,t)&&!s(ee,t))&&(!(i||!s(this,t)||!s($,t)||s(this,G)&&this[G][t])||i)},ue=function(e,t){var i=b(e),o=x(t);if(i!==V||!s($,o)||s(ee,o)){var a=Z(i,o);return!a||!s($,o)||s(i,G)&&i[G][o]||(a.enumerable=!0),a}},Oe=function(e){var t=Q(b(e)),i=[];return k(t,(function(e){s($,e)||s(z,e)||i.push(e)})),i},fe=function(e){var t=e===V,i=Q(t?ee:b(e)),o=[];return k(i,(function(e){!s($,e)||t&&!s(V,e)||o.push($[e])})),o};if(d||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,t=U(e),i=function(e){this===V&&i.call(ee,e),s(this,G)&&s(this[G],t)&&(this[G][t]=!1),le(this,t,p(1,e))};return r&&ce&&le(V,t,{configurable:!0,set:i}),re(t,e)},j(Y[J],"toString",(function(){return K(this).tag})),j(Y,"withoutSetter",(function(e){return re(U(e),e)})),y.f=me,I.f=de,R.f=ue,C.f=g.f=Oe,B.f=fe,_.f=function(e){return re(w(e),e)},r&&(D(Y[J],"description",{configurable:!0,get:function(){return K(this).description}}),l||j(V,"propertyIsEnumerable",me,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Y}),k(h(oe),(function(e){S(e)})),o({target:W,stat:!0,forced:!d},{for:function(e){var t=v(e);if(s(te,t))return te[t];var i=Y(t);return te[t]=i,ie[i]=t,i},keyFor:function(e){if(!O(e))throw TypeError(e+" is not a symbol");if(s(ie,e))return ie[e]},useSetter:function(){ce=!0},useSimple:function(){ce=!1}}),o({target:"Object",stat:!0,forced:!d,sham:!r},{create:se,defineProperty:de,defineProperties:ne,getOwnPropertyDescriptor:ue}),o({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:Oe,getOwnPropertySymbols:fe}),o({target:"Object",stat:!0,forced:n((function(){B.f(1)}))},{getOwnPropertySymbols:function(e){return B.f(M(e))}}),H){var Me=!d||n((function(){var e=Y();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}));o({target:"JSON",stat:!0,forced:Me},{stringify:function(e,t,i){var o,a=[e],c=1;while(arguments.length>c)a.push(arguments[c++]);if(o=t,(u(t)||void 0!==e)&&!O(e))return m(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!O(t))return t}),a[1]=t,H.apply(null,a)}})}Y[J][q]||N(Y[J],q,Y[J].valueOf),P(Y,W),z[G]=!0},a630:function(e,t,i){var o=i("23e7"),a=i("4df4"),c=i("1c7e"),l=!c((function(e){Array.from(e)}));o({target:"Array",stat:!0,forced:l},{from:a})},acb1:function(e,t,i){},b727:function(e,t,i){var o=i("0366"),a=i("44ad"),c=i("7b0b"),l=i("50c4"),r=i("65f0"),d=[].push,n=function(e){var t=1==e,i=2==e,n=3==e,s=4==e,m=6==e,u=7==e,O=5==e||m;return function(f,M,b,x){for(var v,p,E=c(f),h=a(E),C=o(M,b,3),g=l(h.length),B=0,R=x||r,I=t?R(f,g):i||u?R(f,0):void 0;g>B;B++)if((O||B in h)&&(v=h[B],p=C(v,B,E),e))if(t)I[B]=p;else if(p)switch(e){case 3:return!0;case 5:return v;case 6:return B;case 2:d.call(I,v)}else switch(e){case 4:return!1;case 7:d.call(I,v)}return m?-1:n||s?s:I}};e.exports={forEach:n(0),map:n(1),filter:n(2),some:n(3),every:n(4),find:n(5),findIndex:n(6),filterReject:n(7)}},b744:function(e,t,i){e.exports=i.p+"img/Enmascarar_grupo_15.56ec738a.jpg"},bc16:function(e,t,i){"use strict";i("f1d9")},c43d:function(e,t,i){},d28b:function(e,t,i){var o=i("746f");o("iterator")},e01a:function(e,t,i){"use strict";var o=i("23e7"),a=i("83ab"),c=i("da84"),l=i("5135"),r=i("861d"),d=i("9bf2").f,n=i("e893"),s=c.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var m={},u=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof u?new s(e):void 0===e?s():s(e);return""===e&&(m[t]=!0),t};n(u,s);var O=u.prototype=s.prototype;O.constructor=u;var f=O.toString,M="Symbol(test)"==String(s("test")),b=/^Symbol\((.*)\)[^)]+$/;d(O,"description",{configurable:!0,get:function(){var e=r(this)?this.valueOf():this,t=f.call(e);if(l(m,e))return"";var i=M?t.slice(7,-1):t.replace(b,"$1");return""===i?void 0:i}}),o({global:!0,forced:!0},{Symbol:u})}},e538:function(e,t,i){var o=i("b622");t.f=o},e8b5:function(e,t,i){var o=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}},f1d9:function(e,t,i){},fb6a:function(e,t,i){"use strict";var o=i("23e7"),a=i("861d"),c=i("e8b5"),l=i("23cb"),r=i("50c4"),d=i("fc6a"),n=i("8418"),s=i("b622"),m=i("1dde"),u=m("slice"),O=s("species"),f=[].slice,M=Math.max;o({target:"Array",proto:!0,forced:!u},{slice:function(e,t){var i,o,s,m=d(this),u=r(m.length),b=l(e,u),x=l(void 0===t?u:t,u);if(c(m)&&(i=m.constructor,"function"!=typeof i||i!==Array&&!c(i.prototype)?a(i)&&(i=i[O],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return f.call(m,b,x);for(o=new(void 0===i?Array:i)(M(x-b,0)),s=0;b<x;b++,s++)b in m&&n(o,s,m[b]);return o.length=s,o}})}}]);
//# sourceMappingURL=gallery.bb37c72b.js.map