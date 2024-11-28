import { startGoogleSignIn } from "../../../../src/store/slices/Auth/thunks";
import { checkingCredentials } from "../../../../src/store/slices/Auth/authSlice";
// import { } from "../../../../src/firebase/providers";

jest.mock('../../../../src/firebase/providers');

// jest.mock('../../../../src/store/slices/Auth/authSlice');

describe('startGoogleSignIn', ()=>{

    beforeEach(()=>{

    });

    it('should test startGoogleSignIn function', ()=>{
        const startGoogleSignInTest = startGoogleSignIn();

        expect(startGoogleSignInTest).toEqual( expect.any(Function) );
    });
});