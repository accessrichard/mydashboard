<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title class="text-xs-center">Contacts</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list subheader>
          <v-list-tile
            v-for="contact in contacts"
            :key="contact.lastupdate.toString()"
            avatar
            :to="{ name: 'contact-card', params: { name: contact.name }}"
          >
            <v-list-tile-avatar v-bind:color="contact.color">
              <span class="white--text headline">C</span>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="contact.name"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import { IContact } from "@/types";
import contactStore from "@/store/modules/ContactStore";

@Component
export default class ContactList extends Vue {

  get contacts(): IContact[] {
    return contactStore.contacts;
  }

  constructor() {
    super();
  }

  public mounted() {
   contactStore.getContacts();
  }
}
</script>