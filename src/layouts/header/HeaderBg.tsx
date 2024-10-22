import { motion } from 'framer-motion'
//Store
import { useAppDispatch, useAppSelector } from "../../hooks/Redux/useRedux";
import { Dispatch } from "@reduxjs/toolkit";
import { setHamburger } from "../../store/slices/Header";
//Variants
import { variantsHeaderBg } from '../../variants';

const HeaderBg = ():JSX.Element => {

    const { hamburger } = useAppSelector( state => state.header );
    const dispatch: Dispatch<any> = useAppDispatch();

    return (
        <motion.div 
            className={`header__bg ${hamburger ? 'pointersAuto' : 'pointersNone'}`}
            animate={ hamburger ? 'open' : 'close' }
            variants={ variantsHeaderBg }
            onClick={ () => dispatch(setHamburger(!hamburger)) }
        ></motion.div>
    )
}

export { HeaderBg }