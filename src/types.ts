export default interface IGetPagesResponse {
  pages: string[];
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
  createDate?: Date;
  completeDate?: Date;
  id?: number;
  title: string;
  routerLinkUrl?: string;
  urlName?: string;
}

export interface IContact {
  name: string;
  cellPhone: string;
  workPhone: string;
  email: string;
  link: string;
  color: string;
  isFavorite: boolean;
  lastupdate: Date;
  id: number;
}

export interface IContactView {
  [key: string]: any;
}

export const CONTACT_VIEW: IContactView = {
  LIST: 'contact-list',
  EDIT: 'contact-edit',
  VIEW: 'contact-card'
};

export interface IContactNavigator {
  list(): void;
  edit(name: string): void;
  view(name: string): void;
}

export interface IHtmlDialog {
  title?: string;
  html?: string;
  isVisible: boolean;
}

export interface IKeyValue {
  key: any;
  value: any;
}

export interface ILink {
  href: string;
  text: string;
}

export interface IWindowError {
  message: any;
  url: any;
  col: any;
  line: any;
}

export interface IVueError {
  error: any;
  vm: any;
  info: any;
}