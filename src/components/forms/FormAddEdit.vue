<template>
  <q-dialog :model-value="show" persistent>
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section class="row items-center">
        <q-avatar icon="mdi-account-tie" color="primary" text-color="white" />
        <span class="q-ml-sm">Registros de membros.</span>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-x-sm q-gutter-y-sm" @submit.prevent="submit">
          <q-input dense outlined label="Nome completo" v-model="form.nome">
            <template v-slot:prepend>
              <q-icon name="mdi-account-tie" />
            </template>
          </q-input>
          <q-input dense outlined label="Nome do Pai" v-model="form.nome_pai">
            <template v-slot:prepend>
              <q-icon name="mdi-face-man" />
            </template>
          </q-input>
          <q-input dense outlined label="Nome da maê" v-model="form.nome_mae">
            <template v-slot:prepend>
              <q-icon name="mdi-face-woman" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            label="Naturalidade"
            v-model="form.naturalidade"
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
          >
            <template v-slot:prepend>
              <q-icon name="mdi-state-machine" />
            </template>
          </q-select>

          <q-btn
            dense
            icon="mdi-window-close"
            label="Cancelar"
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
            v-close-popup
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
