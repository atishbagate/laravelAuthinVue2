/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require("vue").default;
import VueRouter from "vue-router";
import axios from "axios";
Vue.use(VueRouter);
Vue.use(axios);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Dashborad from "./components/Dashborad";
import ExampleComponent from "./components/ExampleComponent";
import Login from "./components/Login";
import Register from "./components/Register";
const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/About", name: "About", component: About },
    { path: "/Login", name: "Login", component: Login },
    { path: "/Register", name: "Register", component: Register },

    { path: "/Contact", name: "Contact", component: Contact },
    { path: "/Dashborad", name: "Dashborad", component: Dashborad },
    {
        path: "/ExampleComponent",
        name: "ExampleComponent",
        component: ExampleComponent,
    },
];
const router = new VueRouter({
    routes,
    mode: "history",
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router,
});
