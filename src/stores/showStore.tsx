import { create } from "zustand";
type State = {
  showItem: string;
};
type Actions = {
  setShowItem: (newShowItem: string) => void;
};
const useShowItem = create<State & Actions>((set) => ({
  showItem: "10",
  setShowItem: (newShowItem) => set({ showItem: newShowItem }),
}));
export default useShowItem;
