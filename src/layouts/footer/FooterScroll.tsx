

import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/hooks/";
import { useEffect, useRef, useState } from "react";

const FooterScroll = ():JSX.Element => {

    const isDesk = useMediaQuery({breakpoint: 991 });
    const location = useLocation();
    const [counter, setCounter] = useState<number>(0);
    const node = useRef<HTMLElement>(null);
    const navigate = useNavigate();
    //Wheel
    const HandleWheel = ()=>{
        setCounter(counter + 2);
    }
    //Observe footer
    useEffect(()=>{
        //Obsever
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    counter < 100 && window.addEventListener('wheel', HandleWheel);
                }else {
                    setCounter(0);
                }
            })
        });
        //Validate
        if(counter === 100){
            setCounter(0);
            location.pathname === '/contact' ? navigate('/') : navigate('/contact');
        }

        node.current && observer.observe(node.current);

        return ()=>{
            observer.disconnect();
            window.removeEventListener('wheel', HandleWheel);
        }
    },[counter]);

    return (
        <section ref={ node } className="footer__scroll">
            <article>
                <p className="footer__scroll__text">Keep scrolling to learn more</p>
            </article>
            <article>
                <p>{location.pathname == '/contact' ? 'Home' : 'Contact me!'}</p>
                <div>
                    <p className="footer__scroll__text">NEXT PAGE</p>
                    <div className="footer__scroll__progress">
                        <div style={{ width: `${counter}%` }}></div>
                    </div>
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