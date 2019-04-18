import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import ContactApi from '@/components/contact/ContactApi';
import { IContact } from '@/types';
import store from '@/lib/store';

const service = new ContactApi();

@Module({ dynamic: true, namespaced: true, name: 'contact', store })
class Contact extends VuexModule {
  public contacts: IContact[] = [];

  @Action({ commit: 'GET_CONTACTS' })
  public async getContacts(): Promise<IContact[]> {
    if (this.contacts.length > 0) {
      return this.contacts;
    }

    const contacts = await service.list();
    return contacts;
  }

  @Action({ commit: 'DELETE_CONTACT' })
  public async delete(contact: IContact) {
    //// Swap to ID
    await service.delete(contact.name);
    return contact;
  }

  @Action({ commit: 'SAVE_CONTACT' })
  public save(contact: IContact) {
    return service.save(contact).then(newContact => {
      return newContact;
    });
  }

  @Mutation
  public DELETE_CONTACT(contact: IContact) {
    const existingIndex = this.contacts.findIndex(c => c.id === contact.id);

    if (existingIndex !== -1) {
      this.contacts.splice(existingIndex, 1);
    }
  }

  @Mutation
  public GET_CONTACTS(contacts: IContact[]) {
    this.contacts = contacts;
  }

  @Mutation
  public SAVE_CONTACT(contact: IContact) {
    //// Find by id then name temporarily
    let  existingIndex = this.contacts.findIndex(c => c.id === contact.id);
    if (existingIndex === -1 && contact.id !== 0) {
      existingIndex = this.contacts.findIndex(c => c.name === contact.name);
    }

    if (existingIndex !== -1) {
      this.contacts[existingIndex] = contact;
      return;
    }

    this.contacts.push(contact);
  }
}

export default getModule(Contact);
