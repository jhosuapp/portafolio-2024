import '@testing-library/jest-dom';
import { switchSlice, setMode  } from '../../../../src/store/slices/Switch/switchSlice';

    
describe('switchSlice', ()=>{

    const initialState = {
        modes: {
            dark_mode: false
        }
    }
        
    it('should return initial state', ()=>{
        expect(switchSlice.name).toBe('switch');

        const state = switchSlice.reducer(initialState, {} as any);
        
        expect(state).toEqual(initialState);
    });

    it('should update state', ()=>{
        const state = switchSlice.reducer(initialState, setMode(true));
        
        expect(state.modes.dark_mode).toEqual(true);
    });
    
});