import {atom} from "recoil";

export const isLoginedAtom = atom({
  key : "isLogined",
  default : {
    isLogined: false,
    userName: "",
    id: "",
    password: "",
    age : 0,
    balance : 0,
  },
})