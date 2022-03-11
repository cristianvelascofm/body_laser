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
    employedPn: false,
    productPn: false,
    suppliesPn: false,
    machinePn: false,
    clinicPn: false,
    new_form: false,
    historyPn: false,
    new_history: false,

    new_button: false,
    new_client: false,
    new_date: false,
    new_employed: false,
    new_product: false,
    formulario_nuevo: false,
    title_form_person: '',



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
          state.new_date =false
          state.productPn = false
          state.new_product = false
          state.title_form_person= 'o Cliente'
          state.new_client = true.valueOf,
          console.log('Client', state.clientPn)

        } else if(active == "Citas") {
          console.log('Citas')
          var title = ""
          state.datePn = true
          state.clientPn = false
          state.stand_by = false
          state.productPn = false
          state.new_product = false
          state.new_client = false
          state.new_date = true
          state.title_form_person= 'a Cita'
          // for (var i = 0; i < active.length - 1; i++) {
          //   title = title + active.charAt(i)
          // }
          // state.title_form_person = title

        } else if (active == "Historias"){
          console.log('Historias')
          state.datePn = false
          state.clientPn = false
          state.stand_by = false
          state.new_client = false
          state.new_date = false
          state.productPn = false
          state.new_product = false
          state.historyPn = true
          state.new_history = true
          state.title_form_person = 'a Historia Clínica'
        } else if (active == "Empleados"){
          state.datePn = false
          state.clientPn = false
          state.stand_by = false
          state.new_client = false
          state.new_date = false
          state.historyPn = false
          state.new_history = false
          state.productPn = false
          state.new_product = false
          state.employedPn = true
          state.new_employed = true
          state.title_form_person = 'o Empleado'
          console.log('Empleado')
        } else if (active == "Productos"){
          state.datePn = false
          state.clientPn = false
          state.stand_by = false
          state.new_client = false
          state.new_date = false
          state.historyPn = false
          state.new_history = false
          state.employedPn = false
          state.new_employed = false
          state.productPn = true
          state.new_product = true
          state.title_form_person = 'o Producto'
        }
        state.table_panel = true
        state.stand_by = false
      } else {
        state.stand_by = true
        
        state.clientPn = false
        state.datePn = false
        state.historyPn = false
        state.employedPn = false
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
