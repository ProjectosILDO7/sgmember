import{ag as p,an as g,r as _,ah as h,ai as y,aj as r,f as a,aq as l,aK as w,aL as c,a1 as u,a2 as i,ap as b}from"./index.d25a7423.js";import{u as q,Q}from"./useNotify.ae3e4842.js";import{Q as x}from"./QPage.c09a985a.js";import{Q as V,a as v}from"./QLayout.04003d87.js";import{u as P}from"./use-quasar.e0a542eb.js";import{_ as S}from"./igreja-pentecostal.54735359.js";const z={setup(){const{login:m}=b(),s=g(),{notifyError:d,notifySuccess:o}=q(),n=P(),t=_({email:"",password:""}),e=()=>{t.value={email:"",password:""}};return{form:t,onSubmit:async()=>{try{n.loading.show({message:"Porfavor aguarde..."}),await m(t.value),s.push({name:"admin"}),o("Autorizado com sucesso")}catch(f){d(f.message)}finally{n.loading.hide(),e()}},resetForm:e}}},k={class:"row col-md-4 col-lg-4 col-xs-12 col-sm-12 flex-center q-mt-lg"},B=l("span",{class:"col-12 text-center q-pb-md"},[l("img",{src:S,style:{"max-width":"80px"},rounded:""})],-1),E={class:"q-gutter-x-md q-mt-lg"};function A(m,s,d,o,n,t){return h(),y(V,null,{default:r(()=>[a(v,null,{default:r(()=>[a(x,{padding:""},{default:r(()=>[l("div",k,[B,a(Q,{onSubmit:w(o.onSubmit,["prevent"]),class:"q-gutter-y-md"},{default:r(()=>[a(c,{type:"email",label:"E-mail",outlined:"",name:"email",class:"col-12",dense:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Porfavor informe-nos seu email"],modelValue:o.form.email,"onUpdate:modelValue":s[0]||(s[0]=e=>o.form.email=e),required:""},{prepend:r(()=>[a(u,{name:"mdi-account"})]),_:1},8,["rules","modelValue"]),a(c,{type:"password",label:"Senha",outlined:"",name:"password",class:"col-12 q-mt-sm",dense:"","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Porfavor digite sua senha",e=>e>0&&e>=6||"A sua senha deve ter maior ou igual a 6 caracteres"],modelValue:o.form.password,"onUpdate:modelValue":s[1]||(s[1]=e=>o.form.password=e),required:""},{prepend:r(()=>[a(u,{name:"mdi-lock"})]),_:1},8,["rules","modelValue"]),a(i,{class:"q-mt-md full-width",color:"primary",icon:"mdi-login",dense:"",type:"submit",label:"Entrar"}),l("div",E,[a(i,{icon:"mdi-lock",flat:"",label:"Esqueci minha senha",class:"align-center",dense:"",color:"secondary",size:"sm",to:{name:"sendResetPassword"}}),a(i,{flat:"",icon:"mdi-account-plus",label:"N\xE3o Tenho conta",class:"align-center",dense:"",color:"secondary",size:"sm",to:{name:"create"}})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})]),_:1})}var j=p(z,[["render",A]]);export{j as default};
