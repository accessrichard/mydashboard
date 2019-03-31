 <template>
  <v-card>
    <v-card-title class="headline">Confirm Delete</v-card-title>

    <v-card-text>Are you sure you want to delete: {{contact.name}}</v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="green darken-1" flat="flat" v-on:click="$emit('close')">No</v-btn>

      <v-btn color="green darken-1" flat="flat" v-on:click="deleteContact()">Yes</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Prop, Vue } from "vue-property-decorator";
import contactStore from "@/components/contact/ContactStore";
import { IContact } from "@/types";

@Component
export default class ContactDeleteDialog extends Vue {
  @Prop({
    default: {
      name: " ",
      workPhone: "",
      email: "",
      link: ""
    }
  })
  public readonly contact!: IContact;

  public async deleteContact() {
    await contactStore.delete(this.contact);
    this.$emit("close");
  }
}
</script>
