import { Delayed } from "../../components";

const Contact = ():JSX.Element => {
    return (
        <Delayed delay={ 1000 }>
            <p>Hola contact</p>
        </Delayed>
    )
}

export { Contact }