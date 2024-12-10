import { renderHook, act } from '@testing-library/react'
import { useLoginController } from '../../../src/screens/Login/Login.controller';
import { useSelector } from 'react-redux';

//mocks values
const mockUseDispatch = jest.fn();
//Redux mock
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockUseDispatch,
}));

describe('Login.controller', ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
        // @ts-ignore
        (useSelector as jest.Mock).mockReturnValue({
            status: 'test',
            errorMessage: 'test error',
        });
    });
        
    it('should render hook with default values', ()=>{
        const { result } = renderHook(() => useLoginController());
        const { 
            handleSubmit,
            onSubmit,
            errors,
            disabledButton,
            handleGoogleSignIn,
            errorMessage
        } = result.current;
        expect(handleSubmit).toEqual( expect.any( Function ) );
        expect(onSubmit).toEqual( expect.any( Function ) );
        expect(errors).toEqual( {} );
        expect(disabledButton).toBeFalsy();
        expect(handleGoogleSignIn).toEqual( expect.any( Function ) );
        expect(errorMessage).toEqual('test error');
    });



    it('should simulate status checking', ()=>{
        // @ts-ignore
        (useSelector as jest.Mock).mockReturnValue({
            status: 'checking',
            errorMessage: 'test error',
        });

        const { result } = renderHook(() => useLoginController());
        const { 
            disabledButton,
        } = result.current;

        expect(disabledButton).toBeTruthy();
    });

    it('should simulate onSubmit', async ()=>{
        const { result } = renderHook(() => useLoginController());
        const payloadSubmit = { email: 'test@test.com', password: 'test' }
        const { 
            onSubmit,
        } = result.current;


        await act(async ()=>{
            await onSubmit(payloadSubmit);
        });

        expect(mockUseDispatch).toHaveBeenCalledWith( expect.any( Function ) );
        
    });

    it('should simulate handleGoogleSignIn', ()=>{
        const { result } = renderHook(() => useLoginController());
        const { 
            handleGoogleSignIn,
        } = result.current;


        act(()=>{
            handleGoogleSignIn();
        });

        expect(mockUseDispatch).toHaveBeenCalledWith( expect.any( Function ) )
    });

    // it('should react to status changes dynamically', () => {
    //     const mockState = {
    //         status: 'idle',
    //         errorMessage: null,
    //     };
    //     // @ts-ignore
    //     (useSelector as jest.Mock).mockReturnValue((selector) =>
    //         selector(mockState)
    //     );
    
    //     const { result, rerender } = renderHook(() => useLoginController());
    
    //     expect(result.current.disabledButton).toBeFalsy();
    
    //     act(() => {
    //         mockState.status = 'checking';
    //         rerender();
    //     });
    
    //     expect(result.current.disabledButton).toBeTruthy(); // El botón debería estar deshabilitado
    // });
    
});