<template>
  <v-container fluid>
    <v-layout class="ma-0 ba-0 pa-0">
      <v-flex xs12 class="">
        <v-layout class="" fill-height style="height: 550px" align-center>
          <v-flex xs5 class="">
            <PrincipalMenu />
          </v-flex>
          <v-flex xs7 class="">
            <CompanyLogo v-if="stand_by"/>
            <ClientTb v-if="clientPn"/>
            <!-- <TableList v-if="table_panel"/> -->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import PrincipalMenu from "../components/PrincipalMenu";
import CompanyLogo from "../components/CompanyLogo";
import ClientTb from '../components/ClientTb';
// import Person from "../components/Person";
// import ContractSelector from '../components/ContractSelector';
import TableList from '../components/TableList'
import { mapState } from "vuex";

export default {
  name: "MainOros",
  components: {
    PrincipalMenu,
    CompanyLogo,
    ClientTb,
    // Person,
    // ContractSelector,
    TableList
  },
  data() {
    return {};
  },

  computed: {
    ...mapState(["panel_active","stand_by","table_panel","clientPn"]),
  },
};
</script>


<style>
</style>