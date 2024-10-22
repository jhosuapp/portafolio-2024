import { IInputProps } from '@/models';

const Input = ({ errorMessage, ...props }:IInputProps ):JSX.Element => {
    return (
        <>
            <input { ...props } />
            {errorMessage && <span className='error'> { errorMessage } </span>}
        </>
    )
}

export { Input }