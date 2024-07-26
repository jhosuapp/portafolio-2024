import { NavLink, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
//Types
import { IHeaderNavItem } from '../../models';
//Variants
import { variantsHeaderChildren } from '../../variants';

const HeaderNavItem = ({ text, link }: IHeaderNavItem ):JSX.Element => {

    const match = useMatch(link);
  
    const isActive = match !== null;

    return (
        <motion.li 
            variants={ variantsHeaderChildren }
            className={isActive ? 'active-route' : ''}
            whileTap={{ scale: 0.95 }}
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