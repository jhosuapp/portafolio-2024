import { Link, useMatch } from "react-router-dom";
import { HeaderButtons } from './HeaderButtons';
import { HeaderNav } from "./HeaderNav";
import { HeaderBg } from './HeaderBg';
import { useAppSelector } from "@/hooks";

import logo from '/assets/img/logo.jpeg';

const Header = ():JSX.Element => {
    const { hamburger } = useAppSelector( state => state.header );
    const match = useMatch('/');

    return (
        <header className={ `header ${ hamburger ? 'active-hamburger' : '' }` }>
            {/* Logo */}
            <Link style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "20px", color: "#0A1D45" }} className={`header__logo ${match && 'disabled'}`} to={'/'}>
                <img src={ logo } width={200} />
                Proyecto MOU
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