import { createSlice } from '@reduxjs/toolkit';

interface HeaderState {
    hamburger: boolean;
}

const initialState: HeaderState = {
    hamburger: false,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState: initialState,
    reducers: { 
        setHamburger: (state, action)=>{
            state.hamburger = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setHamburger } = headerSlice.actions;