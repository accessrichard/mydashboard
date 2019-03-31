import HttpService from '@/api/HttpService';
import { ITodo } from '@/types';

export default class TfsApi {
  private httpService: HttpService;

  private readonly basePath: string = '/tfs/';

  constructor() {
    this.httpService = new HttpService();
  }

  public async getWork(): Promise<ITodo[]> {
    return this.httpService.get<ITodo[]>(this.basePath).then(resp => {
      return resp.data;
    });
  }

  public async getUser(todo: ITodo) {
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
