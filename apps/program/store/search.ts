import { atom } from "recoil";

const searchStore = atom({
  key: "searchStore",
  default: "",
});

export default searchStore;
