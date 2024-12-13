import { createSlice } from '@reduxjs/toolkit';

interface SwitchState {
    status: boolean;    
}

const initialState: SwitchState = {
    status: true
};


export const soundSlice = createSlice({
    name: 'sound',
    initialState: initialState,
    reducers: {
        updateStatus: (state) => {
            state.status = !state.status;
        },
    }
});


// Action creators are generated for each case reducer function
export const { updateStatus } = soundSlice.actions;