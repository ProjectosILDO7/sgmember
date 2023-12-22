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
          outline
          icon="mdi-database"
          color="primary"
          :disable="loading"
          label="Cadastrar novo membro"
          :to="{ name: 'form-cadastro' }"
        />
        <q-btn
          glasses
          outline
          dense
          icon="mdi-download"
          v-if="membros.length !== 0"
          class="q-ml-sm"
          color="primary"
          :disable="loading"
          label="Baixar lista de membros"
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
          />
          <q-btn dense flat icon="mdi-eye-outline" color="blue-grey-8" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { columns } from "src/pages/auth/admin/membros/table.js";
import { useQuasar } from "quasar";
import userApi from "src/composible/userApi.js";
import usenotification from "src/composible/useNotify";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {},
  setup() {
    const tabela = "membros";
    const membros = ref([]);
    const { list } = userApi();
    const $q = useQuasar();
    const loading = ref(false);
    const filter = ref("");
    const rowCount = ref(5);
    const router = useRouter();

    const editForm = (id) => {
      router.push({ name: "form-cadastro", params: { id: id } });
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
      columns,
      membros,
      loading,
      editForm,
      filter,
      rowCount,
    };
  },
};
</script>
