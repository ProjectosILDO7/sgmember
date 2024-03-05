<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-btn
          flat
          icon="mdi-chess-bishop"
          color="green-10"
          label="controlo de depósito do ofertório dominical"
        />
        <q-separator />

        <q-table
          dense=""
          title="Lista de ofertório geral"
          :rows="ofertorios"
          :columns="columns"
          :filter="filter"
          row-key="name"
          class="q-mt-md"
        >
          <template v-slot:body-cell-options="props">
            <q-td :props="props">
              <q-btn
                flat
                dense
                color="red-10"
                icon="mdi-delete-forever-outline"
                @click="apagarOfertorio(props.row)"
              ></q-btn>
            </q-td>
          </template>
        </q-table>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import JsonExcel from "vue-json-excel3";
import { columns } from "./tableOfertorioGeral.js";
import { ref, onMounted, useAttrs } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import userApi from "src/composible/userApi";
import usenotification from "src/composible/useNotify";
import { fields } from "src/pages/auth/admin/financas/exportUtil/fieldsExport.js";
import userAuthUser from "src/composible/userAuthUser.js";
export default {
  name: "table-ofertorio",
  setup(props) {
    const { user } = userAuthUser();
    const tabela = "ofertoriogeral";
    const filter = ref("");
    const ofertorios = ref([]);
    const $q = useQuasar();
    const { list, remove } = userApi();
    const router = useRouter();
    const { notifyError, notifySuccess } = usenotification();

    onMounted(() => {
      if (user.value.user_metadata.funcao == "Secretário") {
        notifyError("Acesso limitado...");
        router.push({ name: "secretaria" });
      }
      if (user.value.user_metadata.funcao == "Tesoureiro") {
        notifyError("Acesso limitado...");
        router.push({ name: "financas" });
      }
      carregarOfertorio();
    });

    const editOfertorio = (item) => {
      router.push({ name: "form-cadastro-ofertorio", params: { id: item } });
    };

    const apagarOfertorio = async (item) => {
      try {
        $q.dialog({
          title: "Confirmação",
          message: `tens a certeza que pretendes eliminar o valor ( ${item.valor} ) de ofertorio da base de dados da Igreja ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          $q.loading.show({ message: "Apagando informações do ofertório..." });
          await remove(tabela, item.id);
          carregarOfertorio();
          notifySuccess("Ofertório apagado com sucesso");
        });
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    const carregarOfertorio = async () => {
      try {
        $q.loading.show({ message: "Carregar dados de ofertório" });
        ofertorios.value = await list(tabela);
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };
    return {
      ofertorios,
      columns,
      filter,
      editOfertorio,
      apagarOfertorio,
      fields,
    };
  },
};
</script>
