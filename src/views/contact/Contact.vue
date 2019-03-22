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
        <contact-list></contact-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import { IContact } from "@/types";
import router from "@/router";
import contactStore from "@/store/modules/ContactStore";
import ContactList from "@/views/contact/ContactList.vue";
import getRoute from "@/views/contact/ContactRouter";

@Component({
  name: "Contact",
  components: {
    ContactList
  }
})
export default class Contact extends Vue {
  public addContact() {
    getRoute().edit("New Contact");
  }
}
</script>