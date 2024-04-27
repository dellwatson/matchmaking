import { create } from "zustand";

const useMessageStore = create((set) => ({
  messages: [],

  addMessage: (message, category) =>
    set((state) => ({
      messages: [...state.messages, { text: message, category }],
    })),

  clearMessages: () => set({ messages: [] }),
}));

export default useMessageStore;
