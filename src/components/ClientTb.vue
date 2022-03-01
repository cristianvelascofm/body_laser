<template>
  <v-container>
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
            <v-btn color="#e0787e" style="red" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-flex>
  </v-container>
</template>


<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ClientTb",
  components: {},

  data: () => ({
    itemsPerPage: 5,
    dialog: false,
    title_list: "Contratos",
    dialogDelete: false,
    selected: [],
    desserts: [],
    headers: [
      {
        text: "Nombres",
        align: "start",
        sortable: false,
        value: "name",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Documento",
        value: "document",
        class: "cyan darken-3 white--text",
      },
      { text: "Celular", value: "cellphone", class: "cyan darken-3 white--text" },
      {
        text: "Correo",
        value: "email",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Estado",
        value: "state",
        class: "cyan darken-3 white--text",
      },
      {
        text: "Acciones",
        value: "action",
        sortable: false,
        class: "cyan darken-3 white--text",
      },
    ],
  }),
  methods: {
      initialize(){
          this.desserts = [
        {
          name: "Carlos Rivera",
          document: 1061784985,
          cellphone: 3174587412,
          email: "crivera@hotmail.com",
          state: "Activo",
        },
        // {
        //   name: "Ice cream sandwich",
        //   document: 237,
        //   fat: 9.0,
        //   carbs: 37,
        //   protein: 4.3,
        // },
        // {
        //   name: "Eclair",
        //   calories: 262,
        //   fat: 16.0,
        //   carbs: 23,
        //   protein: 6.0,
        // },
        // {
        //   name: "Cupcake",
        //   calories: 305,
        //   fat: 3.7,
        //   carbs: 67,
        //   protein: 4.3,
        // },
        // {
        //   name: "Gingerbread",
        //   calories: 356,
        //   fat: 16.0,
        //   carbs: 49,
        //   protein: 3.9,
        // },
        // {
        //   name: "Jelly bean",
        //   calories: 375,
        //   fat: 0.0,
        //   carbs: 94,
        //   protein: 0.0,
        // },
        // {
        //   name: "Lollipop",
        //   calories: 392,
        //   fat: 0.2,
        //   carbs: 98,
        //   protein: 0,
        // },
        // {
        //   name: "Honeycomb",
        //   calories: 408,
        //   fat: 3.2,
        //   carbs: 87,
        //   protein: 6.5,
        // },
        // {
        //   name: "Donut",
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        // },
        // {
        //   name: "KitKat",
        //   calories: 518,
        //   fat: 26.0,
        //   carbs: 65,
        //   protein: 7,
        // },
      ];
      
      }
  }
};
</script>

