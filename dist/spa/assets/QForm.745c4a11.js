import{u as P}from"./use-quasar.0650274d.js";import{k as C,r as q,aw as A,aF as B,aE as I,o as Q,h as R,l as V,g as j,b8 as k,E as F,P as D,at as O,b9 as T}from"./index.b55bc580.js";function M(){const n=P();return{notifySuccess:async c=>{n.notify({position:"top-right",type:"positive",message:c||"Tudo certo"})},notifyError:async c=>{n.notify({position:"top-right",type:"negative",message:c||"Falha na execu\xE7\xE3o"})}}}var z=C({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(n,{slots:v,emit:f}){const c=j(),i=q(null);let u=0;const s=[];function m(e){const r=typeof e=="boolean"?e:n.noErrorFocus!==!0,d=++u,h=(t,o)=>{f("validation"+(t===!0?"Success":"Error"),o)},x=t=>{const o=t.validate();return typeof o.then=="function"?o.then(a=>({valid:a,comp:t}),a=>({valid:!1,comp:t,err:a})):Promise.resolve({valid:o,comp:t})};return(n.greedy===!0?Promise.all(s.map(x)).then(t=>t.filter(o=>o.valid!==!0)):s.reduce((t,o)=>t.then(()=>x(o).then(a=>{if(a.valid===!1)return Promise.reject(a)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return d===u&&h(!0),!0;if(d===u){const{comp:o,err:a}=t[0];if(a!==void 0&&console.error(a),h(!1,o),r===!0){const S=t.find(({comp:E})=>typeof E.focus=="function"&&k(E.$)===!1);S!==void 0&&S.comp.focus()}}return!1})}function y(){u++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function b(e){e!==void 0&&F(e);const r=u+1;m().then(d=>{r===u&&d===!0&&(n.onSubmit!==void 0?f("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function p(e){e!==void 0&&F(e),f("reset"),D(()=>{y(),n.autofocus===!0&&n.noResetFocus!==!0&&l()})}function l(){O(()=>{if(i.value===null)return;const e=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),r=>r.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}A(T,{bindComponent(e){s.push(e)},unbindComponent(e){const r=s.indexOf(e);r>-1&&s.splice(r,1)}});let g=!1;return B(()=>{g=!0}),I(()=>{g===!0&&n.autofocus===!0&&l()}),Q(()=>{n.autofocus===!0&&l()}),Object.assign(c.proxy,{validate:m,resetValidation:y,submit:b,reset:p,focus:l,getValidationComponents:()=>s}),()=>R("form",{class:"q-form",ref:i,onSubmit:b,onReset:p},V(v.default))}});export{z as Q,M as u};
