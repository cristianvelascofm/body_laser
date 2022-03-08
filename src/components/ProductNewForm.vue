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
              <v-flex>
                <v-form @submit.prevent="add" class="">
                  <v-layout class="">
                    <v-flex xs6 class="">
                      <v-text-field
                        color="#023565"
                        prepend-icon="mdi-barcode"
                        label="Código"
                      ></v-text-field>
                      <v-text-field
                        color="#023565"
                        prepend-icon="mdi-account-outline"
                        label="Nombre"
                      ></v-text-field>
                    </v-flex>
                   
                  </v-layout>
                  <v-layout>
                    <v-flex xs6>
                      <v-select
                        prepend-icon="mdi-animation"
                        color="#023565"
                        :items="category_list"
                        label="Categoría"
                      ></v-select>
                    </v-flex>
                    <v-flex xs6 class="pl-2">
                       <v-select
                        prepend-icon="mdi-animation"
                        color="#023565"
                        :items="marc_list"
                        label="Marca"
                      ></v-select>
                    </v-flex>
                  </v-layout>

                 
                  <v-layout>
                    <v-flex xs6>
                      <v-text-field
                        color="#023565"
                        prepend-icon="mdi-percent"
                        label="Parámetro (%)"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 class="pl-2">
                      <v-text-field
                        color="#023565"
                        hint=""
                        prepend-icon="mdi-currency-usd"
                        label="Precio de Venta"
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
  name: "Product",
  components: {
    // Dependence,
  },
  data() {
    return {
      date: null,
      birth_date_picker: false,
      // Esta debe ser Cargada desde la base de Datos
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
      category_list: [
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