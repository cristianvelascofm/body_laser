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
        <v-btn color="grey" plain x-small class="mr-4">
          Olvidé mi Contraseña
        </v-btn>
      </div>
      <v-checkbox
        v-model="checkbox_remember_me"
        label="Recordar Usuario"
      ></v-checkbox>

      <div>
        <v-btn color="#417683" small class="mr-4 white--text" @click='login()'>
          Ingresar
        </v-btn>
      </div>
    </v-form>
    <!-- </v-card> -->
  </v-container>
</template>


<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import axios from "axios";
import CryptoJS from 'crypto-js';
// import CryptoJS from 'vue-cryptojs'
export default {
  name: "Login",
  
  data() {
    return {
      path: "http://192.168.56.1:5000/",
      // path : 'http://192.168.130.79:5000/',
      user_name: "",
      password: "",
      show_password: false,
      checkbox_remember_me: false,
      valid: true,
      


      // Reglas De la Validación del Formulario
      nameRules: [
        (v) => !!v || "Usuario Requerido",
        (v) =>
          (v && v.length <= 10) || "El Usuario debe ser mayor a 10 Caracteres",
      ],
      rules: {
        required: (value) => !!value || "Contraseña Requerida.",
        min: (v) => v.length >= 8 || "Mínimo 8 Caracteres",
        emailMatch: () => `El Usuario y Cotraseña no Coincinden`,
      },
    };
  },
  
  methods: {
    ...mapMutations(["login"]),

    encrypt(src){ 
      let encriptado = window.btoa(src)
      return encriptado
    },
    decrypt(src){
      let desencriptado = window.atob(src)
      return desencriptado
    },

    login() {
      var dict_data= {}
      var user_name_encript = this.encrypt(this.user_name)
      var password_encript = this.encrypt(this.password)
      dict_data ['action'] = 'login'
      dict_data ['user_name'] = user_name_encript
      dict_data ['password'] = password_encript
      
      axios.post(this.path, dict_data).then((response) => {
        console.log(response.data)
        if (response.data.hasOwnProperty('error')){
          console.log('Error')
          
        }else{
          this.$store.commit('login')
        }
        
      });
      
    },
  },


  computed: {
    ...mapState(["login_state"]),

  },
  mounted() {},
};
</script>

<style>
</style>