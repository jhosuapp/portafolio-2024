import { motion } from "framer-motion";
import { HeaderNavItem } from './HeaderNavItem';

const HeaderNav = ():JSX.Element => {
    return (
        <motion.nav className="header__nav">
            <ul>
                <HeaderNavItem text='HOME' link='/' />
                <HeaderNavItem text='CONTACT' link='/contact' />
                <HeaderNavItem text='OTHER PAGE' link='/other-page' />
            </ul>
            <a href="#">
                <img src="" alt="" />
                <div>
                    <span>GITHUB</span>
                    <span>JHOSUAPP</span>
                </div>
            </a>
        </motion.nav>
    )
}

export { HeaderNav }