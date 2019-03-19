<template>
  <v-layout v-if="isloading">
    <v-progress-circular></v-progress-circular>
  </v-layout>
  <v-layout row v-else>
    <v-flex xs12 sm6 offset-sm3>
      <v-card :key="contact.name + contact.id + contact.lastupdate">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px">
          <v-layout column fill-height>
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3" :to="{ name: 'contact'}">
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-btn
                dark
                icon
                class="mr-3"
                :to="{ name: 'contact-card-edit', params: { name: contact.name }}"
              >
                <v-icon>edit</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">{{contact.name}}</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{contact.cellPhone}}</v-list-tile-title>
              <v-list-tile-sub-title>Cell</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{contact.workPhone}}</v-list-tile-title>
              <v-list-tile-sub-title>Work</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile :href="`mailto:${contact.email}`">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{contact.email}}</v-list-tile-title>
              <v-list-tile-sub-title>Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-on:click="openLink()">
            <v-list-tile-action>
              <v-icon color="indigo">link</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{contact.link}}</v-list-tile-title>
              <v-list-tile-sub-title>Link</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import ContactService from "@/api/ContactService";
import { IContact } from "@/types";

@Component
export default class ContactCard extends Vue {
  public contact: IContact = {} as IContact;
  public isloading: boolean = true;
  public service: ContactService;

  constructor() {
    super();
    this.service = new ContactService();
  }

  public openLink() {
    window.open(this.contact.link, "_blank");
  }

  public mounted() {
    this.service.get(this.$route.params.name).then((contact: IContact) => {
      this.contact = contact;
      this.isloading = false;
    });
  }
}
</script>