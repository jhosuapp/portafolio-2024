import { create } from 'zustand';

type IArgumentsDelay = {
    delay: number,
}

const useDelay = create<IArgumentsDelay>()((set) => ({
    //Default values
    delay: 2000
}));

export { useDelay }