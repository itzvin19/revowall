import { create } from "zustand";

type StoreType = {
	menuMobile: boolean;
	openMenu: () => void;
	closeMenu: () => void;
};

export const useIndexStore = create<StoreType>((set) => ({
	menuMobile: false,
	openMenu: () => set({ menuMobile: true }),
	closeMenu: () => set({ menuMobile: false }),
}));
