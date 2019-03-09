import HttpService from '@/http/HttpService';
import { ITodo } from './../../types';

export default class TodoService {
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

  public saveTodos(todos: ITodo[]) {
    return this.httpService
      .post(this.basePath, { todos })
      .then(resp => {
        return resp.data;
      });
  }
}
