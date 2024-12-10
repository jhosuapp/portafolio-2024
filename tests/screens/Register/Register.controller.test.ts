
import { renderHook, act } from '@testing-library/react'
import { useRegisterController } from '../../../src/screens//Register/Register.controller';
import { useSelector } from 'react-redux';

//mocks values
const mockUseDispatch = jest.fn();
//Redux mock
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockUseDispatch,
}));

describe('Register.controller', ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
        //@ts-ignore
        (useSelector as jest.Mock).mockReturnValue({
            status: 'test',
            errorMessage: 'test error'
        });
    });

    it('should render hook with default values', ()=>{
        const { result } = renderHook( () => useRegisterController() );
        const { 
            handleSubmit,
            onSubmit,
            errors,
            disabledButton,
            errorMessage,
            isValid
         } = result.current;

         expect(handleSubmit).toEqual( expect.any( Function ) );
         expect(onSubmit).toEqual( expect.any( Function ) );
         expect(disabledButton).toBeFalsy();
         expect(errors).toEqual({});
         expect(errorMessage).toEqual('test error');
         expect(isValid).toBeFalsy();
    });

    it('should validate when status is checking', async()=>{
        //@ts-ignore
        (useSelector as jest.Mock).mockReturnValue({
            status: 'checking',
            errorMessage: 'test error'
        });
        const { result } = renderHook( () => useRegisterController() );
        const { disabledButton } = result.current;

        expect(disabledButton).toBeTruthy();
    });

    it('should simulate onSubmit function', async()=>{
        const { result } = renderHook( () => useRegisterController() );
        const formData = {
            displayName: "test",
            email: "test@test.com",
            password: "test"
        }
        const { 
            onSubmit,
        } = result.current;

        await act(async()=>{
            await onSubmit(formData);
        });

        expect(mockUseDispatch).toHaveBeenCalledWith( expect.any( Function ) );
    });

});