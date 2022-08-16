export enum UserRole {
  ROLE_STUDENT = "ROLE_STUDENT",
  ROLE_STOREMANAGER = "ROLE_STOREMANAGER",
}

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

export interface IUserModifyRequest {
  requestedIdentifier: string;
  wantToChangeIdentifier: string;
  wantToChangeName: string;
  wantToChangePlainPassword: string;
  wantToChangeUserRole: UserRole;
}

export interface ICoinDtoList {
  name: string;
  issuance: number;
}

export interface ICoinDetail {
  totalCoinNumber: number;
  totalPage: number;
  coinDtoList: ICoinDtoList[];
}
