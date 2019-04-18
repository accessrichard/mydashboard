import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import { ISideBar } from '@/types';
import store from '@/lib/store';

@Module({ dynamic: true, namespaced: true, name: 'layout', store })
class LayoutStore extends VuexModule {
  public leftSidebar: ISideBar = {
    isVisible: false
  };

  @Action({ commit: 'commitToggleLeftSidebar' })
  public toggleLeftSidebar(val: ISideBar): ISideBar {
    return val;
  }

  @Mutation
  public commitToggleLeftSidebar(state: ISideBar) {
    this.leftSidebar = state;
  }
}

export default getModule(LayoutStore);
