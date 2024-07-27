import { Link } from "react-router-dom";
import { HeaderButtons } from './HeaderButtons';
import { HeaderNav } from "./HeaderNav";
import { HeaderBg } from './HeaderBg';

const Header = ():JSX.Element => {
    return (
        <header className="header">
            {/* Logo */}
            <Link className="header__logo" to={'/'}>
                Jhosuapp
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