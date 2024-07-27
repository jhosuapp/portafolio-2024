import { NavLink, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
//Types
import { IHeaderNavItem } from '../../models';
//Variants
import { variantsHeaderChildren } from '../../variants';
//Store
import { useHeader } from '../../store/';

const HeaderNavItem = ({ text, link }: IHeaderNavItem ):JSX.Element => {

    const { hamburger, setHamburger } = useHeader(state => state);
    //Validate if current route is equal to url
    const match = useMatch(link);
    const isActive = match !== null;

    return (
        <motion.li 
            variants={ variantsHeaderChildren }
            className={isActive ? 'active-route' : ''}
            whileTap={{ scale: 0.95 }}
            onClick={ () => setHamburger(!hamburger) }
        >
            <NavLink className='h-text fullwidth' to={ link }>
                <div>
                    <span>{ text }</span>
                    <span>{ text }</span>
                </div>
            </NavLink>
        </motion.li>
    )
}

export { HeaderNavItem }