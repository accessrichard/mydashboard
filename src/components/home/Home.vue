<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline mb-0">Notes</h3>
          </v-card-title>
          <v-list-tile-content>
            <div class="pa-3">
            <read v-bind:page="page"></read>
            </div>
          </v-list-tile-content>
        </v-card>
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
import ContactView from "@/components/contact/ContactList.vue";
import Read from "@/components/wiki/Read.vue";

@Component({
  name: "Home",
  components: {
    todos: TodoList,
    contacts: ContactView,
    Read
  }
})
export default class Home extends Vue {
  public page: string = "Home";
}
</script>
