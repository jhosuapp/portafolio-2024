import { Container, Delayed } from "../../components";

const HomeScreen = () => {
    return (
        <Delayed>
            <Container style={{ height: '200vh' }} className="ctn ctn--top">
                <p>hola mundo</p>
            </Container>
        </Delayed>
    )
}

export { HomeScreen }