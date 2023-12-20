const routes = [
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "admin",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/member-page",
        name: "membros",
        component: () => import("pages/auth/admin/membros/MembrosPage.vue"),
      },
      {
        path: "/financy-page",
        name: "financas",
        component: () => import("pages/auth/admin/financas/FinancasPage.vue"),
      },
      {
        path: "/secretaria-page",
        name: "secretaria",
        component: () =>
          import("pages/auth/admin/secretaria/SecretariaPage.vue"),
      },
    ],
    meta: { requiresAuth: true },
  },

  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("pages/auth/LoginPage.vue"),
      },
      {
        path: "/create-count",
        name: "create",
        component: () => import("pages/auth/CreateCount.vue"),
      },
      {
        path: "/reset-password",
        name: "resetPassword",
        component: () => import("pages/auth/ResetPassord.vue"),
      },
      {
        path: "/send-reset-password",
        name: "sendResetPassword",
        component: () => import("pages/auth/SendPasswordReset.vue"),
      },
      {
        path: "/email-confirmation",
        name: "email-confirmation",
        component: () => import("pages/auth/emailConfirmation.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
