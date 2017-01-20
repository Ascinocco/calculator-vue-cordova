import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Splash from './components/splash.vue'
import Calculator from './components/calculator.vue'

var router = new VueRouter({
    mode: 'hash',
    base: window.location.href,
    routes: [
        { path: '/', component: Splash },
        { path: '/calculator', component: Calculator }
    ]
});

var calcApp = new Vue({
    router,
}).$mount('#app');