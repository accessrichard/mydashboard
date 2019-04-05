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

export interface IContactNavigator {
  list(): void;
  edit(name: string): void;
  view(name: string): void;
}

export interface IComment {
  revisedBy?: IIdentityReference;
  revisedDate?: Date;
  revision?: number;
  text?: string;
}

export interface IIdentityReference {
  id?: string;
  name?: string;
  url?: string;
}

export interface IWorkItemRelation {
  rel: string;
  url: string;
  creationDate?: string;
  name?: string;
}

export interface IWorkItemFields {
  areaPath: string;
  attachments?: IWorkItemRelation[];
  teamProject: string;
  iterationPath?: string;
  workItemType: string;
  state: string;
  reason: string;
  assignedTo?: string;
  createdDate: Date;
  createdBy: string;
  changedDate: Date;
  changedBy: string;
  title?: string;
  boardColumn?: string;
  boardColumnDone?: string;
  stateChangeDate: Date;
  activityDate?: Date;
  resolvedDate?: Date;
  resolvedBy?: string;
  storyPoints?: number;
  description?: string;
  history?: string;
  tags?: string;
  id?: number;
  nodeName?: string;
  remainingWork?: number;
  originalEstimate?: number;
  completedWork?: number;
  revisions?: IChangeHistory[];
  links?: IWorkItemRelation[];
  comments?: IComment[];
  reproSteps?: string;
  systemInfo?: string;
  [key: string]: any;
}

export interface IChangeHistory {
  [key: string]: any;
  changedBy?: string;
  changedDate?: string;
}
