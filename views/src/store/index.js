import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

/**vuex持续存储插件 */
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cancelTokenArr: [] // 取消请求token数组
  },
  mutations: {
    pushToken(state, payload) {
      state.cancelTokenArr.push(payload.cancelToken)
    },
    clearToken({ cancelTokenArr }) {
      cancelTokenArr.forEach(item => {
        item('路由跳转取消请求')
      })
      cancelTokenArr = []
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
