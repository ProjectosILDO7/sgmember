<template>
  <q-dialog :model-value="show" persistent>
    <q-card>
      <q-form>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            <q-btn
              flat
              label="Tarefa do membro"
              icon="mdi-account-tie"
              color="blue-10"
            />
          </div>
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
            @click="closeModal"
          />
        </q-card-section>

        <q-card-section class="q-gutter-md">
          <q-input
            dense
            outlined
            type="text"
            v-model="form.name"
            label="Nome do membro"
            disable
          >
            <template v-slot:prepend>
              <q-icon name="mdi-account-tie" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            type="email"
            v-model="form.email"
            label="E-mail do membro"
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Porfavor informe o e-mail',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-at" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            type="text"
            v-model="form.phone"
            label="Telemóvel"
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Porfavor informe o nº de telemóvel',
              (val) =>
                (val > 0 && val.length == 9) ||
                'O número de telemóvel deve ter no mínimo 9 caracteres',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-phone-classic" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            type="password"
            v-model="form.password"
            label="Atribuir uma senha"
            hint="Apenas números"
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Porfavor digite sua senha',
              (val) =>
                (val > 0 && val.length >= 6) ||
                'A sua senha deve ter maior ou igual a 6 caracteres',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
            </template>
          </q-input>

          <q-select
            dense
            outlined
            v-model="form.funcao"
            :options="options"
            label="Selecione uma função"
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Porfavor selecione uma função',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-cog" />
            </template>
          </q-select>
        </q-card-section>

        <q-card-section>
          <q-btn
            type="submit"
            class="full-width q-mt-md"
            icon="mdi-content-save-cog"
            color="green-10"
            label="Salvar serviço"
            @click="SalvarService"
          />
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, computed, onMounted, watch } from "vue";
import { useQuasar } from "quasar";
import userAuthUser from "src/composible/userAuthUser";
import usenotification from "src/composible/useNotify";
export default {
  props: {
    dados: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const $q = useQuasar();
    const valorNome = ref(props.dados.nome);
    const { notifyError, notifySuccess } = usenotification();
    const { registerMemberForAdmin } = userAuthUser();
    const options = ref(["Secretário", "Tesoureiro"]);
    const form = ref({
      name: "",
      email: "",
      phone: "",
      password: "",
      funcao: "",
    });
    const closeModal = () => {
      emit("modalClose");
    };

    watch(() => {
      valorNome.value = props.dados.nome;
      form.value.name = valorNome.value;
    });

    const SalvarService = async () => {
      try {
        $q.loading.show({ message: "Salvando novo usuário..." });
        await registerMemberForAdmin(form.value);
        router.push({
          name: "email-confirmationAdmin",
          query: { email: form.value.email },
        });
        notifySuccess(
          "Novo usuário adicionado com sucesso, ( O utente precisa verificar o e-mail enviado na sua caixa de entrada)"
        );
      } catch (error) {
        notifyError(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    return { closeModal, options, form, SalvarService, valorNome };
  },
};
</script>
