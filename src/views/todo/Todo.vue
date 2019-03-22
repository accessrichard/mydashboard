<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Todo List</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <todo-list></todo-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/views/todo/TodoList.vue";

@Component({
  name: "Todo",
  components: {
    TodoList
  }
})
export default class Todo extends Vue {}
</script>

