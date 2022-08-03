import { atom } from "recoil";

export const authAtom = atom({
  key: "auth",
  default: {
    accessToken: "",
    isLogin: false,
    id: 0,
  },
});
