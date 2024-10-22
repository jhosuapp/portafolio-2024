import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoad: false,
        loaderComponent: false,
    },
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