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
            <v-list-tile-action v-on:click="addTodo()">
              <v-icon>control_point</v-icon>
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
            <v-list-tile-action v-on:click="removeTodo(todo)">
              <v-icon>remove_circle_outline</v-icon>
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
import TodoService from "./TodoService";
import { ITodo } from "@/types";

@Component
export default class Todo extends Vue {
  public todos: ITodo[] = [];

  public types: string[] = ["text", "external"];

  public newTodo: string = "";

  private service: TodoService = new TodoService();

  constructor() {
    super();
  }

  public addTodo(e: KeyboardEvent) {
    if (!this.newTodo) {
      return;
    }

    this.todos.push({
      title: this.newTodo
    } as ITodo);

    this.newTodo = "";
    this.save();
  }

  public removeTodo(todo: ITodo) {
    const id = this.todos
      .map(todoItem => {
        return todoItem.id;
      })
      .indexOf(todo.id);
    this.todos.splice(id, 1);
    this.save();
  }

  public mounted() {
    this.service.getTodos().then((todoItems: any) => {
      this.setIds(todoItems);
      this.todos = todoItems;
    });
  }

  private setIds(items: ITodo[]) {
    let max = 0;
    items.forEach(todo => {
      todo.id = max++;
    });
  }

  private isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  private save() {
    this.service.saveTodos(this.todos);
  }

  private getNewId() {
    const ids = this.todos.map(x => (this.isNumeric(x.id) ? x.id : 0));
    const max = Math.max(...ids);
    return max + 1;
  }
}
</script>

