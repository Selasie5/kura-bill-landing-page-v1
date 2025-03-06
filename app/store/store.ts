import {create} from  "zustand"

interface UserRole {
    isPharmacist: boolean;
    toggleRole: ()=>void;
}

interface ModalStore {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}


export const useUserRoleStore = create<UserRole>((set) => ({
    isPharmacist: false,
    toggleRole: () => set((state) => ({ isPharmacist: !state.isPharmacist })),
}));


export const useModalStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
  }));