import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { IScrollSmoth } from '@/models';
import { useAppSelector } from "@/hooks/Redux/useRedux";
import React from 'react';

const ScrollSmoth = React.memo(({ children }: IScrollSmoth ):JSX.Element => {
    //Delay
    const { delay } = useAppSelector(state => state.delay);
    const location = useLocation();
    //Main
    const main = useRef<HTMLElement>(null);

    useLayoutEffect(()=>{
        setTimeout(()=>{
            const body = document.body;
            let sx = 0, // For scroll positions
                sy = 0;
            let dx = sx, // For container positions
                dy = sy;
    
            if(main.current){
                body.style.height = main.current.clientHeight + 'px';
        
                main.current.style.position = 'fixed';
                main.current.style.top = '0';
                main.current.style.left = '0';
            }
            //Listener scroll
            window.addEventListener('scroll', easeScroll);
            
            window.addEventListener('scroll', ()=>{
                main.current && (body.style.height = main.current.clientHeight + 'px');
            });
            //Resize
            window.addEventListener('resize', ()=>{
                main.current && (body.style.height = main.current.clientHeight + 'px');
            });
            //Dinamic easeScroll
            function easeScroll() {
                sx = window.pageXOffset;
                sy = window.pageYOffset;
            }
            //Animation
            window.requestAnimationFrame(render);
            //Render
            function render() {
                //We calculate our container position by linear interpolation method
                dx = li(dx, sx, 0.1);
                dy = li(dy, sy, 0.1);
        
                dx = Math.floor(dx * 100) / 100;
                dy = Math.floor(dy * 100) / 100;
        
                main.current && (main.current.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`);
                window.requestAnimationFrame(render);
            }
            //Li
            function li(a:number, b:number, n:number) {
                return (1 - n) * a + n * b;
            }
        }, delay + 100);
    }, [location.pathname]);

    return (
        <main ref={ main } className="scroll-smoth">
            { children }
        </main>
    )
});

export { ScrollSmoth }