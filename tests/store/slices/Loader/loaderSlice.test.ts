import '@testing-library/jest-dom';
import { loaderSlice, setIsLoad, setLoaderComponent  } from '../../../../src/store/slices/Loader/loaderSlice';

    
describe('loaderSlice', ()=>{

    const initialState = {
        isLoad: false,
        loaderComponent: false
    }
        
    it('should return initial state', ()=>{
        expect(loaderSlice.name).toBe('loader');

        const state = loaderSlice.reducer(initialState, {} as any);
        
        expect(state).toEqual(initialState);
    });
    
    it('should update state isLoad', ()=>{
        const state = loaderSlice.reducer(initialState, setIsLoad());

        expect(state.isLoad).toEqual(true);
    });

    it('should update state setLoaderComponent', ()=>{
        const state = loaderSlice.reducer(initialState, setLoaderComponent());

        expect(state.loaderComponent).toEqual(true);
    });
    
});