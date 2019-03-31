<template>
  <v-layout row>
    <v-flex>
      <v-card :key="contact.id + contact.lastupdate">
        <v-card-title>
          <span class="headline">Contact</span>
        </v-card-title>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="primary">person</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{contact.name}}</v-list-tile-title>
            <v-list-tile-sub-title>Name</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="primary">phone</v-icon>
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
              <v-icon color="primary">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{contact.email}}</v-list-tile-title>
              <v-list-tile-sub-title>Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-on:click="openLink()">
            <v-list-tile-action>
              <v-icon color="primary">link</v-icon>
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
import { Component, Prop, Vue } from "vue-property-decorator";
import contactStore from "@/components/contact/ContactStore";
import { IContact } from "@/types";

@Component
export default class ContactEditDialog extends Vue {
  @Prop({
    default: {
      name: " ",
      workPhone: "",
      email: "",
      link: ""
    }
  })
  public readonly contact!: IContact;

  public openLink() {
    if (this.contact.link) {
      window.open(this.contact.link, "_blank");
    }
  }
}
</script>


