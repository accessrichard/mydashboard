import { IContact, IContactRouter, CONTACT_VIEW } from '@/types';
import router from "@/router";


export default class ContactUrlRouter implements IContactRouter {
  public edit(name: string): void {
    
    router.push({ name: 'contact', params: { name, view: 'edit' } });
  }

  public view(name: string): void {
    router.push({ name: 'contact', params: { name, view: 'view' } });
  }

  public list(): void {
    router.push({
      name: 'contact'
    });
  }
}
