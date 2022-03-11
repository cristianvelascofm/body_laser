<template>
  <v-container>
    <v-flex class="text-right">
      <v-chip
        class="ma-2 mr-5"
        outlined
        color="#023565"
        label
        text-color="#447987"
      >
        <v-icon left> mdi-hospital-building </v-icon>
        {{ panel_active }}
      </v-chip>
    </v-flex>

    <v-divider class="mt-2"></v-divider>
    <v-flex class="">
      <v-toolbar flat id="title_panel">
        <v-toolbar-title id="title_table">{{ panel_active }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <NewFormButton/>
        <v-dialog
          v-model="dialogDelete"
          overlay-color="#023565"
          persistent
          max-width="400px"
        >
          <v-card>
            <v-card-title
              class="indigo--text text-h6 justify-center"
              elevation="5"
              >¿Está seguro de Eliminar este Item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="closeDelete">No</v-btn>
              <v-btn color="success darken-1" text @click="deleteItemConfirm"
                >Si</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </v-flex>
    <v-layout
      class="overflow-y-auto pa-0 ma-0 ba-0"
      fill-height
      style="height: 380px"
      id="container-form"
    >
      <v-flex class="" xs12>
        
        <v-data-table
          id="table_general"
          :headers="headers"
          fixed-header
          v-model="selected"
          :items="desserts"
          item-key="name"
          height="320px"
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
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table> 
      </v-flex>
    </v-layout>
    <v-flex class="text-right pt-5 pr-5">
      <v-btn color="red" elevation="1" text small @click="formActive('Close')">
        Cerrar
      </v-btn>
    </v-flex>

  
  </v-container>
</template>


<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import NewFormButton from "./NewFormButton.vue";
export default {
  name: "MachineTb",
  components: {
    NewFormButton,
  },

  data: () => ({
    itemsPerPage: 5,
    dialog: false,
    dialogDelete: false,
    selected: [],
    desserts: [],
    editedIndex: -1,
    editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "name",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Marca",
        value: "marc",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Categoría",
        value: "category",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Tamaño Punto",
        value: "size",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Descripción",
        value: "description",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Estado",
        value: "state",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Acciones",
        value: "actions",
        sortable: false,
        class: "cyan darken-3 white--text",
      },
    ],
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  computed: {
    ...mapState(["EmployedPn", "panel_active"]),
  },

  methods: {
    ...mapMutations(["formActive"]),

    initialize() {
      this.desserts = [
        {
          name: "Laser Diodo Triple Onda Profesional BM-108",
          marc: "BM",
          category: "Depilación Corporal",
          size: "15*15MM / 20*20MM",
          description: "Alejandrita laser 755NM + Laser diodo 808NM + Laser Nd Yag 1064NM",
          state: "Activo",
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

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
  computed: {
    
    ...mapState(["panel_active"]),
     formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    
  
  },
};
</script>

<style scoped>

#title_panel,
#table_general {
  background-color: rgba(238, 217, 214, 0);
  color: #023565;
}
</style>