import { Link, useMatch } from "react-router-dom";
import { HeaderButtons } from './HeaderButtons';
import { HeaderNav } from "./HeaderNav";
import { HeaderBg } from './HeaderBg';
import { useAppSelector } from "@/hooks";

const Header = ():JSX.Element => {
    const { hamburger } = useAppSelector( state => state.header );
    const match = useMatch('/');

    return (
        <header className={ `header ${ hamburger ? 'active-hamburger' : '' }` }>
            {/* Logo */}
            <Link className={`header__logo ${match && 'disabled'}`} to={'/'}>
                JHOSUAPP'D
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