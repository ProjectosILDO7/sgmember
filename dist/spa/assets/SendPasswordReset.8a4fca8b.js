import{_ as u,a1 as f,r as p,W as _,X as g,Y as s,f as e,a4 as r,bb as b,aG as h,Q as x,q as i,a3 as y}from"./index.6cdbd242.js";import{Q as v}from"./QForm.35ebbdc8.js";import{Q}from"./QPage.cb19c242.js";import{Q as q,a as w}from"./QLayout.830bb237.js";import{u as S}from"./use-quasar.6af6e18a.js";import{u as P}from"./useNotify.1f5df6dd.js";import{_ as V}from"./igreja-pentecostal.54735359.js";const k={setup(){const{sendEmailResetPassword:l}=y();f();const{notifyError:t,notifySuccess:m}=P(),a=S(),n=p({email:"",password:""});return{form:n,onSubmit:async()=>{try{a.loading.show({message:"Porfavor aguarde..."}),await l(n.value),m("Solicitou uma nova senha, porfavor verifique sua caixa de email")}catch(d){t(d.message)}finally{a.loading.hide()}},resetForm:()=>{n.value={email:""}}}}},B={class:"row col-md-4 col-lg-4 col-xs-12 col-sm-12 flex-center q-mt-lg"},E=r("span",{class:"text-body2 text-blue-grey-8 text-center col-4 text-justify"}," Lamentamos por perder sua palavra chave! mas n\xE3o se preocupe vamos resolver o seu problema. Informe-nos seu e-mail na caixa de di\xE1logo abaixo e seguidamente enviar\xE9mos um link de redefini\xE7\xE3o da senha na caixa de correio eletronico. Obrigado! ",-1),z=r("span",{class:"col-12 text-center q-pb-md"},[r("img",{src:V,style:{"max-width":"80px"},rounded:""})],-1),C={class:"q-gutter-x-md q-mt-lg"};function F(l,t,m,a,n,c){return _(),g(q,null,{default:s(()=>[e(w,null,{default:s(()=>[e(Q,{padding:""},{default:s(()=>[r("div",B,[E,z,e(v,{onSubmit:b(a.onSubmit,["prevent"]),class:"q-gutter-y-md"},{default:s(()=>[e(h,{type:"email",label:"E-mail",outlined:"",name:"email",class:"col-12",dense:"","lazy-rules":"",rules:[o=>o&&o.length>0||"Porfavor informe-nos seu email"],modelValue:a.form.email,"onUpdate:modelValue":t[0]||(t[0]=o=>a.form.email=o),required:""},{prepend:s(()=>[e(x,{name:"mdi-account"})]),_:1},8,["rules","modelValue"]),e(i,{class:"q-mt-md full-width",color:"primary",icon:"mdi-send",dense:"",type:"submit",label:"Enviar pedido de redefini\xE7\xE3o da senha"}),r("div",C,[e(i,{icon:"mdi-lock",flat:"",label:"Criar minha conta",class:"align-center",dense:"",color:"secondary",size:"sm",to:{name:"create"}}),e(i,{flat:"",icon:"mdi-account-plus",label:"j\xE1 Tenho uma conta",class:"align-center",dense:"",color:"secondary",size:"sm",to:{name:"login"}})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})]),_:1})}var A=u(k,[["render",F]]);export{A as default};