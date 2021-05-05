

import Vue from 'vue'; 

const REGISTER = 'REGISTER'; 
const SIGN_IN = 'SIGN_IN'; 
const SIGN_OUT = 'SIGN_OUT';  

export default {
    state: {},  
    mutations: {  
        [REGISTER](state, user) {
            var b = 0;
            for(var i = 0; i < localStorage.length; i++)
                if(localStorage.key(i).indexOf('user') != -1)  
                    if(JSON.parse(localStorage.getItem(localStorage.key(i))).name == user.name) {
                        b = 1;
                        break;
                    } 

            if(b == 0) {
                localStorage.setItem('user'+localStorage.length, JSON.stringify(user));  
                sessionStorage.register = 1; 
            } else {
                sessionStorage.register = 0;
            }
        },
        [SIGN_IN](state, user) {  
            var localuser = '', f = 0;

            for(var i = 0; i < localStorage.length; i++)
                if(localStorage.key(i).indexOf('user') != -1)  
                    if(JSON.parse(localStorage.getItem(localStorage.key(i))).name == user.name) {
                        localuser = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        f = 1;
                        break;
                    } 
 
            if(f == 1 && user.psw == localuser.psw) {
                sessionStorage.login = 1; 
                sessionStorage.user = JSON.stringify(localuser);
                sessionStorage.userId = localStorage.key(i);
            } else {
                sessionStorage.login = 0;
            }  
        },
        [SIGN_OUT](state) {
            sessionStorage.register = 0;
            sessionStorage.login = 0;
        }
    },
    actions: {
        register({commit}, user) { 
            commit(REGISTER, user);
        },
        signIn({commit}, user) {
            commit(SIGN_IN, user);  
        },
        signOut({commit}) {
            commit(SIGN_OUT);
        }
    }
}
 