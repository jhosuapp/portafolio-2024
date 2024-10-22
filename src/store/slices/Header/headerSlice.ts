import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'counter',
    initialState: {
        hamburger: false,
    },
    reducers: { 
        setHamburger: (state, action)=>{
            state.hamburger = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setHamburger } = headerSlice.actions;