import { create } from 'zustand';

type IArgumentsDelay = {
    delay: number,
}

const useDelay = create<IArgumentsDelay>()(() => ({
    //Default values
    delay: 2000
}));

export { useDelay }