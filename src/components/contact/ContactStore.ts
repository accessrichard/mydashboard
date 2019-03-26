import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import ContactService from '@/components/contact/ContactService';
import { IContact } from '@/types';
import store from '@/store';

const service = new ContactService();

@Module({ dynamic: true, namespaced: true, name: 'contact', store })
class Contact extends VuexModule {
  public contacts: IContact[] = [];

  public selectedContact: IContact = {} as IContact;

  public view: string = 'contact-list';

  @Action({ commit: 'CHANGE_VIEW' })
  public setView(view: string) {
    return view;
  }

  @Action({ commit: 'GET_CONTACTS' })
  public async getContacts(): Promise<IContact[]> {
    if (this.contacts.length > 0) {
      return this.contacts;
    }

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
      return { lastupdate: new Date() } as IContact;
    }

    return contact[0];
  }

  @Action({ commit: 'DELETE_CONTACT' })
  public async delete(contact: IContact) {
    await service.delete(contact.name);
    return contact.name;
  }

  @Action({ commit: 'SAVE_CONTACT' })
  public save(contact: IContact) {
    return service.save(contact).then(newContact => {
      return newContact;
    });
  }

  @Action({ commit: 'CREATE_NEW' })
  public create(name: string) {
    return name;
  }

  @Mutation
  public CREATE_NEW(name: string) {
    this.selectedContact.name = name;
    this.selectedContact.lastupdate = new Date();
    this.selectedContact.id = 0;
  }

  @Mutation
  public CHANGE_VIEW(view: string) {
    this.view = view;
  }

  @Mutation
  public DELETE_CONTACT(name: string) {
    this.selectedContact = { name: 'New Contact' } as IContact;

    const existingIndex = this.contacts.findIndex(c => c.name === name);

    if (existingIndex !== -1) {
      this.contacts.splice(existingIndex, 1);
    }
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
    const existingIndex = this.contacts.findIndex(c => c.name === contact.name);

    if (existingIndex !== -1) {
      this.contacts.splice(existingIndex, 1);
    }

    this.contacts.push(contact);
  }
}

export default getModule(Contact);
