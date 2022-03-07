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
        <v-tab class="">Cliente</v-tab>
        <v-tab-item>
          <v-card-text>
            <v-layout
              class="overflow-y-auto pa-3 ma-0 ba-0"
              justify-center
              fill-height
              style="height: 450px"
              id="container-form"
            >
              <v-flex>
                <v-text-field
                  v-model="message3"
                  filled
                  label="Cita Asociada"
                  clearable
                  height="3px"
                ></v-text-field>
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
                      <!-- <v-select
                    prepend-icon="mdi-office-building"
                    color="#023565"
                    :items="dependence"
                    label="Dependencia"
                  ></v-select> -->
                    </v-flex>
                    <v-flex xs1 class="pt-3">
                      <!-- <Dependence /> -->
                      <!-- <v-btn color="#023565" elevation="5" fab dark small ><v-icon dark > mdi-office-building </v-icon></v-btn> -->
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex xs6> </v-flex>
                    <v-flex xs6 class="pl-2"> </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-tab-item>
        <v-tab>Cuadro Patológico</v-tab>
        <v-tab-item>
          <v-layout fill-height style="heigth: 400px" h>
            <v-flex xs12>
              <v-textarea
                class="pa-5"
                height="412"
                filled
                name="input-7-4"
                label="Patología"
                value="Diabetes - Hipertiroidismo - Gastritis"
              ></v-textarea>
            </v-flex>
            <v-flex xs12>
              <v-textarea
                class="pa-5"
                height="412"
                filled
                name="input-7-4"
                label="Medicación Habitual"
                value="Metronidazol"
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab>Historias Clínicas</v-tab>
        <v-tab-item>
          <v-layout fill-height style="heigth: 400px">
            <v-flex xs12>
              <v-textarea
                class="pa-5"
                height="170"
                filled
                name="input-7-4"
                label="Diagnostico"
                value=""
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout fill-height style="heigth: 210px" h>
            <v-flex xs12>
              <v-textarea
                class="pa-5"
                height="170"
                filled
                name="input-7-4"
                label="Tratamiento Realizado e Indicaciones"
                value=""
              ></v-textarea>
            </v-flex>
            <v-flex xs12>
              <v-textarea
                class="pa-5"
                height="170"
                filled
                name="input-7-4"
                label="Observaciones"
                value=""
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab>Insumos</v-tab>
        <v-tab-item>
            <v-layout fill-height style="heigth: 400px">
                <v-flex class="pa-10">
            <v-form @submit.prevent="add" class="">
                  <v-layout class="" justify-center>
                    <v-flex xs12 class="">
                      <v-text-field
                        color="#023565"
                        prepend-icon="mdi-shopping"
                        label="Producto"
                      ></v-text-field>
                      <v-text-field
                        color="#023565"
                        prepend-icon="mdi-numeric"
                        label="Cantidad"
                      ></v-text-field>
                    </v-flex>
                    
                  </v-layout>
                  <v-layout>
                      <v-flex xs1 class="mr-5">
                          <v-btn rounded dark small color="green" elevation= "10">+</v-btn>
                      </v-flex>
                      <v-flex xs1>
                          <v-btn rounded dark small color="red" elevation= "10">-</v-btn>
                      </v-flex>
                  </v-layout>
            </v-form>
            </v-flex>
            </v-layout>
            <v-layout>
                <v-flex class="pa-5">
                    <v-data-table
                id="table_general"
                :headers="headers_insumo"
                fixed-header
                v-model="selected_insumo"
                :items="desserts_insumo"
                item-key="name"
                height="120px"
                :items-per-page="itemsPerPage"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-eye
                  </v-icon>
                  <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
                </template>

                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize"> Ver </v-btn>
                </template>
              </v-data-table>
                </v-flex>
            </v-layout>
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
  name: "History",
  components: {
    // Dependence,
  },
  data() {
    return {
      date: null,
      birth_date_picker: false,
      // Esta debe ser Cargada desde la base de Datos
      desserts: [],
      headers_insumo:[
      {
          id: "insumo",
          text: "Producto",
          value: "product",
          class: "cyan darken-3 white--text",
          align: "start",
        },    
        {
          id: "cantidad",
          text: "Cantidad",
          value: "cantidad",
          class: "cyan darken-3 white--text",
          align: "start",
        },
      ],
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