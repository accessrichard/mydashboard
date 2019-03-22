import { IContact, CONTACT_VIEW, IContactRouter } from '@/types';
import router from '@/router';
import ContactStoreRouter from './ContactStoreRouter';
import ContactUrlRouter from './ContactUrlRouter';

const urlRouter = new ContactUrlRouter();
const storeRouter = new ContactStoreRouter();

export function getRouter(): IContactRouter {
  if (
    router.currentRoute.name !== undefined &&
    router.currentRoute.name.length > 0 &&
    router.currentRoute.name.startsWith('contact')
  ) {
    return urlRouter;
  }

  return storeRouter;
}
