import { useMediaQuery } from "@/hooks/index";
import { Container } from "@/components";

const HomeHero = ():JSX.Element => {

    const isDesk = useMediaQuery({ breakpoint: 991 });

    return (
        <Container className="ctn ctn--top ctn--height home-hero">
            <article>
                <h1>
                    <div>
                        <span>We</span>
                        <span>help</span>
                        <span>brands</span>
                        <span>create</span>
                        <span>digital</span>
                    </div>
                    <div>
                        <span>experiences</span>
                        <span>that</span>
                        <span>conect</span>
                        <span>with</span>
                    </div>
                    <div>
                        <span>their</span>
                        <span>audience</span>
                    </div>
                </h1>
            </article>
            <article>
                <picture>
                    <source src="/assets/img/homeHero/home.webp" type="image/webp" />
                    <source src="/assets/img/homeHero/home.jpg" type="image/jpg" />
                    <img src="/assets/img/homeHero/home.jpg" loading="lazy" alt="Bringing live-guided immersive virtual tours to a global audience" />
                </picture>
                {isDesk && <iframe loading="lazy" src="https://player.vimeo.com/video/996480718?autopause=0&autoplay=1&loop=1&muted=1&background=1"></iframe>}
            </article>
            <article>
                <div></div>
                <div></div>
                <p>
                    <span>Scroll</span>
                    <span>to</span>
                    <span>explore</span>
                </p>
                <div></div>
                <div></div>
            </article>
        </Container>
    )
}

export { HomeHero }