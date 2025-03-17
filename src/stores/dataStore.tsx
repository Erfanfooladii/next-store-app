import { Data } from "@/Interfaces/products";
import { create } from "zustand";
type State = {
  data: Data | [];
};
type Actions = {
  setData: (newData: Data | undefined) => void;
};
const useData = create<Actions & State>((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
}));
export default useData;
