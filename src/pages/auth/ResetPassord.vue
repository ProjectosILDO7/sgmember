<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-form class="row justify-center" @submit.prevent="updatePassword">
          <p class="col-12 text-body2 text-center q-mt-lg text-blue-grey-8">
            Redefinição de senha
          </p>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
            <q-input
              dense
              v-model="password"
              label="Informe nova senha"
              outlined=""
              class="col-12"
              type="password"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length >= 6) ||
                  'Porfavor digite a sua nova senha',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-lock" />
              </template>
            </q-input>

            <q-btn
              type="submit"
              label="Enviar nova senha"
              class="full-width q-mt-lg"
              glossy
              color="primary"
              icon="lock"
            />

            <q-btn
              :to="{ name: 'login' }"
              flat
              label="Esqueci minha senha"
              class="full-width q-mt-md text-body2 text-blue-grey-8"
            />
            <q-btn
              :to="{ name: 'create' }"
              flat
              label="Criar uma conta"
              class="full-width q-mt-md text-body2 text-blue-grey-8"
            />
          </div>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import userAuth from "src/composible/userAuthUser";
import { ref } from "vue";
import { Loading, useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";
import usenotification from "src/composible/useNotify";
export default {
  name: "form-login",
  setup() {
    const { resetPassword } = userAuth();
    const { notifyError, notifySuccess } = usenotification();
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();
    const token = route.query.token;
    const password = ref("");

    const updatePassword = async () => {
      try {
        Loading.show({ message: "Porfavor aguarde..." });
        await resetPassword(token, password.value);
        router.push({ name: "login" });
        notifySuccess("Senha alterada com sucesso");
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };
    return {
      password,
      updatePassword,
    };
  },
};
</script>
<style scoped></style>
