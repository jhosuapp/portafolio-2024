

import { useMediaQuery } from "../../hooks/";

const FooterScroll = ():JSX.Element => {

    const isDesk = useMediaQuery({breakpoint: 991 })

    return (
        <section className="footer__scroll">
            <article>
                <p className="footer__scroll__text">Keep scrolling to learn more</p>
            </article>
            <article>
                <p>Contact me!</p>
                <div>
                    <p className="footer__scroll__text">NEXT PAGE</p>
                    <div className="footer__scroll__progress"></div>
                    <img width="20px" src="/assets/img/icon-row-right.svg" alt="icon row" />
                </div>
            </article>
            {isDesk && 
                <article>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
            }
        </section>
    )
}

export { FooterScroll }