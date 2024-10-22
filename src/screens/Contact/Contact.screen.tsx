import { Delayed, Container } from "@/components";

const ContactScreen = ():JSX.Element => {
    return (
        <Delayed>
            <Container className="ctn ctn--top ctn--height">
                <p>Hola contact</p>
            </Container>
        </Delayed>
    )
}

export { ContactScreen }