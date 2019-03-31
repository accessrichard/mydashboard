<template>
  <div>
    <v-dialog v-model="isDialogVisible" width="620">
      <component
        v-bind:contact="selectedContact"
        v-on:close="isDialogVisible = false"
        v-bind:is="contactDialog"
      ></component>
    </v-dialog>

    <v-list subheader>
      <v-list-tile
        v-for="contact in contacts"
        :key="contact.name"
        avatar
        v-on:click="viewContact(contact)"
      >
        <v-list-tile-avatar v-bind:color="contact.color">
          <span class="white--text headline">{{contact.name.charAt(0).toUpperCase()}}</span>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title grid-list-md>
            <v-layout row warp>
              <v-flex xs12 sm6 md3>
                <span>{{contact.name}}</span>
              </v-flex>
              <v-flex sm6 md4 hidden-xs-and-down>
                <span>{{contact.email}}</span>
              </v-flex>
              <v-flex md2 hidden-sm-and-down>
                <span>{{contact.workPhone}}</span>
              </v-flex>
              <v-flex lg3 hidden-md-and-down>
                <span>{{contact.link}}</span>
              </v-flex>
            </v-layout>
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-avatar>
          <v-btn icon small class="mx-0" v-on:click.stop="editContact(contact)">
            <v-icon color="grey">edit</v-icon>
          </v-btn>
          <v-btn icon small class="mx-0" v-on:click.stop="deleteContact(contact)">
            <v-icon color="grey">delete</v-icon>
          </v-btn>
        </v-list-tile-avatar>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-content></v-list-tile-content>
        <v-list-tile-avatar>
          <v-btn icon small class="mx-0" v-on:click.stop="addContact()">
            <v-icon color="grey">add</v-icon>
          </v-btn>
        </v-list-tile-avatar>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import { IContact, CONTACT_VIEW } from "@/types";
import contactStore from "@/components/contact/ContactStore";
import ContactEditDialog from "@/components/contact/ContactEditDialog.vue";
import ContactDeleteDialog from "@/components/contact/ContactDeleteDialog.vue";
import ContactViewDialog from "@/components/contact/ContactViewDialog.vue";

@Component({
  components: {
    ContactEditDialog,
    ContactViewDialog,
    ContactDeleteDialog
  }
})
export default class ContactList extends Vue {
  public isDialogVisible: boolean = false;

  public contactDialog: string = "ContactViewDialog";


  public selectedContact: IContact = {} as IContact;

  get contacts(): IContact[] {
    return contactStore.contacts;
  }

  public addContact() {
    this.showDialog("ContactEditDialog", {
      name: "",
      id: 0
    } as IContact);
  }

  public editContact(contact: IContact) {
    this.showDialog("ContactEditDialog", contact);
  }

  public deleteContact(contact: IContact) {
    this.showDialog("ContactDeleteDialog", contact);
  }
  public viewContact(contact: IContact) {
    this.showDialog("ContactViewDialog", contact);
  }

  public async mounted() {
    await contactStore.getContacts();
  }

  private showDialog(name: string, contact: IContact) {
    this.selectedContact = Object.assign({}, contact);
    this.contactDialog = name;
    this.isDialogVisible = true;
  }
}
</script>