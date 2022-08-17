import { GridSelectionModel } from "@mui/x-data-grid/models/gridSelectionModel";
import { ICoinDetail, UserRole } from "./interfaces";
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
      coinNameList: userNameList,
    }),
  });
};
