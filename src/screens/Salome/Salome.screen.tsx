import { Delayed } from "@/components";
import { SalomeIntroduction, SalomeFlowers, SalomeText } from './components';

const SalomeScreen = ():JSX.Element => {

    return (
        <Delayed>
            <SalomeIntroduction />
            <SalomeText />
            <SalomeFlowers />
        </Delayed>
    )
}

export { SalomeScreen }