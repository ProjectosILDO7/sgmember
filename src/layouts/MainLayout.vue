<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Gestão de Membros </q-toolbar-title>

        <div>
          <q-btn-dropdown flat color="white" :label="user.user_metadata.name">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label
                    ><q-icon name="mdi-account" /> Perfil</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label
                    ><q-icon name="mdi-cog" /> Configurações</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-close-popup @click="logoutPage">
                <q-item-section>
                  <q-item-label><q-icon name="mdi-logout" /> Sair</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import userAuthUser from "src/composible/userAuthUser";
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";

const linksList = [
  {
    title: "Home",
    caption: "Informações gerais",
    icon: "mdi-home",
    routeName: "admin",
  },
  {
    title: "Membros",
    caption: "Batizados e não baptizados",
    icon: "mdi-account-tie",
    routeName: "membros",
  },
  {
    title: "Tesouraria e finanças",
    caption: "Controlo de finanças",
    icon: "mdi-currency-usd",
    routeName: "financas",
  },
  {
    title: "Secretaria geral",
    caption: "testificação ou carta de recomendação",
    icon: "mdi-file-edit",
    routeName: "secretaria",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const { logout, user } = userAuthUser();
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const $q = useQuasar();

    const logoutPage = async () => {
      try {
        $q.dialog({
          title: "SAIR",
          message: "Você realmente deseja saír?",
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          $q.loading.show({ message: "Sair da aplicação ..." });
          await logout().finally(() => $q.loading.hide());
          router.replace({ name: "login" });
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    return {
      logout,
      logoutPage,
      user,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
