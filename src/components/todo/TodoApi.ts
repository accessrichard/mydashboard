import HttpService from '@/lib/HttpService';
import { ITodo } from '@/types';

export default class TodoApi {
  private httpService: HttpService;

  private readonly basePath: string = '/todo/';

  constructor() {
    this.httpService = new HttpService();
  }

  public async getTodos(): Promise<ITodo[]> {
    return this.httpService.get<ITodo[]>(this.basePath).then(resp => {
      return resp.data;
    });
  }

  public async addTodo(todo: ITodo) {
    return this.httpService.post(this.basePath, { todo }).then(resp => {
      return resp.data.todo;
    });
  }

  public async removeTodo(todo: ITodo) {
    return this.httpService.delete(`${this.basePath}${todo.id}`).then(resp => {
      return resp.data.todo;
    });
  }
}
