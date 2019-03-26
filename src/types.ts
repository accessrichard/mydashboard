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

export interface IContactRouter {
  list(): void;
  edit(name: string): void;
  view(name: string): void;
}
