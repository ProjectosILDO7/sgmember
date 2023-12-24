<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="text-h6 text-body1 text-green-10">
          Testificação do membro
        </div>
        <q-separator id="1" />
        <div class="row flex flex-right">
          <div class="col-12 text-right">
            <q-btn
              outline
              dense
              @click="alert = true"
              color="green-5"
              icon="mdi-file-edit"
              class="q-mb-md q-mt-md"
            />
          </div>
        </div>

        <q-separator />

        <div id="elementToPrint" class="border-blue-10 row q-mt-lg">
          <q-card>
            <div class="col-12 flex-center">
              <pre class="text-body1">
            <img src="../../../../../../public/igreja-pentecostal.png" style="max-width: 80px;"/>
            <b>{{ nome_igreja }}</b>
            <b>{{ endereco_igreja }}</b>

            NIF:<span class="text-red-10" v-if="nif">{{ nif }}</span>
            Telefone da Igreja: <span class="text-red-10">{{ telemovel }}</span>
            E-mail: <span class="text-red-10">{{ email }}</span>
            Site da Igreja: <span class="text-red-10">{{ site }}</span>

                                                                        À {{ nova_igreja }}
                                                                        {{ endereco_nova_igreja }},


                                                                      </pre>
              <p class="text-justify">
                Prezados irmãos em Cristo, É com grande alegria e gratidão a
                Deus que, escrevemos esta {{ testificacao }} em nome
                <span v-if="membro.genero == 'Femenino'">da irmã</span
                ><span v-else>do irmão</span> <b>{{ membro.nome }}</b
                >, membro fiel da {{ nome_igreja }}, que está em processo de
                deslocamento para a região de {{ cidade_igreja }}.
                <span v-if="membro.genero == 'Femenino'">A irmã</span
                ><span v-else>O irmão</span> {{ membro.nome }} tornou-se parte
                de nossa comunidade em {{ membro.data_ingresso }}, sendo
                batizado em {{ membro.data_baptismo }}.
              </p>

              <p>
                Durante seu tempo conosco,
                <span v-if="membro.genero == 'Femenino'">ela</span
                ><span v-else>ele</span> demonstrou um compromisso notável com
                sua fé e uma participação ativa em diversas áreas de nosso
                ministério.
                <span v-if="membro.genero == 'Femenino'">A irmã</span
                ><span v-else>O irmão</span> {{ membro.nome }} serviu com
                dedicação no ministério de {{ ministerio }}, além de participar
                regularmente dos cultos de adoração, estudos bíblicos e eventos
                especiais promovidos por nossa igreja.
              </p>

              <p>
                Sua presença foi uma bênção para nossa comunidade, e suas
                habilidades e dons foram usados para edificação do corpo de
                Cristo. Durante sua membresia, observamos o testemunho cristão
                exemplar <span v-if="membro.genero == 'Femenino'">da irmã</span
                ><span v-else>do irmão</span> {{ membro.nome }}. Acreditamos que
                <span v-if="membro.genero == 'Femenino'">ela</span
                ><span v-else>ele</span> será uma valiosa adição à vossa
                congregação.
                <span v-if="membro.genero == 'Femenino'">A irmã</span
                ><span v-else>O irmão</span> {{ membro.nome }} está se
                deslocando devido a {{ moctivo_da_deslocacao }}.
              </p>

              <p>
                Recomendamos calorosamente
                <span v-if="membro.genero == 'Femenino'">a irmã</span
                ><span v-else>o irmão</span> à {{ nova_igreja }} e oramos para
                que <span v-if="membro.genero == 'Femenino'">ela</span
                ><span v-else>ele</span> continue a crescer em sua jornada
                espiritual e a servir ao Senhor com zelo e amor.
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

        <q-dialog v-model="alert" persistent>
          <q-card class="q-gutter-sm">
            <q-card-section>
              <div class="text-h6">Outras Informações</div>
            </q-card-section>

            <q-card-section>
              <q-icon name="mdi-help-box" />Inseri no documento os campos em
              falta, informações que qualificam o membro, para uma boa receição
              em outra congregação...
            </q-card-section>
            <q-card-section>
              <span class="text-body6 text-blue-grey-6"
                >Informação da Igreja</span
              >
            </q-card-section>
            <q-card-section class="q-pt-none q-gutter-sm">
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Nome da igreja"
                v-model="nome_igreja"
              />
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Localidade da  Igreja"
                v-model="cidade_igreja"
              />
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="E-mail da Igreja"
                v-model="email"
              />
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Site da Igreja"
                v-model="site"
              />
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Telemovel da Igreja"
                v-model="telemovel"
              />
            </q-card-section>
            <q-card-section>
              <span class="text-body6 text-blue-grey-6"
                >Informações da Igreja de destino</span
              >
            </q-card-section>
            <q-card-section class="q-gutter-sm">
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Igreja de destino"
                v-model="nova_igreja"
              />
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Endereço da Igreja de destino"
                v-model="endereco_nova_igreja"
              />
            </q-card-section>

            <q-card-section>
              <span class="text-body6 text-blue-grey-6"
                >Informações do Membro</span
              >
            </q-card-section>
            <q-card-section class="q-gutter-sm">
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Testificação ou carta de recomendação"
                v-model="testificacao"
              />
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Ministério onde serviu"
                v-model="ministerio"
              />
              <q-input
                dense
                class="col-12"
                outlined
                type="text"
                label="Está se deslocando devido a..."
                v-model="moctivo_da_deslocacao"
              />
            </q-card-section>
            <q-card-actions align="right" class="q-gutter-x-md">
              <q-btn flat icon="mdi-close" color="negative" v-close-popup />
              <q-btn
                flat
                icon="mdi-printer"
                color="primary"
                v-close-popup
                @click="gerarRelatorio"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
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
import { useRoute } from "vue-router";

export default {
  setup(props) {
    const { getById } = userApi();
    const { notifyError, notifySuccess } = usenotification();
    const tabela = "membros";
    const $q = useQuasar();
    const testificacao = ref("testificação");
    const cidade_igreja = ref("Lubango");
    const telemovel = ref("921923232");
    const nova_igreja = ref("");
    const ministerio = ref("");
    const moctivo_da_deslocacao = ref("");
    const endereco_nova_igreja = ref("");
    const email = ref("ildocuema@gmail.com");
    const site = ref("www.igrejapentecostal.com");

    const route = useRoute();
    const nif = ref("");
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

    const isMemberId = computed(() => {
      return route.params.id;
    });

    const dataMembro = async () => {
      try {
        $q.loading.show({ message: "Carregando informações do membro" });
        membro.value = await getById(tabela, isMemberId.value);
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };
    return {
      alert: ref(false),
      gerarRelatorio,
      dataMembro,
      site,
      telemovel,
      email,
      isMemberId,
      nif,
      nome_igreja,
      tabela,
      membro,
      endereco_nova_igreja,
      endereco_igreja,
      testificacao,
      cidade_igreja,
      ministerio,
      nova_igreja,
      moctivo_da_deslocacao,
    };
  },
};
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
