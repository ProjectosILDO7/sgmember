<template>
  <q-page padding>
    <q-btn
      class="col-12"
      label="Mostrar o Doc"
      icon="mdi-cloud-print"
      color="green-10"
      @click="gerarPDF"
      v-if="pdfApresenta == true"
      id="mostrarDoc"
    />
    <div class="row" v-if="pdfApresenta == false">
      <q-btn
        class="col-12"
        flat
        dense
        label="Preencha os campos em falta da Testificação"
      />
      <q-btn
        class="col-12"
        outline
        dense
        label="gerar Documento PDF para Imprensão"
        icon="mdi-file-excel"
        color="green-10"
        @click="gerarPDF"
      />
      <q-input
        dense
        outlined
        class="col-4 q-gutter-sm q-pa-sm"
        label="Igreja de destino"
        v-model="igreja_destino"
      ></q-input>
      <q-input
        dense
        outlined
        class="col-4 q-gutter-sm q-pa-sm"
        label="Nome da Igreja local"
        v-model="igreja_local"
      ></q-input>
      <q-input
        dense
        outlined
        class="col-4 q-gutter-sm q-pa-sm"
        label="Descrição da Testificação"
        v-model="desrcricao_testificao"
      ></q-input>
      <q-input
        dense
        outlined
        class="col-4 q-gutter-sm q-pa-sm"
        label="Função do membro"
        v-model="funcao_membro"
      ></q-input>
      <q-input
        dense
        outlined
        class="col-4 q-gutter-sm q-pa-sm"
        label="Categoria"
        v-model="categoria"
      ></q-input>
      <q-input
        dense
        outlined
        class="col-4 q-gutter-sm q-pa-sm"
        label="Lema do Milénio de Cristo"
        v-model="lema_ministerio"
      ></q-input>
      <q-input
        dense
        outlined
        class="col-6 q-gutter-sm q-pa-sm"
        label="O Secretario"
        v-model="secretario"
      ></q-input>
      <q-input
        dense
        outlined
        class="col-6 q-gutter-sm q-pa-sm"
        label="O Representante Paroquial"
        v-model="representante_paroquial"
      ></q-input>
    </div>

    <iframe
      :src="pdfSrc"
      width="100%"
      height="500px"
      v-if="pdfApresenta"
    ></iframe>

    <div id="elemento-para-pdf" class="style-font" v-if="pdfApresenta">
      <div class="row">
        <div class="col-12 text-center">
          <b>IGREJA DE NOSSO SENHOR JESUS CRISTO NO MUNDO</b>
        </div>
        <div class="col-12 text-center">
          <b>{{ NOME_IGREJA }}</b>
        </div>
        <div class="col-12 text-center">Relembrar em 25 de Julho de 1949</div>
        <div class="col-12 text-center">
          Por Sua Santidade Profeta Simão Gonçalves Tôco
        </div>
        <div class="col-12 text-center">
          <b>PROVÍNCIA ECLESIASTICA REVERENDO PASTOR ENOQUE ELIAS</b>
        </div>
        <div class="col-12 text-center">
          <b>PARÓQUIA PASTOR DOMINGOS MAVACALA</b>
        </div>
        <br />
        <div class="col-12 text-center">
          <b>Testificação Nº______/PPDM/{{ data }}</b>
        </div>
      </div>
      <br />

      <div class="row">
        <div class="col-12 style-font-body text-justify">
          Para os devidos efeitos achados convenientes e de acordo com o pedido
          dos anciãos e conselheiros da Direcção Paroquial, segue viagem para a
          INSJCM em {{ igreja_destino }} em {{ desrcricao_testificao }}
          <span v-if="membro.genero == 'Masculino'">o </span>
          <span v-else>a </span>
          <span v-if="membro.genero == 'Masculino'">irmão</span>
          <span v-else>irmã</span> <b>{{ membro.nome }}</b
          >, ostentando a categoria de {{ categoria }}, exercendo a função de
          {{ funcao_membro }}. Fas-se acompanhar dos irmão:<br />

          {{ linha_de_observacao }}
          {{ linha_de_observacao }}
          {{ linha_de_observacao }}
          {{ linha_de_observacao }}
          <br />
          <br />
          Podem ser recebidos em qualquer congregação do Senhor onde existe os
          Tocoístas da Igreja de Nosso Senhor Jesus Cristo no Mundo;
          <br />
          <br />
          Os Anciãos e Conselheiros da Igreja vos saúdam em Nome do Pai, do
          Filho e do Espirito santo, Amém.
          <br />
          <br />
          {{ igreja_local }}, no Lubango, aos _____ de ___________________ de
          {{ data }}.
          <p>{{ lema_ministerio }} - Milénio de Cristo</p>
        </div>
        <br />
        <div class="col-12 text-center">
          <br />
          <br />
          <b>A BEM DA IGRIJA</b>
        </div>
        <div class="col-12 text-center">
          <b>OS ANCIÃOS E CONSELHEIROS</b>
        </div>

        <div class="col-12 text-center">
          __________________________________________________________________
        </div>
        <div class="col-12 text-center">
          __________________________________________________________________
        </div>
        <div class="col-12 text-center">
          __________________________________________________________________
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-6 text-center">
          <b>O Secretário Executivo</b>
          <p>________________________________</p>
          {{ secretario }}
        </div>
        <div class="col-6 text-center">
          <b>O Representante Paroquial</b>
          <p>______________________________</p>
          {{ representante_paroquial }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import html2pdf from "html2pdf.js";
import { ref, onMounted, computed } from "vue";
import { useQuasar } from "quasar";
import { useRoute } from "vue-router";
import userApi from "src/composible/userApi";

const NOME_IGREJA = "<<Os TOCOISTAS>>";
const linha_de_observacao =
  "_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________";
const data = new Date().toJSON().slice(0, 4);
const pdfSrc = ref("");
const $q = useQuasar();
const route = useRoute();
const membro = ref({});
const src = "../../../../../../public/igreja-pentecostal.png";

const pdfApresenta = ref(false);

const igreja_destino = ref("");
const igreja_local = ref("");
const desrcricao_testificao = ref("");
const funcao_membro = ref("");
const categoria = ref("");
const lema_ministerio = ref("");
const secretario = ref("");
const representante_paroquial = ref("");

const { getById } = userApi();

onMounted(() => {
  carregarMembro();
});

const idMembro = computed(() => {
  return route.params.id;
});

const carregarMembro = async () => {
  try {
    $q.loading.show();
    membro.value = await getById("membros", idMembro.value);
    console.log(membro.value);
    //gerarPDF();
  } catch (error) {
    console.log(error.message);
  } finally {
    $q.loading.hide();
  }
};

const gerarPDF = () => {
  pdfApresenta.value = true;
  $q.loading.show();
  const element = document.getElementById("elemento-para-pdf");
  html2pdf()
    .from(element)
    .set({
      margin: 0.89,
      filename: "Testificação.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .toPdf()
    .get("pdf")
    .then((pdf) => {
      const totalPages = pdf.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        const pageWidth = pdf.internal.pageSize.width;
        const imageWidth = 0.52; // Largura da imagem
        const imageX = (pageWidth - imageWidth) / 2;
        pdf.addImage(
          "../../../../../../public/igreja-pentecostal.png",
          "PNG",
          imageX,
          0.25,
          imageWidth,
          0.52
        );
        pdf.setFontSize(10);
        pdf.setTextColor(150);
        pdf.text(
          "Igreja : OS TOCOISTAS",
          1,
          pdf.internal.pageSize.height - 0.5
        );
      }
      const blob = new Blob([pdf.output("blob")], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      pdfSrc.value = url;
    });
  $q.loading.hide();
};
</script>

<style lang="css" scoped>
.style-font {
  font-family: "Times New Roman", Times, serif;
  line-height: 1.3;
}
.style-font-body {
  font-size: 18px;
  line-height: 1.3;
}
</style>
