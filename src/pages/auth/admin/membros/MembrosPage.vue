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
      <template v-slot:body-cell-options="props">
        <q-td :props="props">
          <q-btn dense flat icon="mdi-file-edit" color="secondary" />
          <q-btn
            dense
            flat
            icon="mdi-delete-forever-outline"
            color="negative"
          />
          <q-btn dense flat icon="mdi-eye-outline" color="blue-grey-8" />
        </q-td>
      </template>
    </q-table>

    <form-modal
      :show="mostrarModal"
      @closeModal="closeModal"
      @addMembros="addMembros"
    />
  </div>
</template>

<script>
import formModal from "src/components/forms/FormAddEdit.vue";
import { columns } from "src/pages/auth/admin/membros/table.js";
import { useQuasar } from "quasar";
import userApi from "src/composible/userApi.js";
import usenotification from "src/composible/useNotify";
import { ref, onMounted } from "vue";

export default {
  components: { formModal },
  setup() {
    const tabela = "membros";
    const membros = ref([]);
    const { list, post } = userApi();
    const { notifyError, notifySuccess } = usenotification();
    const $q = useQuasar();
    const mostrarModal = ref(false);
    const loading = ref(false);
    const filter = ref("");
    const rowCount = ref(10);

    const showForm = () => {
      mostrarModal.value = true;
    };

    const closeModal = () => {
      mostrarModal.value = false;
    };

    const addMembros = async (form) => {
      try {
        $q.loading.show({ message: "Salvando..." });
        await post(tabela, form);
        notifySuccess("Dados salvos com sucesso");
      } catch (error) {
        notifyError("Não foi possível realizar o cadastro");
      } finally {
        $q.loading.hide();
        closeModal();
        carregarMembros();
      }
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

    onMounted(() => {
      carregarMembros();
    });

    return {
      showForm,
      columns,
      membros,
      addMembros,
      mostrarModal,
      closeModal,
      loading,
      filter,
      rowCount,
    };
  },
};
</script>
