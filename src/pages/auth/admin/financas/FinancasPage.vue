<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-btn
          flat
          icon="mdi-chess-bishop"
          color="green-10"
          label="controlo de depósito de dízimos e ofertório dos  membros"
        />

        <div class="q-gutter-x-sm text-right">
          <div class="col-12 q-gutter-md">
            <q-btn
              dense
              icon="mdi-cart-arrow-down"
              color="green-9"
              label="Depósito"
              class="q-mb-md col-6"
              :to="{ name: 'form-cadastro-ofertorio' }"
            />
          </div>
        </div>
        <q-separator />

        <q-input
          class="col-6"
          outlined
          dense
          v-model="filter"
          label="Pesquisar"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>

        <q-btn
          outline
          dense
          icon="mdi-file-excel"
          color="green-10"
          v-if="ofertorios.length !== 0"
          :disable="loading"
          class="q-mt-md"
        >
          <download-excel
            :data="ofertorios"
            :fields="fields"
            worksheet="Nossos ofertorio"
            name="ofertorios.xls"
            >Exportar para Excel</download-excel
          >
        </q-btn>

        <q-btn
          outline
          dense
          icon="mdi-format-list-bulleted"
          label="Ver lista do
        ofertorio dominical"
          class="q-mt-md q-ml-md"
          :to="{ name: 'ofertaDominical' }"
        />

        <q-table
          dense=""
          title="Ofertórios"
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
                color="green-10"
                icon="mdi-file-edit"
                @click="editOfertorio(props.row.id)"
              ></q-btn>
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
import { columns } from "./table.js";
import { ref, onMounted, useAttrs } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import userApi from "src/composible/userApi";
import usenotification from "src/composible/useNotify";
import { fields } from "src/pages/auth/admin/financas/exportUtil/fieldsExport.js";
import userAuthUser from "src/composible/userAuthUser.js";
export default {
  name: "table-ofertorio",
  components: { downloadExcel: JsonExcel },
  setup(props) {
    const { user } = userAuthUser();
    const tabela = "ofertorio";
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
          message: `tens a certeza que pretendes eliminar o código ( ${item.membro_id} ) de ofertorio da base de dados da Igreja ?`,
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
