import { Delayed, AnimateLine } from "../../components";
import { HomeHero } from './components/HomeHero';

const HomeScreen = () => {
    return (
        <Delayed>
            <AnimateLine />
            <HomeHero />
        </Delayed>
    )
}

export { HomeScreen }