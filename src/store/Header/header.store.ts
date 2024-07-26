import { create } from 'zustand';

type IArgumentsHeader = {
    hamburger: boolean;
    setHamburger: (state: boolean) => void;
}

const useHeader = create<IArgumentsHeader>()((set) => ({
    //Default values
    hamburger: false,
    setHamburger: (state: boolean) => set({ hamburger: state }),
}));

export { useHeader }