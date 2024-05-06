import { atom } from "recoil";
import { expense } from "../types/expense";

const expense = atom<expense[]>({
  key: "expense",
  default: [],
});

export { expense };
