<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title class="text-xs-center">Contacts</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon v-on:click="addContact()">
            <v-icon>control_point</v-icon>
          </v-btn>
        </v-toolbar>
        <component v-bind:is="currentContactView"></component>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import { IContact, CONTACT_VIEW } from "@/types";
import router from "@/router";
import contactStore from "@/components/contact/ContactStore";
import ContactList from "@/components/contact/ContactList.vue";
import ContactCard from "@/components/contact/ContactCard.vue";
import ContactEdit from "@/components/contact/ContactEdit.vue";

@Component({
  name: "Contact",
  components: {
    ContactList,
    ContactCard,
    ContactEdit
  }
})
export default class Contact extends Vue {
  public get currentContactView(): string {
    if (!contactStore.view) {
      return CONTACT_VIEW.LIST;
    }

    return contactStore.view;
  }

  public addContact() {
    contactStore.create("New Contact");
    contactStore.setView(CONTACT_VIEW.EDIT);
  }
}
</script>