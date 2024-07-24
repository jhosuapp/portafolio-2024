//Types
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
//Custom types
type PropsNative = HTMLAttributes<HTMLElement>;
type PropsReact = { children: ReactNode }

type Props = PropsNative & PropsReact;

const Container = ( { children, ...PropSection }: Props ):JSX.Element=>{
    return(
        <section { ...PropSection } >
            { children }
        </section>
    );
}

export { Container }