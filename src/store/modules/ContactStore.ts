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

  //// TODO: Name is non-unique
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
    await service.delete(contact.id);
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
    if (this.view === view) {
      return;
    }

    this.view = view;
  }

  @Mutation
  public DELETE_CONTACT(id: number) {
    this.selectedContact = {} as IContact;
    this.removeContact(id);
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
    const isExisting = this.contacts.find(c => {
      return c.name === contact.name;
    });

    if (isExisting) {
      this.removeContact(contact.id);
    }

    this.contacts.push(contact);
  }

  private getIndex(id: number): number {
    return this.contacts
      .map(contactItem => {
        return contactItem.id;
      })
      .indexOf(id);
  }

  private removeContact(id: number) {
    const index = this.getIndex(id);
    if (index === -1) {
      return;
    }

    this.contacts.splice(index, 1);
  }
}

export default getModule(Contact);
