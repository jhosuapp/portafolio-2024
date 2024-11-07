import { createSlice } from '@reduxjs/toolkit';

interface SwitchState {
    modes: {
        dark_mode: boolean
    }
}

const initialState: SwitchState = {
    modes: {
        dark_mode: false
    }
};

export const switchSlice = createSlice({
    name: 'switch',
    initialState: initialState,
    reducers: {
        setMode: (state, action) => {
            state.modes.dark_mode = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setMode } = switchSlice.actions;