import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import WikiApi from '@/components/wiki/WikiApi';
import store from '@/lib/store';

const service = new WikiApi();

@Module({ dynamic: true, namespaced: true, name: 'wiki', store })
class Wiki extends VuexModule {
  public pages: string[] = [];

  @Action({ commit: 'GET_PAGES' })
  public async getPages(): Promise<string[]> {
    if (this.pages.length > 0) {
      return this.pages;
    }

    const pages = await service.getPages();
    return pages;
  }

  @Action({ commit: 'REMOVE_PAGE' })
  public removePage(page: string) {
    return service.removePage(page).then(deletedPage => {
      return deletedPage;
    });
  }

  @Mutation
  public GET_PAGES(pages: string[]) {
    this.pages = pages;
  }

  @Mutation
  public ADD_PAGE(page: string) {
    if (
      this.pages.filter(p => {
        return p === page;
      }).length > 0
    ) {
      return;
    }

    this.pages.push(page);
  }

  @Mutation
  public REMOVE_PAGE(page: string) {
    const id = this.pages.indexOf(page);
    this.pages.splice(id, 1);
  }
}

export default getModule(Wiki);
