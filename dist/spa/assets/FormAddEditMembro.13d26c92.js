import{_ as w,a4 as h,b6 as U,r as g,c as N,o as q,Z as p,$ as b,a0 as s,f as a,a7 as m,q as u,b7 as B,aQ as n,Q as t}from"./index.b55bc580.js";import{b as S,Q as k}from"./userApi.31b3b844.js";import{u as M,Q as A}from"./QForm.745c4a11.js";import{Q as z}from"./QPage.cc639ba5.js";import{Q as C,a as E}from"./QLayout.db06ca5a.js";import{u as I}from"./use-quasar.0650274d.js";import"./format.aaa5a484.js";import"./rtl.b51694b1.js";const R={name:"formAddEdit",props:{},setup(V,{emit:l}){const d="membros",{notifyError:e,notifySuccess:c}=M(),f=h(),o=U(),_=I(),v=g(["Baptizado","N\xE3o baptizado"]),{getById:y,post:x,update:Q}=S(),r=g({nome:"",nome_pai:"",nome_mae:"",naturalidade:"",num_bilhete:"",data_nascimento:"",status:"",idade:0}),i=N(()=>o.params.id);return q(async()=>{i.value&&(r.value=await y(d,i.value))}),{form:r,options:v,submit:async()=>{try{_.loading.show({message:"Cadastrando"}),i.value?(await Q(d,r.value),c("Dados do membro actualizado com sucesso..."),f.push({name:"membros"})):(await x(d,r.value),c("Membro inserido com sucesso"),f.push({name:"membros"}))}catch(P){e(P.message)}finally{_.loading.hide()}},isUpdate:i}}},j={class:"row justify-center text-body2 text-blue-10"},D={class:"col-md-4 col-lg-4 col-xs-12 col-sm-12"},F={class:"col-md-4 col-lg-4 col-xs-12 col-sm-12"},L={class:"col-md-4 col-lg-4 col-xs-12 col-sm-12"},Z={class:"col-md-4 col-lg-4 col-xs-12 col-sm-12"},G={class:"col-md-4 col-lg-4 col-xs-12 col-sm-12"},H={class:"col-md-4 col-lg-4 col-xs-12 col-sm-12"},J={class:"col-md-8 col-lg-8 col-xs-12 col-sm-12"},K={class:"col-md-8 col-lg-8 col-xs-12 col-sm-12"};function O(V,l,d,e,c,f){return p(),b(C,null,{default:s(()=>[a(E,null,{default:s(()=>[a(z,{padding:""},{default:s(()=>[m("span",j,[e.isUpdate?(p(),b(u,{key:0,flat:"",icon:"mdi-file-edit",label:" Alterar dados do membros"})):(p(),b(u,{key:1,flat:"",icon:"mdi-account-tie",label:" Registrar novos membros"}))]),a(A,{class:"row justify-center q-gutter-x-sm q-gutter-y-sm q-mt-lg",onSubmit:B(e.submit,["prevent"])},{default:s(()=>[m("div",D,[a(n,{dense:"",outlined:"",label:"Nome completo",modelValue:e.form.nome,"onUpdate:modelValue":l[0]||(l[0]=o=>e.form.nome=o),rules:[o=>o!==null&&o!==""||"Porfavor informe o nome do membro"]},{prepend:s(()=>[a(t,{name:"mdi-account-tie"})]),_:1},8,["modelValue","rules"])]),m("div",F,[a(n,{dense:"",outlined:"",label:"Nome do Pai",modelValue:e.form.nome_pai,"onUpdate:modelValue":l[1]||(l[1]=o=>e.form.nome_pai=o),rules:[o=>o!==null&&o!==""||"Porfavor informe o nome do Pai"]},{prepend:s(()=>[a(t,{name:"mdi-face-man"})]),_:1},8,["modelValue","rules"])]),m("div",L,[a(n,{dense:"",outlined:"",label:"Nome da ma\xEA",modelValue:e.form.nome_mae,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.nome_mae=o),rules:[o=>o!==null&&o!==""||"Porfavor informe o nome da Ma\xEA"]},{prepend:s(()=>[a(t,{name:"mdi-face-woman"})]),_:1},8,["modelValue","rules"])]),m("div",Z,[a(n,{dense:"",outlined:"",label:"Naturalidade",modelValue:e.form.naturalidade,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.naturalidade=o),rules:[o=>o!==null&&o!==""||"Porfavor informe a naturalidade do membro"]},{prepend:s(()=>[a(t,{name:"mdi-map-marker"})]),_:1},8,["modelValue","rules"])]),m("div",G,[a(n,{dense:"",outlined:"",label:"N\xBA do documento",modelValue:e.form.num_bilhete,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.num_bilhete=o),rules:[o=>o!==null&&o!==""||"Porfavor informe o n\xBA do documento do membro",o=>o.length==14||"Porfavor informe um n\xFAmero real"]},{prepend:s(()=>[a(t,{name:"mdi-counter"})]),_:1},8,["modelValue","rules"])]),m("div",H,[a(n,{type:"date",dense:"",outlined:"",label:"Data de nascimento",modelValue:e.form.data_nascimento,"onUpdate:modelValue":l[5]||(l[5]=o=>e.form.data_nascimento=o),rules:[o=>o!==null&&o!==""||"Porfavor informe a data de nascimento"]},{prepend:s(()=>[a(t,{name:"mdi-calendar-range"})]),_:1},8,["modelValue","rules"])]),m("div",J,[a(k,{dense:"",outlined:"",modelValue:e.form.status,"onUpdate:modelValue":l[6]||(l[6]=o=>e.form.status=o),options:e.options,label:"Statu do membro","option-value":"id","option-label":"status","map-options":"","emit-value":"",rules:[o=>o!==null&&o!==""||"Porfavor selecione um estado"]},{prepend:s(()=>[a(t,{name:"mdi-state-machine"})]),_:1},8,["modelValue","options","rules"])]),m("div",K,[a(u,{type:"submit",dense:"",class:"full-width",icon:"mdi-content-save-outline",label:"Salvar dados",color:"primary"}),a(u,{flat:"",dense:"",class:"full-width q-mt-lg",icon:"mdi-format-list-bulleted",label:"Ver lista de membros",color:"blue-grey-10",to:{name:"membros"}})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var so=w(R,[["render",O]]);export{so as default};
