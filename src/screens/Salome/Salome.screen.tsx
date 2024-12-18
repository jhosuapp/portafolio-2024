import { Delayed, Container } from "@/components";
import { SalomeIntroduction, SalomeFlowers } from './components';
// import { SalomeFlowers } from './components';

const SalomeScreen = ():JSX.Element => {

    return (
        <Delayed>
            <SalomeIntroduction />
            <Container>
                <SalomeFlowers />
            </Container>
        </Delayed>
    )
}

export { SalomeScreen }