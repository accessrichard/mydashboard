<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <read v-bind:page="page"></read>
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline mb-0">Todo</h3>
          </v-card-title>
          <todos></todos>
        </v-card>
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
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline mb-0">Contacts</h3>
          </v-card-title>
          <contacts></contacts>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/todo/TodoList.vue";
import ContactList from "@/components/contact/ContactList.vue";
import Read from "@/components/wiki/Read.vue";
import Work from "@/components/work/Work.vue";

@Component({
  name: "Home",
  components: {
    todos: TodoList,
    contacts: ContactList,
    Read,
    Work
  }
})
export default class Home extends Vue {
  public page: string = "Home";
}
</script>
