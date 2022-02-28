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
        >
          <v-card-title class="text-h6 rounded-xl">
            <v-img
            background-color='red'
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
            ><h5 class="grey--text">
              Seleccione la Operación a Realizar.
            </h5></v-card-subtitle
          >
          <v-row
            v-for="element in menu_bar_option"
            :key="element.id"
            class="justify-center"
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
      select: null,
      menu_bar_option: [
        {
          id: "cita",
          text: "Citas",
          hidden: false,
          opt: [
            {
              id: "nuevo_contrato",
              text: "Nuevo Contrato",
              hidden: false,
            },
            {
              id: "lista_contrato",
              text: "Lista de Contratos",
              hidden: false,
            },
            {
              id: "buscar_contrato",
              text: "Buscar Contrato",
              hidden: false,
            },
            {
              id: "eliminar_contrato",
              text: "Eliminar Contrato",
              hidden: false,
            },
          ],
        },
        {
          id: "historia_clinica",
          text: "Historias Clínicas",
          hidden: false,
          opt: [
            {
              id: "nuevo_contratante",
              text: "Nuevo Contratante",
              hidden: false,
            },
            {
              id: "lista_contratante",
              text: "Lista de Contratantes",
              hidden: false,
            },
            {
              id: "buscar_contratante",
              text: "Buscar Contratante",
              hidden: false,
            },
            {
              id: "eliminar_contratante",
              text: "Eliminar Contratante",
              hidden: false,
            },
          ],
        },
        {
          id: "cliente",
          text: "Clientes",
          hidden: false,
          opt: [
            {
              id: "nuevo_contratista",
              text: "Nuevo Contratista",
              hidden: false,
            },
            {
              id: "lista_contratista",
              text: "Lista de Contratistas",
              hidden: false,
            },
            {
              id: "buscar_contratista",
              text: "Buscar Contratista",
              hidden: false,
            },
            {
              id: "eliminar_contratista",
              text: "Eliminar Contratista",
              hidden: false,
            },
          ],
        },
        {
          id: "empleado",
          text: "Empleados",
          hidden: false,
          opt: [
            {
              id: "nuevo_abogado",
              text: "Nuevo Abogado",
              hidden: false,
            },
            {
              id: "lista_abogado",
              text: "Lista de Abogados",
              hidden: false,
            },
            {
              id: "buscar_abogado",
              text: "Buscar Abogado",
              hidden: false,
            },
            {
              id: "eliminar_Abogado",
              text: "Eliminar Abogado",
              hidden: false,
            },
          ],
        },
        {
          id: "producto",
          text: "Productos",
          hidden: false,
          opt: [
            {
              id: "nuevo_consultor",
              text: "Nuevo Consultor",
              hidden: false,
            },
            {
              id: "lista_consultor",
              text: "Lista de Consultores",
              hidden: false,
            },
            {
              id: "buscar_consultor",
              text: "Buscar Consultor",
              hidden: false,
            },
            {
              id: "eliminar_consultor",
              text: "Eliminar Consultor",
              hidden: false,
            },
          ],
        },
         {
          id: "insumo",
          text: "Insumos",
          hidden: false,
          opt: [
            {
              id: "nuevo_consultor",
              text: "Nuevo Consultor",
              hidden: false,
            },
            {
              id: "lista_consultor",
              text: "Lista de Consultores",
              hidden: false,
            },
            {
              id: "buscar_consultor",
              text: "Buscar Consultor",
              hidden: false,
            },
            {
              id: "eliminar_consultor",
              text: "Eliminar Consultor",
              hidden: false,
            },
          ],
        },
        {
          id: "maquinaria",
          text: "Máquinas",
          hidden: false,
          opt: [
            {
              id: "nuevo_consultor",
              text: "Nuevo Consultor",
              hidden: false,
            },
            {
              id: "lista_consultor",
              text: "Lista de Consultores",
              hidden: false,
            },
            {
              id: "buscar_consultor",
              text: "Buscar Consultor",
              hidden: false,
            },
            {
              id: "eliminar_consultor",
              text: "Eliminar Consultor",
              hidden: false,
            },
          ],
        },
        {
          id: "clinica",
          text: "Clínica",
          hidden: false,
          opt: [
            {
              id: "nuevo_contratista",
              text: "Nuevo Contratista",
              hidden: false,
            },
            {
              id: "lista_contratista",
              text: "Lista de Contratistas",
              hidden: false,
            },
            {
              id: "buscar_contratista",
              text: "Buscar Contratista",
              hidden: false,
            },
            {
              id: "eliminar_contratista",
              text: "Eliminar Contratista",
              hidden: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["formActive"]),

  },
  mounted() {},
  computed: {
    ...mapState(["panel_active"]),
  },
};
</script>


<style>
</style>