import{x as Ht,r as E,c as g,w as Se,P as J,aV as Tt,aD as Lt,aF as Dt,aE as Pt,R as St,h as C,g as Qe,k as We,aW as Xe,aX as gt,aY as ht,aZ as yt,H as Ut,aG as Nt,J as $t,aH as Kt,U as jt,Q as Ee,a_ as Qt,a$ as Wt,E as ae,b0 as Xt,b1 as Yt,b2 as st,b3 as ke,b4 as Gt,b5 as Jt,B as $e,b6 as Zt,s as me,ac as el,b7 as tl,aT as ll,aB as ul,a3 as nl,b8 as al}from"./index.7780baeb.js";import{n as dt,Q as ol,a as il,d as rl,e as cl}from"./format.1f480834.js";import{r as je}from"./rtl.b51694b1.js";const K=1e3,sl=["start","center","end","start-force","center-force","end-force"],bt=Array.prototype.filter,dl=window.getComputedStyle(document.body).overflowAnchor===void 0?Ht:function(e,n){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];bt.call(i,k=>k.dataset&&k.dataset.qVsAnchor!==void 0).forEach(k=>{delete k.dataset.qVsAnchor});const m=i[n];m&&m.dataset&&(m.dataset.qVsAnchor="")}))};function ge(e,n){return e+n}function Ke(e,n,i,m,k,r,_,w){const h=e===window?document.scrollingElement||document.documentElement:e,z=k===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-_-w,scrollMaxSize:0,offsetStart:-_,offsetEnd:-w};if(k===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=h.scrollLeft,c.scrollViewSize+=h.clientWidth),c.scrollMaxSize=h.scrollWidth,r===!0&&(c.scrollStart=(je===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=h.scrollTop,c.scrollViewSize+=h.clientHeight),c.scrollMaxSize=h.scrollHeight),i!==null)for(let s=i.previousElementSibling;s!==null;s=s.previousElementSibling)s.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=s[z]);if(m!==null)for(let s=m.nextElementSibling;s!==null;s=s.nextElementSibling)s.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=s[z]);if(n!==e){const s=h.getBoundingClientRect(),f=n.getBoundingClientRect();k===!0?(c.offsetStart+=f.left-s.left,c.offsetEnd-=f.width):(c.offsetStart+=f.top-s.top,c.offsetEnd-=f.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function ft(e,n,i,m){n==="end"&&(n=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(m===!0&&(n=(je===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-n),window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n):i===!0?(m===!0&&(n=(je===!0?e.scrollWidth-e.offsetWidth:0)-n),e.scrollLeft=n):e.scrollTop=n}function pe(e,n,i,m){if(i>=m)return 0;const k=n.length,r=Math.floor(i/K),_=Math.floor((m-1)/K)+1;let w=e.slice(r,_).reduce(ge,0);return i%K!==0&&(w-=n.slice(r*K,i).reduce(ge,0)),m%K!==0&&m!==k&&(w-=n.slice(m,_*K).reduce(ge,0)),w}const wt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},ql=Object.keys(wt),fl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...wt};function vl({virtualScrollLength:e,getVirtualScrollTarget:n,getVirtualScrollEl:i,virtualScrollItemSizeComputed:m}){const k=Qe(),{props:r,emit:_,proxy:w}=k,{$q:h}=w;let z,c,s,f=[],d;const I=E(0),D=E(0),S=E({}),P=E(null),X=E(null),L=E(null),M=E({from:0,to:0}),Ae=g(()=>r.tableColspan!==void 0?r.tableColspan:100);m===void 0&&(m=g(()=>r.virtualScrollItemSize));const O=g(()=>m.value+";"+r.virtualScrollHorizontal),Y=g(()=>O.value+";"+r.virtualScrollSliceRatioBefore+";"+r.virtualScrollSliceRatioAfter);Se(Y,()=>{j()}),Se(O,Z);function Z(){oe(c,!0)}function he(l){oe(l===void 0?c:l)}function ee(l,o){const y=n();if(y==null||y.nodeType===8)return;const q=Ke(y,i(),P.value,X.value,r.virtualScrollHorizontal,h.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd);s!==q.scrollViewSize&&j(q.scrollViewSize),U(y,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,sl.indexOf(o)>-1?o:c>-1&&l>c?"end":"start")}function qe(){const l=n();if(l==null||l.nodeType===8)return;const o=Ke(l,i(),P.value,X.value,r.virtualScrollHorizontal,h.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd),y=e.value-1,q=o.scrollMaxSize-o.offsetStart-o.offsetEnd-D.value;if(z===o.scrollStart)return;if(o.scrollMaxSize<=0){U(l,o,0,0);return}s!==o.scrollViewSize&&j(o.scrollViewSize),ye(M.value.from);const B=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(d[y],o.scrollViewSize/2));if(B>0&&Math.ceil(o.scrollStart)>=B){U(l,o,y,o.scrollMaxSize-o.offsetEnd-f.reduce(ge,0));return}let x=0,V=o.scrollStart-o.offsetStart,R=V;if(V<=q&&V+o.scrollViewSize>=I.value)V-=I.value,x=M.value.from,R=V;else for(let b=0;V>=f[b]&&x<y;b++)V-=f[b],x+=K;for(;V>0&&x<y;)V-=d[x],V>-o.scrollViewSize?(x++,R=V):R=d[x]+V;U(l,o,x,R)}function U(l,o,y,q,B){const x=typeof B=="string"&&B.indexOf("-force")>-1,V=x===!0?B.replace("-force",""):B,R=V!==void 0?V:"start";let b=Math.max(0,y-S.value[R]),N=b+S.value.total;N>e.value&&(N=e.value,b=Math.max(0,N-S.value.total)),z=o.scrollStart;const G=b!==M.value.from||N!==M.value.to;if(G===!1&&V===void 0){be(y);return}const{activeElement:ze}=document,Q=L.value;G===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",Ie),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",Ie)})),dl(Q,y-b);const _e=V!==void 0?d.slice(b,y).reduce(ge,0):0;if(G===!0){const te=N>=M.value.from&&b<=M.value.to?M.value.to:N;M.value={from:b,to:te},I.value=pe(f,d,0,b),D.value=pe(f,d,N,e.value),requestAnimationFrame(()=>{M.value.to!==N&&z===o.scrollStart&&(M.value={from:M.value.from,to:N},D.value=pe(f,d,N,e.value))})}requestAnimationFrame(()=>{if(z!==o.scrollStart)return;G===!0&&ye(b);const te=d.slice(b,y).reduce(ge,0),le=te+o.offsetStart+I.value,Fe=le+d[y];let Ve=le+q;if(V!==void 0){const Te=te-_e,Ce=o.scrollStart+Te;Ve=x!==!0&&Ce<le&&Fe<Ce+o.scrollViewSize?Ce:V==="end"?Fe-o.scrollViewSize:le-(V==="start"?0:Math.round((o.scrollViewSize-d[y])/2))}z=Ve,ft(l,Ve,r.virtualScrollHorizontal,h.lang.rtl),be(y)})}function ye(l){const o=L.value;if(o){const y=bt.call(o.children,b=>b.classList&&b.classList.contains("q-virtual-scroll--skip")===!1),q=y.length,B=r.virtualScrollHorizontal===!0?b=>b.getBoundingClientRect().width:b=>b.offsetHeight;let x=l,V,R;for(let b=0;b<q;){for(V=B(y[b]),b++;b<q&&y[b].classList.contains("q-virtual-scroll--with-prev")===!0;)V+=B(y[b]),b++;R=V-d[x],R!==0&&(d[x]+=R,f[Math.floor(x/K)]+=R),x++}}}function Ie(){L.value!==null&&L.value!==void 0&&L.value.focus()}function oe(l,o){const y=1*m.value;(o===!0||Array.isArray(d)===!1)&&(d=[]);const q=d.length;d.length=e.value;for(let x=e.value-1;x>=q;x--)d[x]=y;const B=Math.floor((e.value-1)/K);f=[];for(let x=0;x<=B;x++){let V=0;const R=Math.min((x+1)*K,e.value);for(let b=x*K;b<R;b++)V+=d[b];f.push(V)}c=-1,z=void 0,I.value=pe(f,d,0,M.value.from),D.value=pe(f,d,M.value.to,e.value),l>=0?(ye(M.value.from),J(()=>{ee(l)})):ie()}function j(l){if(l===void 0&&typeof window!="undefined"){const V=n();V!=null&&V.nodeType!==8&&(l=Ke(V,i(),P.value,X.value,r.virtualScrollHorizontal,h.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd).scrollViewSize)}s=l;const o=parseFloat(r.virtualScrollSliceRatioBefore)||0,y=parseFloat(r.virtualScrollSliceRatioAfter)||0,q=1+o+y,B=l===void 0||l<=0?1:Math.ceil(l/m.value),x=Math.max(1,B,Math.ceil((r.virtualScrollSliceSize>0?r.virtualScrollSliceSize:10)/q));S.value={total:Math.ceil(x*q),start:Math.ceil(x*o),center:Math.ceil(x*(.5+o)),end:Math.ceil(x*(1+o)),view:B}}function He(l,o){const y=r.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+y]:m.value+"px"};return[l==="tbody"?C(l,{class:"q-virtual-scroll__padding",key:"before",ref:P},[C("tr",[C("td",{style:{[y]:`${I.value}px`,...q},colspan:Ae.value})])]):C(l,{class:"q-virtual-scroll__padding",key:"before",ref:P,style:{[y]:`${I.value}px`,...q}}),C(l,{class:"q-virtual-scroll__content",key:"content",ref:L,tabindex:-1},o.flat()),l==="tbody"?C(l,{class:"q-virtual-scroll__padding",key:"after",ref:X},[C("tr",[C("td",{style:{[y]:`${D.value}px`,...q},colspan:Ae.value})])]):C(l,{class:"q-virtual-scroll__padding",key:"after",ref:X,style:{[y]:`${D.value}px`,...q}})]}function be(l){c!==l&&(r.onVirtualScroll!==void 0&&_("virtualScroll",{index:l,from:M.value.from,to:M.value.to-1,direction:l<c?"decrease":"increase",ref:w}),c=l)}j();const ie=Tt(qe,h.platform.is.ios===!0?120:35);Lt(()=>{j()});let we=!1;return Dt(()=>{we=!0}),Pt(()=>{if(we!==!0)return;const l=n();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?ft(l,z,r.virtualScrollHorizontal,h.lang.rtl):ee(c)}),St(()=>{ie.cancel()}),Object.assign(w,{scrollTo:ee,reset:Z,refresh:he}),{virtualScrollSliceRange:M,virtualScrollSliceSizeComputed:S,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:oe,padVirtualScroll:He,scrollTo:ee,reset:Z,refresh:he}}var ml=We({name:"QField",inheritAttrs:!1,props:{...Xe,tag:{type:String,default:"label"}},emits:gt,setup(){return ht(yt({requiredForAttr:!1,tagProp:!0}))}});const Sl={xs:8,sm:10,md:14,lg:20,xl:24};var gl=We({name:"QChip",props:{...Ut,...Nt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:n,emit:i}){const{proxy:{$q:m}}=Qe(),k=$t(e,m),r=Kt(e,Sl),_=g(()=>e.selected===!0||e.icon!==void 0),w=g(()=>e.selected===!0?e.iconSelected||m.iconSet.chip.selected:e.icon),h=g(()=>e.iconRemove||m.iconSet.chip.remove),z=g(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=g(()=>{const S=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(S?` text-${S} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(k.value===!0?" q-chip--dark q-dark":"")}),s=g(()=>{const S=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},P={...S,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||m.lang.label.remove};return{chip:S,remove:P}});function f(S){S.keyCode===13&&d(S)}function d(S){e.disable||(i("update:selected",!e.selected),i("click",S))}function I(S){(S.keyCode===void 0||S.keyCode===13)&&(ae(S),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function D(){const S=[];z.value===!0&&S.push(C("div",{class:"q-focus-helper"})),_.value===!0&&S.push(C(Ee,{class:"q-chip__icon q-chip__icon--left",name:w.value}));const P=e.label!==void 0?[C("div",{class:"ellipsis"},[e.label])]:void 0;return S.push(C("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Qt(n.default,P))),e.iconRight&&S.push(C(Ee,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&S.push(C(Ee,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...s.value.remove,onClick:I,onKeyup:I})),S}return()=>{if(e.modelValue===!1)return;const S={class:c.value,style:r.value};return z.value===!0&&Object.assign(S,s.value.chip,{onClick:d,onKeyup:f}),jt("div",S,D(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Wt,e.ripple]])}}});const vt=e=>["add","add-unique","toggle"].includes(e),hl=".*+?^${}()|[]\\",yl=Object.keys(Xe);var Il=We({name:"QSelect",inheritAttrs:!1,props:{...fl,...Xt,...Xe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:vt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...gt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:n,emit:i}){const{proxy:m}=Qe(),{$q:k}=m,r=E(!1),_=E(!1),w=E(-1),h=E(""),z=E(!1),c=E(!1);let s=null,f=null,d,I,D,S=null,P,X,L,M;const Ae=E(null),O=E(null),Y=E(null),Z=E(null),he=E(null),ee=Yt(e),qe=Zt(at),U=g(()=>Array.isArray(e.options)?e.options.length:0),ye=g(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ie,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:j,padVirtualScroll:He,onVirtualScrollEvt:be,scrollTo:ie,setVirtualScrollSize:we}=vl({virtualScrollLength:U,getVirtualScrollTarget:kt,getVirtualScrollEl:ut,virtualScrollItemSizeComputed:ye}),l=yt(),o=g(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,a=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&d!==void 0?d:[],v=a.map(A=>xt(A,u));return e.modelValue===null&&t===!0?v.filter(A=>A!==null):v}return a}),y=g(()=>{const t={};return yl.forEach(a=>{const u=e[a];u!==void 0&&(t[a]=u)}),t}),q=g(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=g(()=>st(o.value)),x=g(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),V=g(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),R=g(()=>U.value===0),b=g(()=>o.value.map(t=>$.value(t)).join(", ")),N=g(()=>e.displayValue!==void 0?e.displayValue:b.value),G=g(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=g(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(G.value))),Q=g(()=>l.focused.value===!0?e.tabindex:-1),_e=g(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":r.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return w.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${w.value}`),t}),te=g(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),le=g(()=>o.value.map((t,a)=>({index:a,opt:t,html:G.value(t),selected:!0,removeAtIndex:Ct,toggleOption:ue,tabindex:Q.value}))),Fe=g(()=>{if(U.value===0)return[];const{from:t,to:a}=Ie.value;return e.options.slice(t,a).map((u,v)=>{const A=re.value(u)===!0,p=Pe(u)===!0,H=t+v,F={clickable:!0,active:p,activeClass:Ce.value,manualFocus:!0,focused:!1,disable:A,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":p===!0?"true":"false",id:`${l.targetUid.value}_${H}`,onClick:()=>{ue(u)}};return A!==!0&&(w.value===H&&(F.focused=!0),k.platform.is.desktop===!0&&(F.onMousemove=()=>{r.value===!0&&ce(H)})),{index:H,opt:u,html:G.value(u),label:$.value(u),selected:F.active,focused:F.focused,toggleOption:ue,setOptionIndex:ce,itemProps:F}})}),Ve=g(()=>e.dropdownIcon!==void 0?e.dropdownIcon:k.iconSet.arrow.dropdown),Te=g(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ce=g(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),W=g(()=>De(e.optionValue,"value")),$=g(()=>De(e.optionLabel,"label")),re=g(()=>De(e.optionDisable,"disable")),Me=g(()=>o.value.map(t=>W.value(t))),Vt=g(()=>{const t={onInput:at,onChange:qe,onKeydown:lt,onKeyup:et,onKeypress:tt,onFocus:Je,onClick(a){I===!0&&me(a)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=qe,t});Se(o,t=>{d=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(_.value!==!0&&r.value!==!0||B.value!==!0)&&(D!==!0&&ve(),(_.value===!0||r.value===!0)&&se(""))},{immediate:!0}),Se(()=>e.fillInput,ve),Se(r,Ue),Se(U,Et);function Ye(t){return e.emitValue===!0?W.value(t):t}function Le(t){if(t>-1&&t<o.value.length)if(e.multiple===!0){const a=e.modelValue.slice();i("remove",{index:t,value:a.splice(t,1)[0]}),i("update:modelValue",a)}else i("update:modelValue",null)}function Ct(t){Le(t),l.focus()}function Ge(t,a){const u=Ye(t);if(e.multiple!==!0){e.fillInput===!0&&xe($.value(t),!0,!0),i("update:modelValue",u);return}if(o.value.length===0){i("add",{index:0,value:u}),i("update:modelValue",e.multiple===!0?[u]:u);return}if(a===!0&&Pe(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();i("add",{index:v.length,value:u}),v.push(u),i("update:modelValue",v)}function ue(t,a){if(l.editable.value!==!0||t===void 0||re.value(t)===!0)return;const u=W.value(t);if(e.multiple!==!0){a!==!0&&(xe(e.fillInput===!0?$.value(t):"",!0,!0),ne()),O.value!==null&&O.value.focus(),(o.value.length===0||ke(W.value(o.value[0]),u)!==!0)&&i("update:modelValue",e.emitValue===!0?u:t);return}if((I!==!0||z.value===!0)&&l.focus(),Je(),o.value.length===0){const p=e.emitValue===!0?u:t;i("add",{index:0,value:p}),i("update:modelValue",e.multiple===!0?[p]:p);return}const v=e.modelValue.slice(),A=Me.value.findIndex(p=>ke(p,u));if(A>-1)i("remove",{index:A,value:v.splice(A,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const p=e.emitValue===!0?u:t;i("add",{index:v.length,value:p}),v.push(p)}i("update:modelValue",v)}function ce(t){if(k.platform.is.desktop!==!0)return;const a=t>-1&&t<U.value?t:-1;w.value!==a&&(w.value=a)}function Oe(t=1,a){if(r.value===!0){let u=w.value;do u=dt(u+t,-1,U.value-1);while(u!==-1&&u!==w.value&&re.value(e.options[u])===!0);w.value!==u&&(ce(u),ie(u),a!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(u>=0?$.value(e.options[u]):P,!0))}}function xt(t,a){const u=v=>ke(W.value(v),t);return e.options.find(u)||a.find(u)||t}function De(t,a){const u=t!==void 0?t:a;return typeof u=="function"?u:v=>v!==null&&typeof v=="object"&&u in v?v[u]:v}function Pe(t){const a=W.value(t);return Me.value.find(u=>ke(u,a))!==void 0}function Je(t){e.useInput===!0&&O.value!==null&&(t===void 0||O.value===t.target&&t.target.value===b.value)&&O.value.select()}function Ze(t){el(t,27)===!0&&r.value===!0&&(me(t),ne(),ve()),i("keyup",t)}function et(t){const{value:a}=t.target;if(t.keyCode!==void 0){Ze(t);return}if(t.target.value="",s!==null&&(clearTimeout(s),s=null),f!==null&&(clearTimeout(f),f=null),ve(),typeof a=="string"&&a.length!==0){const u=a.toLocaleLowerCase(),v=p=>{const H=e.options.find(F=>p.value(F).toLocaleLowerCase()===u);return H===void 0?!1:(o.value.indexOf(H)===-1?ue(H):ne(),!0)},A=p=>{v(W)!==!0&&(v($)===!0||p===!0||se(a,!0,()=>A(!0)))};A()}else l.clearValue(t)}function tt(t){i("keypress",t)}function lt(t){if(i("keydown",t),tl(t)===!0)return;const a=h.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(w.value>-1||a===!0);if(t.keyCode===27){$e(t);return}if(t.keyCode===9&&u===!1){de();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&r.value===!1){ae(t),fe();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Le(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ae(t),w.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(ae(t),w.value=Math.max(-1,Math.min(U.value,w.value+(t.keyCode===33?-1:1)*oe.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ae(t),Oe(t.keyCode===38?-1:1,e.multiple));const v=U.value;if((L===void 0||M<Date.now())&&(L=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length!==0)){r.value!==!0&&fe(t);const A=t.key.toLocaleLowerCase(),p=L.length===1&&L[0]===A;M=Date.now()+1500,p===!1&&(ae(t),L+=A);const H=new RegExp("^"+L.split("").map(Ne=>hl.indexOf(Ne)>-1?"\\"+Ne:Ne).join(".*"),"i");let F=w.value;if(p===!0||F<0||H.test($.value(e.options[F]))!==!0)do F=dt(F+1,-1,v-1);while(F!==w.value&&(re.value(e.options[F])===!0||H.test($.value(e.options[F]))!==!0));w.value!==F&&J(()=>{ce(F),ie(F),F>=0&&e.useInput===!0&&e.fillInput===!0&&Be($.value(e.options[F]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ae(t),w.value>-1&&w.value<v){ue(e.options[w.value]);return}if(a===!0){const A=(p,H)=>{if(H){if(vt(H)!==!0)return}else H=e.newValueMode;if(xe("",e.multiple!==!0,!0),p==null)return;(H==="toggle"?ue:Ge)(p,H==="add-unique"),e.multiple!==!0&&(O.value!==null&&O.value.focus(),ne())};if(e.onNewValue!==void 0?i("newValue",h.value,A):A(h.value),e.multiple!==!0)return}r.value===!0?de():l.innerLoading.value!==!0&&fe()}}function ut(){return I===!0?he.value:Y.value!==null&&Y.value.contentEl!==null?Y.value.contentEl:void 0}function kt(){return ut()}function pt(){return e.hideSelected===!0?[]:n["selected-item"]!==void 0?le.value.map(t=>n["selected-item"](t)).slice():n.selected!==void 0?[].concat(n.selected()):e.useChips===!0?le.value.map((t,a)=>C(gl,{key:"option-"+a,removable:l.editable.value===!0&&re.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(a)}},()=>C("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[C("span",{[ze.value===!0?"innerHTML":"textContent"]:N.value})]}function nt(){if(R.value===!0)return n["no-option"]!==void 0?n["no-option"]({inputValue:h.value}):void 0;const t=n.option!==void 0?n.option:u=>C(cl,{key:u.index,...u.itemProps},()=>C(il,()=>C(rl,()=>C("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let a=He("div",Fe.value.map(t));return n["before-options"]!==void 0&&(a=n["before-options"]().concat(a)),ul(n["after-options"],a)}function At(t,a){const u=a===!0?{..._e.value,...l.splitAttrs.attributes.value}:void 0,v={ref:a===!0?O:void 0,key:"i_t",class:x.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...u,id:a===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Vt.value};return t!==!0&&I===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),C("input",v)}function at(t){s!==null&&(clearTimeout(s),s=null),f!==null&&(clearTimeout(f),f=null),!(t&&t.target&&t.target.qComposing===!0)&&(Be(t.target.value||""),D=!0,P=h.value,l.focused.value!==!0&&(I!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(s=setTimeout(()=>{s=null,se(h.value)},e.inputDebounce)))}function Be(t,a){h.value!==t&&(h.value=t,a===!0||e.inputDebounce===0||e.inputDebounce==="0"?i("inputValue",t):f=setTimeout(()=>{f=null,i("inputValue",t)},e.inputDebounce))}function xe(t,a,u){D=u!==!0,e.useInput===!0&&(Be(t,!0),(a===!0||u!==!0)&&(P=t),a!==!0&&se(t))}function se(t,a,u){if(e.onFilter===void 0||a!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?i("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&D!==!0&&t===$.value(o.value[0])&&(t="");const v=setTimeout(()=>{r.value===!0&&(r.value=!1)},10);S!==null&&clearTimeout(S),S=v,i("filter",t,(A,p)=>{(a===!0||l.focused.value===!0)&&S===v&&(clearTimeout(S),typeof A=="function"&&A(),c.value=!1,J(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(a===!0?r.value===!0&&ne():r.value===!0?Ue(!0):r.value=!0),typeof p=="function"&&J(()=>{p(m)}),typeof u=="function"&&J(()=>{u(m)})}))},()=>{l.focused.value===!0&&S===v&&(clearTimeout(S),l.innerLoading.value=!1,c.value=!1),r.value===!0&&(r.value=!1)})}function qt(){return C(ol,{ref:Y,class:V.value,style:e.popupContentStyle,modelValue:r.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&R.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Te.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...te.value,onScrollPassive:be,onBeforeShow:it,onBeforeHide:It,onShow:zt},nt)}function It(t){rt(t),de()}function zt(){we()}function _t(t){me(t),O.value!==null&&O.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Ft(t){me(t),J(()=>{z.value=!1})}function Mt(){const t=[C(ml,{class:`col-auto ${l.fieldClass.value}`,...y.value,for:l.targetUid.value,dark:q.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:h.value.length!==0,...l.splitAttrs.listeners.value,onFocus:_t,onBlur:Ft},{...n,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return r.value===!0&&t.push(C("div",{ref:he,class:V.value+" scroll",style:e.popupContentStyle,...te.value,onClick:$e,onScrollPassive:be},nt())),C(ll,{ref:Z,modelValue:_.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:it,onBeforeHide:Ot,onHide:Bt,onShow:Rt},()=>C("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Ot(t){rt(t),Z.value!==null&&Z.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Bt(t){ne(),l.focused.value===!1&&i("blur",t),ve()}function Rt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&O.value!==null&&O.value!==t&&O.value.focus(),we()}function de(){_.value!==!0&&(w.value=-1,r.value===!0&&(r.value=!1),l.focused.value===!1&&(S!==null&&(clearTimeout(S),S=null),l.innerLoading.value===!0&&(i("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function fe(t){l.editable.value===!0&&(I===!0?(l.onControlFocusin(t),_.value=!0,J(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?se(h.value):(R.value!==!0||n["no-option"]!==void 0)&&(r.value=!0))}function ne(){_.value=!1,de()}function ve(){e.useInput===!0&&xe(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&$.value(o.value[0])||"",!0,!0)}function Ue(t){let a=-1;if(t===!0){if(o.value.length!==0){const u=W.value(o.value[0]);a=e.options.findIndex(v=>ke(W.value(v),u))}j(a)}ce(a)}function Et(t,a){r.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),J(()=>{r.value===!0&&l.innerLoading.value===!1&&(t>a?j():Ue(!0))}))}function ot(){_.value===!1&&Y.value!==null&&Y.value.updatePosition()}function it(t){t!==void 0&&me(t),i("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function rt(t){t!==void 0&&me(t),i("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function ct(){I=k.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?n["no-option"]!==void 0||e.onFilter!==void 0||R.value===!1:!0),X=k.platform.is.ios===!0&&I===!0&&e.useInput===!0?"fade":e.transitionShow}return Gt(ct),Jt(ot),ct(),St(()=>{s!==null&&clearTimeout(s),f!==null&&clearTimeout(f)}),Object.assign(m,{showPopup:fe,hidePopup:ne,removeAtIndex:Le,add:Ge,toggleOption:ue,getOptionIndex:()=>w.value,setOptionIndex:ce,moveOptionSelection:Oe,filter:se,updateMenuPosition:ot,updateInputValue:xe,isOptionSelected:Pe,getEmittingOptionValue:Ye,isOptionDisabled:(...t)=>re.value.apply(null,t)===!0,getOptionValue:(...t)=>W.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:g(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Ae,targetRef:O,hasValue:B,showPopup:fe,floatingLabel:g(()=>e.hideSelected!==!0&&B.value===!0||typeof h.value=="number"||h.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(_.value===!0||R.value!==!0||n["no-option"]!==void 0))return I===!0?Mt():qt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{ve(),de()})},onClick(t){if($e(t),I!==!0&&r.value===!0){de(),O.value!==null&&O.value.focus();return}fe(t)}},getControl:t=>{const a=pt(),u=t===!0||_.value!==!0||I!==!0;if(e.useInput===!0)a.push(At(t,u));else if(l.editable.value===!0){const A=u===!0?_e.value:void 0;a.push(C("input",{ref:u===!0?O:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...A,onKeydown:lt,onKeyup:Ze,onKeypress:tt})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&a.push(C("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:et}))}if(ee.value!==void 0&&e.disable!==!0&&Me.value.length!==0){const A=Me.value.map(p=>C("option",{value:p,selected:!0}));a.push(C("select",{class:"hidden",name:ee.value,multiple:e.multiple},A))}const v=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return C("div",{class:"q-field__native row items-center",...v,...l.splitAttrs.listeners.value},a)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[C(Ee,{class:"q-select__dropdown-icon"+(r.value===!0?" rotate-180":""),name:Ve.value})]:null}),ht(l)}});let Re;const bl=new Uint8Array(16);function wl(){if(!Re&&(Re=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Re))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Re(bl)}const T=[];for(let e=0;e<256;++e)T.push((e+256).toString(16).slice(1));function Vl(e,n=0){return T[e[n+0]]+T[e[n+1]]+T[e[n+2]]+T[e[n+3]]+"-"+T[e[n+4]]+T[e[n+5]]+"-"+T[e[n+6]]+T[e[n+7]]+"-"+T[e[n+8]]+T[e[n+9]]+"-"+T[e[n+10]]+T[e[n+11]]+T[e[n+12]]+T[e[n+13]]+T[e[n+14]]+T[e[n+15]]}const Cl=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var mt={randomUUID:Cl};function xl(e,n,i){if(mt.randomUUID&&!n&&!e)return mt.randomUUID();e=e||{};const m=e.random||(e.rng||wl)();if(m[6]=m[6]&15|64,m[8]=m[8]&63|128,n){i=i||0;for(let k=0;k<16;++k)n[i+k]=m[k];return n}return Vl(m)}function zl(){const{user:e}=nl(),n=xl(),{supabase:i}=al(),m=async c=>{const{data:s,error:f}=await i.from(c).select();if(f)throw f;return s},k=async(c,s)=>{const{data:f,error:d}=await i.from(c).select().eq("id",s);if(d)throw d;return f[0]},r=async(c,s)=>{const{data:f,error:d}=await i.from(c).insert({...s,user_id:e.value.id});if(d)throw d;return f},_=async(c,s)=>{const{data:f,error:d}=await i.from(c).update({...s}).match({id:s.id});if(d)throw d;return f},w=async(c,s)=>{const{data:f,error:d}=await i.from(c).delete().match({id:s});if(d)throw d;return f},h=async(c,s)=>{const{data:f,error:d}=await i.storage.from(s).upload(n,c,{cacheControl:3600,upsert:!1}),I=await z(n,s);if(d)throw d;return I},z=async(c,s)=>{const{data:f,error:d}=await i.storage.from(s).getPublicUrl(c);if(d)throw d;return console.log(f.publicUrl),f.publicUrl};return{list:m,getById:k,post:r,uploadImage:h,update:_,remove:w,fileName:n}}export{Il as Q,vl as a,zl as b,ql as c,fl as u};
