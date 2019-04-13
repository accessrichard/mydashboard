import HttpService from '@/api/HttpService';
import { IWorkItemFields } from '@/types';

export default class WorkApi {
  private httpService: HttpService;

  private readonly basePath: string = '/work/';

  constructor() {
    this.httpService = new HttpService();
  }

  public async getWork(): Promise<IWorkItemFields[]> {
    return this.httpService.get<IWorkItemFields[]>(this.basePath + "list").then(resp => {
      return resp.data;
    });
  }

  public async getMyWork(): Promise<IWorkItemFields[]> {
    return this.httpService.get<IWorkItemFields[]>(this.basePath + "mywork").then(resp => {
      return resp.data;
    });
  }

  public async getWorkItem(id: number): Promise<IWorkItemFields> {
    return this.httpService.get<IWorkItemFields>(this.basePath + id).then(resp => {
      return resp.data;
    });
  }
}
