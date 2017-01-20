import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './components/home.vue'
import Calculator from './components/calculator.vue'

var router = new VueRouter({
    mode: 'hash',
    base: window.location.href,
    routes: [
        { path: '/', component: Home },
        { path: '/calculator', component: Calculator }
    ]
});

var app = new Vue({
    router,
}).$mount('#app');