import{k as R,c as x,h as B,l as D,H as re,aa as Te,J as ce,ab as Ce,r as M,g as j,ac as de,E as fe,a9 as Se,ad as He,B as Z,P as pe,z as ee,w as p,o as Be,R as O,D as Me,ae as I,af as te,v as We,ag as Le,G as Pe,m as _e,I as Re,ah as Ae,K as ze,ai as $e,N as Fe,aj as Ke,ak as Ie,C as Qe,al as De,am as ne,an as je,ao as Oe,ap as Ne,aq as Ve,ar as Ue,as as Xe}from"./index.c87a4eda.js";var ot=R({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=x(()=>parseInt(e.lines,10)),n=x(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),a=x(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>B("div",{style:a.value,class:n.value},D(t.default))}}),ut=R({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=x(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>B("div",{class:l.value},D(t.default))}}),st=R({name:"QItem",props:{...re,...Te,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=j(),a=ce(e,n),{hasLink:d,linkAttrs:o,linkClass:v,linkTag:m,navigateOnClick:c}=Ce(),f=M(null),h=M(null),b=x(()=>e.clickable===!0||d.value===!0||e.tag==="label"),i=x(()=>e.disable!==!0&&b.value===!0),r=x(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=x(()=>{if(e.insetLevel===void 0)return null;const s=n.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function E(s){i.value===!0&&(h.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===f.value?h.value.focus():document.activeElement===h.value&&f.value.focus()),c(s))}function S(s){if(i.value===!0&&de(s,[13,32])===!0){fe(s),s.qKeyEvent=!0;const y=new MouseEvent("click",s);y.qKeyEvent=!0,f.value.dispatchEvent(y)}l("keyup",s)}function W(){const s=Se(t.default,[]);return i.value===!0&&s.unshift(B("div",{class:"q-focus-helper",tabindex:-1,ref:h})),s}return()=>{const s={ref:f,class:r.value,style:C.value,role:"listitem",onClick:E,onKeyup:S};return i.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,o.value)):b.value===!0&&(s["aria-disabled"]="true"),B(m.value,s,W())}}});function Ye(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),He.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ge={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Je({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:a,emit:d}=j(),o=M(null);let v=null;function m(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const c={};l===void 0&&(Object.assign(c,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){de(i,13)===!0&&c.toggle(i)},contextClick(i){a.hide(i),Z(i),pe(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:Z,mobileTouch(i){if(c.mobileCleanup(i),m(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const r=i.target;ee(c,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),v=setTimeout(()=>{v=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),v!==null&&(clearTimeout(v),v=null),e.value===!0&&i!==void 0&&Ye()}}),l=function(i=n.contextMenu){if(n.noParentEvent===!0||o.value===null)return;let r;i===!0?a.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],ee(c,"anchor",r)});function f(){Me(c,"anchor")}function h(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;l()}function b(){if(n.target===!1||n.target===""||a.$el.parentNode===null)o.value=null;else if(n.target===!0)h(a.$el.parentNode);else{let i=n.target;if(typeof n.target=="string")try{i=document.querySelector(n.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,l()):(o.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return p(()=>n.contextMenu,i=>{o.value!==null&&(f(),l(i))}),p(()=>n.target,()=>{o.value!==null&&f(),b()}),p(()=>n.noParentEvent,i=>{o.value!==null&&(i===!0?f():l())}),Be(()=>{b(),t!==!0&&n.modelValue===!0&&o.value===null&&d("update:modelValue",!1)}),O(()=>{v!==null&&clearTimeout(v),f()}),{anchorEl:o,canShow:m,anchorEvents:c}}function Ze(e,t){const l=M(null);let n;function a(v,m){const c=`${m!==void 0?"add":"remove"}EventListener`,f=m!==void 0?m:n;v!==window&&v[c]("scroll",f,I.passive),window[c]("scroll",f,I.passive),n=m}function d(){l.value!==null&&(a(l.value),l.value=null)}const o=p(()=>e.noParentEvent,()=>{l.value!==null&&(d(),t())});return O(o),{localScrollTarget:l,unconfigureScrollTarget:d,changeScrollEvent:a}}const{notPassiveCapture:P}=I,T=[];function _(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=te.length-1;for(;l>=0;){const n=te[l].$;if(n.type.name==="QTooltip"){l--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=T.length-1;n>=0;n--){const a=T[n];if((a.anchorEl.value===null||a.anchorEl.value.contains(t)===!1)&&(t===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(t)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function et(e){T.push(e),T.length===1&&(document.addEventListener("mousedown",_,P),document.addEventListener("touchstart",_,P))}function le(e){const t=T.findIndex(l=>l===e);t>-1&&(T.splice(t,1),T.length===0&&(document.removeEventListener("mousedown",_,P),document.removeEventListener("touchstart",_,P)))}let ae,ie;function oe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function tt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Q[`${e}#ltr`]=e,Q[`${e}#rtl`]=e});function ue(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:Q[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function nt(e,t){let{top:l,left:n,right:a,bottom:d,width:o,height:v}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],d+=t[1],a+=t[0],o+=t[0],v+=t[1]),{top:l,bottom:d,height:v,left:n,right:a,width:o,middle:n+(a-n)/2,center:l+(d-l)/2}}function lt(e,t,l){let{top:n,left:a}=e.getBoundingClientRect();return n+=t.top,a+=t.left,l!==void 0&&(n+=l[1],a+=l[0]),{top:n,bottom:n+1,height:1,left:a,right:a+1,width:1,middle:a,center:n}}function at(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function se(e,t,l,n){return{top:e[l.vertical]-t[n.vertical],left:e[l.horizontal]-t[n.horizontal]}}function ve(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ve(e,t+1)},10);return}const{targetEl:l,offset:n,anchorEl:a,anchorOrigin:d,selfOrigin:o,absoluteOffset:v,fit:m,cover:c,maxHeight:f,maxWidth:h}=e;if(We.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:k,offsetTop:q}=window.visualViewport;k!==ae&&(H.setProperty("--q-pe-left",k+"px"),ae=k),q!==ie&&(H.setProperty("--q-pe-top",q+"px"),ie=q)}const{scrollLeft:b,scrollTop:i}=l,r=v===void 0?nt(a,c===!0?[0,0]:n):lt(a,v,n);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:h||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:C,offsetHeight:E}=l,{elWidth:S,elHeight:W}=m===!0||c===!0?{elWidth:Math.max(r.width,C),elHeight:c===!0?Math.max(r.height,E):E}:{elWidth:C,elHeight:E};let s={maxWidth:h,maxHeight:f};(m===!0||c===!0)&&(s.minWidth=r.width+"px",c===!0&&(s.minHeight=r.height+"px")),Object.assign(l.style,s);const y=at(S,W);let g=se(r,y,d,o);if(v===void 0||n===void 0)K(g,r,y,d,o);else{const{top:H,left:k}=g;K(g,r,y,d,o);let q=!1;if(g.top!==H){q=!0;const w=2*n[1];r.center=r.top-=w,r.bottom-=w+2}if(g.left!==k){q=!0;const w=2*n[0];r.middle=r.left-=w,r.right-=w+2}q===!0&&(g=se(r,y,d,o),K(g,r,y,d,o))}s={top:g.top+"px",left:g.left+"px"},g.maxHeight!==void 0&&(s.maxHeight=g.maxHeight+"px",r.height>g.maxHeight&&(s.minHeight=s.maxHeight)),g.maxWidth!==void 0&&(s.maxWidth=g.maxWidth+"px",r.width>g.maxWidth&&(s.minWidth=s.maxWidth)),Object.assign(l.style,s),l.scrollTop!==i&&(l.scrollTop=i),l.scrollLeft!==b&&(l.scrollLeft=b)}function K(e,t,l,n,a){const d=l.bottom,o=l.right,v=Le(),m=window.innerHeight-v,c=document.body.clientWidth;if(e.top<0||e.top+d>m)if(a.vertical==="center")e.top=t[n.vertical]>m/2?Math.max(0,m-d):0,e.maxHeight=Math.min(d,m);else if(t[n.vertical]>m/2){const f=Math.min(m,n.vertical==="center"?t.center:n.vertical===a.vertical?t.bottom:t.top);e.maxHeight=Math.min(d,f),e.top=Math.max(0,f-d)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===a.vertical?t.top:t.bottom),e.maxHeight=Math.min(d,m-e.top);if(e.left<0||e.left+o>c)if(e.maxWidth=Math.min(o,c),a.horizontal==="middle")e.left=t[n.horizontal]>c/2?Math.max(0,c-o):0;else if(t[n.horizontal]>c/2){const f=Math.min(c,n.horizontal==="middle"?t.middle:n.horizontal===a.horizontal?t.right:t.left);e.maxWidth=Math.min(o,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===a.horizontal?t.left:t.right),e.maxWidth=Math.min(o,c-e.left)}var rt=R({name:"QMenu",inheritAttrs:!1,props:{...Ge,...Pe,...re,..._e,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:tt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Re,"click","escapeKey"],setup(e,{slots:t,emit:l,attrs:n}){let a=null,d,o,v;const m=j(),{proxy:c}=m,{$q:f}=c,h=M(null),b=M(!1),i=x(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=ce(e,f),{registerTick:C,removeTick:E}=Ae(),{registerTimeout:S}=ze(),{transitionProps:W,transitionStyle:s}=$e(e),{localScrollTarget:y,changeScrollEvent:g,unconfigureScrollTarget:H}=Ze(e,G),{anchorEl:k,canShow:q}=Je({showing:b}),{hide:w}=Fe({showing:b,canShow:q,handleShow:xe,handleHide:ye,hideOnRouteChange:i,processOnMount:!0}),{showPortal:N,hidePortal:V,renderPortal:me}=Ke(m,h,qe,"menu"),A={anchorEl:k,innerRef:h,onClickOutside(u){if(e.persistent!==!0&&b.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&fe(u),!0}},U=x(()=>ue(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),he=x(()=>e.cover===!0?U.value:ue(e.self||"top start",f.lang.rtl)),ge=x(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),be=x(()=>e.autoClose===!0?{onClick:ke}:{}),X=x(()=>b.value===!0&&e.persistent!==!0);p(X,u=>{u===!0?(Ve($),et(A)):(ne($),le(A))});function z(){Ue(()=>{let u=h.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function xe(u){if(a=e.noRefocus===!1?document.activeElement:null,Ie(J),N(),G(),d=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const F=Qe(u);if(F.left!==void 0){const{top:we,left:Ee}=k.value.getBoundingClientRect();d={left:F.left-Ee,top:F.top-we}}}o===void 0&&(o=p(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,L)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{L(),e.noFocus!==!0&&z()}),S(()=>{f.platform.is.ios===!0&&(v=e.autoClose,h.value.click()),L(),N(!0),l("show",u)},e.transitionDuration)}function ye(u){E(),V(),Y(!0),a!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),S(()=>{V(!0),l("hide",u)},e.transitionDuration)}function Y(u){d=void 0,o!==void 0&&(o(),o=void 0),(u===!0||b.value===!0)&&(De(J),H(),le(A),ne($)),u!==!0&&(a=null)}function G(){(k.value!==null||e.scrollTarget!==void 0)&&(y.value=je(k.value,e.scrollTarget),g(y.value,L))}function ke(u){v!==!0?(Oe(c,u),l("click",u)):v=!1}function J(u){X.value===!0&&e.noFocus!==!0&&Xe(h.value,u.target)!==!0&&z()}function $(u){l("escapeKey"),w(u)}function L(){ve({targetEl:h.value,offset:e.offset,anchorEl:k.value,anchorOrigin:U.value,selfOrigin:he.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function qe(){return B(Ne,W.value,()=>b.value===!0?B("div",{role:"menu",...n,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+ge.value,n.class],style:[n.style,s.value],...be.value},D(t.default)):null)}return O(Y),Object.assign(c,{focus:z,updatePosition:L}),me}});function ct(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function dt(e,t,l){if(l<=t)return t;const n=l-t+1;let a=t+(e-t)%n;return a<t&&(a=n+a),a===0?0:a}export{rt as Q,ut as a,ct as b,Ye as c,ot as d,st as e,dt as n};
