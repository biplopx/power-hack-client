import create from "zustand";

const useStore = create((set) => ({
    totalPaidAmount: 0,
    isLoggedIn: false,
    userEmail: "",
    setTotalPaidAmount: (total) => set((state) => ({
        totalPaidAmount: total
    })),
    setIsLoggedIn: (isLogged) => set((state) => ({
        isLoggedIn: isLogged
    })),
    setUserEmail: (email) => set((state) => ({
        userEmail: email
    })),
})); export default useStore;