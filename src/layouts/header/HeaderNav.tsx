import { motion } from "framer-motion";
import { HeaderNavItem } from './HeaderNavItem';
import { HeaderNavCta } from "./HeaderNavCta";

const HeaderNav = ():JSX.Element => {
    return (
        <motion.nav className="header__nav">
            <ul>
                <HeaderNavItem text='HOME' link='/' />
                <HeaderNavItem text='CONTACT' link='/contact' />
                <HeaderNavItem text='OTHER PAGE' link='/other-page' />
            </ul>
            <HeaderNavCta />
        </motion.nav>
    )
}

export { HeaderNav }