<template>
  <v-container>
    <v-card width="1000px">
      <v-card-title>
        <span class="text-h5">
          <h4 class="black--text">Nuev{{ title_form_person }}</h4></span
        >
      </v-card-title>
      <v-tabs
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tabs-slider color="red lighten-3"></v-tabs-slider>
        <v-tab class="">General</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-5 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 450px"
              id="container-form"
            >
              <v-row justify="right">
                <v-date-picker
                  v-model="actual_date"
                  :show-current="false"
                  locale="es-MX"
                  color="primary"
                  :events="arrayEvents"
                ></v-date-picker>
              </v-row>
              <v-flex>
                <v-form @submit.prevent="add" class="">
                  <v-layout class="">
                    <v-flex xs6 class="">
                      <v-text-field
                        color="#023565"
                        prepend-icon="mdi-account"
                        label="Nombre"
                      ></v-text-field>
                      <v-text-field
                        color="#023565"
                        prepend-icon="mdi-account-outline"
                        label="Apellido"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
      </v-tabs>
      <v-card-actions>
        <v-flex class="text-right pt-5 pr-5">
          <v-btn color="red darken-1" text @click="closeDialogForm()">
            Cancelar
          </v-btn>
          <v-btn color="success darken-1" text @click="closeDialogForm()">
            Agregar
          </v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import Dependence from "../components/Dependence";
export default {
  name: "Date",
  components: {
    // Dependence,
  },
  data() {
    return {
      arrayEvents: null,
      actual_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date: null,
      birth_date_picker: false,
      // Esta debe ser Cargada desde la base de Datos
      desserts: [],
      headers: [
        {
          id: "numero_historia",
          text: "Número",
          value: "history_number",
          class: "cyan darken-3 white--text",
          align: "start",
        },
        {
          id: "paciente",
          text: "Paciente",
          value: "patient",
          class: "cyan darken-3 white--text",
          align: "start",
        },
        {
          id: "asunto",
          text: "Asunto",
          value: "topic",
          class: "cyan darken-3 white--text",
          align: "start",
        },
        {
          id: "fecha_historia",
          text: "Fecha",
          value: "history_date",
          class: "cyan darken-3 white--text",
          align: "start",
        },
        {
          id: "empleado",
          text: "Empleado",
          value: "employed",
          class: "cyan darken-3 white--text",
          align: "start",
        },
        {
          id: "acciones",
          text: "Acciones",
          value: "actions",
          class: "cyan darken-3 white--text",
          align: "start",
        },
      ],

      state: [
        {
          id: "active",
          text: "Activo",
        },
        {
          id: "inactive",
          text: "Inactivo",
        },
      ],
      document_type: [
        {
          id: "cc",
          text: "Cédula de Ciudadanía",
        },
        {
          id: "pasaporte",
          text: "Pasaporte",
        },
        {
          id: "cc_extrajeria",
          text: "Cédula de Extranjería",
        },
        {
          id: "tarjeta_extranjeria",
          text: "Tarjeta de Extranjería",
        },
        {
          id: "nit",
          text: "NIT",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["closeDialogForm"]),
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    initialize() {
      this.desserts = [
        {
          history_number: "HC-164587",
          patient: "Carlos Rivera",
          topic: "Consulta",
          history_date: "25/01/2022",
          employed: "Ana Rengifo",
        },
      ];
    },
    editItem(item) {
      console.log("aqui");
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
  computed: {
    ...mapState(["panel_active", "title_form_person"]),
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize;
  },
  mounted() {
      
  },
};
</script>


<style>
/* Configuración Scroll Container */
#container-form::-webkit-scrollbar {
  width: 0em;
  background: grey;
  display: inline !important;
}
</style>