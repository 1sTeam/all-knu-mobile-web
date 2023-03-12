import { atom } from "recoil";

export type SessionStore = {};

export const sessionStore = atom<SessionStore>({
  key: "sessionStore",
  default: {},
});
