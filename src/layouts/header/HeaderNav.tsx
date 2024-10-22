import { motion } from 'framer-motion';
import { HeaderNavItem } from './HeaderNavItem';
import { HeaderNavCta } from './HeaderNavCta';
//Store
import { useAppSelector } from '@/hooks';
//Variant
import { variantsHeaderParent, variantsHeaderChildren } from '@/variants';

const HeaderNav = ():JSX.Element => {

    const { hamburger } = useAppSelector( state => state.header );

    return (
        <motion.nav 
            className='header__nav'
            animate={hamburger ? "open" : "closed"}
            variants={ variantsHeaderChildren }
        >
            <motion.ul variants={ variantsHeaderParent }>
                <HeaderNavItem text='HOME' link='/' />
                <HeaderNavItem text='CONTACT' link='/contact' />
                <HeaderNavItem text='LOGIN' link='/other-page' />
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