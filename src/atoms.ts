import { atom } from "recoil";

export const authAtom = atom({
  key: "auth",
  default: { accessToken: "" },
});

export const modalState = atom({
  key: "modal",
  default: false,
});

export const transactionDate = atom({
  key: "trDate",
  default: { dateTimeRange: "", fromLocalDateTime: "", untilLocalDateTime: "" },
});

export const transactionSender = atom({
  key: "trSender",
  default: "",
});

export const transactionReceiver = atom({
  key: "trReceiver",
  default: "",
});

export const transactionSenderRole = atom({
  key: "trSenderRole",
  default: "",
});

export const transactionReceiverRole = atom({
  key: "trReceiverRole",
  default: "",
});
