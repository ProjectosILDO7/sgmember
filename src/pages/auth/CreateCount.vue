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
          <q-form @submit.prevent="createUser" class="q-gutter-y-md">
            <q-input
              type="text"
              label="Nome"
              outlined
              name="name"
              class="col-12"
              dense
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor informe-nos seu nome',
              ]"
              v-model="form.name"
              required
            >
              <template v-slot:prepend>
                <q-icon name="mdi-account" />
              </template>
            </q-input>

            <q-input
              type="email"
              label="E-mail"
              outlined
              name="email"
              class="col-12 q-mb-sm"
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
                <q-icon name="mdi-at" />
              </template>
            </q-input>

            <q-input
              type="text"
              label="Telefone"
              outlined
              name="email"
              class="col-12 q-mb-sm"
              dense
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor informe-nos seu email',
              ]"
              v-model="form.phone"
              required
            >
              <template v-slot:prepend>
                <q-icon name="mdi-phone-classic" />
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
            >
              Entrar</q-btn
            >

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
                label="Já Tenho conta"
                class="align-center"
                dense
                color="secondary"
                size="sm"
                :to="{ name: 'login' }"
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
    const { register } = userAuth();
    const router = useRouter();
    const { notifyError, notifySuccess } = useNotification();
    const $q = useQuasar();
    const form = ref({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    const resetForm = () => {
      form.value = {
        name: "",
        email: "",
        phone: "",
        password: "",
        status: "activo",
      };
    };

    const createUser = async () => {
      try {
        $q.loading.show({ message: "Criando conta" });
        await register(form.value);
        router.push({
          name: "email-confirmation",
          query: { email: form.value.email },
        });
        notifySuccess("conta criada com sucesso");
      } catch (error) {
        console.log(error.message);
        notifyError(error.message);
      } finally {
        $q.loading.hide();
        resetForm();
      }
    };
    return {
      form,
      createUser,
      resetForm,
    };
  },
};
</script>
