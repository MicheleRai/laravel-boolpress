require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";//importazione vue router
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PagePost from './pages/PagePost';
import PagePosts from './pages/PagePosts';
import Page404 from "./pages/Page404";


Vue.use(VueRouter); //diciamo a vue di aggiungere il plugin vue router

const routes = [  // le nostre rotte specifiche
    {
        path:'/',
        name: 'home',
        component: PageHome,
    },
    {
        path:'/about',
        name: 'about',
        component: PageAbout,
    },
    {
        path:'/posts/:slug', // TODO: dare il parametro
        name: 'postsShow',
        component: PagePost,
        props: true,
    },
    {
        path:'/posts',
        name: 'postsIndex',
        component: PagePosts,
    },
    {
        path: '*',
        name: 'page404',
        component: Page404,
    },
]

//personalizzazione del vue router
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#root',
    render: h => h(App),
    router // il nome puo essere cambiato nella forma  router:NomeRouter ma bisogna cambiare anche il nome sopra
});
