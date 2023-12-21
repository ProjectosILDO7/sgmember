<template>
  <div class="q-pa-md">
    <q-table
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
          icon="mdi-database"
          color="primary"
          :disable="loading"
          label="Cadastrar novo membro"
          @click="showForm"
        />
        <q-btn
          glasses
          dense
          icon="mdi-download"
          v-if="membros.length !== 0"
          class="q-ml-sm"
          color="primary"
          :disable="loading"
          label="Baixar lista de membros"
          @click="removeRow"
        />
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
    </q-table>

    <form-modal :show="mostrarModal" />
  </div>
</template>

<script>
import formModal from "src/components/forms/FormAddEdit.vue";
import { columns } from "src/pages/auth/admin/membros/table.js";
import { useQuasar } from "quasar";
import userApi from "src/composible/userApi.js";
import { ref, onMounted } from "vue";

export default {
  components: { formModal },
  setup() {
    const tabela = "membros";
    const membros = ref([]);
    const { list } = userApi();
    const $q = useQuasar();
    const mostrarModal = ref(false);
    const loading = ref(false);
    const filter = ref("");
    const rowCount = ref(10);

    const showForm = () => {
      mostrarModal.value = true;
    };

    onMounted(async () => {
      try {
        $q.loading.show({ message: "Carregando informações" });
        membros.value = await list(tabela);
      } catch (error) {
      } finally {
        $q.loading.hide();
      }
    });

    return {
      showForm,
      columns,
      membros,
      mostrarModal,
      loading,
      filter,
      rowCount,
    };
  },
};
</script>
