<template>
  <v-container fluid grid-list-lg text-lg-left>
    <v-layout fill-height style="height: 50px">
      <v-flex class="ma-0 pa-0 ba-0 pr-">
        <AccountMenu v-if="login_state" class="pa-0" />
      </v-flex>
    </v-layout>
    <v-layout fill-height style="height: 620px" justify-start align-center> 
      <v-flex xs12 class="text-center white--text ma-0 pa-0 ba-0">
        <Home v-if="!login_state" />
        <MainBodyLaser v-if="login_state" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import LoginForm from "../components/LoginForm";
import Home from "../components/Home.vue";
import AccountMenu from '../components/AccountMenu.vue'
import MainBodyLaser from "../components/MainBodyLaser.vue";
import { mapState } from "vuex";

export default {
  // name: 'Home',
  name: "login",
  components: {
    // LoginForm,
    Home,
    AccountMenu,
    MainBodyLaser,
  },
  computed: {
    ...mapState(["login_state"]),
  },
};
</script>
