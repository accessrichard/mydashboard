<template>
  <v-list subheader>
    <v-list-tile
      v-for="contact in contacts"
      :key="contact.id + contact.name + contact.lastupdate.toString()"
      avatar
      v-on:click="viewContact(contact.name)">
      
      <v-list-tile-avatar v-bind:color="contact.color">
        <span class="white--text headline">{{contact.name.charAt(0).toUpperCase()}}</span>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="contact.name"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import { IContact, CONTACT_VIEW } from "@/types";
import contactStore from "@/components/contact/ContactStore";
import { getNavigator } from "@/components/contact/contact-navigator";

@Component
export default class ContactList extends Vue {
  get contacts(): IContact[] {
    return contactStore.contacts;
  }

  public add() {
    getNavigator().edit("New Contact");
  }

  public async viewContact(name: string) {
    await contactStore.getContact(name);
    getNavigator().view(name);
  }

  public async mounted() {
    await contactStore.getContacts();
  }
}
</script>