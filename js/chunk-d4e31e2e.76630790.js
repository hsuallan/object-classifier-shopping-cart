(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4e31e2e"],{"1b2c":function(e,t,s){},"34e6":function(e,t,s){"use strict";var i=s("d7d7"),n=s.n(i);n.a},3530:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("section",{staticClass:"loading-box",class:{fade:e.loading}},[s("div",{staticClass:"loading"}),s("div",{staticClass:"text"},[e._v("loading....")])]),s("v-row",[s("v-col",{attrs:{cols:1}}),s("v-col",{attrs:{cols:6}},[s("div",{attrs:{id:"video"}})]),s("v-col",{attrs:{cols:2}}),s("v-col",[s("div",{staticClass:"list"},[s("v-card",[s("v-btn",{on:{click:function(t){return e.Bg()}}},[e._v("加入背景")]),s("v-text-field",{staticStyle:{width:"125px"},attrs:{hint:"label","prepend-inner-icon":"mdi-basket",counter:15},model:{value:e.label,callback:function(t){e.label=t},expression:"label"}}),s("div",{staticClass:"line"},[s("v-text-field",{staticStyle:{width:"125px"},attrs:{hint:"money","prepend-inner-icon":"mdi-currency-usd",rules:[e.rules.number],counter:15},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}})],1),s("v-btn",{staticClass:"mr-3",on:{click:function(t){return e.AddExample(e.label)}}},[e._v("加入樣本")]),s("v-btn",{on:{click:function(t){return e.Classify()}}},[e._v("測試")]),s("v-btn",{staticClass:"ml-3",on:{click:function(t){return e.SaveasObject()}}},[e._v("儲存訓練")]),s("v-divider")],1),s("v-card",{staticClass:"shopinglist"},[0!=Object.keys(e.features).length?s("v-list",[e._l(Object.keys(e.features),(function(t){return s("v-list-item",{key:t,staticClass:"ml-3"},[s("v-list-item-content",[s("v-list-item-title","bg"===t?{domProps:{textContent:e._s("背景有 "+e.features[t]+" 個樣本 ")}}:{domProps:{textContent:e._s(t+"有"+e.features[t]+"樣本 $"+e.moneys[t])}})],1),s("v-list-item-action",[s("v-btn",{attrs:{icon:""},on:{click:function(s){return e.ClearLabel(t)}}},[s("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("mdi-delete")])],1)],1)],1)})),s("div",{attrs:{id:"end"}})],2):e._e()],1),0!=e.feature_result.length?s("h2",[e._v("\n          樣本測試結果："+e._s("bg"===e.feature_result?"背景":e.feature_result)+"\n        ")]):e._e()],1)])],1),s("Confirm",{ref:"confirm"})],1)},n=[],a=(s("5260"),s("237d")),l=s.n(a),r=s("1524"),o=s.n(r),h=s("9420");let u,d;var c={name:"App",components:{Confirm:h["a"]},created(){u=o.a.featureExtractor("MobileNet",()=>{console.log("ml5 finish 1"),this.loading=!0,new l.a(e)});const e=function(e){e.setup=t=>{let s={video:{mandatory:{minWidth:735,maxWidth:735},optional:[{maxFrameRate:30}]}};e.noCanvas(),d=e.createCapture(s),d.parent("video")}}},data:()=>({features:{},feature_result:"",feature_chance:"",money:"",moneys:{},label:"",classifier:o.a.KNNClassifier(),save_data:"",loading:!1,rules:{number(e){const t=/^[^a-z]*$/;return!!t.test(e)||"number only"}}}),methods:{async AddExample(e){[1,2,3].forEach(async t=>{let s=await u.infer(d);await this.classifier.addExample(s,e),this.features=await this.classifier.getCountByLabel()}),"bg"!==e&&(this.moneys[e]=this.money)},Classify(){const e=this.classifier.getNumLabels();if(e<=0)return void console.error("There is no examples in any label");const t=u.infer(d);this.classifier.classify(t,7,this.Result)},Result(e,t){if(e)throw e;if(t.confidencesByLabel){const e=t.confidencesByLabel;this.feature_result=t.label,this.feature_chance=100*e[t.label]}},SaveasObject(){const e=this.classifier.getClassifierDataset();this.classifier.mapStringToIndex.length>0&&Object.keys(e).forEach(t=>{this.classifier.mapStringToIndex[t]&&(e[t].label=this.classifier.mapStringToIndex[t])});const t=Object.keys(e).map(t=>{const s=e[t];return s?s.dataSync():null});console.table(this.save_data),this.save_data={dataset:e,tensors:t},window.localStorage.setItem("save",JSON.stringify(this.save_data)),window.localStorage.setItem("moneys",JSON.stringify(this.moneys)),window.localStorage.setItem("features",JSON.stringify(this.features)),alert("save successfully")},ClearLabel(e){this.classifier.clearLabel(e),this.features=this.classifier.getCountByLabel()},async Bg(){this.AddExample("bg")}}},p=c,f=(s("34e6"),s("56d1"),s("2877")),g=s("6544"),v=s.n(g),b=s("8336"),m=s("b0af"),y=s("62ad"),S=s("ce7e"),$=s("132d"),x=s("8860"),C=s("da13"),I=s("1800"),V=s("5d23"),k=s("0fd9"),w=(s("4ff9"),s("d191"),s("9d26")),_=(s("1b2c"),s("a9ad")),B=s("7560"),M=s("58df"),E=s("80d2"),O=Object(M["a"])(B["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(e,t){const{children:s,listeners:i,props:n}=t,a={staticClass:"v-label",class:{"v-label--active":n.value,"v-label--is-disabled":n.disabled,...Object(B["b"])(t)},attrs:{for:n.for,"aria-hidden":!n.for},on:i,style:{left:Object(E["e"])(n.left),right:Object(E["e"])(n.right),position:n.absolute?"absolute":"relative"},ref:"label"};return e("label",_["a"].options.methods.setTextColor(n.focused&&n.color,a),s)}}),L=O,D=(s("8ff2"),Object(M["a"])(_["a"],B["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t,domProps:{innerHTML:e}})}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),F=D,j=s("3206"),A=s("d9bd"),W=Object(M["a"])(_["a"],Object(j["a"])("form"),B["a"]).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",e)}},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(e,t){Object(E["i"])(e,t)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(e){e||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.validate())},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(e){this.shouldValidate&&this.$emit("update:error",e)},value(e){this.lazyValue=e}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(e){return e?Array.isArray(e)?e:[e]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(e=!1,t){const s=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const e=this.rules[i],n="function"===typeof e?e(t):e;"string"===typeof n?s.push(n):"boolean"!==typeof n&&Object(A["b"])(`Rules should return a string or boolean, received '${typeof n}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}});const P=Object(M["a"])(W);var T=P.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},height:[Number,String],hideDetails:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":this.hideDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty(){return!!this.lazyValue},isDisabled(){return this.disabled||this.readonly},isLabelActive(){return this.isDirty}},watch:{value(e){this.lazyValue=e}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(e,t){const s=this[`${e}Icon`],i=`click:${Object(E["o"])(e)}`,n={props:{color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:this.$listeners[i]||t?{click:e=>{e.preventDefault(),e.stopPropagation(),this.$emit(i,e),t&&t(e)},mouseup:e=>{e.preventDefault(),e.stopPropagation()}}:void 0};return this.$createElement("div",{staticClass:`v-input__icon v-input__icon--${Object(E["o"])(e)}`,key:e+s},[this.$createElement(w["a"],n,s)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(E["e"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(L,{props:{color:this.validationState,dark:this.dark,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){if(this.hideDetails)return null;const e=this.hasHint?[this.hint]:this.validations;return this.$createElement(F,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.hasMessages||this.hasHint?e:[]}})},genSlot(e,t,s){if(!s.length)return null;const i=`${e}-${t}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},s)},genPrependSlot(){const e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick(e){this.$emit("click",e)},onMouseDown(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),z=T,N=(s("e9b1"),Object(M["a"])(B["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(e,t){const{props:s}=t,i=parseInt(s.max,10),n=parseInt(s.value,10),a=i?`${n} / ${i}`:String(s.value),l=i&&n>i;return e("div",{staticClass:"v-counter",class:{"error--text":l,...Object(B["b"])(t)}},a)}})),R=N,H=s("297c"),J=s("5607");const U=Object(M["a"])(z,H["a"]),q=["color","file","time","date","datetime-local","week","month"];var K=U.extend().extend({name:"v-text-field",directives:{ripple:J["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$vuetify.icons.clear"},counter:[Boolean,Number,String],filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...z.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},counterValue(){return(this.internalValue||"").toString().length},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",this.lazyValue)}},isDirty(){return null!=this.lazyValue&&this.lazyValue.toString().length>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined||this.fullWidth},isLabelActive(){return this.isDirty||q.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth},isSolo(){return this.solo||this.soloInverted},labelPosition(){let e=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(e-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:e,right:"auto"}:{left:"auto",right:e}},showLabel(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder)},labelValue(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder)}},watch:{labelValue:"setLabelWidth",outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},value(e){this.lazyValue=e}},created(){this.$attrs.hasOwnProperty("box")&&Object(A["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(A["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(A["c"])("shaped should be used with either filled or outlined",this)},mounted(){this.autofocus&&this.onFocus(),this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth(),requestAnimationFrame(()=>this.isBooted=!0)},methods:{focus(){this.onFocus()},blur(e){window.requestAnimationFrame(()=>{this.$refs.input&&this.$refs.input.blur()})},clearableCallback(){this.internalValue=null,this.$nextTick(()=>this.$refs.input&&this.$refs.input.focus())},genAppendSlot(){const e=[];return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot(){const e=[];return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot(){const e=[];return this.$slots["append"]?e.push(this.$slots["append"]):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot(){const e=z.options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot();return t&&(e.children=e.children||[],e.children.unshift(t)),e},genClearIcon(){if(!this.clearable)return null;const e=this.isDirty?"clear":"";return this.genSlot("append","inner",[this.genIcon(e,this.clearableCallback)])},genCounter(){if(!1===this.counter||null==this.counter)return null;const e=!0===this.counter?this.$attrs.maxlength:this.counter;return this.$createElement(R,{props:{dark:this.dark,light:this.light,max:e,value:this.counterValue}})},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.disabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(L,e,this.$slots.label||this.label)},genLegend(){const e=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(E["e"])(e)}},[t])},genInput(){const e=Object.assign({},this.$listeners);return delete e["change"],this.$createElement("input",{style:{},domProps:{value:this.lazyValue},attrs:{...this.$attrs,autofocus:this.autofocus,disabled:this.disabled,id:this.computedId,placeholder:this.placeholder,readonly:this.readonly,type:this.type},on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input"})},genMessages(){return this.hideDetails?null:this.$createElement("div",{staticClass:"v-text-field__details"},[z.options.methods.genMessages.call(this),this.genCounter()])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(e){return this.$createElement("div",{class:`v-text-field__${e}`,ref:e},this[e])},onBlur(e){this.isFocused=!1,e&&this.$emit("blur",e)},onClick(){this.isFocused||this.disabled||!this.$refs.input||this.$refs.input.focus()},onFocus(e){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,e&&this.$emit("focus",e)))},onInput(e){const t=e.target;this.internalValue=t.value,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){e.keyCode===E["p"].enter&&this.$emit("change",this.internalValue),this.$emit("keydown",e)},onMouseDown(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),z.options.methods.onMouseDown.call(this,e)},onMouseUp(e){this.hasMouseDown&&this.focus(),z.options.methods.onMouseUp.call(this,e)},setLabelWidth(){this.outlined&&this.$refs.label&&(this.labelWidth=.75*this.$refs.label.offsetWidth+6)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)}}}),G=Object(f["a"])(p,i,n,!1,null,"78c10426",null);t["default"]=G.exports;v()(G,{VBtn:b["a"],VCard:m["a"],VCol:y["a"],VDivider:S["a"],VIcon:$["a"],VList:x["a"],VListItem:C["a"],VListItemAction:I["a"],VListItemContent:V["a"],VListItemTitle:V["c"],VRow:k["a"],VTextField:K})},"4ff9":function(e,t,s){},"56d1":function(e,t,s){"use strict";var i=s("981c"),n=s.n(i);n.a},"8ff2":function(e,t,s){},"981c":function(e,t,s){},d191:function(e,t,s){},d7d7:function(e,t,s){},e9b1:function(e,t,s){}}]);
//# sourceMappingURL=chunk-d4e31e2e.76630790.js.map