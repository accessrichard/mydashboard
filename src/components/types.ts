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
