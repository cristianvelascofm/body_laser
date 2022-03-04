<template>
  <v-row justify="end" class="pr-10">
    <v-dialog
      overlay-color="#023565"
      v-model="formulario_nuevo"
      persistent
      max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          elevation="5"
          fab
          dark
          small
          v-bind="attrs"
          v-on="on"
          @click="$store.state.formulario_nuevo = true"
          ><v-icon dark> mdi-plus-circle-outline </v-icon></v-btn
        >
      </template>
        <!-- <Contract class="ma-0 ba-0 pa-0" v-if="new_contract"/> -->
        <Person class="ma-0 ba-0 pa-0" v-if="new_client"/>

    </v-dialog>
  </v-row>
</template>


<script>
import { mapState, mapMutations } from "vuex";
// import Contract from '../components/Contract'
import  Person  from "../components/PersonNewForm.vue";
export default {
  name: "NewFormButton",
  components:{
    // Contract,
    Person
  },
  data() {
    return {
      // Acciones del Boton del Dialgo
      dialog: false,
      title_form: "Contrato",
    };
  },
  methods: {
    
  },
  computed: {
    ...mapState(["formulario_nuevo","new_person","new_contract","new_client"]),
  },
};
</script>

<style>
</style>