import { motion } from 'framer-motion';
import { HeaderNavItem } from './HeaderNavItem';
import { HeaderNavCta } from './HeaderNavCta';
//Store
import { useHeader } from '../../store'; 
//Variant
import { variantsHeaderParent, variantsHeaderNav } from '../../variants';

const HeaderNav = ():JSX.Element => {

    const { hamburger } = useHeader(state => state);

    return (
        <motion.nav 
            className='header__nav'
            animate={hamburger ? "open" : "closed"}
            variants={ variantsHeaderNav }
        >
            <motion.ul variants={ variantsHeaderParent }>
                <HeaderNavItem text='HOME' link='/' />
                <HeaderNavItem text='CONTACT' link='/contact' />
                <HeaderNavItem text='OTHER PAGE' link='/other-page' />
            </motion.ul>
            <motion.div className='header__group' variants={ variantsHeaderParent }>
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
            </motion.div>
        </motion.nav>
    )
}

export { HeaderNav }