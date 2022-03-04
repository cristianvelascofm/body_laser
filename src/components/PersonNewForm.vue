<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="text-h5">
          <h4 class="indigo--text">Nuevo {{ title_form_person }}</h4></span
        >
      </v-card-title>
      <v-card-text>
        <v-layout
          class="overflow-y-auto pa-5 ma-0 ba-0"
          justify-center
          fill-height
          style="height: 450px"
          id="container-form"
        >
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
                <v-flex xs6 class="ma-0 pa-0 ba-0">
                  <v-sheet
                    color="grey lighten-3"
                    elevation="3"
                    height="139"
                    width="110"
                    min-height="139"
                    min-width="110"
                    max-height="139"
                    max-width="110"
                    class="mx-auto"
                  >
                    <v-img src="../assets/img/avatar_profile.jpg"></v-img>
                  </v-sheet>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs6>
                  <v-select
                    prepend-icon="mdi-card-bulleted-outline"
                    color="#023565"
                    :items="document_type"
                    label="Tipo de Documento"
                  ></v-select>
                </v-flex>
                <v-flex xs6 class="pl-2">
                  <v-text-field
                    color="#023565"
                    prepend-icon="mdi-card-account-details"
                    label="Número de Documento"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-menu
                v-model="birth_date_picker"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="computedDateFormatted"
                    label="Fecha de Nacimiento"
                    hint="Formato MM/DD/YYYY"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    color="#023565"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="birth_date_picker = false"
                ></v-date-picker>
              </v-menu>
              <v-layout>
                <v-flex xs6>
                  <v-text-field
                    color="#023565"
                    prepend-icon="mdi-map-marker"
                    label="Dirección"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6 class="pl-2">
                  <v-text-field
                    color="#023565"
                    hint="Ej: Centro,Popayán,Cauca"
                    prepend-icon="mdi-map-marker-outline"
                    label="Localidad"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs6>
                  <v-text-field
                    color="#023565"
                    prepend-icon="mdi-phone-classic"
                    label="Teléfono"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6 class="pl-2">
                  <v-text-field
                    color="#023565"
                    prepend-icon="mdi-phone-dial-outline"
                    label="Extensión"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout>
                <v-flex xs6>
                  <v-text-field
                    color="#023565"
                    prepend-icon="mdi-cellphone"
                    label="Celular"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6 class="pl-2">
                  <v-text-field
                    color="#023565"
                    prepend-icon="mdi-mail"
                    label="Correo Electrónico"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs11>
                  <v-select
                    prepend-icon="mdi-office-building"
                    color="#023565"
                    :items="dependence"
                    label="Dependencia"
                  ></v-select>
                </v-flex>
                <v-flex xs1 class="pt-3">
                  <!-- <Dependence /> -->
                  <!-- <v-btn color="#023565" elevation="5" fab dark small ><v-icon dark > mdi-office-building </v-icon></v-btn> -->
                </v-flex>
              </v-layout>

              <v-layout>
                <v-flex xs6>
                  <v-text-field
                    color="#023565"
                    prepend-icon="mdi-account-circle"
                    label="Usuario"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6 class="pl-2">
                  <v-text-field
                    color="#023565"
                    prepend-icon="mdi-lock-outline"
                    label="Contraseña"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-select
                prepend-icon="mdi-alpha-s-box"
                color="#023565"
                :items="state"
                label="Estado"
              ></v-select>
            </v-form>
          </v-flex>
        </v-layout>
      </v-card-text>
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
  name: "Person",
  components: {
    // Dependence,
  },
  data() {
    return {
      date: null,
      birth_date_picker: false,
      // Esta debe ser Cargada desde la base de Datos
      dependence: [
        {
          id: "fiet",
          text: "FIET - Facultad de Ingeniería Electrónica y Telecomunicaciones",
        },
        {
          id: "fic",
          text: "FIC - Facultad de Ingeniería Civil",
        },
        {
          id: "facned",
          text: "FACENED - Facultad de Ciencias Exactas, Naturales y de la Educación",
        },
        {
          id: "facar",
          text: "FACAR - Facultad de Artes",
        },
        {
          id: "faca",
          text: "FACA - Facultad de Ciencias Agrarias",
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
    ...mapMutations(['closeDialogForm']),
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
  },
  computed: {
    ...mapState(["panel_active",'title_form_person']),
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {},
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