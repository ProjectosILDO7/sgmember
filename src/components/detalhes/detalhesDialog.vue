<template>
  <q-dialog :model-value="show" persistent>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">
          <q-avatar icon="mdi-account-tie" />
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

      <q-card-section>
        <p class="text-body2">
          Nome: <strong>{{ dados.nome }}</strong>
        </p>
        <p class="text-body2">
          Nome do pai: <strong>{{ dados.nome_pai }}</strong>
        </p>
        <p class="text-body2">
          Nome da maê: <strong>{{ dados.nome_mae }}</strong>
        </p>
        <p class="text-body2">
          Naturalidade: <strong>{{ dados.naturalidade }}</strong>
        </p>
        <p class="text-body2">
          Nº do Documento: <strong>{{ dados.num_bilhete }}</strong>
        </p>
        <p class="text-body2">
          Data de nascimento: <strong>{{ dados.data_nascimento }}</strong>
        </p>
        <p class="text-body2">
          Idade:
          <strong
            >{{
              new Date().getFullYear() -
              new Date(dados.data_nascimento).getFullYear()
            }}
            anos</strong
          >
        </p>
        <p class="text-body2" v-if="dados.status == 'Não baptizado'">
          Statu do Membro:
          <strong class="text-red-10">{{ dados.status }}</strong>
        </p>
        <p class="text-body2" v-else>
          Statu do Membro:
          <strong class="text-green-10">{{ dados.status }}</strong>
        </p>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
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
    const closeModal = () => {
      emit("modalClose");
    };
    return { closeModal };
  },
};
</script>
