<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <view-page v-bind:page="page"></view-page>
      </v-flex>
      <v-flex xs12>
        <todos></todos>
      </v-flex>
      <v-flex xs12>
        <contacts></contacts>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "@/components/todo/Todo.vue";
import Contact from "@/components/contact/Contact.vue";
import ViewPage from "@/components/wiki/ViewPage.vue";

@Component({
  name: "Home",
  components: {
    todos: Todo,
    contacts: Contact,
    ViewPage
  }
})
export default class Home extends Vue {
  public page: string = "Home";
}
</script>
