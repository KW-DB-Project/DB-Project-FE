import {atom} from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

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
  effects_UNSTABLE : [persistAtom],
})