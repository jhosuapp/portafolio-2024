import { Delayed, AnimateLine } from "../../components";
import { HomeHero, HomeVision } from './components';

const HomeScreen = () => {
    return (
        <Delayed>
            <AnimateLine />
            <HomeHero />
            <HomeVision />
        </Delayed>
    )
}

export { HomeScreen }