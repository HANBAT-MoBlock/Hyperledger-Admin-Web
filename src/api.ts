import { GridSelectionModel } from "@mui/x-data-grid/models/gridSelectionModel";
import {
  ICoinDetail,
  ICreateStoreRequest,
  IUserDetail,
  IUserModifyReq,
  UserRole,
} from "./interfaces";
import { throws } from "assert";

const BASE_URL = "http://119.203.225.3:8081";

export const fetchAllUser = (jwt: string, page: number) => {
  return fetch(`${BASE_URL}/admin/users?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
  }).then((response) => response.json());
};

export const fetchCoinUsage = (
  jwt: string,
  coinName: string,
  fromLocalDateTime: string,
  toLocalDateTime: string
) => {
  return fetch(
    `${BASE_URL}/admin/trades/coin?coinName=${coinName}&fromLocalDateTime=${fromLocalDateTime}&toLocalDateTime=${toLocalDateTime}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        jwt,
      },
    }
  ).then((response) => response.json());
};

export const fetchAllCoins = (jwt: string, page: number) => {
  return fetch(`${BASE_URL}/admin/coins?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
  }).then((response) => response.json());
};

export const fetchCreateCoin = (jwt: string, coinName: string) => {
  return fetch(`${BASE_URL}/admin/coin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
    body: JSON.stringify({
      coinName: coinName,
    }),
  });
};

export const fetchDeleteCoin = (jwt: string, coinNames: GridSelectionModel) => {
  return fetch(`${BASE_URL}/admin/coin`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
    body: JSON.stringify({
      coinNameList: coinNames,
    }),
  });
};

export const fetchTransferCoinAll = (
  jwt: string,
  coinName: string,
  coinValue: string,
  userRole: UserRole
) => {
  return fetch(`${BASE_URL}/admin/coin/update/assets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
    body: JSON.stringify({
      coinName: coinName,
      coinValue: coinValue,
      userRole: userRole,
    }),
  });
};

export const fetchTransferCoin = (
  jwt: string,
  coinName: string,
  coinValue: string,
  userNameList: string[]
) => {
  return fetch(`${BASE_URL}/admin/coin/update/asset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
    body: JSON.stringify({
      coinName: coinName,
      coinValue: coinValue,
      identifier: userNameList,
    }),
  });
};

export const fetchDeleteUser = (
  jwt: string,
  identifier: GridSelectionModel
) => {
  return fetch(`${BASE_URL}/admin/user`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
    body: JSON.stringify({
      identifier: identifier,
    }),
  });
};

export const fetchUpdateUserId = (jwt: string, userDto: IUserModifyReq) => {
  return fetch(`${BASE_URL}/admin/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
    body: JSON.stringify({
      requestedIdentifier: userDto.requestedIdentifier,
      wantToChangeIdentifier: userDto.wantToChangeIdentifier,
      wantToChangeName: userDto.wantToChangeName,
      wantToChangePlainPassword: userDto.wantToChangePlainPassword,
      wantToChangeUserRole: userDto.wantToChangeUserRole,
    }),
  });
};

export const fetchCreateStore = (jwt: string, formData: FormData) => {
  return fetch(`${BASE_URL}/admin/store`, {
    method: "POST",
    headers: {
      jwt,
    },
    body: formData,
  });
};

export const fetchAllStore = (jwt: string, page: number) => {
  return fetch(`${BASE_URL}/user/stores?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
  }).then((response) => response.json());
};

export const fetchDeleteStore = (
  jwt: string,
  name: string,
  phoneNumber: string
) => {
  return fetch(`${BASE_URL}/admin/store`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
    body: JSON.stringify({
      name: name,
      phoneNumber: phoneNumber,
    }),
  });
};

export const fetchTransaction = (
  jwt: string,
  fromLocalDateTime: string,
  untilLocalDateTime: string,
  senderIdentifier: string,
  receiverIdentifier: string,
  dateTimeRange: string,
  page: number,
  senderUserRole: string | UserRole,
  receiverUserRole: string | UserRole
) => {
  return fetch(
    `${BASE_URL}/admin/trade?dateTimeRange=${dateTimeRange}&fromLocalDateTime=${fromLocalDateTime}&untilLocalDateTime=${untilLocalDateTime}&page=${page}&receiverIdentifier=${receiverIdentifier}&senderIdentifier=${senderIdentifier}&receiverUserRole=${receiverUserRole}&senderUserRole=${senderUserRole}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        jwt,
      },
    }
  ).then((response) => response.json());
};

export const fetchCreateUser = (
  jwt: string,
  identifier: string,
  name: string,
  password: string,
  userRole: UserRole
) => {
  return fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      jwt,
    },
    body: JSON.stringify({
      identifier: identifier,
      name: name,
      password: password,
      userRole: userRole,
    }),
  });
};
