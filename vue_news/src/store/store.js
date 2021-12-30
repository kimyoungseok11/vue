import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations.js'
import action from './actions.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        asks:[],
        user:{},
        item:{},
    },
    getters:{
        fetchedAsk(state){
            return state.asks;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    mutations:mutations,
    actions:action,
});

export default store;