import '@testing-library/jest-dom';
import { authSlice, checkingCredentials, login, logout, resetErrorMessage } from '../../../../src/store/slices/Auth/authSlice';
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from '../../../fixtures/authFixtures';

    
describe('authSlice', ()=>{
        
    it('should return initial state', ()=>{
        expect(authSlice.name).toBe('auth');

        const state = authSlice.reducer(initialState, {} as any);
        
        expect(state).toEqual(initialState);
        
    });
    
    it('should auth user', ()=>{
        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).toEqual({
            status: 'auth',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        });
    });

    it('should logout user with error message', ()=>{
        const error = {error: 'error'}
        const state = authSlice.reducer(authenticatedState, logout(error));

        expect(state).toEqual({
            ...notAuthenticatedState,
            errorMessage: error.error
        });
    });

    it('should logout user without error message', ()=>{
        const state = authSlice.reducer(authenticatedState, logout(''));

        expect(state).toEqual(notAuthenticatedState);
    });

    it('should update checking credentials', ()=>{
        const state = authSlice.reducer(initialState, checkingCredentials());

        expect(state).toEqual({
            ...initialState,
            status: 'checking'
        });
    });

    it('should reset error message', ()=>{
        const state = authSlice.reducer(initialState, resetErrorMessage());

        expect(state).toEqual({
            ...initialState,
            errorMessage: null
        });
    });
    
});