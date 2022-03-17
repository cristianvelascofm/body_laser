<template>
  <v-container class="pa-15">
    <!-- <v-card  elevation="17" color="rgba(238, 217, 214, .4)" class="text-center pa-5"> -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        color="#dc8082"
        prepend-icon="mdi-account"
        v-model="user_name"
        :rules="nameRules"
        label="Usuario"
        required
      ></v-text-field>

      <v-text-field
        color="#dc8082"
        background-color=""
        v-model="password"
        prepend-icon="mdi-lock"
        :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show_password ? 'text' : 'password'"
        name="input-10-1"
        label="Contraseña"
        hint="Debe ser Mayor a 8 Caracteres"
        counter
        @click:append="show_password = !show_password"
      >
      </v-text-field>
      <div class="mb-0">
      <v-btn color="grey" plain x-small class="mr-4"> Olvidé mi Contraseña </v-btn>
      </div>
      <v-checkbox
        v-model="checkbox_remember_me"
        label="Recordar Usuario"
      ></v-checkbox>

      <div>
      <v-btn color="#417683" small class="mr-4 white--text" @click="login; astro()"> Ingresar </v-btn>
      </div>
    </v-form>
    <!-- </v-card> -->
  </v-container>
</template>


<script>
import {mapState} from 'vuex'
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      user_name: "",
      password: "",
      show_password: false,
      checkbox_remember_me: false,
      valid: true,
      // Reglas De la Validación del Formulario
      nameRules: [
        (v) => !!v || "Usuario Requerido",
        (v) => (v && v.length <= 10) || "El Usuario debe ser mayor a 10 Caracteres",
      ],
      rules: {
        required: (value) => !!value || "Contraseña Requerida.",
        min: (v) => v.length >= 8 || "Mínimo 8 Caracteres",
        emailMatch: () => `El Usuario y Cotraseña no Coincinden`,
      },
    };
  },
  methods: {
    ...mapMutations(['login'])
  },
  computed:{
    ...mapState(['login_state'])
    
  },
  mounted() {},
};
</script>

<style>
</style>