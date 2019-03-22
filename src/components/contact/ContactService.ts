import HttpService from '@/api/HttpService';
import { IContact } from '@/types';

export default class ContactService {
  private httpService: HttpService;

  private readonly basePath: string = '/contact';

  constructor() {
    this.httpService = new HttpService();
  }

  public async get(name: string): Promise<IContact> {
    return this.httpService
      .get<IContact>(`${this.basePath}/${name}`)
      .then(resp => {
        return resp.data;
      });
  }

  public async delete(id: number): Promise<void> {
    return this.httpService.delete(`${this.basePath}/${id}`).then(resp => {
      return resp.data;
    });
  }

  public async list(): Promise<IContact[]> {
    return this.httpService.get<IContact[]>(this.basePath).then(resp => {
      return resp.data;
    });
  }

  public async save(contact: IContact): Promise<IContact[]> {
    return this.httpService.post(this.basePath, { contact }).then(resp => {
      return resp.data.contact;
    });
  }
}
