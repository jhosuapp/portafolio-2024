import { motion } from 'framer-motion';
import { HeaderNavItem } from './HeaderNavItem';
import { HeaderNavCta } from './HeaderNavCta';

const HeaderNav = ():JSX.Element => {
    return (
        <motion.nav className='header__nav'>
            <ul>
                <HeaderNavItem text='HOME' link='/' />
                <HeaderNavItem text='CONTACT' link='/contact' />
                <HeaderNavItem text='OTHER PAGE' link='/other-page' />
            </ul>
            <HeaderNavCta 
                text="GITHUB" 
                hoverText="Follow me" 
                link='https://github.com/jhosuapp' 
                background='#02040A'
                iconType='github'
                />
            <HeaderNavCta 
                text="FACEBOOK" 
                hoverText="Follow me" 
                link='https://www.facebook.com/jhosua.penagos/' 
                background='#0766FF'
                iconType='facebook'
                />
            <HeaderNavCta 
                text="INSTAGRAM" 
                hoverText="Follow me" 
                link='https://instagram.com/jhosuapp' 
                background='#D8317A'
                iconType='instagram'
            />
        </motion.nav>
    )
}

export { HeaderNav }