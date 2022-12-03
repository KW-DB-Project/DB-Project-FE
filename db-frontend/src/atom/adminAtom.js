import {atom} from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

export const adminTab = atom({
  key : "adminTab",
  default : {
    adminTab: 0
  },
  effects_UNSTABLE : [persistAtom],
})