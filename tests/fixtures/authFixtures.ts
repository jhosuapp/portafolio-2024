import { AuthState } from "../../src/store/slices/Auth";

export const initialState:AuthState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authenticatedState:AuthState = {
    status: 'auth',
    uid: 123,
    email: 'test@gmail.com',
    displayName: 'User Test',
    photoURL: 'http://photo.com',
    errorMessage: null
}

export const notAuthenticatedState:AuthState = {
    status: 'not-auth',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const demoUser = {
    uid: 123,
    email: 'test@gmail.com',
    displayName: 'User Test',
    photoURL: 'http://photo.com',
}

