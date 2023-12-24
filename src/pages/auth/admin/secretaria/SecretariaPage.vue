<!-- AlgumaPagina.vue -->

<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="text-h5">Secretaria geral</div>
        <p class="text-small text-body3 text-blue-5">
          Gerar documentos para membros
        </p>
        <q-separator />
        <q-input outlined dense type="" label="Procurar" v-model="filter"
          ><template v-slot:prepend><q-icon name="mdi-magnify" /></template
        ></q-input>
        <q-table
          dense
          class="q-mt-md"
          title="Membros"
          :rows="membros"
          :columns="columns"
          row-key="name"
          :filter="filter"
          :loading="loading"
        >
          <template v-slot:body-cell-options="props">
            <q-td :props="props">
              <q-btn
                dense
                outline
                icon="mdi-file-document-multiple"
                color="red-10"
                @click="documentPrint(props.row.id)"
              />
            </q-td>
          </template>
        </q-table>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { columns } from "./table";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import userApi from "src/composible/userApi";
import { useQuasar } from "quasar";
//import Relatorio from "src/components/relatorios/RelatorioPrint.vue";

export default {
  setup() {
    const tabela = "membros";
    const filter = ref("");
    const route = useRouter();
    const { list } = userApi();
    const $q = useQuasar();
    const membros = ref([]);

    onMounted(() => {
      carregarMembros();
    });

    const documentPrint = (id) => {
      route.push({ name: "testificacao-page", params: { id: id } });
    };
    const carregarMembros = async () => {
      try {
        $q.loading.show({ message: "Carregar membros..." });
        membros.value = await list(tabela);
      } catch (error) {
      } finally {
        $q.loading.hide();
      }
    };

    return {
      columns,
      membros,
      filter,
      carregarMembros,
      documentPrint,
    };
  },
};
</script>

<style scoped>
/* Estilos da página principal aqui */
</style>
