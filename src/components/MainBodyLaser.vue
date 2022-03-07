<template>
  <v-container fluid>
    <v-layout class="ma-0 ba-0 pa-0">
      <v-flex xs12 class="">
        <v-layout class="" fill-height style="height: 550px" align-center>
          <v-flex xs5 class="">
            <PrincipalMenu />
          </v-flex>
          <v-flex xs7 class="" style="height: 550px">
            <CompanyLogo v-if="stand_by"/>           
            <ClientTb v-if="clientPn"/>
            <DateTb v-if="datePn"/>
            <HistoryTb v-if= "historyPn"/>
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
import DateTb from '../components/DateTb.vue'
import HistoryTb from '../components/HistoryTb.vue'
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
    DateTb,
    HistoryTb,
    
  },
  data() {
    return {};
  },

  computed: {
    ...mapState(["panel_active","stand_by","table_panel","clientPn","datePn", "new_form", "historyPn"]),
  },
};
</script>


<style>
</style>