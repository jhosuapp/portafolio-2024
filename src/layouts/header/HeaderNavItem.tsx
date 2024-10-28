import { NavLink, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
//Types
import { IHeaderNavItem } from '@/models';
//Variants
import { variantsHeaderChildren } from '@/variants';
//Store
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Dispatch } from "@reduxjs/toolkit";
import { setHamburger } from "@/store/slices/Header";

const HeaderNavItem = ({ text, link, callBack }: IHeaderNavItem ):JSX.Element => {

    const { hamburger } = useAppSelector( state => state.header );
    const dispatch: Dispatch<any> = useAppDispatch()
    //Validate if current route is equal to url
    const match = useMatch(link ? link : 'N/A');
    const isActive = match !== null;

    return (
        <motion.li 
            variants={ variantsHeaderChildren }
            className={isActive ? 'active-route' : ''}
            whileTap={{ scale: 0.95 }}
            onClick={ () => { dispatch(setHamburger(!hamburger)), callBack && callBack(); } }
        >
            {link ? (
                <NavLink className='h-text fullwidth' to={ link }>
                    <div>
                        <span>{ text }</span>
                        <span>{ text }</span>
                    </div>
                </NavLink>
            ) : (
                <a className="h-text fullwidth">
                    <div>
                        <span>{ text }</span>
                        <span>{ text }</span>
                    </div>
                </a>
            )}
        </motion.li>
    )
}

export { HeaderNavItem }