import '@testing-library/jest-dom';
import { delaySlice  } from '../../../../src/store/slices/Delay/delaySlice';

    
describe('authSlice', ()=>{

    const initialState = {
        delay: 2000
    }
        
    it('should return initial state', ()=>{
        expect(delaySlice.name).toBe('delay');

        const state = delaySlice.reducer(initialState, {} as any);
        
        expect(state).toEqual(initialState);
    });
    
});