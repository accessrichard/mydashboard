<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Todo List</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-tile>
            <v-list-tile-action >
              <v-icon v-on:click="addTodo()">control_point</v-icon>
            </v-list-tile-action>
            <v-text-field
              class="new-todo"
              autofocus
              autocomplete="off"
              placeholder="Add new todo"
              v-model="newTodo"
              @keyup.enter="addTodo"
            ></v-text-field>
            <v-flex xs2 d-flex>
              <v-select :items="types" label></v-select>
            </v-flex>
          </v-list-tile>
          <v-list-tile v-for="todo in todos" :key="todo.id">
            <v-list-tile-action>
              <v-icon  v-on:click="removeTodo(todo)">remove_circle_outline</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="todo.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import todoStore from "@/store/modules/TodoStore";
import { ITodo } from "@/types";

@Component
export default class Todo extends Vue {
  get todos(): ITodo[] {
    return todoStore.todos || [] as ITodo[];
  }

  public types: string[] = ["text", "external"];

  public newTodo: string = "";

  constructor() {
    super();
  }

  public addTodo(e: KeyboardEvent) {
    if (!this.newTodo) {
      return;
    }

    todoStore.addTodo({ title: this.newTodo } as ITodo);
    this.newTodo = "";
  }

  public removeTodo(todo: ITodo) {
    todoStore.removeTodo(todo);
  }

  public created() {
    todoStore.getTodos();
  }


}
</script>

