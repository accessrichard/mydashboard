import { IContact, CONTACT_VIEW, IContactNavigator } from '@/types';
import router from '@/router';
import ContactStoreNavigator from './ContactStoreNavigator';
import ContactUrlNavigator from './ContactUrlNavigator';

const urlRouter = new ContactUrlNavigator();
const storeRouter = new ContactStoreNavigator();

export function getNavigator(): IContactNavigator {
  if (
    router.currentRoute.name !== undefined &&
    router.currentRoute.name.length > 0 &&
    router.currentRoute.name.startsWith('contact')
  ) {
    return urlRouter;
  }

  return storeRouter;
}
