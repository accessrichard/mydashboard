import HttpService from '@/api/HttpService';
import { ILinkCategory } from '@/types';

export default class LinkApi {
  private httpService: HttpService;

  private readonly basePath: string = '/link/';

  constructor() {
    this.httpService = new HttpService();
  }

  public async getLinks(): Promise<ILinkCategory[]> {
    return this.httpService.get<ILinkCategory[]>(this.basePath).then(resp => {
      return resp.data;
    });
  }
}
