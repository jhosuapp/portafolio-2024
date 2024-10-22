import { Button } from '../../components';
import { useAppDispatch, useAppSelector } from "../../hooks/Redux/useRedux";
import { Dispatch } from "@reduxjs/toolkit";
import { setHamburger } from "../../store/slices/Header";

const HeaderButtons = ():JSX.Element => {

    const { hamburger } = useAppSelector( state => state.header );
    const dispatch: Dispatch<any> = useAppDispatch()

    return (
        <div className="header__buttons">
            <Button 
                className='btn--primary h-text'
                Text={ `LET'S TALK` }
                HoverText='Do it'
                onClick={ ()=>{
                    console.log('hola');
                } }
            />
            <Button 
                className={`btn--secondary btn--hover-dot ${hamburger ? 'active' : ''}`}
                Text='MENU'
                HoverText='CLOSE'
                onClick={ () => dispatch(setHamburger(!hamburger)) }
            />
        </div>
    )
}

export { HeaderButtons }