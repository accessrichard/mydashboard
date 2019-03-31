<template>
  <v-card>
    <v-card-title>
      <span class="headline">Contact</span>
    </v-card-title>
    <v-form v-model="isValid">
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                label="Name*"
                required
                v-model="contact.name"
                :rules="nameRules"
                :counter="25"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Phone" v-model="contact.workPhone" :rules="nameRules"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="contact.email" label="Email"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="contact.link" label="Link"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat v-on:click="$emit('close')">Close</v-btn>
        <v-btn color="blue darken-1" flat v-on:click="save()">Save</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
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

  public isValid: boolean = true;

  public nameRules: any = [
    (v: any) => !!v || "Name is required",
    (v: any) =>
      (typeof v !== "undefined" && v.length <= 25) ||
      "Name must be less than 10 characters"
  ];

  public async save() {
    if (!this.isValid) {
      return;
    }

    await contactStore.save(this.contact);
    this.$emit("close");
  }
}
</script>


