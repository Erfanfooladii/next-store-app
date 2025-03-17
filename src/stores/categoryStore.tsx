import { create } from "zustand";
type State = {
  category: string;
};
type Actions = {
  setCategory: (newCategory: string) => void;
};
const useCategory = create<Actions & State>((set) => ({
  category: "",
  setCategory: (newCategory) => set({ category: newCategory }),
}));
export default useCategory;
