import { create } from "zustand";

interface DrawerState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

const useDrawerStore = create<DrawerState>(set => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useDrawerStore;