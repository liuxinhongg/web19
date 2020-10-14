import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        num: 100,
        msg: "卡是个好地方即可",
        //检测token
        Authorization: localStorage.getItem("Authorization") ? localStorage.getItem("Authorization") : ''
    },
    getters: {
        count: (state) => {
            return state.num > 120 ? 120 : state.num
        }
    },
    mutations: {
        //修改token,并且将token存入localStorage
        changeLogin(state, user) {
            // user={Authorization:res.data.token}
            state.Authorization = user.Authorization
        },
        increment(state, pload) {
            // 异步状态发生了混乱，
            // Mutation 必须是同步函数，解决办法actions
            // setTimeout(() => {
            state.num += pload.n;
            // }, 1000)
        },
        mincrement(state, pload) {
            state.num -= pload.n;
        }
    },
    actions: {
        addAction(context) {
            console.log(context);
            setTimeout(() => {
                context.commit("increment", { n: 5 })
            }, 1000)
            context.dispatch("textAction")
                // this.textAction()
        },
        textAction() {
            console.log("我是谁？")
        }
    }
})
export default store