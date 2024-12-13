import { Delayed, Container } from "@/components";
import { SalomeIntroduction, SalomeFlowers } from './components';

const SalomeScreen = ():JSX.Element => {

    return (
        <Delayed>
            {/* <SalomeIntroduction /> */}
            <Container className="ctn ctn--top ctn--height">
                <SalomeFlowers />
            </Container>
        </Delayed>
    )
}

export { SalomeScreen }