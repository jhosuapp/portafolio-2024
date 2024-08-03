

import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../../hooks/";
import { useEffect } from "react";

const FooterScroll = ():JSX.Element => {

    const isDesk = useMediaQuery({breakpoint: 991 });
    const location = useLocation();

    useEffect(()=>{
        window.addEventListener('wheel', (e)=>{
            console.log(e);
        })
    },[]);


    return (
        <section className="footer__scroll">
            <article>
                <p className="footer__scroll__text">Keep scrolling to learn more</p>
            </article>
            <article>
                <p>{location.pathname == '/contact' ? 'Contact me!' : 'Home'}</p>
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