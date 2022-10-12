import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Stock from "@/views/Stock.vue";
import StockCreate from "@/views/StockCreate.vue";
import StockEdit from "@/views/StockEdit.vue";
import Report from "@/views/Report.vue";
import About from "@/views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock,
  },
  {
    path: "/stockCreate",
    name: "StockCreate",
    component: StockCreate,
  },
  {
    path: "/stockEdit",
    name: "StockEdit",
    component: StockEdit,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "*",
    redirect: "/login",
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
