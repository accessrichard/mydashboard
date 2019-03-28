<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title class="text-xs-center">Contacts</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon v-on:click="addContact()">
            <v-icon>control_point</v-icon>
          </v-btn>
        </v-toolbar>
        <contacts></contacts>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import { IContact } from "@/types";
import router from "@/router";
import ContactView from "@/components/contact/ContactView.vue";
import { getNavigator } from "@/components/contact/contact-navigator";

@Component({
  name: "Contact",
  components: {
    contacts: ContactView
  }
})
export default class Contact extends Vue {
  public addContact() {
    getNavigator().edit("New Contact");
  }
}
</script>