import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import WikiService from '@/components/wiki/WikiService';
import store from '@/store';

const service = new WikiService();

@Module({ dynamic: true, namespaced: true, name: 'wiki', store })
class Wiki extends VuexModule {
  public pages: string[] = [];

  public selectedPageContent: string = '';

  @Action({ commit: 'GET_PAGES' })
  public async getPages(): Promise<string[]> {
    const pages = await service.getPages();
    return pages;
  }

  @Action({ commit: 'GET_PAGE' })
  public async getPage(page: string): Promise<string> {
    const p = await service.getPage(page).catch(err => {
      return '# Create New Page\n\n Your page was not found.';
    });

    return p;
  }

  @Action({ commit: 'SAVE_PAGE' })
  public async savePage(obj: any): Promise<void> {
    return service.savePage(obj.page, obj.content).then(newPage => {
      return obj.page;
    });
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
  public GET_PAGE(content: string) {
    this.selectedPageContent = content;
  }

  @Mutation
  public SAVE_PAGE(page: string) {
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
