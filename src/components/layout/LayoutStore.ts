import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { ISideBar } from '@/types';

@Module({ namespaced: true })
export default class LayoutModule extends VuexModule {
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
