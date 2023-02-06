require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";//importazione vue router
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PagePost from './pages/PagePost';
import PagePosts from './pages/PagePosts';


Vue.use(VueRouter); //diciamo a vue di aggiungere il plugin vue router

const routes = [  // le nostre rotte specifiche
    {
        path:'/',
        component: PageHome,
    },
    {
        path:'/about',
        component: PageAbout,
    },
    {
        path:'/post/parametro', // TODO: dare il parametro
        component: PagePost,
    },
    {
        path:'/posts',
        component: PagePosts,
    },
    //aggiungere la 404
]

//personalizzazione del vue router
const router = new VueRouter({
    routes
});

new Vue({
    el: '#root',
    render: h => h(App),
    router // il nome puo essere cambiato nella forma  router:NomeRouter ma bisogna cambiare anche il nome sopra
});
