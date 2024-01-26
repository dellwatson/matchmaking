import { create } from "zustand";

const authStore = create((set, get) => {
  return {
    set,
    get,
    isModalReveal: false,
    setModalReveal: (v: boolean) => set({ isModalReveal: v }),
    profiles: [],
    addProfile: (profiles: any) => {
      set({
        profiles,
      });
    },
    removeProfile: (profiles: any) => {
      set({
        profiles,
      });
    },
    // check already exist or not
    // }
    // checkExist : (_id: number) => {
    // }
  };
});

export default authStore;
