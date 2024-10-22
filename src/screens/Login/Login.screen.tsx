import { Delayed, Container, Button, Input, Icon, Text } from "@/components";


const LoginScreen = ():JSX.Element => {
    return (
        <Delayed>
            <Container className="login ctn ctn--top ctn--height">
                <form className="login__form">
                    <fieldset>
                        <Text headingType="h1" className="center">
                            Login in J'D
                        </Text>
                       
                        <Button
                            Text="Continue with google"
                            HoverText={`Login with google`}
                            className="btn btn--primary h-text"
                        >
                            <Icon src={ `/assets/img/google-brands-solid.svg` } width={ 22.5 } height={ 22.5 } alt={`Icon facebook`} />
                        </Button>
                        <Button
                            Text="Continue with facebook"
                            HoverText={`Login with facebook`}
                            className="btn btn--primary h-text"
                        >
                            <Icon src={ `/assets/img/facebook-brands-solid.svg` } width={ 22.5 } height={ 25 } alt={`Icon facebook`} />
                        </Button>
                    </fieldset>

                    <fieldset>
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
                            HoverText={`Login now`}
                            className="btn btn--primary h-text"
                            // isDisabled={ true }
                            // isLoading={ true }
                        />
                    </fieldset>
                    <Text className="center">
                        ¿You don't have an acount? <a className="link" href="#">register now</a>
                    </Text>
                </form>
            </Container>
        </Delayed>
    )
}

export { LoginScreen }