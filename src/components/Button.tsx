//Types
import { IButtonProps } from '../models';


const Button = ( { Text, HoverText, className, ...attributes }:IButtonProps ):JSX.Element => {
    return (
        <button 
            className={`btn ${className}`}
            { ...attributes }
        >
            <div>
                <span>{ Text }</span>
                <span>{ HoverText }</span>
            </div>
        </button>
    )
}

export { Button }