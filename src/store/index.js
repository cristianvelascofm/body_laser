import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    panel_active: '',
    login_state: false,
    type_user: 'root',
    stand_by: false,
    table_panel: false,

    // Variables Activación de Paneles
    datePn: false,
    clientPn: false,
    clinicHistoryPn: false,
    employeePn: false,
    productPn: false,
    suppliesPn: false,
    machinePn: false,
    clinicPn: false,
    



  },
  mutations: {
    login(state) {
      state.login_state = true,
        console.log('Login'),
        state.stand_by = true
    },
    formActive(state, active) {
      state.panel_active = active
      if (active != 'Close') {
        if (active == "Clientes") {
          state.clientPn = true,
          console.log('Client', state.clientPn)
          // state.new_contract = true
          // state.new_person = false
        } else {
          state.new_person = true
          state.new_contract = false
          var title = ""
          for (var i = 0; i < active.length - 1; i++) {
            title = title + active.charAt(i)
          }
          state.title_form_person = title

        }
        state.table_panel = true
        state.stand_by = false
      } else {
        state.stand_by = true
        state.table_panel = false
      }
    },

  },
  actions: {
  },
  modules: {
  }
})
