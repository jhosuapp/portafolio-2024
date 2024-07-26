import { Icon } from '../../components';
//Model
import { IheaderNavCta } from '../../models';

const HeaderNavCta = ( { text, hoverText, background, link, iconType }: IheaderNavCta ):JSX.Element => {
    return (
        <a 
            className='header__cta h-text' 
            href={ link } 
            target='_blank' 
            style={{ background }}
        >
            <Icon src={ `/assets/img/${iconType}-brands-solid.svg` } width={ 30 } height={ 30 } alt={`Icon ${ iconType }`} />
            <div>
                <span>{ text }</span>
                <span>{ hoverText }</span>
            </div>
        </a>
    )
}

export { HeaderNavCta }