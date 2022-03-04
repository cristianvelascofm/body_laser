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
    new_form: false,
    

    new_button: false,
    new_client: false,
    formulario_nuevo: false,



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
          state.new_form = true,
          state.stand_by = false,
          state.new_client = true.valueOf,
          console.log('Client', state.clientPn)

        } else if(active == "Clínica") {
          console.log('Clinic')
          var title = ""
          // for (var i = 0; i < active.length - 1; i++) {
          //   title = title + active.charAt(i)
          // }
          // state.title_form_person = title

        }
        state.table_panel = true
        state.stand_by = false
      } else {
        state.stand_by = true
        
        state.clientPn = false
      }
    },
    closeDialogForm(state){
      state.formulario_nuevo = false
    },
    accountMenu(state,action){
      if(action == 'Cerrar Sesión'){
        state.login_state = false
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
