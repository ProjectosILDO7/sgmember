import{_ as f,a1 as p,b8 as y,r as g,W as h,X as b,Y as o,be as d,f as e,b9 as w,a4 as i,aG as _,Q as x,q as r,a3 as Q}from"./index.c87a4eda.js";import{Q as P}from"./QForm.17d46937.js";import{Q as v}from"./QPage.61743fb3.js";import{Q as q,a as k}from"./QLayout.083a6266.js";import{u as V}from"./use-quasar.412b0d8c.js";import{u as B}from"./useNotify.2dfaf0ec.js";const R={name:"form-login",setup(){const{resetPassword:n}=Q(),{notifyError:t,notifySuccess:l}=B();V();const s=p(),u=y().query.token,a=g("");return{password:a,updatePassword:async()=>{try{d.show({message:"Porfavor aguarde..."}),await n(u,a.value),s.push({name:"login"}),l("Senha alterada com sucesso")}catch(m){t(m.message)}finally{d.hide()}}}}},S=i("p",{class:"col-12 text-body2 text-center q-mt-lg text-blue-grey-8"}," Redefini\xE7\xE3o de senha ",-1),C={class:"col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm"};function E(n,t,l,s,c,u){return h(),b(q,null,{default:o(()=>[e(k,null,{default:o(()=>[e(v,{padding:""},{default:o(()=>[e(P,{class:"row justify-center",onSubmit:w(s.updatePassword,["prevent"])},{default:o(()=>[S,i("div",C,[e(_,{dense:"",modelValue:s.password,"onUpdate:modelValue":t[0]||(t[0]=a=>s.password=a),label:"Informe nova senha",outlined:"",class:"col-12",type:"password","lazy-rules":"",rules:[a=>a&&a.length>=6||"Porfavor digite a sua nova senha"]},{prepend:o(()=>[e(x,{name:"mdi-lock"})]),_:1},8,["modelValue","rules"]),e(r,{type:"submit",label:"Enviar nova senha",class:"full-width q-mt-lg",glossy:"",color:"primary",icon:"lock"}),e(r,{to:{name:"login"},flat:"",label:"Esqueci minha senha",class:"full-width q-mt-md text-body2 text-blue-grey-8"}),e(r,{to:{name:"create"},flat:"",label:"Criar uma conta",class:"full-width q-mt-md text-body2 text-blue-grey-8"})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var G=f(R,[["render",E]]);export{G as default};
