<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="row">
          <div class="col-12 text-body1">Atribuição de tarefas</div>
        </div>
        <q-separator />
        <q-input
          dense
          outlined
          type="text"
          v-model="search"
          label="Buscar membro"
          class="q-mt-md"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>

        <div class="row justify-center q-mt-md" v-if="search">
          <q-table
            dense
            title="Membro localizado"
            :rows="membros"
            :filter="search"
            :columns="columns"
            row-key="name"
            color="green-10"
          >
            <template v-slot:body-cell-options="props">
              <q-td :props="props">
                <q-btn
                  dense
                  icon="mdi-cog"
                  class="text-blue-grey-10"
                  @click="showModalForm(props.row)"
                ></q-btn>
              </q-td>
            </template>
          </q-table>
        </div>

        <div class="flex flex-center" v-else>
          <q-btn
            dense
            label="Escreva o nome do membro na caixa acima para pesquisa e posteriormente atribuição de cargo"
            class="text-body3 text-green-10 q-mt-lg text-h5"
          ></q-btn>
        </div>

        <form-user-member
          :show="show"
          @modalClose="closeModal"
          :dados="dados"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { onMounted, ref } from "vue";
import formUserMember from "components/forms/formUserMember.vue";
import userApi from "src/composible/userApi";
const columns = [
  {
    name: "nome",
    required: true,
    label: "Membro",
    align: "left",
    field: "nome",
    sortable: true,
  },
  {
    name: "status",
    required: true,
    label: "Status do membro",
    align: "left",
    field: "status",
    sortable: true,
  },
  {
    name: "data_baptismo",
    required: true,
    label: "Data de baptismo",
    align: "left",
    field: "data_baptismo",
    sortable: true,
  },
  {
    name: "data_ingresso",
    required: true,
    label: "Data de ingresso",
    align: "left",
    field: "data_ingresso",
    sortable: true,
  },
  {
    name: "options",
    required: true,
    label: "Opções",
    align: "center",
    field: "options",
    sortable: true,
  },
];
export default {
  name: "tarefas-membros",
  components: { formUserMember },
  setup() {
    const membros = ref([]);
    const { list } = userApi();
    const show = ref(false);
    const tabela = "membros";
    const search = ref("");
    const dados = ref({});

    onMounted(() => {
      carregarMembros();
    });

    const carregarMembros = async () => {
      try {
        membros.value = await list(tabela);
      } catch (error) {}
    };

    const closeModal = () => {
      show.value = false;
    };

    const showModalForm = (item) => {
      show.value = true;
      dados.value = item;
    };

    return {
      search,
      dados,
      showModalForm,
      columns,
      carregarMembros,
      membros,
      show,
      closeModal,
    };
  },
};
</script>
