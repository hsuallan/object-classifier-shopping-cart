(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,a=1;a<s.length;a++){var r=s[a];0!==o[r]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var n={},a={app:0},o={app:0},i=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-d4e31e2e":"76630790"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s={"chunk-d4e31e2e":1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=new Promise((function(e,s){for(var n="css/"+({}[t]||t)+"."+{"chunk-d4e31e2e":"0514f6bd"}[t]+".css",o=l.p+n,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===o))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===n||d===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],h.parentNode.removeChild(h),s(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,s){n=o[t]=[e,s]}));e.push(n[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(h);var s=o[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,s[1](u)}o[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(s,n,function(e){return t[e]}.bind(null,n));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/object-classifier-shopping-cart/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var h=d;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"02b6":function(t,e,s){"use strict";var n=s("9417"),a=s.n(n);a.a},"0784":function(t,e,s){"use strict";var n=s("be64"),a=s.n(n);a.a},3082:function(t,e,s){"use strict";var n=s("c35c"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:""}},[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.$router.push("user")}}},[s("v-icon",[t._v(" mdi-cash-register")]),s("span",{staticClass:"mr-2"},[t._v("收銀台")])],1),s("v-btn",{attrs:{text:""},on:{click:function(e){return t.$router.push("admin")}}},[s("v-icon",[t._v("mdi-tools")]),s("span",{staticClass:"mr-2"},[t._v("管理")])],1),s("v-spacer"),s("v-btn",{attrs:{text:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[s("span",{staticClass:"mr-2"},[t._v("Latest Release")])])],1),s("v-content",[s("router-view")],1)],1)},o=[],i={name:"App"},r=i,l=(s("5bba"),s("2877")),c=s("6544"),d=s.n(c),u=s("7496"),h=s("40dc"),p=s("8336"),f=s("a75b"),v=s("132d"),m=s("2fa4"),g=Object(l["a"])(r,a,o,!1,null,"4ecbc02e",null),b=g.exports;d()(g,{VApp:u["a"],VAppBar:h["a"],VBtn:p["a"],VContent:f["a"],VIcon:v["a"],VSpacer:m["a"]});var y=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"left"},[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.$router.push("user")}}},[s("v-icon",[t._v(" mdi-cash-register")]),s("span",{staticClass:"mr-2"},[t._v("收銀台")])],1)],1),s("div",{staticClass:"right"},[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.$router.push("admin")}}},[s("v-icon",[t._v("mdi-tools")]),s("span",{staticClass:"mr-2"},[t._v("管理")])],1)],1)])},x=[],C=(s("3082"),{}),_=Object(l["a"])(C,w,x,!1,null,"0c1db9a2",null),k=_.exports;d()(_,{VBtn:p["a"],VIcon:v["a"]});var V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"loading-box",class:{fade:t.loading}},[s("div",{staticClass:"loading"}),s("div",{staticClass:"text"},[t._v("loading....")])]),s("v-row",[s("v-col",{attrs:{cols:1}}),s("v-col",{attrs:{cols:6}},[s("div",{attrs:{id:"video"}})]),s("v-col",{attrs:{cols:2}}),s("v-col",[s("v-btn",{on:{click:function(e){return t.StartClassify()}}},[t._v("開始/結束結帳")]),s("v-divider"),s("CheckOutList",{attrs:{goods:t.goods},on:{deleteAll:t.clear,deleteItem:t.DeleteItem,checkOut:t.CheckOut}})],1)],1),s("BreadConfirmDialog",{ref:"breadConfirmDialog"}),s("Confirm",{ref:"confirm"})],1)},O=[],j=(s("5260"),s("237d")),$=s.n(j),I=s("1524"),A=s.n(I),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{staticClass:"d-flex",style:{zIndex:t.options.zIndex},attrs:{"max-width":t.options.width,transition:"slide-x-transition",persistent:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel(e)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-toolbar",{attrs:{dark:"",color:t.options.color,dense:"",flat:""}},[s("v-toolbar-title",{staticClass:"white--text title"})],1),s("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}],staticClass:"pa-4 text display-2"},[t._v("\n      "+t._s(t.message)+"\n    ")])],1)],1)},T=[],L={data:()=>({dialog:!1,resolve:null,reject:null,message:null,options:{color:"secondary",width:290,zIndex:200}}),methods:{open(t,e){return this.dialog=!0,this.message=t,this.options=Object.assign(this.options,e),window.setTimeout(()=>{this.dialog=!1,this.resolve(t)},1500),new Promise((t,e)=>{this.resolve=t,this.reject=e})}}},S=L,D=(s("0784"),s("b0af")),P=s("99d9"),B=s("169a"),N=s("71d9"),z=s("2a7f"),M=Object(l["a"])(S,E,T,!1,null,"931b72da",null),R=M.exports;d()(M,{VCard:D["a"],VCardText:P["b"],VDialog:B["a"],VToolbar:N["a"],VToolbarTitle:z["a"]});var J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{attrs:{"max-width":"300px"}},[s("v-toolbar-title",{staticClass:"ml-1 mb-3"},[t._v("結帳清單")]),s("v-divider")],1),s("v-card",{staticClass:"shopinglist",attrs:{"max-width":"300px"}},[0!=t.All()?s("v-list",[t._l(t.goods,(function(e){return s("v-list-item",{key:e.id,staticClass:"ml-3"},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"mb-2",domProps:{textContent:t._s(e.text)}}),s("v-list-item-subtitle",{domProps:{textContent:t._s("$ "+e.price)}})],1),s("v-list-item-action",[s("v-btn",{attrs:{icon:""},on:{click:function(s){return t.DeleteItem(e.id)}}},[s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-delete")])],1)],1)],1)})),s("div",{attrs:{id:"end"}})],2):t._e()],1),s("v-card",{attrs:{"max-width":"300px"}},[s("v-divider"),0!=t.All()?s("v-list-item",[s("v-list-item-title",{staticClass:"d-flex flex-row"},[s("v-icon",[t._v("mdi-currency-usd")]),s("v-list-item-title",{staticClass:"ml-1 title"},[t._v(t._s(t.All()))])],1)],1):t._e(),0!=t.All()?s("v-list-item",[s("v-list-item-title",{staticClass:"d-flex flex-row justify-space-between"},[s("v-btn",{attrs:{color:"light-blue lighten-1"},on:{click:function(e){return t.$emit("checkOut")}}},[t._v("結帳")]),s("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.$emit("deleteAll")}}},[t._v("刪除全部")])],1)],1):t._e()],1)],1)},W=[],q={props:{goods:{type:Array,default:null}},updated(){document.querySelector("#end").scrollIntoView()},methods:{DeleteItem:function(t){this.$emit("deleteItem",t)},All:function(){let t=0;return this.goods.forEach(e=>{t+=e.price}),t}}},F=q,K=(s("7712"),s("ce7e")),H=s("8860"),U=s("da13"),Y=s("1800"),G=s("5d23"),Q=Object(l["a"])(F,J,W,!1,null,"b47caa48",null),X=Q.exports;d()(Q,{VBtn:p["a"],VCard:D["a"],VDivider:K["a"],VIcon:v["a"],VList:H["a"],VListItem:U["a"],VListItemAction:Y["a"],VListItemContent:G["a"],VListItemSubtitle:G["b"],VListItemTitle:G["c"],VToolbarTitle:z["a"]});var Z=s("9420");let tt,et;const st=A.a.KNNClassifier();var nt={name:"App",components:{BreadConfirmDialog:R,CheckOutList:X,Confirm:Z["a"]},created(){tt=A.a.featureExtractor("MobileNet",()=>{console.log("ml5 finish 1"),this.loading=!0,new $.a(t),this.LoadfromObject()});const t=function(t){t.setup=e=>{let s={video:{mandatory:{minWidth:735,maxWidth:735},optional:[{maxFrameRate:30}]}};t.noCanvas(),et=t.createCapture(s),et.parent("video")}}},data:()=>({alpha:["0","1","2","3","4","5","6","7","8","9"],features:[],feature_result:"",feature_chance:"",goods:[],label:"",moneys:{},now:0,stop:!0,loading:!1,ans:"",breadres:""}),methods:{AddtoCheckoutList(t){return new Promise(e=>{this.goods.push({text:t,id:this.AutoIncremental(),price:parseInt(this.moneys[t])}),this.$socket.send(`${t} ${this.moneys[t]}元`),e()})},clear(){this.goods.length=0,this.goods.pop(),this.$socket.send("Welcome 😀"),this.stop=!0},AutoIncremental(){return this.now<9?this.now+=1:this.now=0,(new Date).valueOf().toString().slice(7)+this.alpha[this.now]},DeleteItem(t){this.goods=this.goods.filter(e=>{return e.id!==t})},CheckOut(){let t=0;this.stop=!0;let e={},s="";this.goods.forEach(s=>{t+=s.price,e[s.text]=void 0===e[s.text]?1:e[s.text]+=1}),Object.keys(e).forEach(t=>{s=s.concat(`${t} ${e[t]}個`,"\n")}),this.ans=s,this.$socket.send(`共${t}元`),this.$refs.confirm.open("Message",s,`共${t}元`).then(()=>{this.clear(),this.$socket.send("謝謝光臨")}).catch(()=>{this.$socket.send("謝謝光臨")})},AddExample(t){const e=tt.infer(et);st.addExample(e,t),this.features=st.getCountByLabel()},Classify(){const t=st.getNumLabels();if(t<=0)return void console.error("There is no examples in any label");const e=tt.infer(et);st.classify(e,9,this.Result)},Result(t,e){if(t)throw t;if(e.confidencesByLabel){const t=e.confidencesByLabel;this.feature_result=e.label,this.feature_chance=100*t[e.label]}this.stop||("bg"===e.label?(console.log(e.label),window.setTimeout(()=>{this.Classify()},800)):this.breadres===e.label?(this.breadres="",this.$refs.breadConfirmDialog.open(e.label).then(t=>{this.AddtoCheckoutList(t)}).then(()=>{window.setTimeout(()=>{this.Classify()},1100)})):(this.breadres=e.label,window.setTimeout(()=>{this.Classify()},300)))},LoadfromObject(){const t=JSON.parse(window.localStorage.getItem("save"));this.moneys=JSON.parse(window.localStorage.getItem("moneys")),st.load(t,()=>{console.log("successfully load")})},StartClassify(){this.stop=!this.stop,this.$socket.send("Welcome 😀"),this.Classify()}}},at=nt,ot=(s("02b6"),s("62ad")),it=s("0fd9"),rt=Object(l["a"])(at,V,O,!1,null,"59629941",null),lt=rt.exports;d()(rt,{VBtn:p["a"],VCol:ot["a"],VDivider:K["a"],VRow:it["a"]}),n["a"].use(y["a"]);var ct=new y["a"]({mode:"history",base:"/object-classifier-shopping-cart/",routes:[{path:"/user",name:"home",component:lt},{path:"/admin",name:"admin",component:()=>s.e("chunk-d4e31e2e").then(s.bind(null,"3530"))},{path:"/",name:"main",component:k}]}),dt=s("f309"),ut=s("fcf4");s("5363");n["a"].use(dt["a"]);var ht=new dt["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:ut["a"].purple,secondary:ut["a"].cyan.lighten2}}}}),pt=s("b408"),ft=s.n(pt);n["a"].config.productionTip=!1,n["a"].use(ft.a,"wss://bread-web-socket.herokuapp.com/",{reconnection:!0,reconnectionAttempts:5,reconnectionDelay:3e3}),new n["a"]({router:ct,vuetify:ht,render:t=>t(b)}).$mount("#app")},"5bba":function(t,e,s){"use strict";var n=s("ea29"),a=s.n(n);a.a},"60ac":function(t,e,s){},7712:function(t,e,s){"use strict";var n=s("60ac"),a=s.n(n);a.a},9417:function(t,e,s){},9420:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{style:{zIndex:t.options.zIndex},attrs:{"max-width":t.options.width,persistent:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel(e)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-toolbar",{attrs:{dark:"",color:t.options.color,dense:"",flat:""}},[s("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.title))])],1),s("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}],staticClass:"pa-4 title",staticStyle:{"text-align":"center","white-space":"pre-wrap"}},[s("div",{},[t._v(t._s(t.message[0]))]),s("em",{staticStyle:{"font-size":"42px","line-height":"1.5em"}},[t._v(t._s(t.message[1]))])]),s("v-card-actions",{staticClass:"pt-0"},[s("v-spacer"),s("v-btn",{attrs:{color:"primary darken-1",text:""},nativeOn:{click:function(e){return t.agree(e)}}},[t._v("Yes")]),s("v-btn",{attrs:{color:"grey",text:""},nativeOn:{click:function(e){return t.cancel(e)}}},[t._v("Cancel")])],1)],1)],1)},a=[],o={data:()=>({dialog:!1,resolve:{},reject:{},message:0,title:0,options:{color:"cyan",width:290,zIndex:200}}),methods:{open(t,...e){return this.dialog=!0,this.title=t,this.message=e,new Promise((t,e)=>{this.resolve=t,this.reject=e})},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.reject(!1),this.dialog=!1}}},i=o,r=s("2877"),l=s("6544"),c=s.n(l),d=s("8336"),u=s("b0af"),h=s("99d9"),p=s("169a"),f=s("2fa4"),v=s("71d9"),m=s("2a7f"),g=Object(r["a"])(i,n,a,!1,null,null,null);e["a"]=g.exports;c()(g,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VDialog:p["a"],VSpacer:f["a"],VToolbar:v["a"],VToolbarTitle:m["a"]})},be64:function(t,e,s){},c35c:function(t,e,s){},ea29:function(t,e,s){}});
//# sourceMappingURL=app.d3556c41.js.map