<template>
  <v-container id="CASA">
    <v-layout justify-center class="ma-0 ba-0 pa-0">
      <v-flex xs6  class="ma-0 pa-0 ba-0">
        <v-layout   fill-height style="height: 0px"  justify-center>
          <v-flex  xs12>
            <LogoHome />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6 class="pa-0 ba-0">
        <Login/>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import LogoHome from "../components/LogoHome";
import Login from "../components/LoginForm"
export default {
  name: "Home",
  components:{
    LogoHome,
    Login,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>