<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card :key="contact.lastupdate">
        <form>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px">
            <v-layout column fill-height>
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
            <v-btn primary v-on:click="save()">submit</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import contactStore from "@/store/modules/ContactModule";
import { IContact } from "@/types";
import router from "@/router";

@Component
export default class ContactEdit extends Vue {
  get contact(): IContact {
    return contactStore.selectedContact;
  }

  constructor() {
    super();
  }

  public save() {
    this.contact.lastupdate = new Date();
    contactStore.save(this.contact);
    router.push({ name: "contact-card", params: { name: this.contact.name } });
  }

  public mounted() {
    contactStore.getContact(this.$route.params.name);
  }
}
</script>