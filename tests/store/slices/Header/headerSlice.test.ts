import '@testing-library/jest-dom';
import { headerSlice, setHamburger } from '../../../../src/store/slices/Header/headerSlice';

    
describe('headerSlice', ()=>{

    const initialState = {
        hamburger: false,
    }
        
    it('should return initial state', ()=>{
        expect(headerSlice.name).toBe('header');

        const state = headerSlice.reducer(initialState, {} as any);
        
        expect(state).toEqual(initialState);
    });
    
    it('should change hamburger state', ()=>{
        const state = headerSlice.reducer(initialState, setHamburger(true));

        expect(state.hamburger).toEqual(true);
    });
    
});