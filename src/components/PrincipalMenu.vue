<template>
  <v-container>
    <v-layout
      class="pa-0 ba-0 ma-0"
      fill-height
      style="height: 450px"
      justify-center
    >
      <v-flex xs12 class="pa-0 ma-0 ba-0 text-center #023565--text" xs8>
        <v-card
          elevation="17"
          color="rgba(250, 217, 227, .3)"
          class="text-center pb-10 ma-0 ba-0 justify-center"
          height="520px"
        >
          <v-card-title class="text-h6 rounded-xl">
            <v-img
              background-color="red"
              class="shrink mx-auto"
              flex
              src="../assets/img/logotipo bodylaser_Mesa de trabajo 1.png"
              min-height="130"
              height="130"
              min-width="180"
              width="200"
              text-xs-center
            ></v-img>
          </v-card-title>
          <v-card-subtitle class=""
            ><h5 class="grey--text">Seleccione una Opción.</h5></v-card-subtitle
          >
          <v-row
            v-if="principal_menu_active"
            v-for="element in menu_bar_option"
            :key="element.id"
            class="justify-center pb-20 mt-13"
          >
            <v-col class="col-6">
              <v-btn
                color="#447987"
                block
                small
                dark
                elevation="10"
                @click="
                  change(element.text);
                "
                >{{ element.text }}
              </v-btn>
            </v-col>
          </v-row>

          <v-row
            v-if="client_menu_active"
            v-for="element in menu_bar_option_client"
            :key="element.id"
            class="justify-center  mt-5"
          >
            <v-col class="col-6">
              <v-btn
                color="#447987"
                block
                small
                dark
                elevation="10"
                @click="formActive(element.text)"
                >{{ element.text }}
              </v-btn>
            </v-col>
            
          </v-row>
           <v-row
            v-if="clinic_menu_active"
            v-for="element in menu_bar_option_clinic"
            :key="element.id"
            class="justify-center  mt-3"
          >
          <v-expand-x-transition>
            <v-col class="col-6">
              <v-btn
                color="#447987"
                block
                small
                dark
                elevation="10"
                @click="change(element.text)"
                >{{ element.text }}
              </v-btn>
            </v-col>
            </v-expand-x-transition>
          </v-row>
          <v-layout class="mt-7">
            <v-flex>
              <v-btn small color="#ff767b" rounded elevation="10" v-if="back_button_active" @click="returnPrincipalMenu()" >
                <v-icon color="white"> mdi-keyboard-backspace </v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <ContractSelector v-if="new_contract"/> -->
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "PrincipalMenu",

  data() {
    return {
      // Variables para despliegue de botones segun el Menu (Cliente - Clínica)
      principal_menu_active: true,
      client_menu_active: false,
      clinic_menu_active: false,

      back_button_active : false,

      select: null,

      menu_bar_option_client: [
        {
          id: "cita",
          text: "Citas",
          hidden: false,
        },
        {
          id: "historia_clinica",
          text: "Historias",
          hidden: false,
        },
        {
          id: "client",
          text: "Clientes",
          hidden: false,
        }
        ],

        menu_bar_option_clinic:[
          {
            id: "empleado",
            text: "Empleados",
            hidden: false,
          },
          {
            id: "producto",
            text: "Productos",
            hidden: false,
          },
          {
            id: "insumo",
            text: "Insumos",
            hidden: false,
          },
          {
            id: "maquina",
            text: "Máquinas",
            hidden: false

          },
          {
            id: "gestion",
            text: "Gestión",
            hidden: false
          }
        ],
      menu_bar_option: [
        {
          id: "cliente",
          text: "Clientes",
          hidden: false,
        },
        {
          id: "clinica",
          text: "Clínica",
          hidden: false,
        },
      ],

    };
  },
  methods: {
    ...mapMutations(["formActive"]),

    change(element){
      if (element == "Clientes"){
      this.principal_menu_active= false,
      this.client_menu_active= true,
      this.clinic_menu_active = false,
      this.back_button_active = true
      } else if(element == "Clínica"){
        this.principal_menu_active= false,
        this.clinic_menu_active= true,
        this.client_menu_active = false,
        this.back_button_active = true
      }
    },

    returnPrincipalMenu(){
      this.principal_menu_active= true,
      this.client_menu_active= false,
      this.back_button_active= false,
      this.clinic_menu_active = false

    }
  },
  mounted() {},
  computed: {
    ...mapState(["panel_active"]),
  },
};
</script>


<style>
</style>