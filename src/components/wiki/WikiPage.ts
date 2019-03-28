import { Component, Vue } from 'vue-property-decorator';
import marked from 'marked';
import WikiApi from '@/components/wiki/WikiApi';

export default class PageMixin extends Vue {
  public content: string = '';

  protected service: WikiApi;

  constructor() {
    super();
    this.service = new WikiApi();
  }

  public getHtmlContent(pageName: string): Promise<string> {
    return this.getContent(pageName, content => {
      return marked(content, { sanitize: true });
    });
  }

  public getMarkdownContent(pageName: string): Promise<string> {
    return this.getContent(pageName, content => {
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

  private getContent(pageName: string, callback: (content: string) => string): Promise<string> {
    if (pageName === undefined) {
      throw new Error('Page is required.');
    }

    return this.getPage(pageName).then(content => {
      return callback(content);
    });
  }
}
