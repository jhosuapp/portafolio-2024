import { Delayed, Container, Button, Input } from "@/components";


const LoginScreen = ():JSX.Element => {
    return (
        <Delayed>
            <Container className="login ctn ctn--top ctn--height">
                <form className="login__form">

                    <Input 
                        type="email"
                        placeholder="Email"
                    />

                    <Input 
                        type="password"
                        placeholder="Contraseña"
                    />

                    <Button 
                        Text="Login"
                        HoverText="Login"
                        className="btn btn--primary h-text"
                    />
                </form>
            </Container>
        </Delayed>
    )
}

export { LoginScreen }