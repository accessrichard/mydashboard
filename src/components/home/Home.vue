<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <read v-bind:page="page"></read>
      </v-flex>
      <v-flex>
        <todos></todos>
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline mb-0">Work</h3>
          </v-card-title>
          <work></work>
        </v-card>
      </v-flex>
      <v-flex>
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
import Work from "@/components/work/Work.vue";

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
