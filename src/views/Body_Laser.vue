<template>
  <v-container fluid grid-list-lg text-lg-left>
    <v-layout
      fill-height
      style="height: 820px"
      justify-start
      align-center
      
    >
      <v-flex xs12 class="text-center white--text ma-0 pa-0 ba-0">
        <Home />
        
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <hello-world /> -->
  <!-- <loginForm /> -->
  
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import LoginForm from "../components/LoginForm";
import Home from "../components/Home.vue";

export default {
  // name: 'Home',
  name: "login",
  components: {
    HelloWorld,
    LoginForm,
    Home,
  },
};
</script>
