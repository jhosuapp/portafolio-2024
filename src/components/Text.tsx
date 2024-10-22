import { ITextProps } from '@/models';

const Text = ({ children, headingType, className, ...atributtes }: ITextProps):JSX.Element =>{
    return( 
        <>
            {!headingType && <p className={`paragraph ${className} `} {...atributtes}>{ children }</p>}
            {headingType == 'h1' && <h1 className={`title ${className} `} {...atributtes}>{ children }</h1>}
            {headingType == 'h2' && <h2 className={`title-s ${className} `} {...atributtes}>{ children }</h2>}
            {headingType == 'h3' && <h3 className={`subtitle ${className} `} {...atributtes}>{ children }</h3>}
            {headingType == 'h4' && <h4 className={`subtitle-s ${className} `} {...atributtes}>{ children }</h4>}
            {headingType == 'h5' && <h5 className={`${className} `} {...atributtes}>{ children }</h5>}
            {headingType == 'h6' && <h6 className={`${className} `} {...atributtes}>{ children }</h6>}
        </>
    );
}

export { Text }