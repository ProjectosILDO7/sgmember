import{x as Bt,r as R,c as f,w as me,P as J,aV as Et,aH as Rt,aJ as Ht,aI as Lt,R as ft,h,g as je,k as Qe,aW as Ue,aX as vt,aY as mt,aZ as St,H as Tt,aK as Pt,J as Dt,aL as $t,U as Nt,Q as Be,a_ as Kt,a$ as jt,E as ne,b0 as Qt,b1 as Ut,b2 as rt,b3 as ke,b4 as Wt,b5 as Xt,B as $e,b6 as Yt,s as ve,ac as Jt,b7 as Zt,aF as Gt,az as el}from"./index.6cdbd242.js";import{n as ct,Q as tl,a as ll,d as ul,e as nl}from"./format.36c0617c.js";import{r as Ke}from"./rtl.b51694b1.js";const K=1e3,al=["start","center","end","start-force","center-force","end-force"],gt=Array.prototype.filter,il=window.getComputedStyle(document.body).overflowAnchor===void 0?Bt:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const o=e.children||[];gt.call(o,_=>_.dataset&&_.dataset.qVsAnchor!==void 0).forEach(_=>{delete _.dataset.qVsAnchor});const b=o[c];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function Se(e,c){return e+c}function Ne(e,c,o,b,_,i,O,y){const g=e===window?document.scrollingElement||document.documentElement:e,I=_===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-O-y,scrollMaxSize:0,offsetStart:-O,offsetEnd:-y};if(_===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=g.scrollLeft,r.scrollViewSize+=g.clientWidth),r.scrollMaxSize=g.scrollWidth,i===!0&&(r.scrollStart=(Ke===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=g.scrollTop,r.scrollViewSize+=g.clientHeight),r.scrollMaxSize=g.scrollHeight),o!==null)for(let w=o.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=w[I]);if(b!==null)for(let w=b.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=w[I]);if(c!==e){const w=g.getBoundingClientRect(),C=c.getBoundingClientRect();_===!0?(r.offsetStart+=C.left-w.left,r.offsetEnd-=C.width):(r.offsetStart+=C.top-w.top,r.offsetEnd-=C.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function st(e,c,o,b){c==="end"&&(c=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(b===!0&&(c=(Ke===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):o===!0?(b===!0&&(c=(Ke===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function xe(e,c,o,b){if(o>=b)return 0;const _=c.length,i=Math.floor(o/K),O=Math.floor((b-1)/K)+1;let y=e.slice(i,O).reduce(Se,0);return o%K!==0&&(y-=c.slice(i*K,o).reduce(Se,0)),b%K!==0&&b!==_&&(y-=c.slice(b,O*K).reduce(Se,0)),y}const ht={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},hl=Object.keys(ht),ol={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...ht};function rl({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:o,virtualScrollItemSizeComputed:b}){const _=je(),{props:i,emit:O,proxy:y}=_,{$q:g}=y;let I,r,w,C=[],k;const z=R(0),T=R(0),d=R({}),P=R(null),W=R(null),L=R(null),F=R({from:0,to:0}),qe=f(()=>i.tableColspan!==void 0?i.tableColspan:100);b===void 0&&(b=f(()=>i.virtualScrollItemSize));const M=f(()=>b.value+";"+i.virtualScrollHorizontal),X=f(()=>M.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(M,Z);function Z(){ae(r,!0)}function ge(l){ae(l===void 0?r:l)}function G(l,a){const v=c();if(v==null||v.nodeType===8)return;const A=Ne(v,o(),P.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);w!==A.scrollViewSize&&j(A.scrollViewSize),D(v,A,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,al.indexOf(a)>-1?a:r>-1&&l>r?"end":"start")}function Ae(){const l=c();if(l==null||l.nodeType===8)return;const a=Ne(l,o(),P.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),v=e.value-1,A=a.scrollMaxSize-a.offsetStart-a.offsetEnd-T.value;if(I===a.scrollStart)return;if(a.scrollMaxSize<=0){D(l,a,0,0);return}w!==a.scrollViewSize&&j(a.scrollViewSize),he(F.value.from);const B=Math.floor(a.scrollMaxSize-Math.max(a.scrollViewSize,a.offsetEnd)-Math.min(k[v],a.scrollViewSize/2));if(B>0&&Math.ceil(a.scrollStart)>=B){D(l,a,v,a.scrollMaxSize-a.offsetEnd-C.reduce(Se,0));return}let V=0,S=a.scrollStart-a.offsetStart,E=S;if(S<=A&&S+a.scrollViewSize>=z.value)S-=z.value,V=F.value.from,E=S;else for(let m=0;S>=C[m]&&V<v;m++)S-=C[m],V+=K;for(;S>0&&V<v;)S-=k[V],S>-a.scrollViewSize?(V++,E=S):E=k[V]+S;D(l,a,V,E)}function D(l,a,v,A,B){const V=typeof B=="string"&&B.indexOf("-force")>-1,S=V===!0?B.replace("-force",""):B,E=S!==void 0?S:"start";let m=Math.max(0,v-d.value[E]),$=m+d.value.total;$>e.value&&($=e.value,m=Math.max(0,$-d.value.total)),I=a.scrollStart;const Y=m!==F.value.from||$!==F.value.to;if(Y===!1&&S===void 0){ye(v);return}const{activeElement:Ie}=document,Q=L.value;Y===!0&&Q!==null&&Q!==Ie&&Q.contains(Ie)===!0&&(Q.addEventListener("focusout",ze),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",ze)})),il(Q,v-m);const pe=S!==void 0?k.slice(m,v).reduce(Se,0):0;if(Y===!0){const ee=$>=F.value.from&&m<=F.value.to?F.value.to:$;F.value={from:m,to:ee},z.value=xe(C,k,0,m),T.value=xe(C,k,$,e.value),requestAnimationFrame(()=>{F.value.to!==$&&I===a.scrollStart&&(F.value={from:F.value.from,to:$},T.value=xe(C,k,$,e.value))})}requestAnimationFrame(()=>{if(I!==a.scrollStart)return;Y===!0&&he(m);const ee=k.slice(m,v).reduce(Se,0),te=ee+a.offsetStart+z.value,_e=te+k[v];let we=te+A;if(S!==void 0){const Re=ee-pe,Ve=a.scrollStart+Re;we=V!==!0&&Ve<te&&_e<Ve+a.scrollViewSize?Ve:S==="end"?_e-a.scrollViewSize:te-(S==="start"?0:Math.round((a.scrollViewSize-k[v])/2))}I=we,st(l,we,i.virtualScrollHorizontal,g.lang.rtl),ye(v)})}function he(l){const a=L.value;if(a){const v=gt.call(a.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),A=v.length,B=i.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let V=l,S,E;for(let m=0;m<A;){for(S=B(v[m]),m++;m<A&&v[m].classList.contains("q-virtual-scroll--with-prev")===!0;)S+=B(v[m]),m++;E=S-k[V],E!==0&&(k[V]+=E,C[Math.floor(V/K)]+=E),V++}}}function ze(){L.value!==null&&L.value!==void 0&&L.value.focus()}function ae(l,a){const v=1*b.value;(a===!0||Array.isArray(k)===!1)&&(k=[]);const A=k.length;k.length=e.value;for(let V=e.value-1;V>=A;V--)k[V]=v;const B=Math.floor((e.value-1)/K);C=[];for(let V=0;V<=B;V++){let S=0;const E=Math.min((V+1)*K,e.value);for(let m=V*K;m<E;m++)S+=k[m];C.push(S)}r=-1,I=void 0,z.value=xe(C,k,0,F.value.from),T.value=xe(C,k,F.value.to,e.value),l>=0?(he(F.value.from),J(()=>{G(l)})):ie()}function j(l){if(l===void 0&&typeof window!="undefined"){const S=c();S!=null&&S.nodeType!==8&&(l=Ne(S,o(),P.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const a=parseFloat(i.virtualScrollSliceRatioBefore)||0,v=parseFloat(i.virtualScrollSliceRatioAfter)||0,A=1+a+v,B=l===void 0||l<=0?1:Math.ceil(l/b.value),V=Math.max(1,B,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/A));d.value={total:Math.ceil(V*A),start:Math.ceil(V*a),center:Math.ceil(V*(.5+a)),end:Math.ceil(V*(1+a)),view:B}}function Ee(l,a){const v=i.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+v]:b.value+"px"};return[l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"before",ref:P},[h("tr",[h("td",{style:{[v]:`${z.value}px`,...A},colspan:qe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"before",ref:P,style:{[v]:`${z.value}px`,...A}}),h(l,{class:"q-virtual-scroll__content",key:"content",ref:L,tabindex:-1},a.flat()),l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[h("tr",[h("td",{style:{[v]:`${T.value}px`,...A},colspan:qe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[v]:`${T.value}px`,...A}})]}function ye(l){r!==l&&(i.onVirtualScroll!==void 0&&O("virtualScroll",{index:l,from:F.value.from,to:F.value.to-1,direction:l<r?"decrease":"increase",ref:y}),r=l)}j();const ie=Et(Ae,g.platform.is.ios===!0?120:35);Rt(()=>{j()});let be=!1;return Ht(()=>{be=!0}),Lt(()=>{if(be!==!0)return;const l=c();I!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,I,i.virtualScrollHorizontal,g.lang.rtl):G(r)}),ft(()=>{ie.cancel()}),Object.assign(y,{scrollTo:G,reset:Z,refresh:ge}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:ae,padVirtualScroll:Ee,scrollTo:G,reset:Z,refresh:ge}}var cl=Qe({name:"QField",inheritAttrs:!1,props:{...Ue,tag:{type:String,default:"label"}},emits:vt,setup(){return mt(St({requiredForAttr:!1,tagProp:!0}))}});const sl={xs:8,sm:10,md:14,lg:20,xl:24};var dl=Qe({name:"QChip",props:{...Tt,...Pt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:o}){const{proxy:{$q:b}}=je(),_=Dt(e,b),i=$t(e,sl),O=f(()=>e.selected===!0||e.icon!==void 0),y=f(()=>e.selected===!0?e.iconSelected||b.iconSet.chip.selected:e.icon),g=f(()=>e.iconRemove||b.iconSet.chip.remove),I=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),r=f(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(I.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(_.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},P={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||b.lang.label.remove};return{chip:d,remove:P}});function C(d){d.keyCode===13&&k(d)}function k(d){e.disable||(o("update:selected",!e.selected),o("click",d))}function z(d){(d.keyCode===void 0||d.keyCode===13)&&(ne(d),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function T(){const d=[];I.value===!0&&d.push(h("div",{class:"q-focus-helper"})),O.value===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const P=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Kt(c.default,P))),e.iconRight&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...w.value.remove,onClick:z,onKeyup:z})),d}return()=>{if(e.modelValue===!1)return;const d={class:r.value,style:i.value};return I.value===!0&&Object.assign(d,w.value.chip,{onClick:k,onKeyup:C}),Nt("div",d,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[jt,e.ripple]])}}});const dt=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Ue);var yl=Qe({name:"QSelect",inheritAttrs:!1,props:{...ol,...Qt,...Ue,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:dt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...vt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:c,emit:o}){const{proxy:b}=je(),{$q:_}=b,i=R(!1),O=R(!1),y=R(-1),g=R(""),I=R(!1),r=R(!1);let w=null,C=null,k,z,T,d=null,P,W,L,F;const qe=R(null),M=R(null),X=R(null),Z=R(null),ge=R(null),G=Ut(e),Ae=Yt(ut),D=f(()=>Array.isArray(e.options)?e.options.length:0),he=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ze,virtualScrollSliceSizeComputed:ae,localResetVirtualScroll:j,padVirtualScroll:Ee,onVirtualScrollEvt:ye,scrollTo:ie,setVirtualScrollSize:be}=rl({virtualScrollLength:D,getVirtualScrollTarget:Vt,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:he}),l=St(),a=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&k!==void 0?k:[],s=n.map(q=>wt(q,u));return e.modelValue===null&&t===!0?s.filter(q=>q!==null):s}return n}),v=f(()=>{const t={};return vl.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),A=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(a.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),E=f(()=>D.value===0),m=f(()=>a.value.map(t=>N.value(t)).join(", ")),$=f(()=>e.displayValue!==void 0?e.displayValue:m.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Ie=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),pe=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${y.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>a.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:bt,toggleOption:le,tabindex:Q.value}))),_e=f(()=>{if(D.value===0)return[];const{from:t,to:n}=ze.value;return e.options.slice(t,n).map((u,s)=>{const q=oe.value(u)===!0,x=Te(u)===!0,H=t+s,p={clickable:!0,active:x,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:A.value,role:"option","aria-selected":x===!0?"true":"false",id:`${l.targetUid.value}_${H}`,onClick:()=>{le(u)}};return q!==!0&&(y.value===H&&(p.focused=!0),_.platform.is.desktop===!0&&(p.onMousemove=()=>{i.value===!0&&re(H)})),{index:H,opt:u,html:Y.value(u),label:N.value(u),selected:p.active,focused:p.focused,toggleOption:le,setOptionIndex:re,itemProps:p}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:_.iconSet.arrow.dropdown),Re=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Le(e.optionValue,"value")),N=f(()=>Le(e.optionLabel,"label")),oe=f(()=>Le(e.optionDisable,"disable")),Fe=f(()=>a.value.map(t=>U.value(t))),yt=f(()=>{const t={onInput:ut,onChange:Ae,onKeydown:et,onKeyup:Ze,onKeypress:Ge,onFocus:Ye,onClick(n){z===!0&&ve(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Ae,t});me(a,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(O.value!==!0&&i.value!==!0||B.value!==!0)&&(T!==!0&&fe(),(O.value===!0||i.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(i,Pe),me(D,Ot);function We(t){return e.emitValue===!0?U.value(t):t}function He(t){if(t>-1&&t<a.value.length)if(e.multiple===!0){const n=e.modelValue.slice();o("remove",{index:t,value:n.splice(t,1)[0]}),o("update:modelValue",n)}else o("update:modelValue",null)}function bt(t){He(t),l.focus()}function Xe(t,n){const u=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(N.value(t),!0,!0),o("update:modelValue",u);return}if(a.value.length===0){o("add",{index:0,value:u}),o("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Te(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const s=e.modelValue.slice();o("add",{index:s.length,value:u}),s.push(u),o("update:modelValue",s)}function le(t,n){if(l.editable.value!==!0||t===void 0||oe.value(t)===!0)return;const u=U.value(t);if(e.multiple!==!0){n!==!0&&(Ce(e.fillInput===!0?N.value(t):"",!0,!0),ue()),M.value!==null&&M.value.focus(),(a.value.length===0||ke(U.value(a.value[0]),u)!==!0)&&o("update:modelValue",e.emitValue===!0?u:t);return}if((z!==!0||I.value===!0)&&l.focus(),Ye(),a.value.length===0){const x=e.emitValue===!0?u:t;o("add",{index:0,value:x}),o("update:modelValue",e.multiple===!0?[x]:x);return}const s=e.modelValue.slice(),q=Fe.value.findIndex(x=>ke(x,u));if(q>-1)o("remove",{index:q,value:s.splice(q,1)[0]});else{if(e.maxValues!==void 0&&s.length>=e.maxValues)return;const x=e.emitValue===!0?u:t;o("add",{index:s.length,value:x}),s.push(x)}o("update:modelValue",s)}function re(t){if(_.platform.is.desktop!==!0)return;const n=t>-1&&t<D.value?t:-1;y.value!==n&&(y.value=n)}function Me(t=1,n){if(i.value===!0){let u=y.value;do u=ct(u+t,-1,D.value-1);while(u!==-1&&u!==y.value&&oe.value(e.options[u])===!0);y.value!==u&&(re(u),ie(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Oe(u>=0?N.value(e.options[u]):P,!0))}}function wt(t,n){const u=s=>ke(U.value(s),t);return e.options.find(u)||n.find(u)||t}function Le(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:s=>s!==null&&typeof s=="object"&&u in s?s[u]:s}function Te(t){const n=U.value(t);return Fe.value.find(u=>ke(u,n))!==void 0}function Ye(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===m.value)&&M.value.select()}function Je(t){Jt(t,27)===!0&&i.value===!0&&(ve(t),ue(),fe()),o("keyup",t)}function Ze(t){const{value:n}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),s=x=>{const H=e.options.find(p=>x.value(p).toLocaleLowerCase()===u);return H===void 0?!1:(a.value.indexOf(H)===-1?le(H):ue(),!0)},q=x=>{s(U)!==!0&&(s(N)===!0||x===!0||ce(n,!0,()=>q(!0)))};q()}else l.clearValue(t)}function Ge(t){o("keypress",t)}function et(t){if(o("keydown",t),Zt(t)===!0)return;const n=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(y.value>-1||n===!0);if(t.keyCode===27){$e(t);return}if(t.keyCode===9&&u===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),y.value=-1,Me(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ae.value!==void 0&&(ne(t),y.value=Math.max(-1,Math.min(D.value,y.value+(t.keyCode===33?-1:1)*ae.value.view)),Me(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),Me(t.keyCode===38?-1:1,e.multiple));const s=D.value;if((L===void 0||F<Date.now())&&(L=""),s>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length!==0)){i.value!==!0&&de(t);const q=t.key.toLocaleLowerCase(),x=L.length===1&&L[0]===q;F=Date.now()+1500,x===!1&&(ne(t),L+=q);const H=new RegExp("^"+L.split("").map(De=>fl.indexOf(De)>-1?"\\"+De:De).join(".*"),"i");let p=y.value;if(x===!0||p<0||H.test(N.value(e.options[p]))!==!0)do p=ct(p+1,-1,s-1);while(p!==y.value&&(oe.value(e.options[p])===!0||H.test(N.value(e.options[p]))!==!0));y.value!==p&&J(()=>{re(p),ie(p),p>=0&&e.useInput===!0&&e.fillInput===!0&&Oe(N.value(e.options[p]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ne(t),y.value>-1&&y.value<s){le(e.options[y.value]);return}if(n===!0){const q=(x,H)=>{if(H){if(dt(H)!==!0)return}else H=e.newValueMode;if(Ce("",e.multiple!==!0,!0),x==null)return;(H==="toggle"?le:Xe)(x,H==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),ue())};if(e.onNewValue!==void 0?o("newValue",g.value,q):q(g.value),e.multiple!==!0)return}i.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return z===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Vt(){return tt()}function Ct(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?te.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?te.value.map((t,n)=>h(dl,{key:"option-"+n,removable:l.editable.value===!0&&oe.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(n)}},()=>h("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[h("span",{[Ie.value===!0?"innerHTML":"textContent"]:$.value})]}function lt(){if(E.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:g.value}):void 0;const t=c.option!==void 0?c.option:u=>h(nl,{key:u.index,...u.itemProps},()=>h(ll,()=>h(ul,()=>h("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=Ee("div",_e.value.map(t));return c["before-options"]!==void 0&&(n=c["before-options"]().concat(n)),el(c["after-options"],n)}function kt(t,n){const u=n===!0?{...pe.value,...l.splitAttrs.attributes.value}:void 0,s={ref:n===!0?M:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&z===!0&&(Array.isArray(s.class)===!0?s.class=[...s.class,"no-pointer-events"]:s.class+=" no-pointer-events"),h("input",s)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Oe(t.target.value||""),T=!0,P=g.value,l.focused.value!==!0&&(z!==!0||I.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(g.value)},e.inputDebounce)))}function Oe(t,n){g.value!==t&&(g.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?o("inputValue",t):C=setTimeout(()=>{C=null,o("inputValue",t)},e.inputDebounce))}function Ce(t,n,u){T=u!==!0,e.useInput===!0&&(Oe(t,!0),(n===!0||u!==!0)&&(P=t),n!==!0&&ce(t))}function ce(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&a.value.length!==0&&T!==!0&&t===N.value(a.value[0])&&(t="");const s=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);d!==null&&clearTimeout(d),d=s,o("filter",t,(q,x)=>{(n===!0||l.focused.value===!0)&&d===s&&(clearTimeout(d),typeof q=="function"&&q(),r.value=!1,J(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?i.value===!0&&ue():i.value===!0?Pe(!0):i.value=!0),typeof x=="function"&&J(()=>{x(b)}),typeof u=="function"&&J(()=>{u(b)})}))},()=>{l.focused.value===!0&&d===s&&(clearTimeout(d),l.innerLoading.value=!1,r.value=!1),i.value===!0&&(i.value=!1)})}function xt(){return h(tl,{ref:X,class:S.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&E.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:A.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Re.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:at,onBeforeHide:qt,onShow:At},lt)}function qt(t){it(t),se()}function At(){be()}function zt(t){ve(t),M.value!==null&&M.value.focus(),I.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function It(t){ve(t),J(()=>{I.value=!1})}function pt(){const t=[h(cl,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:A.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:zt,onBlur:It},{...c,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(h("div",{ref:ge,class:S.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:$e,onScrollPassive:ye},lt())),h(Gt,{ref:Z,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:at,onBeforeHide:_t,onHide:Ft,onShow:Mt},()=>h("div",{class:"q-select__dialog"+(A.value===!0?" q-select__dialog--dark q-dark":"")+(I.value===!0?" q-select__dialog--focused":"")},t))}function _t(t){it(t),Z.value!==null&&Z.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Ft(t){ue(),l.focused.value===!1&&o("blur",t),fe()}function Mt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),be()}function se(){O.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,r.value=!1)))}function de(t){l.editable.value===!0&&(z===!0?(l.onControlFocusin(t),O.value=!0,J(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(g.value):(E.value!==!0||c["no-option"]!==void 0)&&(i.value=!0))}function ue(){O.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&a.value.length!==0&&N.value(a.value[0])||"",!0,!0)}function Pe(t){let n=-1;if(t===!0){if(a.value.length!==0){const u=U.value(a.value[0]);n=e.options.findIndex(s=>ke(U.value(s),u))}j(n)}re(n)}function Ot(t,n){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),J(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>n?j():Pe(!0))}))}function nt(){O.value===!1&&X.value!==null&&X.value.updatePosition()}function at(t){t!==void 0&&ve(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&ve(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function ot(){z=_.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||E.value===!1:!0),W=_.platform.is.ios===!0&&z===!0&&e.useInput===!0?"fade":e.transitionShow}return Wt(ot),Xt(nt),ot(),ft(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(b,{showPopup:de,hidePopup:ue,removeAtIndex:He,add:Xe,toggleOption:le,getOptionIndex:()=>y.value,setOptionIndex:re,moveOptionSelection:Me,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:Te,getEmittingOptionValue:We,isOptionDisabled:(...t)=>oe.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(l,{innerValue:a,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:qe,targetRef:M,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(O.value===!0||E.value!==!0||c["no-option"]!==void 0))return z===!0?pt():xt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if($e(t),z!==!0&&i.value===!0){se(),M.value!==null&&M.value.focus();return}de(t)}},getControl:t=>{const n=Ct(),u=t===!0||O.value!==!0||z!==!0;if(e.useInput===!0)n.push(kt(t,u));else if(l.editable.value===!0){const q=u===!0?pe.value:void 0;n.push(h("input",{ref:u===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:$.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:et,onKeyup:Je,onKeypress:Ge})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(h("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(G.value!==void 0&&e.disable!==!0&&Fe.value.length!==0){const q=Fe.value.map(x=>h("option",{value:x,selected:!0}));n.push(h("select",{class:"hidden",name:G.value,multiple:e.multiple},q))}const s=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return h("div",{class:"q-field__native row items-center",...s,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[h(Be,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:we.value})]:null}),mt(l)}});export{yl as Q,rl as a,hl as c,ol as u};