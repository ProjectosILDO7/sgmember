<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div
          class="row col-md-4 col-lg-4 col-xs-12 col-sm-12 flex-center q-mt-lg"
        >
          <span class="col-12 text-center q-pb-md">
            <img
              src="../../../public/igreja-pentecostal.png"
              style="max-width: 80px"
              rounded
            />
          </span>
          <q-form @submit.prevent="onSubmit" class="q-gutter-y-md">
            <q-input
              type="email"
              label="E-mail"
              outlined
              name="email"
              class="col-12"
              dense
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor informe-nos seu email',
              ]"
              v-model="form.email"
              required
            >
              <template v-slot:prepend>
                <q-icon name="mdi-account" />
              </template>
            </q-input>
            <q-input
              type="password"
              label="Senha"
              outlined
              name="password"
              class="col-12 q-mt-sm"
              dense
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Porfavor digite sua senha',
                (val) =>
                  (val > 0 && val >= 6) ||
                  'A sua senha deve ter maior ou igual a 6 caracteres',
              ]"
              v-model="form.password"
              required
            >
              <template v-slot:prepend>
                <q-icon name="mdi-lock" />
              </template>
            </q-input>

            <q-btn
              class="q-mt-md full-width"
              color="primary"
              icon="mdi-login"
              dense
              type="submit"
              label="Entrar"
            />

            <div class="q-gutter-x-md q-mt-lg">
              <q-btn
                icon="mdi-lock"
                flat
                label="Esqueci minha senha"
                class="align-center"
                dense
                color="secondary"
                size="sm"
                :to="{ name: 'sendResetPassword' }"
              ></q-btn>
              <q-btn
                flat
                icon="mdi-account-plus"
                label="Não Tenho conta"
                class="align-center"
                dense
                color="secondary"
                size="sm"
                :to="{ name: 'create' }"
              ></q-btn>
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import userAuth from "src/composible/userAuthUser";
import useNotification from "src/composible/useNotify";
export default {
  setup() {
    const { login } = userAuth();
    const router = useRouter();
    const { notifyError, notifySuccess } = useNotification();
    const $q = useQuasar();
    const form = ref({
      email: "",
      password: "",
    });

    const resetForm = () => {
      form.value = {
        email: "",
        password: "",
      };
    };

    const onSubmit = async () => {
      try {
        $q.loading.show({ message: "Porfavor aguarde..." });
        await login(form.value);
        router.push({ name: "admin" });
        notifySuccess("Autorizado com sucesso");
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
        resetForm();
      }
    };
    return {
      form,
      onSubmit,
      resetForm,
    };
  },
};
</script>
