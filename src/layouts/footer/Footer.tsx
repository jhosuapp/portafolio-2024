import { FooterTop } from './FooterTop';
import { FooterScroll } from './FooterScroll';

const Footer = ():JSX.Element => {
    return (
        <footer className="footer">
            {/* <FooterTop /> */}
            <FooterScroll />
        </footer>
    )
}

export { Footer }