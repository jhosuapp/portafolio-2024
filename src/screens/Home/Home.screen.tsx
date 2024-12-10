import { Delayed, AnimateLine } from "@/components";
import { HomeHero, HomeVision } from './components';

const HomeScreen = () => {
    return (
        <Delayed>
            <AnimateLine top="40vh" />
            <HomeHero />
            <HomeVision />
        </Delayed>
    )
}

export { HomeScreen }