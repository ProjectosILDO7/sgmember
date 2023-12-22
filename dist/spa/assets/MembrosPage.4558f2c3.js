import{h as o,k as E,c as v,l as I,g as H,ac as yt,Q as ye,H as he,J as _e,r as p,w as D,aD as Qe,o as we,aE as ht,aF as _t,R as je,ap as wt,ag as Ve,aB as Ae,aG as qt,aH as Ct,aI as Pt,aJ as Le,aK as Se,aL as Me,aM as kt,P as He,aN as Rt,aO as me,aP as z,q as $,a8 as xt,_ as Bt,a4 as Tt,Z as $e,a9 as Ot,f as M,a0 as le,$ as Ft,a1 as pt,aQ as Vt}from"./index.b55bc580.js";import{Q as Lt}from"./QList.ee02c9f3.js";import{u as Mt,a as $t,c as ze,Q as Dt,b as Nt}from"./userApi.31b3b844.js";import{u as Et}from"./use-quasar.0650274d.js";import"./format.aaa5a484.js";import"./rtl.b51694b1.js";const Qt=o("div",{class:"q-space"});var jt=E({name:"QSpace",setup(){return()=>Qt}}),At=E({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=H(),s=v(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return o("td",{class:s.value},I(l.default));const r=n.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[r]:null)||e.props.col;if(f===void 0)return;const{row:i}=e.props;return o("td",{class:s.value+f.__tdClass(i),style:f.__tdStyle(i)},I(l.default))}}}),Ht=E({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const s=H(),{proxy:{$q:r}}=s,f=i=>{n("click",i)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},I(l.default));let i,c;const d=s.vnode.key;if(d){if(i=e.props.colsMap[d],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const a=i.align==="right"?"unshift":"push";c=yt(l.default,[]),c[a](o(ye,{class:i.__iconClass,name:r.iconSet.table.arrowUp}))}else c=I(l.default);const S={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:a=>{i.sortable===!0&&e.props.sort(i),f(a)}};return o("th",S,c)}}});const zt=["horizontal","vertical","cell","none"];var Ut=E({name:"QMarkupTable",props:{...he,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>zt.includes(e)}},setup(e,{slots:l}){const n=H(),s=_e(e,n.proxy.$q),r=v(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(s.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>o("div",{class:r.value},[o("table",{class:"q-table"},I(l.default))])}});function Ue(e,l){return o("div",e,[o("table",{class:"q-table"},l)])}const It={list:Lt,table:Ut},Wt=["list","table","__qtable"];var Kt=E({name:"QVirtualScroll",props:{...Mt,type:{type:String,default:"list",validator:e=>Wt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let s;const r=p(null),f=v(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:c,padVirtualScroll:d,onVirtualScrollEvt:S}=$t({virtualScrollLength:f,getVirtualScrollTarget:C,getVirtualScrollEl:q}),a=v(()=>{if(f.value===0)return[];const O=(F,R)=>({index:i.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(O):e.itemsFn(i.value.from,i.value.to-i.value.from).map(O)}),b=v(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=v(()=>e.scrollTarget!==void 0?{}:{tabindex:0});D(f,()=>{c()}),D(()=>e.scrollTarget,()=>{y(),_()});function q(){return r.value.$el||r.value}function C(){return s}function _(){s=wt(q(),e.scrollTarget),s.addEventListener("scroll",S,Ve.passive)}function y(){s!==void 0&&(s.removeEventListener("scroll",S,Ve.passive),s=void 0)}function T(){let O=d(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ae(l.after,O)}return Qe(()=>{c()}),we(()=>{_()}),ht(()=>{_()}),_t(()=>{y()}),je(()=>{y()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ue({ref:r,class:"q-table__middle "+b.value},T()):o(It[e.type],{...n,ref:r,class:[n.class,b.value],...w.value},T)}}});const Gt={xs:2,sm:4,md:6,lg:10,xl:14};function De(e,l,n){return{transform:l===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Jt=E({name:"QLinearProgress",props:{...he,...qt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:n}=H(),s=_e(e,n.$q),r=Ct(e,Gt),f=v(()=>e.indeterminate===!0||e.query===!0),i=v(()=>e.reverse!==e.query),c=v(()=>({...r.value!==null?r.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=v(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=v(()=>De(e.buffer!==void 0?e.buffer:1,i.value,n.$q)),a=v(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=v(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${s.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=v(()=>De(f.value===!0?1:e.value,i.value,n.$q)),q=v(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),C=v(()=>({width:`${e.value*100}%`})),_=v(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const y=[o("div",{class:b.value,style:S.value}),o("div",{class:q.value,style:w.value})];return e.stripe===!0&&f.value===!1&&y.push(o("div",{class:_.value,style:C.value})),o("div",{class:d.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ae(l.default,y))}}});let U=0;const Xt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Zt=["update:fullscreen","fullscreen"];function Yt(){const e=H(),{props:l,emit:n,proxy:s}=e;let r,f,i;const c=p(!1);Pt(e)===!0&&D(()=>s.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),D(()=>l.fullscreen,b=>{c.value!==b&&d()}),D(c,b=>{n("update:fullscreen",b),n("fullscreen",b)});function d(){c.value===!0?a():S()}function S(){c.value!==!0&&(c.value=!0,i=s.$el.parentNode,i.replaceChild(f,s.$el),document.body.appendChild(s.$el),U++,U===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:a},Le.add(r))}function a(){c.value===!0&&(r!==void 0&&(Le.remove(r),r=void 0),i.replaceChild(s.$el,f),c.value=!1,U=Math.max(0,U-1),U===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return Qe(()=>{f=document.createElement("span")}),we(()=>{l.fullscreen===!0&&S()}),je(a),Object.assign(s,{toggleFullscreen:d,setFullscreen:S,exitFullscreen:a}),{inFullscreen:c,toggleFullscreen:d}}function el(e,l){return new Date(e)-new Date(l)}const tl={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function ll(e,l,n,s){const r=v(()=>{const{sortBy:c}=l.value;return c&&n.value.find(d=>d.name===c)||null}),f=v(()=>e.sortMethod!==void 0?e.sortMethod:(c,d,S)=>{const a=n.value.find(q=>q.name===d);if(a===void 0||a.field===void 0)return c;const b=S===!0?-1:1,w=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return c.sort((q,C)=>{let _=w(q),y=w(C);return a.rawSort!==void 0?a.rawSort(_,y,q,C)*b:_==null?-1*b:y==null?1*b:a.sort!==void 0?a.sort(_,y,q,C)*b:Se(_)===!0&&Se(y)===!0?(_-y)*b:Me(_)===!0&&Me(y)===!0?el(_,y)*b:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*b:([_,y]=[_,y].map(T=>(T+"").toLocaleString().toLowerCase()),_<y?-1*b:_===y?0:b)})});function i(c){let d=e.columnSortOrder;if(kt(c)===!0)c.sortOrder&&(d=c.sortOrder),c=c.name;else{const b=n.value.find(w=>w.name===c);b!==void 0&&b.sortOrder&&(d=b.sortOrder)}let{sortBy:S,descending:a}=l.value;S!==c?(S=c,a=d==="da"):e.binaryStateSort===!0?a=!a:a===!0?d==="ad"?S=null:a=!1:d==="ad"?a=!0:S=null,s({sortBy:S,descending:a,page:1})}return{columnToSort:r,computedSortMethod:f,sort:i}}const al={filter:[String,Object],filterMethod:Function};function nl(e,l){const n=v(()=>e.filterMethod!==void 0?e.filterMethod:(s,r,f,i)=>{const c=r?r.toLowerCase():"";return s.filter(d=>f.some(S=>{const a=i(S,d)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(c)!==-1}))});return D(()=>e.filter,()=>{He(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function ol(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Ne(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const rl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function il(e,l){const{props:n,emit:s}=e,r=p(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),f=v(()=>{const a=n["onUpdate:pagination"]!==void 0?{...r.value,...n.pagination}:r.value;return Ne(a)}),i=v(()=>f.value.rowsNumber!==void 0);function c(a){d({pagination:a,filter:n.filter})}function d(a={}){He(()=>{s("request",{pagination:a.pagination||f.value,filter:a.filter||n.filter,getCellValue:l})})}function S(a,b){const w=Ne({...f.value,...a});if(ol(f.value,w)===!0){i.value===!0&&b===!0&&c(w);return}if(i.value===!0){c(w);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?s("update:pagination",w):r.value=w}return{innerPagination:r,computedPagination:f,isServerSide:i,requestServerInteraction:d,setPagination:S}}function sl(e,l,n,s,r,f){const{props:i,emit:c,proxy:{$q:d}}=e,S=v(()=>s.value===!0?n.value.rowsNumber||0:f.value),a=v(()=>{const{page:R,rowsPerPage:x}=n.value;return(R-1)*x}),b=v(()=>{const{page:R,rowsPerPage:x}=n.value;return R*x}),w=v(()=>n.value.page===1),q=v(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/n.value.rowsPerPage))),C=v(()=>b.value===0?!0:n.value.page>=q.value),_=v(()=>(i.rowsPerPageOptions.includes(l.value.rowsPerPage)?i.rowsPerPageOptions:[l.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(x=>({label:x===0?d.lang.table.allRows:""+x,value:x})));D(q,(R,x)=>{if(R===x)return;const W=n.value.page;R&&!W?r({page:1}):R<W&&r({page:R})});function y(){r({page:1})}function T(){const{page:R}=n.value;R>1&&r({page:R-1})}function O(){const{page:R,rowsPerPage:x}=n.value;b.value>0&&R*x<S.value&&r({page:R+1})}function F(){r({page:q.value})}return i["onUpdate:pagination"]!==void 0&&c("update:pagination",{...n.value}),{firstRowIndex:a,lastRowIndex:b,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:y,prevPage:T,nextPage:O,lastPage:F}}const ul={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},cl=["update:selected","selection"];function dl(e,l,n,s){const r=v(()=>{const C={};return e.selected.map(s.value).forEach(_=>{C[_]=!0}),C}),f=v(()=>e.selection!=="none"),i=v(()=>e.selection==="single"),c=v(()=>e.selection==="multiple"),d=v(()=>n.value.length!==0&&n.value.every(C=>r.value[s.value(C)]===!0)),S=v(()=>d.value!==!0&&n.value.some(C=>r.value[s.value(C)]===!0)),a=v(()=>e.selected.length);function b(C){return r.value[C]===!0}function w(){l("update:selected",[])}function q(C,_,y,T){l("selection",{rows:_,added:y,keys:C,evt:T});const O=i.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(F=>C.includes(s.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:i,multipleSelection:c,allRowsSelected:d,someRowsSelected:S,rowsSelectedNumber:a,isRowSelected:b,clearSelection:w,updateSelection:q}}function Ee(e){return Array.isArray(e)?e.slice():[]}const vl={expanded:Array},fl=["update:expanded"];function gl(e,l){const n=p(Ee(e.expanded));D(()=>e.expanded,i=>{n.value=Ee(i)});function s(i){return n.value.includes(i)}function r(i){e.expanded!==void 0?l("update:expanded",i):n.value=i}function f(i,c){const d=n.value.slice(),S=d.indexOf(i);c===!0?S===-1&&(d.push(i),r(d)):S!==-1&&(d.splice(S,1),r(d))}return{isRowExpanded:s,setExpanded:r,updateExpanded:f}}const bl={visibleColumns:Array};function ml(e,l,n){const s=v(()=>{if(e.columns!==void 0)return e.columns;const c=e.rows[0];return c!==void 0?Object.keys(c).map(d=>({name:d,label:d.toUpperCase(),field:d,align:Se(c[d])?"right":"left",sortable:!0})):[]}),r=v(()=>{const{sortBy:c,descending:d}=l.value;return(e.visibleColumns!==void 0?s.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):s.value).map(a=>{const b=a.align||"right",w=`text-${b}`;return{...a,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===c?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:q=>w+" "+a.classes(q):()=>w}})}),f=v(()=>{const c={};return r.value.forEach(d=>{c[d.name]=d}),c}),i=v(()=>e.tableColspan!==void 0?e.tableColspan:r.value.length+(n.value===!0?1:0));return{colList:s,computedCols:r,computedColsMap:f,computedColspan:i}}const ae="q-table__bottom row items-center",Ie={};ze.forEach(e=>{Ie[e]={}});var Sl=E({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ie,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...he,...Xt,...bl,...al,...rl,...vl,...ul,...tl},emits:["request","virtualScroll",...Zt,...fl,...cl],setup(e,{slots:l,emit:n}){const s=H(),{proxy:{$q:r}}=s,f=_e(e,r),{inFullscreen:i,toggleFullscreen:c}=Yt(),d=v(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=p(null),a=p(null),b=v(()=>e.grid!==!0&&e.virtualScroll===!0),w=v(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=v(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),C=v(()=>q.value+(e.loading===!0?" q-table--loading":""));D(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{b.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:T,requestServerInteraction:O,setPagination:F}=il(s,j),{computedFilterMethod:R}=nl(e,F),{isRowExpanded:x,setExpanded:W,updateExpanded:We}=gl(e,n),ne=v(()=>{let t=e.rows;if(T.value===!0||t.length===0)return t;const{sortBy:u,descending:g}=y.value;return e.filter&&(t=R.value(t,e.filter,V.value,j)),Ze.value!==null&&(t=Ye.value(e.rows===t?t.slice():t,u,g)),t}),qe=v(()=>ne.value.length),N=v(()=>{let t=ne.value;if(T.value===!0)return t;const{rowsPerPage:u}=y.value;return u!==0&&(G.value===0&&e.rows!==t?t.length>J.value&&(t=t.slice(0,J.value)):t=t.slice(G.value,J.value)),t}),{hasSelectionMode:Q,singleSelection:Ke,multipleSelection:Ce,allRowsSelected:Ge,someRowsSelected:Pe,rowsSelectedNumber:oe,isRowSelected:re,clearSelection:Je,updateSelection:K}=dl(e,n,N,d),{colList:Xe,computedCols:V,computedColsMap:ke,computedColspan:Re}=ml(e,y,Q),{columnToSort:Ze,computedSortMethod:Ye,sort:ie}=ll(e,y,Xe,F),{firstRowIndex:G,lastRowIndex:J,isFirstPage:se,isLastPage:ue,pagesNumber:X,computedRowsPerPageOptions:et,computedRowsNumber:Z,firstPage:ce,prevPage:de,nextPage:ve,lastPage:fe}=sl(s,_,y,T,F,qe),tt=v(()=>N.value.length===0),lt=v(()=>{const t={};return ze.forEach(u=>{t[u]=e[u]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function at(){b.value===!0&&a.value.reset()}function nt(){if(e.grid===!0)return mt();const t=e.hideHeader!==!0?Fe:null;if(b.value===!0){const g=l["top-row"],m=l["bottom-row"],h={default:k=>Be(k.item,l.body,k.index)};if(g!==void 0){const k=o("tbody",g({cols:V.value}));h.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(h.before=t);return m!==void 0&&(h.after=()=>o("tbody",m({cols:V.value}))),o(Kt,{ref:a,class:e.tableClass,style:e.tableStyle,...lt.value,scrollTarget:e.virtualScrollTarget,items:N.value,type:"__qtable",tableColspan:Re.value,onVirtualScroll:rt},h)}const u=[it()];return t!==null&&u.unshift(t()),Ue({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},u)}function ot(t,u){if(a.value!==null){a.value.scrollTo(t,u);return}t=parseInt(t,10);const g=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const m=S.value.querySelector(".q-table__middle.scroll"),h=g.offsetTop-e.virtualScrollStickySizeStart,k=h<m.scrollTop?"decrease":"increase";m.scrollTop=h,n("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function rt(t){n("virtualScroll",t)}function xe(){return[o(Jt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Be(t,u,g){const m=d.value(t),h=re(m);if(u!==void 0)return u(Te({key:m,row:t,pageIndex:g,__trClass:h?"selected":""}));const k=l["body-cell"],P=V.value.map(B=>{const ee=l[`body-cell-${B.name}`],te=ee!==void 0?ee:k;return te!==void 0?te(st({key:m,row:t,pageIndex:g,col:B})):o("td",{class:B.__tdClass(t),style:B.__tdStyle(t)},j(B,t))});if(Q.value===!0){const B=l["body-selection"],ee=B!==void 0?B(ut({key:m,row:t,pageIndex:g})):[o(me,{modelValue:h,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(te,St)=>{K([m],[t],te,St)}})];P.unshift(o("td",{class:"q-table--col-auto-width"},ee))}const L={key:m,class:{selected:h}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=B=>{n("RowClick",B,t,g)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=B=>{n("RowDblclick",B,t,g)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=B=>{n("RowContextmenu",B,t,g)}),o("tr",L,P)}function it(){const t=l.body,u=l["top-row"],g=l["bottom-row"];let m=N.value.map((h,k)=>Be(h,t,k));return u!==void 0&&(m=u({cols:V.value}).concat(m)),g!==void 0&&(m=m.concat(g({cols:V.value}))),o("tbody",m)}function Te(t){return ge(t),t.cols=t.cols.map(u=>z({...u},"value",()=>j(u,t.row))),t}function st(t){return ge(t),z(t,"value",()=>j(t.col,t.row)),t}function ut(t){return ge(t),t}function ge(t){Object.assign(t,{cols:V.value,colsMap:ke.value,sort:ie,rowIndex:G.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),Q.value===!0&&z(t,"selected",()=>re(t.key),(u,g)=>{K([t.key],[t.row],u,g)}),z(t,"expand",()=>x(t.key),u=>{We(t.key,u)})}function j(t,u){const g=typeof t.field=="function"?t.field(u):u[t.field];return t.format!==void 0?t.format(g,u):g}const A=v(()=>({pagination:y.value,pagesNumber:X.value,isFirstPage:se.value,isLastPage:ue.value,firstPage:ce,prevPage:de,nextPage:ve,lastPage:fe,inFullscreen:i.value,toggleFullscreen:c}));function ct(){const t=l.top,u=l["top-left"],g=l["top-right"],m=l["top-selection"],h=Q.value===!0&&m!==void 0&&oe.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return o("div",{class:k},[t(A.value)]);let P;if(h===!0?P=m(A.value).slice():(P=[],u!==void 0?P.push(o("div",{class:"q-table__control"},[u(A.value)])):e.title&&P.push(o("div",{class:"q-table__control"},[o("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(o("div",{class:"q-table__separator col"})),P.push(o("div",{class:"q-table__control"},[g(A.value)]))),P.length!==0)return o("div",{class:k},P)}const Oe=v(()=>Pe.value===!0?null:Ge.value);function Fe(){const t=dt();return e.loading===!0&&l.loading===void 0&&t.push(o("tr",{class:"q-table__progress"},[o("th",{class:"relative-position",colspan:Re.value},xe())])),o("thead",t)}function dt(){const t=l.header,u=l["header-cell"];if(t!==void 0)return t(be({header:!0})).slice();const g=V.value.map(m=>{const h=l[`header-cell-${m.name}`],k=h!==void 0?h:u,P=be({col:m});return k!==void 0?k(P):o(Ht,{key:m.name,props:P},()=>m.label)});if(Ke.value===!0&&e.grid!==!0)g.unshift(o("th",{class:"q-table--col-auto-width"}," "));else if(Ce.value===!0){const m=l["header-selection"],h=m!==void 0?m(be({})):[o(me,{color:e.color,modelValue:Oe.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":pe})];g.unshift(o("th",{class:"q-table--col-auto-width"},h))}return[o("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function be(t){return Object.assign(t,{cols:V.value,sort:ie,colsMap:ke.value,color:e.color,dark:f.value,dense:e.dense}),Ce.value===!0&&z(t,"selected",()=>Oe.value,pe),t}function pe(t){Pe.value===!0&&(t=!1),K(N.value.map(d.value),N.value,t)}const Y=v(()=>{const t=[e.iconFirstPage||r.iconSet.table.firstPage,e.iconPrevPage||r.iconSet.table.prevPage,e.iconNextPage||r.iconSet.table.nextPage,e.iconLastPage||r.iconSet.table.lastPage];return r.lang.rtl===!0?t.reverse():t});function vt(){if(e.hideBottom===!0)return;if(tt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||r.lang.table.loading:e.filter?e.noResultsLabel||r.lang.table.noResults:e.noDataLabel||r.lang.table.noData,m=l["no-data"],h=m!==void 0?[m({message:g,icon:r.iconSet.table.warning,filter:e.filter})]:[o(ye,{class:"q-table__bottom-nodata-icon",name:r.iconSet.table.warning}),g];return o("div",{class:ae+" q-table__bottom--nodata"},h)}const t=l.bottom;if(t!==void 0)return o("div",{class:ae},[t(A.value)]);const u=e.hideSelectedBanner!==!0&&Q.value===!0&&oe.value>0?[o("div",{class:"q-table__control"},[o("div",[(e.selectedRowsLabel||r.lang.table.selectedRecords)(oe.value)])])]:[];if(e.hidePagination!==!0)return o("div",{class:ae+" justify-end"},gt(u));if(u.length!==0)return o("div",{class:ae},u)}function ft(t){F({page:1,rowsPerPage:t.value})}function gt(t){let u;const{rowsPerPage:g}=y.value,m=e.paginationLabel||r.lang.table.pagination,h=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(o("div",{class:"q-table__separator col"})),k===!0&&t.push(o("div",{class:"q-table__control"},[o("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||r.lang.table.recordsPerPage]),o(Dt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:et.value,displayValue:g===0?r.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ft})])),h!==void 0)u=h(A.value);else if(u=[o("span",g!==0?{class:"q-table__bottom-item"}:{},[g?m(G.value+1,Math.min(J.value,Z.value),Z.value):m(1,qe.value,Z.value)])],g!==0&&X.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),X.value>2&&u.push(o($,{key:"pgFirst",...P,icon:Y.value[0],disable:se.value,onClick:ce})),u.push(o($,{key:"pgPrev",...P,icon:Y.value[1],disable:se.value,onClick:de}),o($,{key:"pgNext",...P,icon:Y.value[2],disable:ue.value,onClick:ve})),X.value>2&&u.push(o($,{key:"pgLast",...P,icon:Y.value[3],disable:ue.value,onClick:fe}))}return t.push(o("div",{class:"q-table__control"},u)),t}function bt(){const t=e.gridHeader===!0?[o("table",{class:"q-table"},[Fe()])]:e.loading===!0&&l.loading===void 0?xe():void 0;return o("div",{class:"q-table__middle"},t)}function mt(){const t=l.item!==void 0?l.item:u=>{const g=u.cols.map(h=>o("div",{class:"q-table__grid-item-row"},[o("div",{class:"q-table__grid-item-title"},[h.label]),o("div",{class:"q-table__grid-item-value"},[h.value])]));if(Q.value===!0){const h=l["body-selection"],k=h!==void 0?h(u):[o(me,{modelValue:u.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{K([u.key],[u.row],P,L)}})];g.unshift(o("div",{class:"q-table__grid-item-row"},k),o(xt,{dark:f.value}))}const m={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=h=>{n("RowClick",h,u.row,u.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=h=>{n("RowDblclick",h,u.row,u.pageIndex)})),o("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(u.selected===!0?" q-table__grid-item--selected":"")},[o("div",m,g)])};return o("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},N.value.map((u,g)=>t(Te({key:d.value(u),row:u,pageIndex:g}))))}return Object.assign(s.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ce,prevPage:de,nextPage:ve,lastPage:fe,isRowSelected:re,clearSelection:Je,isRowExpanded:x,setExpanded:W,sort:ie,resetVirtualScroll:at,scrollTo:ot,getCellValue:j}),Rt(s.proxy,{filteredSortedRows:()=>ne.value,computedRows:()=>N.value,computedRowsNumber:()=>Z.value}),()=>{const t=[ct()],u={ref:S,class:C.value};return e.grid===!0?t.push(bt()):Object.assign(u,{class:[u.class,e.cardClass],style:e.cardStyle}),t.push(nt(),vt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),o("div",u,t)}}});const yl=[{name:"nome",required:!0,label:"Nome completo",align:"left",field:"nome",sortable:!0},{name:"naturalidade",align:"left",label:"Naturalidade",field:"naturalidade",sortable:!0},{name:"data_nascimento",label:"Data de nascimento",align:"left",field:"data_nascimento",sortable:!0},{name:"num_bilhete",label:"N\xBA do documento",align:"left",field:"num_bilhete",sortable:!0},{name:"status",label:"Status do membro",field:"status",align:"left",sortable:!0},{name:"options",align:"left",label:"Op\xE7\xF5es",field:"options"}],hl={components:{},setup(){const e="membros",l=p([]),{list:n}=Nt(),s=Et(),r=p(!1),f=p(""),i=p(5),c=Tt(),d=a=>{c.push({name:"form-cadastro",params:{id:a}})},S=async()=>{try{s.loading.show({message:"Carregando informa\xE7\xF5es"}),l.value=await n(e)}catch{}finally{s.loading.hide()}};return we(()=>{S()}),{columns:yl,membros:l,loading:r,editForm:d,filter:f,rowCount:i}}},_l={class:"q-pa-md"};function wl(e,l,n,s,r,f){return $e(),Ot("div",_l,[M(Sl,{flat:"",bordered:"",title:"Treats",rows:s.membros,columns:s.columns,"row-key":"id",filter:s.filter,loading:s.loading},{top:le(()=>[M($,{dense:"",outline:"",icon:"mdi-database",color:"primary",disable:s.loading,label:"Cadastrar novo membro",to:{name:"form-cadastro"}},null,8,["disable"]),s.membros.length!==0?($e(),Ft($,{key:0,glasses:"",outline:"",dense:"",icon:"mdi-download",class:"q-ml-sm",color:"primary",disable:s.loading,label:"Baixar lista de membros"},null,8,["disable"])):pt("",!0),M(jt),M(Vt,{outlined:"",borderless:"",dense:"",debounce:"300",color:"primary",modelValue:s.filter,"onUpdate:modelValue":l[0]||(l[0]=i=>s.filter=i),label:"Procurar membro"},{append:le(()=>[M(ye,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-options":le(i=>[M(At,{props:i},{default:le(()=>[M($,{dense:"",flat:"",icon:"mdi-file-edit",color:"secondary",onClick:c=>s.editForm(i.row.id)},null,8,["onClick"]),M($,{dense:"",flat:"",icon:"mdi-delete-forever-outline",color:"negative"}),M($,{dense:"",flat:"",icon:"mdi-eye-outline",color:"blue-grey-8"})]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter","loading"])])}var Bl=Bt(hl,[["render",wl]]);export{Bl as default};