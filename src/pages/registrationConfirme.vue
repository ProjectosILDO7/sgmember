<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
          <q-card class="my-card bg-secondary text-white">
            <q-card-section class="text-center">
              <div class="text-h6">O brigado por se registar</div>
              <div class="text-subtitle2">Cadastro com sucesso</div>
            </q-card-section>

            <q-card-section class="text-center">
              Para termos a certeza de que és uma pessoa ou entidade real
              enviamos um link de confirmação de cadastro no seu e-mail:
              <strong>{{ $route.query.email }}, </strong> Para terminares com o
              registo e comessares a usar a aplicação
            </q-card-section>

            <q-separator dark />

            <q-card-actions class="flex flex-center">
              <q-btn flat :to="{ name: 'login' }">ir para login</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "RegistrationConfirmation",
  components: {},
};
</script>
