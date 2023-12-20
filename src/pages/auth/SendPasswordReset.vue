<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div
          class="row col-md-4 col-lg-4 col-xs-12 col-sm-12 flex-center q-mt-lg"
        >
          <span
            class="text-body2 text-blue-grey-8 text-center col-4 text-justify"
          >
            Lamentamos por perder sua palavra chave! mas não se preocupe vamos
            resolver o seu problema. Informe-nos seu e-mail na caixa de diálogo
            abaixo e seguidamente enviarémos um link de redefinição da senha na
            caixa de correio eletronico. Obrigado!
          </span>
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

            <q-btn
              class="q-mt-md full-width"
              color="primary"
              icon="mdi-send"
              dense
              type="submit"
              label="Enviar pedido de redefinição da senha"
            />

            <div class="q-gutter-x-md q-mt-lg">
              <q-btn
                icon="mdi-lock"
                flat
                label="Criar minha conta"
                class="align-center"
                dense
                color="secondary"
                size="sm"
                :to="{ name: 'create' }"
              ></q-btn>
              <q-btn
                flat
                icon="mdi-account-plus"
                label="já Tenho uma conta"
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
    const { sendEmailResetPassword } = userAuth();
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
      };
    };

    const onSubmit = async () => {
      try {
        $q.loading.show({ message: "Porfavor aguarde..." });
        await sendEmailResetPassword(form.value);
        notifySuccess(
          "Solicitou uma nova senha, porfavor verifique sua caixa de email"
        );
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
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
