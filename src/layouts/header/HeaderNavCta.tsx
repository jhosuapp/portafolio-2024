import IconGithub from '/assets/img/github-alt-brands-solid.svg';
import { Icon } from '../../components';

const HeaderNavCta = ():JSX.Element => {
    return (
        <a className="h-text" href="#">
            <Icon src={ IconGithub } width={ 30 } height={ 30 } alt="Icon github" />
            <div>
                <span>GITHUB 🚀</span>
                <span>JHOSUAPP</span>
            </div>
        </a>
    )
}

export { HeaderNavCta }