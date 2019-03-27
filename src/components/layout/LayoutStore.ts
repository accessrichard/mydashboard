import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import { ISideBar } from '@/types';
import store from '@/store';

@Module({ dynamic: true, namespaced: true, name: 'layout', store })
class LayoutStore extends VuexModule {
  public leftSidebar: ISideBar = {
    isVisible: true
  };

  public wikiSidebar: ISideBar = {
    isVisible: true
  };

  @Action({ commit: 'commitToggleLeftSidebar' })
  public toggleLeftSidebar(val: ISideBar): ISideBar {
    return val;
  }

  @Action({ commit: 'commitToggleWikiSidebar' })
  public toggleWikiSidebar(val: ISideBar): ISideBar {
    return val;
  }

  @Mutation
  public commitToggleLeftSidebar(state: ISideBar) {
    this.leftSidebar = state;
  }

  @Mutation
  public commitToggleWikiSidebar(state: ISideBar) {
    this.wikiSidebar = state;
  }
}

export default getModule(LayoutStore);
