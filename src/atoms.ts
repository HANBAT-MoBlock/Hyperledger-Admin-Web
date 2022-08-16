import { atom } from "recoil";

export const authAtom = atom({
  key: "auth",
  default: { accessToken: "" },
});

export const modalState = atom({
  key: "modal",
  default: false,
});
