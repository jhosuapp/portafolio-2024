import { Link } from "react-router-dom";
import { HeaderButtons } from './HeaderButtons';

const Header = ():JSX.Element => {
    return (
        <header className="header">
            {/* Logo */}
            <Link className="header__logo" to={'/'}>
                Jhosuapp
            </Link>
            {/* Logo */}
            {/*  */}
            <HeaderButtons />
            {/*  */}
        </header>
    )
}

export { Header }