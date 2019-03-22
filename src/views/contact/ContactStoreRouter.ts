import { CONTACT_VIEW, IContactRouter } from '@/types';
import contactStore from '@/store/modules/ContactStore';

export default class ContactStoreRouter implements IContactRouter {
  public edit(name: string): void {
    this.setView(CONTACT_VIEW.EDIT);
  }

  public view(name: string): void {
    this.setView(CONTACT_VIEW.VIEW);
  }

  public list(): void {
    contactStore.setView(CONTACT_VIEW.LIST);
  }

  private setView(view: string) {
    if (!this.isContactSet()) {
      contactStore.setView(CONTACT_VIEW.VIEW);
      return;
    }

    contactStore.setView(view);
  }

  private isContactSet(): boolean {
    return contactStore.selectedContact.name.length > 0;
  }
}
