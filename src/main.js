import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/vuex.js' 

Vue.config.productionTip = false;
 
router.beforeEach((to, from, next) => {
    if(to.meta.logined) {
        if(sessionStorage.login == 1) { 
            next();
        } else {
            next({
                path: '/home/login',
            });
        }
    } else {
        next();
    }
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }, 
})
