import { Delayed, AnimateLine } from "@/components";
import { HomeHero, HomeVision } from './components';

const HomeScreen = () => {
    return (
        <Delayed>
            <AnimateLine top="40vh" />
            <HomeHero />
            <HomeVision />
            <AnimateLine top="150vh" className="animate-line--secondary" />
        </Delayed>
    )
}

export { HomeScreen }