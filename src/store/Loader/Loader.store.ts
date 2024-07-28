import { create } from 'zustand';

type IArgumentsLoader = {
    isLoad: boolean;
    setIsLoad: () => void;
}

const useLoader = create<IArgumentsLoader>()((set) => ({
    //Default values
    isLoad: false,
    setIsLoad: () => set({ isLoad: true })
}));

export { useLoader }