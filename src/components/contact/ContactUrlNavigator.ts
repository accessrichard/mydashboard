import { IContact, IContactNavigator, CONTACT_VIEW } from '@/types';
import router from "@/router";


export default class ContactUrlNavigator implements IContactNavigator {
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
