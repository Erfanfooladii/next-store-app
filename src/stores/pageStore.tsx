import { create } from "zustand";
type State = {
  numberPage: string;
};
type Actions = {
  setNumberPage: (newnumberPage: string) => void;
};
const usePage = create<Actions & State>((set) => ({
  numberPage: "1",
  setNumberPage: (newnumberPage) => set({ numberPage: newnumberPage }),
}));
export default usePage;
