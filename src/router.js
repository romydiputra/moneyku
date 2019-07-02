import Vue from "vue";
import Router from "vue-router";
// import Login from "./views/Login.vue";
// import Navbar from "./layouts/Navbar.vue";
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Register.vue")
    },
    {
      path: "/forgot",
      name: "forgot",
      component: () =>
        import(/* webpackChunkName: "forgot" */ "./views/Forgot.vue")
    },
    {
      path: "/Homepage",
      name: "homepage",
      component: () =>
        import(/* webpackChunkName: "forgot" */ "./views/Homepage.vue")
    },
    {
      path: "/Add",
      name: "add",
      component: () => import("./views/navbottom/Add.vue")
    },
    {
      path: "/Statis_income",
      name: "statis_income",
      component: () => import("./views/navbottom/Statis_income.vue")
    },
    {
      path: "/Statis_expense",
      name: "statis_expense",
      component: () => import("./views/navbottom/Statis_expense.vue")
    }
  ]
});
