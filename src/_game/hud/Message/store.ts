import { create } from "zustand";

const useMessageStore = create((set) => ({
  messages: [],
  addMessage: (message, category) =>
    set((state) => ({
      messages: [...state.messages, { text: message, category }],
    })),

  clearMessages: () => set({ messages: [] }),

  countdownStarting: false,
  setCountdown: (v) => set({ countdownStarting: v }),
  warningLineDistance: false,
  setWarningLineDistance: (v) => set({ warningLineDistance: v }),
}));

export default useMessageStore;
