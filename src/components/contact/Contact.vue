<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">Contacts</h3>
    </v-card-title>
    <contact-list></contact-list>
  </v-card>
</template>


<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ContactList from "@/components/contact/ContactList.vue";

@Component({
  components: {
    ContactList
  }
})
export default class Contact extends Vue {}
</script>

