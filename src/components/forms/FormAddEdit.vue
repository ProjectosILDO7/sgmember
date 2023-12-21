<template>
  <q-dialog :model-value="show" persistent>
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section class="row items-center">
        <q-avatar icon="mdi-account-tie" color="secondary" text-color="white" />
        <span class="q-ml-sm">Registros de membros.</span>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-x-sm q-gutter-y-sm" @submit.prevent="submit">
          <q-input
            dense
            outlined
            label="Nome completo"
            v-model="form.nome"
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Porfavor informe o nome do membro',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-account-tie" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            label="Nome do Pai"
            v-model="form.nome_pai"
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Porfavor informe o nome do Pai',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-face-man" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            label="Nome da maê"
            v-model="form.nome_mae"
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Porfavor informe o nome da Maê',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-face-woman" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            label="Naturalidade"
            v-model="form.naturalidade"
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Porfavor informe a naturalidade do membro',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-map-marker" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            label="Nº do documento"
            v-model="form.num_bilhete"
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Porfavor informe o nº do documento do membro',
              (val) => val == 15 || 'Porfavor informe um número real',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-counter" />
            </template>
          </q-input>
          <q-input
            class="col-12"
            type="date"
            dense
            outlined
            label="Data de nascimento"
            v-model="form.data_nascimento"
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Porfavor informe a data de nascimento',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-calendar-range" />
            </template>
          </q-input>
          <q-select
            dense
            outlined
            v-model="form.status"
            :options="options"
            label="Statu do membro"
            option-value="id"
            option-label="status"
            map-options
            emit-value
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Porfavor selecione um estado',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-state-machine" />
            </template>
          </q-select>

          <q-btn
            dense
            icon="mdi-window-close"
            label="Fechar"
            color="secondary"
            v-close-popup
            @click="closeModal"
          />
          <q-btn
            type="submit"
            dense
            icon="mdi-content-save-outline"
            label="Salvar dados"
            color="primary"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
export default {
  name: "formAddEdit",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },

  setup(props, { emit }) {
    const options = ref(["Baptizado", "Não baptizado"]);
    const form = ref({
      nome: "",
      nome_pai: "",
      nome_mae: "",
      naturalidade: "",
      num_bilhete: "",
      data_nascimento: "",
      status: "",
      idade: 0,
    });
    const closeModal = () => {
      emit("closeModal");
    };

    const submit = () => {
      emit("addMembros", form.value);
    };
    return { closeModal, form, options, submit };
  },
};
</script>
