<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <span class="row justify-center text-body2 text-blue-10">
          <q-btn
            v-if="isUpdate"
            flat
            icon="mdi-file-edit"
            label=" Alterar dados do membro"
          />
          <q-btn
            v-else
            flat
            icon="mdi-account-tie"
            label=" Registrar novos membros"
          />
        </span>
        <q-form
          class="row justify-center q-gutter-x-sm q-gutter-y-sm q-mt-lg"
          @submit.prevent="submit"
        >
          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
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
          </div>

          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
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
          </div>

          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
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
          </div>

          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
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
          </div>

          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-input
              dense
              outlined
              label="Nº do documento"
              v-model="form.num_bilhete"
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Porfavor informe o nº do documento do membro',
                (val) => val.length == 14 || 'Porfavor informe um número real',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-counter" />
              </template>
            </q-input>
          </div>

          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-input
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
          </div>

          <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12">
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
                  (val !== null && val !== '') ||
                  'Porfavor selecione um estado',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-state-machine" />
              </template>
            </q-select>
          </div>

          <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12">
            <q-btn
              type="submit"
              dense
              class="full-width"
              icon="mdi-content-save-outline"
              label="Salvar dados"
              color="primary"
            />

            <q-btn
              flat
              dense
              class="full-width q-mt-lg"
              icon="mdi-format-list-bulleted"
              label="Ver lista de membros"
              color="blue-grey-10"
              :to="{ name: 'membros' }"
            />
          </div>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import userApi from "src/composible/userApi";
import usenotification from "src/composible/useNotify";
export default {
  name: "formAddEdit",
  props: {},

  setup(props, { emit }) {
    const tabela = "membros";
    const { notifyError, notifySuccess } = usenotification();
    const router = useRouter();
    const route = useRoute();
    const $q = useQuasar();
    const options = ref(["Baptizado", "Não baptizado"]);
    const { getById, post, update } = userApi();
    const form = ref({
      nome: "",
      nome_pai: "",
      nome_mae: "",
      naturalidade: "",
      num_bilhete: "",
      data_nascimento: "",
      status: "",
    });

    const isUpdate = computed(() => {
      return route.params.id;
    });

    onMounted(async () => {
      try {
        $q.loading.show({ message: "Carregando informações" });
        if (isUpdate.value) {
          form.value = await getById(tabela, isUpdate.value);
        }
      } catch (error) {
      } finally {
        $q.loading.hide();
      }
    });

    const submit = async () => {
      try {
        if (isUpdate.value) {
          $q.loading.show({ message: "Alterando informações..." });
          await update(tabela, form.value);
          notifySuccess("Dados do membro actualizado com sucesso...");
          router.push({ name: "membros" });
        } else {
          $q.loading.show({ message: "Cadastrando..." });
          await post(tabela, form.value);
          notifySuccess("Membro inserido com sucesso");
          router.push({ name: "membros" });
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    return { form, options, submit, isUpdate };
  },
};
</script>
