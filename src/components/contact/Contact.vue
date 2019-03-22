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
import contactStore from "@/components/contact/ContactStore";
import ContactList from "@/components/contact/ContactList.vue";
import { getRouter } from "@/components/contact/ContactRouter";

@Component({
  name: "Contact",
  components: {
    ContactList
  }
})
export default class Contact extends Vue {
  public addContact() {
    getRouter().edit("New Contact");
  }
}
</script>