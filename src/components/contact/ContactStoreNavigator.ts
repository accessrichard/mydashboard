import { CONTACT_VIEW, IContactNavigator } from '@/types';
import contactStore from '@/components/contact/ContactStore';

export default class ContactStoreNavigator implements IContactNavigator {
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
      contactStore.setView(CONTACT_VIEW.LIST);
      return;
    }

    contactStore.setView(view);
  }

  private isContactSet(): boolean {
    return contactStore.selectedContact.name.length > 0;
  }
}
