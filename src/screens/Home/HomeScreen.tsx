import { Container, Transition } from "../../components";

const HomeScreen = Transition(() => {
    return (
        <>
            <Container style={{ height: '200vh' }} className="ctn ctn--top">
                <p>hola mundo</p>
            </Container>
        </>
    )
})

export { HomeScreen }