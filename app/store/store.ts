import {create} from  "zustand"

interface UserRole {
    isPharmacist: boolean;
    toggleRole: ()=>void;
}

export const useUserRoleStore = create<UserRole>((set) => ({
    isPharmacist: false,
    toggleRole: () => set((state) => ({ isPharmacist: !state.isPharmacist })),
}));