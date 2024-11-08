import { createSlice } from '@reduxjs/toolkit';

interface LoaderState {
    isLoad: boolean;
    loaderComponent: boolean;
}

const initialState: LoaderState = {
    isLoad: false,
    loaderComponent: false,
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialState,
    reducers: { 
        setIsLoad: (state)=>{
            state.isLoad = true;
        },
        setLoaderComponent: (state)=>{
            state.loaderComponent = true;
        },
    },
});

// Action creators are generated for each caese reducer function
export const { setLoaderComponent, setIsLoad } = loaderSlice.actions;