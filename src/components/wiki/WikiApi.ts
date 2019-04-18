import HttpService from '@/lib/HttpService';
import IGetPagesResponse from '@/types';

export default class WikiApi {
  private httpService: HttpService;

  private readonly basePath: string = '/wiki/';

  constructor() {
    this.httpService = new HttpService();
  }

  public getPages(): Promise<string[]> {
    return this.httpService.get<IGetPagesResponse>(this.basePath).then(resp => {
      return resp.data.pages;
    });
  }

  public getPage(name: string): Promise<string> {
    return this.httpService
      .get<any>(this.basePath + name)
      .then(resp => {
        return resp.data.page;
      });
  }

  public savePage(name: string, content: string): Promise<void> {
    return this.httpService
      .post(this.basePath + name, { pageContent: content })
      .then(resp => {
        return resp.data;
      });
  }

  public removePage(name: string): Promise<string> {
    return this.httpService
      .delete(this.basePath + name)
      .then(resp => {
        return name;
      });
  }
}
