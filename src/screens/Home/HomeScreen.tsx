import { Container } from "../../components";
import { Delayed } from "../../components";

const HomeScreen = () => {
    return (
        <Delayed delay={ 1000 }>
            <Container style={{ height: '200vh' }} className="ctn ctn--top">
                <p>hola mundo</p>
            </Container>
        </Delayed>
    )
}

export { HomeScreen }