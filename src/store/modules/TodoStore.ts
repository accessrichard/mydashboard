import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import TodoService from '@/api/TodoService';
import { ITodo } from '@/types';
import store from '@/store';

const service = new TodoService();

@Module({ dynamic: true, namespaced: true, name: 'todo', store })
class Todo extends VuexModule {
  public todos: ITodo[] = [];

  @Action({ commit: 'GET_TODOS' })
  public async getTodos(): Promise<ITodo[]> {
    if (this.todos.length > 0) {
      return this.todos;
    }

    const todos = await service.getTodos();
    return todos;
  }

  @Action({ commit: 'REMOVE_TODO' })
  public async removeTodo(todo: ITodo) {
    const deleted = await service.removeTodo(todo);
    return deleted;
  }

  @Action({ commit: 'ADD_TODO' })
  public addTodo(todo: ITodo) {
    return service.addTodo(todo).then(newTodo => {
      return newTodo;
    });
  }

  @Mutation
  public GET_TODOS(todos: ITodo[]) {
    this.todos = todos;
  }

  @Mutation
  public ADD_TODO(todo: ITodo) {
    this.todos.push(todo);
  }

  @Mutation
  public REMOVE_TODO(todo: ITodo) {
    const id = this.todos
      .map(todoItem => {
        return todoItem.id;
      })
      .indexOf(todo.id);
    this.todos.splice(id, 1);
  }
}

export default getModule(Todo);
