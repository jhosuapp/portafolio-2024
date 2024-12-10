import { useMediaQuery } from "@/hooks/index";
import { Container, Text } from "@/components";

const HomeHero = ():JSX.Element => {

    const isDesk = useMediaQuery({ breakpoint: 991 });

    return (
        <Container className="ctn ctn--top ctn--height home-hero">
            <article>
                <Text 
                    headingType="h1" 
                    className="center" 
                    textContent={ ["We", "brands", "create", "digital", "experiences", "conect", "with", "their", "audience"] } 
                />
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