import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

interface LayoutSidebar {
  isVisible: boolean;
}

@Module({ namespaced: true })
export default class LayoutModule extends VuexModule {
  public sidebar: LayoutSidebar = {
    isVisible: true
  };

  @Action({ commit: "commitToggleSidebar" })
  public toggleSidebar(val: LayoutSidebar): LayoutSidebar {
    return val;
  }

  @Mutation
  public commitToggleSidebar(state: LayoutSidebar) {
    this.sidebar = state;
  }
}
