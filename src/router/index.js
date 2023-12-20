import { route } from "quasar/wrappers";
import useSupabase from "src/boot/supabase";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  async function getUser(next) {
    const { supabase } = useSupabase();
    const localUser = supabase.auth.getSession();
    if ((await localUser).data.session == null) {
      next("/");
    } else {
      next();
    }
  }
  Router.beforeEach((to, from, next) => {
    //const { isLoggidIn } = userAuthUser();

    if (to.hash.includes("type=recovery") && to.name !== "resetPassword") {
      const accessToken = to.hash.split("&")[0];
      const token = accessToken.replace("#access_token=", "");
      next({ name: "resetPassword", query: { token } });
    }

    // if (
    //   !isLoggidIn() &&
    //   to.meta.requiresAuth &&
    //   !Object.keys(to.query).includes("fromEmail")
    // ) {
    //   return { name: "loginPage" };
    // }
    if (to.meta.requiresAuth && !Object.keys(to.query).includes("fromEmail")) {
      getUser(next);
      return;
    } else {
      next();
      return;
    }
  });

  return Router;
});
