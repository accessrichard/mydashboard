import { Component, Vue } from 'vue-property-decorator';
import marked from 'marked';
import WikiService from '@/views/wiki/WikiService';

export default class PageMixin extends Vue {
  public content: string = '';

  protected service: WikiService;

  constructor() {
    super();
    this.service = new WikiService();
  }

  public getHtmlContent(): Promise<string> {
    return this.getContent(content => {
      return marked(content, { sanitize: true });
    });
  }

  public getMarkdownContent(): Promise<string> {
    return this.getContent(content => {
      return content;
    });
  }

  public getPageName(): string {
    return this.$route.params.page;
  }

  public getPage(name: string): Promise<string> {
    return this.service.getPage(name).then(response => {
      return response;
    });
  }

  public saveMarkdown(content: string): Promise<void> {
    return this.service.savePage(this.getPageName(), content);
  }

  private getContent(callback: (content: string) => string): Promise<string> {
    const page = this.getPageName();
    if (page === undefined) {
      throw new Error('Page is required.');
    }

    return this.getPage(page).then(content => {
      return callback(content);
    });
  }
}
