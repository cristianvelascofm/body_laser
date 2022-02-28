<template>
  <v-app>
    <v-main id="aplication" class="ma-0 pa-0">
      <v-container fluid class="ma-0 pa-0 ba-0">
        
        <router-view />
        
      </v-container>
    </v-main>
    <v-footer id="pie" xs-10 class="justify-center" padless>
      <v-card-text class="dark--text text-center">
        <strong>
          Body Laser | Estética Integral |
          SOLEMDev</strong>
        — {{ new Date().getFullYear() }}
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>

/* Quitar El scroll Automatico de Vuetify */
 html { overflow-y: hidden !important; }
#aplication,
#pie {
  
  background: rgb(253, 2253, 253) 100%;
  background: linear-gradient(
    135deg,
    rgb(253, 253, 253) 0%,
    rgb(253, 253, 253) 100%
  );
}
</style>