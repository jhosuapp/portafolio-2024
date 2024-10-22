//Types
import { IButtonProps } from '@/models';

const Button = ( { Text, HoverText, className, isDisabled, isLoading, children, ...attributes }:IButtonProps ):JSX.Element => {
    return (
        <button 
            className={`
                btn ${className}
                ${isDisabled && 'disabled'}
                ${isLoading && 'loading'}
                ${children && 'direction-row'}
            `}
            { ...attributes }
        >
            { children }
            <div>
                <span>{ Text }</span>
                <span>{ isLoading ? 'Loading...' : HoverText }</span>
            </div>
            <div>
                <b></b>
            </div>
        </button>
    )
}

export { Button }