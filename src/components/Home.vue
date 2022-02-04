<template>
  <v-container id="CASA">
    <v-layout justify-center class="ma-0 ba-0 pa-0">
      <v-flex xs6 class="ma-0 pa-0 ba-0">
        <v-layout  fill-height style="height: 340px" align-center justify-center>
          <v-flex  xs12>
            <Welcome />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6 class="pa-0 ba-0">
        <Login/>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <v-container>
    <v-layout primary > 
      <v-flex secondary>
        <h1>HOLA</h1>
      </v-flex>
      <v-flex secondary>
        <h1>HOLA</h1>
      </v-flex>
    </v-layout>
  </v-container> -->
</template>


<script>
import Welcome from "../components/Welcome";
import Login from "../components/LoginForm"
export default {
  name: "Home",
  components:{
    Welcome,
    Login,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>