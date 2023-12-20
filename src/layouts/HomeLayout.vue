<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar dense>
            <img src="../../public/igreja-pentecostal.png" />
          </q-avatar>
          Gestão de membros
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right" dense>
        <q-route-tab
          dense
          :to="{ name: 'login' }"
          icon="mdi-home"
          label="Home"
        />
        <q-route-tab
          dense
          :to="{ name: 'create' }"
          icon="mdi-account-plus"
          label="Criar conta"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../../public/igreja-pentecostal.png" />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
