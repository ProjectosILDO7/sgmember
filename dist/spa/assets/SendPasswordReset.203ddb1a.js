import{a1 as u,a5 as f,r as p,p as g,a2 as _,a3 as s,f as e,a8 as r,be as h,aJ as x,Q as b,A as i,a7 as y}from"./index.bd6f5186.js";import{Q as v}from"./QForm.59a034e6.js";import{Q}from"./QPage.8229e60c.js";import{Q as w,a as q}from"./QLayout.8993ac73.js";import{u as S}from"./use-quasar.ddbc5f8e.js";import{u as P}from"./useNotify.9a8e2ba6.js";import{_ as V}from"./igreja-pentecostal.54735359.js";const k={setup(){const{sendEmailResetPassword:l}=y();f();const{notifyError:t,notifySuccess:m}=P(),a=S(),n=p({email:"",password:""});return{form:n,onSubmit:async()=>{try{a.loading.show({message:"Porfavor aguarde..."}),await l(n.value),m("Solicitou uma nova senha, porfavor verifique sua caixa de email")}catch(d){t(d.message)}finally{a.loading.hide()}},resetForm:()=>{n.value={email:""}}}}},B={class:"row col-md-4 col-lg-4 col-xs-12 col-sm-12 flex-center q-mt-lg"},E=r("span",{class:"text-body2 text-blue-grey-8 text-center col-4 text-justify"}," Lamentamos por perder sua palavra chave! mas n\xE3o se preocupe vamos resolver o seu problema. Informe-nos seu e-mail na caixa de di\xE1logo abaixo e seguidamente enviar\xE9mos um link de redefini\xE7\xE3o da senha na caixa de correio eletronico. Obrigado! ",-1),z=r("span",{class:"col-12 text-center q-pb-md"},[r("img",{src:V,style:{"max-width":"80px"},rounded:""})],-1),C={class:"q-gutter-x-md q-mt-lg"};function F(l,t,m,a,n,c){return g(),_(w,null,{default:s(()=>[e(q,null,{default:s(()=>[e(Q,{padding:""},{default:s(()=>[r("div",B,[E,z,e(v,{onSubmit:h(a.onSubmit,["prevent"]),class:"q-gutter-y-md"},{default:s(()=>[e(x,{type:"email",label:"E-mail",outlined:"",name:"email",class:"col-12",dense:"","lazy-rules":"",rules:[o=>o&&o.length>0||"Porfavor informe-nos seu email"],modelValue:a.form.email,"onUpdate:modelValue":t[0]||(t[0]=o=>a.form.email=o),required:""},{prepend:s(()=>[e(b,{name:"mdi-account"})]),_:1},8,["rules","modelValue"]),e(i,{class:"q-mt-md full-width",color:"primary",icon:"mdi-send",dense:"",type:"submit",label:"Enviar pedido de redefini\xE7\xE3o da senha"}),r("div",C,[e(i,{icon:"mdi-lock",flat:"",label:"Criar minha conta",class:"align-center",dense:"",color:"secondary",size:"sm",to:{name:"create"}}),e(i,{flat:"",icon:"mdi-account-plus",label:"j\xE1 Tenho uma conta",class:"align-center",dense:"",color:"secondary",size:"sm",to:{name:"login"}})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})]),_:1})}var $=u(k,[["render",F]]);export{$ as default};
