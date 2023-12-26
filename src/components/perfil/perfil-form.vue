<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="row justify-center q-mt-lg">
          <div class="col-12 text-center q-mb-lg">
            <span class="text-body1 text-h4 text-blue-grey-10">Meu Perfil</span>
          </div>
          <div class="col-6">
            <q-form @submit.prevent="submit">
              <q-input
                dense
                outlined
                type="text"
                label="Nome próprio"
                v-model="form.name"
                class="q-mb-md"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Porfavor informe seu nome',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account-tie"></q-icon>
                </template>
              </q-input>
              <q-input
                dense
                outlined
                type="text"
                label="E-mail"
                v-model="form.email"
                disable
                class="q-mb-md"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-at"></q-icon>
                </template>
              </q-input>

              <q-input
                dense
                outlined
                type="text"
                label="Telemóvel"
                v-model="form.phone"
                class="q-mb-md"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Porfavor informe seu nº de telemóvel',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-phone-classic"></q-icon>
                </template>
              </q-input>
              <q-input
                dense
                outlined
                type="password"
                label="Opcional - Alterar senha"
                v-model="form.password"
                class="q-mb-md"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-lock"></q-icon>
                </template>
              </q-input>

              <q-btn
                type="submit"
                outline
                icon="mdi-update"
                class="full-width"
                label="Actualizar"
                color="green-6"
              />
            </q-form>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import userAuthUser from "src/composible/userAuthUser";
import usenotification from "src/composible/useNotify";
export default {
  name: "page-pefil",
  setup() {
    const { updateUsuario, user } = userAuthUser();
    const { notifyError, notifySuccess } = usenotification();
    const $q = useQuasar();

    const form = ref({
      name: "",
      phone: "",
      password: "",
    });

    onMounted(() => {
      carregarPerfil();
    });

    const carregarPerfil = () => {
      try {
        form.value.email = user.value.email;
        form.value.name = user.value.user_metadata.name;
        form.value.phone = user.value.user_metadata.phone;
      } catch (error) {
      } finally {
      }
    };
    const submit = async () => {
      try {
        $q.loading.show({ message: "Actualizando informações" });
        await updateUsuario(
          { ...form.value.email, ...form.value.password },
          form.value
        );
        notifySuccess("Dados actualizado com sucesso");
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
        carregarPerfil();
      }
    };
    return { form, carregarPerfil, submit };
  },
};
</script>
