import { IInputProps } from '@/models';

const Input = ({ ...props }:IInputProps ):JSX.Element => {
    return (
        <>
            <input { ...props } />
        </>
    )
}

export { Input }