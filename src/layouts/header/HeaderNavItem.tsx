import { NavLink, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
//Types
import { IHeaderNavItem } from '../../models';

const HeaderNavItem = ({ text, link }: IHeaderNavItem ):JSX.Element => {

    const match = useMatch(link);
  
    const isActive = match !== null;

    return (
        <motion.li className={isActive ? 'active-route' : ''}>
            <NavLink className='h-text' to={ link }>
                <div>
                    <span>{ text }</span>
                    <span>{ text }</span>
                </div>
            </NavLink>
        </motion.li>
    )
}

export { HeaderNavItem }