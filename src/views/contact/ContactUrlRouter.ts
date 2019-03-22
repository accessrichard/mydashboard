import { IContact, IContactRouter, CONTACT_VIEW } from '@/types';
import contactStore from '@/store/modules/ContactStore';
import router from "@/router";


export default class ContactUrlRouter implements IContactRouter {
  public edit(name: string): void {
    router.push({ name: 'contact-edit', params: { name } });
  }

  public view(name: string): void {
    router.push({ name: 'contact-view', params: { name } });

  }

  public list(): void {
    router.push({
      name: 'contact-list'
    });
  }

  private getParams() {
    return { params: { name: router.currentRoute.params.name } };
  }

  private isNameParamSet() {
    return this.isContactRoute() && router.currentRoute.params.name.length > 0;
  }

  private isContactRoute(): boolean {
    if (!router.currentRoute.name) {
      return false;
    }

    return (
      router.currentRoute.name.length > 0 &&
      router.currentRoute.name.startsWith('contact')
    );
  }
}
