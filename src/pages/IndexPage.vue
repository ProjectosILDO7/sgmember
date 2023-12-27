<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <span class="text-body1 text-h6">Painel de control</span>
        <q-separator />
        <div class="row justify-center q-mt-md q-gutter-sm">
          <div class="col-md-4">
            <cards-dashboard
              tabela="membros"
              label="Membros"
              icon="mdi-account-tie"
            />
          </div>
          <div class="col-md-4">
            <cards-dashboard
              tabela="ofertorio"
              label="Depositos de ofertório"
              icon="mdi-chess-bishop"
              color="green-8"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    CardsDashboard: defineAsyncComponent(() =>
      import("src/components/cardsDashboard/CardsDashboard.vue")
    ),
  },
  setup(props) {
    return {};
  },
});
</script>
