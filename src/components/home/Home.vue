<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <read v-bind:page="page"></read>
      </v-flex>
      <v-flex xs12>
        <todos></todos>
      </v-flex>
      <v-flex xs12>
          <work></work>
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
import Read from "@/components/wiki/Read.vue";
import Work from "@/components/work/WorkListTable.vue";

@Component({
  name: "Home",
  components: {
    todos: Todo,
    contacts: Contact,
    Read,
    Work
  }
})
export default class Home extends Vue {
  public page: string = "Home";
}
</script>
