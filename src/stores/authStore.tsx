import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

interface User {
  id: string;
  email: string;
}

interface UserItem {
  token: string;
  user: User;
}

interface AuthState {
  currentUser: UserItem | null;
  isAuthenticated: boolean;
  addUserAuth: (newUser: UserItem) => void;
  logoutUserAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      currentUser: null,
      isAuthenticated: false,

      addUserAuth: (newUser: UserItem) => {
        set({
          currentUser: newUser,
          isAuthenticated: true,
        });
      },

      logoutUserAuth: () => {
        set({
          currentUser: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
