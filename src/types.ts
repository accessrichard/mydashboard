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

export interface IDates {
  startDate: string;
  finishDate: string;
}

export interface IIterationPath {
  id: string;
  name: string;
  path: string;
  attributes: IDates;
}

export interface IIterationSetting {
  isOn: boolean;
  iteration: IIterationPath;
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

export interface IHtmlDialog {
  title?: string;
  html?: string;
  isVisible: boolean;
}

export interface IKeyValue {
  key: any;
  value: any;
}
export interface ILinkCategory {
  text: string;
  links: ILink[];
}

export interface ILink {
  href: string;
  text: string;
}

export interface IWorkFilter {
  iterations?: string[];
  user?: string;
  statuses?: string[];
  types?: string[];
}

export interface ISelectedWork {
  name: string;
  isOn: boolean;
}
