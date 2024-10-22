import { createSlice } from '@reduxjs/toolkit';

interface DelayState {
    delay: number;
}

const initialState: DelayState = {
    delay: 2000,
};

export const delaySlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {  },
});

// Action creators are generated for each case reducer function
export const { } = delaySlice.actions;