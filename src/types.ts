export default interface IGetPagesResponse {
  pages: string[];
}

export interface ILink {
  text: string;
  href: string;
}

export interface ILinks {
  header: string;
  links: ILink[];
}

export interface IRootState {
  version: string;
}

export interface ILayout {
  leftSidebar: ISideBar;
  wikiSidebar: ISideBar;
}

export interface ISideBar {
  isVisible: boolean;
}

export interface ITodo {
  createDate: Date;
  completeDate: Date;
  content: string;
  id: number;
  title: string;
  type: string;
}
