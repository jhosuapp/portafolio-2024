import { motion } from 'framer-motion';
import { Icon } from '@/components';
//Model
import { IheaderNavCta } from '@/models';
//Variants
import { variantsHeaderChildren } from '@/variants';

const HeaderNavCta = ( { text, hoverText, background, link, iconType }: IheaderNavCta ):JSX.Element => {
    return (
        <motion.a 
            className='header__cta h-text' 
            href={ link } 
            target='_blank' 
            style={{ background }}
            variants={ variantsHeaderChildren }
        >
            <Icon src={ `/assets/img/${iconType}-brands-solid.svg` } width={ 30 } height={ 30 } alt={`Icon ${ iconType }`} />
            <div>
                <span>{ text }</span>
                <span>{ hoverText }</span>
            </div>
        </motion.a>
    )
}

export { HeaderNavCta }