import { Link } from "react-router-dom";
import { HeaderButtons } from './HeaderButtons';
import { HeaderNav } from "./HeaderNav";
import { HeaderBg } from './HeaderBg';
import { useAppSelector } from "../../hooks/Redux/useRedux";

const Header = ():JSX.Element => {

    const { hamburger } = useAppSelector( state => state.header );

    return (
        <header className={ `header ${ hamburger ? 'active-hamburger' : '' }` }>
            {/* Logo */}
            <Link className="header__logo" to={'/'}>
                Jhosuapp'D
            </Link>
            {/* Logo */}
            {/* Buttons */}
            <HeaderButtons />
            {/* Buttons */}
            {/* Nav */}
            <HeaderNav />
            {/* Nav */}
            {/* Bg */}
            <HeaderBg />
            {/* Bg */}
        </header>
    )
}

export { Header }