<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-mt-md">
        <div class="row flex flex-right">
          <div class="col-12 text-right">
            <q-btn
              outline
              dense
              @click="gerarRelatorio"
              color="green-5"
              icon="mdi-file-edit"
              class="q-mb-md"
            />
          </div>
        </div>

        <q-separator />

        <div id="elementToPrint" class="border-blue-10 row q-mt-lg">
          <q-card>
            <div class="col-12 flex-center">
              <pre class="text-body1">
            [Logo da Igreja]
            <b>{{ nome_igreja }}</b>
            <b>{{ endereco_igreja }}</b>

            NIF:<span class="text-red-10" v-if="nif">{{ nif }}</span>
            Telefone da Igreja: <span class="text-red-10">{{ telemovel }}</span>
            E-mail: <span class="text-red-10">{{ email }}</span>
            Site da Igreja: <span class="text-red-10">{{ site }}</span>

                                                                        À {{ nova_igreja }}
                                                                        Endereço da Nova Igreja Cidade,
                                                                        Estado,
                                                                        CEP
                                                                      </pre>
              <p class="text-justify">
                Prezados irmãos em Cristo, É com grande alegria e gratidão a
                Deus que, escrevemos esta carta de {{ testificacao }} em nome do
                irmão <b>{{ membro }}</b
                >, membro fiel da Igreja {{ nome_igreja }}, que está em processo
                de deslocamento para a região de {{ cidade_igreja }}. O irmão
                {{ nome_membro }} tornou-se parte de nossa comunidade em
                {{ data_ingresso }}, sendo batizado em {{ data_baptismo }}.
              </p>

              <p>
                Durante seu tempo conosco, ele demonstrou um compromisso notável
                com sua fé e uma participação ativa em diversas áreas de nosso
                ministério. O irmão {{ nome_membro }} serviu com dedicação no
                ministério de {{ ministerio }}, além de participar regularmente
                dos cultos de adoração, estudos bíblicos e eventos especiais
                promovidos por nossa igreja.
              </p>

              <p>
                Sua presença foi uma bênção para nossa comunidade, e suas
                habilidades e dons foram usados para edificação do corpo de
                Cristo. Durante sua membresia, observamos o testemunho cristão
                exemplar do irmão {{ nome_membro }}. Acreditamos que ele será
                uma valiosa adição à sua congregação. O irmão
                {{ nome_membro }} está se deslocando devido a
                {{ moctivo_da_deslocacao }}.
              </p>

              <p>
                Recomendamos calorosamente o irmão à {{ nova_igreja }} e oramos
                para que ele continue a crescer em sua jornada espiritual e a
                servir ao Senhor com zelo e amor.
              </p>
              <br />
              <br />
              <br />
              <br />

              <pre>
            Em Cristo,
            <br/>
            <b>O Pastor</b>

            _______________________________

            <p>
              O Secretário
            _________________________________
            </p>
           </pre>
            </div>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import mammoth from "mammoth";
import { defineComponent, ref, onMounted, computed } from "vue";
import userApi from "src/composible/userApi";
import usenotification from "src/composible/useNotify";
import { useQuasar } from "quasar";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { getById } = userApi();
    const { notifyError, notifySuccess } = usenotification();
    const tabela = "membros";
    const $q = useQuasar();
    const testificacao = ref("testificação");
    const nome_membro = ref("Ildo Marques Cuema");
    const cidade_igreja = ref("Lubango");
    const telemovel = ref("921923232");
    const ministerio = ref("");
    const nif = ref("");
    const email = ref("ildocuema@gmail.com");
    const site = ref("www.igrejapentecostal.com");
    const nome_igreja = ref("");
    const endereco_igreja = ref("");
    const membro = ref({});
    const gerarRelatorio = async () => {
      // Obtém o elemento que você deseja imprimir
      const elementoParaImprimir = document.getElementById("elementToPrint");

      // Cria uma cópia do elemento para imprimir
      const copiaElemento = elementoParaImprimir.cloneNode(true);

      // Cria um documento temporário
      const documentoTemporario = document.createElement("div");
      documentoTemporario.appendChild(copiaElemento);

      // Abre uma nova janela e imprime o conteúdo
      const janelaImprimir = window.open("", "_blank");
      janelaImprimir.document.write(documentoTemporario.innerHTML);
      janelaImprimir.document.close();
      janelaImprimir.print();
    };

    onMounted(() => {
      dataMembro();
    });

    const dataMembro = async () => {
      console.log(props.id);
      try {
        $q.loading.show({ message: "Carregando informações do membro" });
        membro.value = await getById(tabela, props.id);
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };
    return {
      gerarRelatorio,
      dataMembro,
      site,
      telemovel,
      email,
      nif,
      nome_igreja,
      tabela,
      endereco_igreja,
      testificacao,
      nome_membro,
      cidade_igreja,
      ministerio,
    };
  },
});
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
  line-height: 2;
  font-family: Arial, Helvetica, sans-serif;
}

pre {
  font-size: 20px;
  line-height: 2;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
