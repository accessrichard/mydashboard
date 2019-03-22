<template>
  <v-layout row>
    <v-flex>
      <v-card :key="contact.id + contact.lastupdate">
        <form>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px">
            <v-layout column fill-height>
              <v-card-title>
                <v-spacer></v-spacer>

                <v-btn dark icon class="mr-3" v-on:click="back()">
                  <v-icon>chevron_left</v-icon>
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
                <v-icon color="indigo">account_circle</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-text-field
                  v-model="contact.name"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">phone</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-text-field
                  v-model="contact.cellPhone"
                  label="Cell Phone"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-text-field
                  v-model="contact.workPhone"
                  label="Work Phone"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-text-field
                  v-model="contact.email"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">link</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-text-field
                  v-model="contact.link"
                  label="Link"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-on:click="remove()">delete</v-btn>
            <v-btn primary v-on:click="save()">submit</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Prop, Vue } from "vue-property-decorator";
import contactStore from "@/store/modules/ContactStore";
import { IContact, CONTACT_VIEW } from "@/types";
import router from "@/router";
import getRouter from "./ContactRouter";

@Component
export default class ContactEdit extends Vue {
  public contact: IContact = { lastupdate: new Date() } as IContact;

  public back() {
    getRouter().view(this.contact.name);
  }

  public async remove() {
    if (this.contact.id !== 0) {
      await contactStore.delete(this.contact);
    }

    getRouter().list();
  }

  public async save() {
    if (
      this.contact.name !== contactStore.selectedContact.name &&
      this.contact.id === contactStore.selectedContact.id
    ) {
      await contactStore.delete(contactStore.selectedContact);
    }

    contactStore.save(this.contact);
    getRouter().view(this.contact.name);
  }

  public async mounted() {
    if (
      !contactStore.selectedContact.id ||
      contactStore.selectedContact.id === 0
    ) {
      contactStore.create("New Contact");
    }

    this.contact = contactStore.selectedContact;
  }
}
</script>