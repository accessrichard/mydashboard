<template>
  <component v-bind:is="currentContactView"></component>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import { IContact, IContactView, CONTACT_VIEW } from "@/types";
import router from "@/router";
import { Route } from "vue-router";
import contactStore from "@/components/contact/ContactStore";
import ContactList from "@/components/contact/ContactList.vue";
import ContactCard from "@/components/contact/ContactCard.vue";
import ContactEdit from "@/components/contact/ContactEdit.vue";

Component.registerHooks([
  "beforeRouteUpdate",
  "beforeRouteLeave",
  "beforeRouteEnter"
]);

function getViewFromParams(to: Route): string {
  const view = to.params.view.toUpperCase().trim();

  if (Object.keys(CONTACT_VIEW).includes(view)) {
    return CONTACT_VIEW[view];
  }

  return CONTACT_VIEW.LIST;
}

@Component({
  name: "Contact",
  components: {
    ContactList,
    ContactCard,
    ContactEdit
  }
})
export default class Contact extends Vue {
  public get currentContactView(): string {
    if (!contactStore.view) {
      return CONTACT_VIEW.LIST;
    }

    return contactStore.view;
  }

  /**
   * The contacts components are dynamically swapped between
   * edit, view, and list. This is so that the component can
   * be embedded as a standalone component, or within a route.
   *
   * Handles changing the view when navigating between
   * components.
   */
  public beforeRouteUpdate(to: Route, from: Route, next: any) {
    if (!this.isViewInRoute(to)) {
      contactStore.setView(CONTACT_VIEW.LIST);
      next();
      return;
    }

    const view = getViewFromParams(to);

    contactStore.setView(view);
    next();
  }

  /**
   * Reset view if going from one component to the other.
   * e.g. Contacts (routed component) to Home (component)
   */
  public beforeRouteLeave(to: Route, from: Route, next: any) {
    contactStore.setView(CONTACT_VIEW.LIST);
    next();
  }

  /**
   * Reset view if going from one component to the other.
   * e.g. Home (component) to Contacts (Routed Component).
   */
  public async beforeRouteEnter(to: Route, from: Route, next: any) {
    if (
      from.name === null &&
      typeof to.params.name !== "undefined" &&
      to.params.name !== contactStore.selectedContact.name
    ) {
      await contactStore.getContact(to.params.name);
      const view = getViewFromParams(to);
      contactStore.setView(view);
      next();
      return;
    }

    contactStore.setView(CONTACT_VIEW.LIST);
    next();
  }

  public addContact() {
    contactStore.create("New Contact");
    contactStore.setView(CONTACT_VIEW.EDIT);
  }

  private isViewRouteValid(to: Route): boolean {
    return to.params.view.toUpperCase().trim() in CONTACT_VIEW;
  }

  /**
   * Complicated way to do CONTACT_VIEW[view] as typescript complains
   * that CONTACT_VIEW needs an indexer... e.g. [key: string]: any;
   * Possibly since im still new to typescript.
   */
  private getViewFromString(view: string): string {
    const keys = this.typedKeys(CONTACT_VIEW);
    const key = keys.filter(k => {
      return k === view;
    });

    return key.length > 0 ? CONTACT_VIEW[key[0]] : CONTACT_VIEW.LIST;
  }

  private isViewInRoute(to: Route): boolean {
    return typeof to.params.view !== "undefined";
  }

  /* tslint:disable */
  private typedKeys<T>(o: T): (keyof T)[] {
    return Object.keys(o) as (keyof T)[];
  }
}
</script>