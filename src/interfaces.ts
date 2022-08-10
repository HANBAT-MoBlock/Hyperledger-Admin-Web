export interface IUserDetail {
  dateCreated: string;
  identifier: string;
  lastUpdated: string;
  name: string;
}

export interface IPageDetail {
  totalPage: number;
  totalUserNumber: number;
  userDtoList: IUserDetail[];
}
