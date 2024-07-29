import { create } from 'zustand';

type IArgumentsLoader = {
    isLoad: boolean;
    setIsLoad: () => void;
    loaderComponent: boolean;
    setLoaderComponent: () => void;
}

const useLoader = create<IArgumentsLoader>()((set) => ({
    //Default values
    isLoad: false,
    loaderComponent: false,

    setIsLoad: () => set({ isLoad: true }),
    setLoaderComponent: () => set({ loaderComponent: true }),
}));

export { useLoader }