import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    panel_active:'',
    login_state: false,
    type_user: 'root',
    stand_by: false,
    table_panel: false,


  
  },
  mutations: {
    login(state){
      state.login_state = true,
      console.log('Login'),
      state.stand_by = true
    },

  },
  actions: {
  },
  modules: {
  }
})
