import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        num: 100
    },
    mutations: {
        increment(state, pload) {
            state.num += pload.n;
        },
        mincrement(state, pload) {
            state.num -= pload.n;
        }
    },
})
export default store