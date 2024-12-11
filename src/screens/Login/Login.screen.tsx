import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import { Delayed, Container, Button, Input, Icon, Text, Modal, AnimateLine } from "@/components";
import { useLoginController } from "./Login.controller";


const LoginScreen = ():JSX.Element => {

    const {
        control, 
        handleSubmit,
        onSubmit,
        errors,
        disabledButton,
        handleGoogleSignIn,
        errorMessage
    } = useLoginController();
    

    return (
        <Delayed>
            <AnimateLine top="-30vh" />
            <Container className="login ctn ctn--top ctn--height">
                <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                    <fieldset>
                        <Text headingType="h1" className="center title" textContent={ ["Login", "in", "J'D"] } />
                       
                        <Button
                            Text="Continue with google"
                            HoverText={`Login with google`}
                            className="btn btn--primary h-text"
                            onClick={ () => handleGoogleSignIn() }
                            type="button"
                            isLoading={ disabledButton }
                            delayAnimation={ 0.3 }
                        >
                            <Icon src={ `/assets/img/google-brands-solid.svg` } width={ 22.5 } height={ 22.5 } alt={`Icon facebook`} />
                        </Button>
                        {/* <Button
                            Text="Continue with facebook"
                            HoverText={`Login with facebook`}
                            className="btn btn--primary h-text"
                            isLoading={ disabledButton }
                        >
                            <Icon src={ `/assets/img/facebook-brands-solid.svg` } width={ 22.5 } height={ 25 } alt={`Icon facebook`} />
                        </Button> */}
                    </fieldset>

                    <fieldset>

                        <Controller
                            name="email"
                            control={ control }
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input 
                                    type="email"
                                    placeholder="Email"
                                    onChange={ onChange }
                                    onBlur={ onBlur }
                                    value={ value }
                                    errorMessage={ errors.email?.message }
                                    delayAnimation={ 0.35 }
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={ control }
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input 
                                    type="password"
                                    placeholder="Contraseña"
                                    onChange={ onChange }
                                    onBlur={ onBlur }
                                    value={ value }
                                    errorMessage={ errors.password?.message }
                                    delayAnimation={ 0.4 }
                                />
                            )}
                        />

                        <Button 
                            Text="Login"
                            HoverText={`Login now`}
                            className="btn btn--primary h-text"
                            isLoading={ disabledButton }
                            delayAnimation={ 0.45 }
                        />
                    </fieldset>
                    <Text className="center paragraph" delayAnimation={ 0.5 }>
                        ¿You don't have an acount? <Link className="link" to={'/register'}>register now</Link>
                    </Text>
                </form>
            </Container>
            <Modal 
                errorMessage={ errorMessage }
            />
        </Delayed>
    )
}

export { LoginScreen }