import { useRecoilState } from "recoil";
import { authAtom } from "./atoms";

const BASE_URL = "http://119.203.225.3:8081";

export const fetchAllUser = (jwt: string, page: number) => {
  return fetch(`${BASE_URL}/admin/users?${page}`, {
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
