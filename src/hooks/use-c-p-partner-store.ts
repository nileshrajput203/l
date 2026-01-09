
import { create } from 'zustand';

interface CPPartnerStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useCPPartnerStore = create<CPPartnerStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
