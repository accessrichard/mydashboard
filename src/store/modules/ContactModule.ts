import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import ContactService from '@/api/ContactService';
import { IContact } from '@/types';
import store from '@/store';

const service = new ContactService();

@Module({ dynamic: true, namespaced: true, name: 'contact', store })
class Contact extends VuexModule {
  public contacts: IContact[] = [];

  public selectedContact: IContact = {} as IContact;

  @Action({ commit: 'GET_CONTACTS' })
  public async getContacts(): Promise<IContact[]> {
    const contacts = await service.list();
    return contacts;
  }

  @Action({ commit: 'GET_CONTACT' })
  public async getContact(name: string): Promise<IContact> {
    if (this.contacts.length === 0) {
      await this.getContacts();
    }

    const contact = this.contacts.filter(x => x.name === name);

    if (contact.length === 0) {
      // return Promise.resolve({ lastupdate: new Date() } as IContact);
      return { lastupdate: new Date() } as IContact;
    }

    // return Promise.resolve(contact[0]);
    return contact[0];
  }

  @Action({ commit: 'REMOVE_CONTACT' })
  public async removeContact(contact: IContact) {
    throw Error('NotImplemented');
  }

  @Action({ commit: 'SAVE_CONTACT' })
  public save(contact: IContact) {
    return service.save(contact).then(newContact => {
      return newContact;
    });
  }

  @Mutation
  public GET_CONTACTS(contacts: IContact[]) {
    this.contacts = contacts;
  }

  @Mutation
  public GET_CONTACT(contact: IContact) {
    this.selectedContact = contact;
  }

  @Mutation
  public SAVE_CONTACT(contact: IContact) {
    this.contacts.push(contact);
  }

  @Mutation
  public REMOVE_CONTACT(contact: IContact) {
    const index = this.getIndex(contact.name);
    if (index === -1) {
      return;
    }

    this.contacts.splice(index, 1);
  }

  private getIndex(name: string): number {
    return this.contacts
      .map(contactItem => {
        return contactItem.name;
      })
      .indexOf(name);
  }
}

export default getModule(Contact);
