import { create } from "zustand";
type State = {
  search: string;
};
type Actions = {
  setSearch: (newSearch: string) => void;
};
const useSearch = create<Actions & State>((set) => ({
  search: "",
  setSearch: (newSearch) => set({ search: newSearch }),
}));
export default useSearch;
