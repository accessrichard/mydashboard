<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">Todo</h3>
    </v-card-title>
    <todos></todos>
  </v-card>
</template>


<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/todo/TodoList.vue";

@Component({
  name: "Todo",
  components: {
    todos: TodoList
  }
})
export default class Todo extends Vue {}
</script>

