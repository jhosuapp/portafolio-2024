import { createSlice } from '@reduxjs/toolkit'

export const delaySlice = createSlice({
    name: 'counter',
    initialState: {
        delay: 2000
    },
    reducers: {  },
});

// Action creators are generated for each case reducer function
export const { } = delaySlice.actions;