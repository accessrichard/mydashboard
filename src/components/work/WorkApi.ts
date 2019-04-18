import HttpService from '@/lib/HttpService';
import { IIterationPath, IWorkItemFields, IWorkFilter } from '@/types';

export default class WorkApi {
  private httpService: HttpService;

  private readonly basePath: string = '/work/';

  constructor() {
    this.httpService = new HttpService();
  }

  public async query(filter: IWorkFilter): Promise<IWorkItemFields[]> {
    return this.httpService.post(this.basePath + "query", { filter }).then(resp => {
      return resp.data;
    });
  }

  public async getWorkItem(id: number): Promise<IWorkItemFields> {
    return this.httpService.get<IWorkItemFields>(this.basePath + "item/" + id).then(resp => {
      return resp.data;
    });
  }

  public async getCurrentIterations(): Promise<IIterationPath[]> {
    return this.httpService.get<IIterationPath[]>(this.basePath + "iterations").then(resp => {
      return resp.data;
    });
  }

  public async getMembers(): Promise<string[]> {
    return this.httpService.get<string[]>(this.basePath + "members").then(resp => {
      return resp.data;
    });
  }
}
