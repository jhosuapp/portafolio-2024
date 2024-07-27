import { motion } from 'framer-motion'
//Store
import { useHeader } from '../../store';
//Variants
import { variantsHeaderBg } from '../../variants';

const HeaderBg = ():JSX.Element => {

    const { hamburger, setHamburger } = useHeader(state => state);

    return (
        <motion.div 
            className={`header__bg ${hamburger ? 'pointersAuto' : 'pointersNone'}`}
            animate={ hamburger ? 'open' : 'close' }
            variants={ variantsHeaderBg }
            onClick={ ()=> setHamburger(!hamburger) }
        ></motion.div>
    )
}

export { HeaderBg }