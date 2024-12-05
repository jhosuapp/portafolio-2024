import { startGoogleSignIn, startCreatingUserWithEmailPassword, startLogout, startLoginWithEmailPassword } from "../../../../src/store/slices/Auth/thunks";
import { loginWithEmailPassword, signInWithGoogle, registerWithEmailPassword, logoutFirebase } from "../../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../../src/store/slices/Auth";
import { demoUser, notAuthenticatedState } from '../../../fixtures/authFixtures';

//Mock firebase
jest.mock('../../../../src/firebase/providers');
//Global values
const mockUseDispatch = jest.fn();
const loginData = {
    ...demoUser,
    ok: true
}
const loginWithEmailData = {
    ...loginData,
    password: 'pass'
}
const logoutData = {
    ...notAuthenticatedState,
    ok: false,
    errorMessage: 'Ha ocurrido un error',
}
const logoutWithEmailData = {
    ...logoutData,
    email: 'email',
    displayName: 'name',
    password: 'pass'
}
const loginWithEmailPasswordDummy = {
    email: 'email',
    password: 'name'
}

describe('startGoogleSignIn', ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
        (signInWithGoogle as jest.Mock).mockResolvedValue(loginData);
    });

    it('should test startGoogleSignIn function', ()=>{
        const startGoogleSignInTest = startGoogleSignIn();

        expect(startGoogleSignInTest).toEqual( expect.any(Function) );
    });

    it('should validate dispatch with checking credentials', async ()=>{
        await startGoogleSignIn()(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    it('should validate dispatch with login', async ()=>{
        await startGoogleSignIn()(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(login(loginData));
    });

    it('should validate logout when result not it"s ok', async ()=>{

        (signInWithGoogle as jest.Mock).mockResolvedValue(logoutData);

        await startGoogleSignIn()(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(logout(logoutData));

    });
});

describe('startCreatingUserWithEmailPassword', ()=>{
    //Mock values
    beforeEach(()=>{
        jest.clearAllMocks();
        (registerWithEmailPassword as jest.Mock).mockResolvedValue(loginData);
    });

    it('should test startCreatingUserWithEmailPasswordInTest function', ()=>{
        const { email, displayName, password } = loginWithEmailData;

        const startCreatingUserWithEmailPasswordInTest = startCreatingUserWithEmailPassword({ email, displayName, password});

        expect(startCreatingUserWithEmailPasswordInTest).toEqual( expect.any(Function) );
    });

    it('should validate dispatch with checking credentials', async ()=>{
        const { email, displayName, password } = loginWithEmailData;

        await startCreatingUserWithEmailPassword({ email, displayName, password})(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    it('should validate dispatch with login', async ()=>{
        const { email, displayName, password } = loginWithEmailData;

        await startCreatingUserWithEmailPassword({ email, displayName, password})(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(login(loginData));
    });

    it('should validate dispatch with logout', async ()=>{

        (registerWithEmailPassword as jest.Mock).mockResolvedValue(logoutWithEmailData);

        const { email, displayName, password } = logoutWithEmailData;

        await startCreatingUserWithEmailPassword({ email, displayName, password})(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(logout(logoutWithEmailData));
    });
});

describe('startLoginWithEmailPassword', ()=>{
    //Mock values
    beforeEach(()=>{
        jest.clearAllMocks();
        (loginWithEmailPassword as jest.Mock).mockResolvedValue(loginData);
    });

    it('should test startLoginWithEmailPassword function', ()=>{
        const { email, password } = loginWithEmailPasswordDummy;

        const startLoginWithEmailPasswordInTest = startLoginWithEmailPassword({ email, password});

        expect(startLoginWithEmailPasswordInTest).toEqual( expect.any(Function) );
    });

    it('should checking credentials dispatch ', async ()=>{
        const { email, password } = loginWithEmailPasswordDummy;

        await startLoginWithEmailPassword({ email, password})(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    it('should checking login dispatch ', async ()=>{
        const { email, password } = loginWithEmailPasswordDummy;

        await startLoginWithEmailPassword({ email, password})(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(login(loginData));
    });

    it('should checking logout dispatch ', async ()=>{
        (loginWithEmailPassword as jest.Mock).mockResolvedValue(logoutData);

        const { email, password } = loginWithEmailPasswordDummy;

        await startLoginWithEmailPassword({ email, password})(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(logout(logoutData));
    });
    
});

describe('startCreatingUserWithEmailPassword', ()=>{
    //Mock values
    beforeEach(()=>{
        jest.clearAllMocks();
        (logoutFirebase as jest.Mock).mockResolvedValue('');
    });

    it('should startCreatingUserWithEmailPassword Function', ()=>{
        const startLogoutInTest = startLogout();

        expect(startLogoutInTest).toEqual( expect.any( Function ) );
    });

    it('should validate logout', async ()=>{
        await startLogout()(mockUseDispatch);

        expect(mockUseDispatch).toHaveBeenCalledWith(logout(''));
    });

});