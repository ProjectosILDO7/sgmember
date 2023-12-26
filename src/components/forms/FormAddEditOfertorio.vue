<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <span class="row justify-center text-body2 text-red-10">
          <q-btn
            v-if="isUpdate"
            flat
            icon="mdi-cash-register"
            label=" Alterar dados do ofertório"
          />
          <q-btn
            v-else
            flat
            icon="mdi-cash-register"
            label=" Registrar novo ofertório"
          />
        </span>
        <q-form
          class="row justify-center q-gutter-x-sm q-gutter-y-sm q-mt-lg"
          @submit.prevent="submit"
        >
          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-select
              dense
              outlined
              v-model="form.membro_id"
              :options="listarMembros"
              label="Selecionar o membro"
              option-value="id"
              option-label="nome"
              map-options
              emit-value
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Porfavor selecione o membro',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-account-tie" />
              </template>
            </q-select>
          </div>

          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-input
              dense
              type="numeric"
              outlined
              label="Valor do dizimo"
              v-model="form.dizimo"
              suffix="Kz"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-credit-card-outline" />
              </template>
            </q-input>
          </div>

          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-input
              dense
              type="numeric"
              outlined
              label="Valor da oferta"
              v-model="form.oferta"
              suffix="Kz"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-credit-card-outline" />
              </template>
            </q-input>
          </div>
          <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <q-input
              dense
              type="date"
              outlined
              label="Data de depósito"
              v-model="form.data"
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Porfavor informe a data do depósito',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-credit-card-outline" />
              </template>
            </q-input>
          </div>
          <div class="col-8">
            <q-input
              dense
              type="text"
              outlined
              label="Outras contribuições"
              v-model="form.outras_contribuicoes"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-chess-bishop" />
              </template>
            </q-input>
          </div>

          <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12">
            <q-btn
              type="submit"
              dense
              class="full-width"
              icon="mdi-content-save-outline"
              label="Salvar ofertório"
              color="primary"
            />

            <q-btn
              flat
              dense
              class="full-width q-mt-lg"
              icon="mdi-format-list-bulleted"
              label="Ver lista de ofertório"
              color="blue-grey-10"
              :to="{ name: 'financas' }"
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
    const tabela = "ofertorio";
    const listarMembros = ref([]);
    const { notifyError, notifySuccess } = usenotification();
    const router = useRouter();
    const route = useRoute();
    const $q = useQuasar();
    const { getById, post, update, list } = userApi();
    const form = ref({
      membro_id: "",
      dizimo: 0,
      oferta: 0,
      data: "",
      outras_contribuicoes: "",
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

      listMembros();
    });

    const listMembros = async () => {
      try {
        $q.loading.show({ message: "Carregar membros" });
        listarMembros.value = await list("membros");
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    const submit = async () => {
      try {
        if (isUpdate.value) {
          $q.loading.show({ message: "Alterando ofertorio..." });
          await update(tabela, form.value);
          notifySuccess("Dados de ofertório actualizado com sucesso...");
          router.push({ name: "financas" });
        } else {
          $q.loading.show({ message: "Cadastrando..." });
          await post(tabela, form.value);
          notifySuccess("Ofertório registado com sucesso");
          router.push({ name: "financas" });
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    return { form, submit, isUpdate, listarMembros };
  },
};
</script>
