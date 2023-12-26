<template>
  <div class="q-pa-md">
    <q-table
      dense
      flat
      bordered
      title="Treats"
      :rows="membros"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >
      <template v-slot:top>
        <q-btn
          dense
          outline
          icon="mdi-database"
          color="primary"
          :disable="loading"
          label="Cadastrar novo membro"
          :to="{ name: 'form-cadastro' }"
        />

        <q-btn
          outline
          dense
          icon="mdi-file-excel"
          color="green-10"
          v-if="membros.length !== 0"
          :disable="loading"
          class="q-ml-sm"
        >
          <download-excel
            :data="membros"
            :fields="fields"
            worksheet="Membros da congregação"
            name="Membros.xls"
            >Exportar para Excel</download-excel
          >
        </q-btn>
        <q-space />
        <q-input
          outlined
          borderless
          dense
          debounce="300"
          color="primary"
          v-model="filter"
          label="Procurar membro"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-options="props">
        <q-td :props="props">
          <q-btn
            dense
            flat
            icon="mdi-file-edit"
            color="secondary"
            @click="editForm(props.row.id)"
          />

          <q-btn
            dense
            flat
            icon="mdi-delete-forever-outline"
            color="negative"
            @click="apagarMembro(props.row)"
          />
          <q-btn
            dense
            flat
            icon="mdi-eye-outline"
            color="blue-grey-8"
            @click="detalhesInfo(props.row)"
          />
        </q-td>
      </template>
    </q-table>

    <detalhes-membro
      :dados="dados"
      :show="showDialoge"
      @modalClose="modalClose"
    />
  </div>
</template>

<script>
import JsonExcel from "vue-json-excel3";
import { columns } from "src/pages/auth/admin/membros/table.js";
import detalhesMembro from "src/components/detalhes/detalhesDialog.vue";
import { useQuasar, exportFile } from "quasar";
import { fields } from "src/pages/auth/admin/membros/exportUtil/fieldsExport.js";
import userApi from "src/composible/userApi.js";
//import usenotification from "src/composible/useNotify";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { detalhesMembro, downloadExcel: JsonExcel },
  setup() {
    const tabela = "membros";
    const membros = ref([]);
    const dados = ref({});
    const excel = exportFile();
    const showDialoge = ref(false);
    const { list, remove } = userApi();
    const $q = useQuasar();
    const loading = ref(false);
    const filter = ref("");
    const rowCount = ref(5);
    const router = useRouter();

    const editForm = (id) => {
      router.push({ name: "form-cadastro", params: { id: id } });
    };

    const modalClose = () => {
      showDialoge.value = false;
    };

    const carregarMembros = async () => {
      try {
        $q.loading.show({ message: "Carregando informações" });
        membros.value = await list(tabela);
      } catch (error) {
      } finally {
        $q.loading.hide();
      }
    };

    const detalhesInfo = (data) => {
      (dados.value = data), (showDialoge.value = true);
    };

    const apagarMembro = async (item) => {
      try {
        $q.dialog({
          title: "Confirmação",
          message: `tens a certeza que pretendes eliminar o (a) ${item.nome} da base de dados da Igreja ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          $q.loading.show({ message: "Apagando dados do membro..." });
          await remove(tabela, item.id);
          carregarMembros();
          notifySuccess("Membro apagado com sucesso");
        });
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    onMounted(() => {
      carregarMembros();
    });

    return {
      columns,
      membros,
      loading,
      editForm,
      filter,
      rowCount,
      apagarMembro,
      showDialoge,
      detalhesInfo,
      dados,
      modalClose,
      excel,
      fields,
    };
  },
};
</script>
src/pages/auth/admin/membros/exportUtil/fieldsExport.js
