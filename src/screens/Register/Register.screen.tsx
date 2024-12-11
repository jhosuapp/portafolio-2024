import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import { Delayed, Container, Button, Input, Text, Modal } from "@/components";
import { useRegisterController } from "./Register.controller";


const RegisterScreen = ():JSX.Element => {

    const {
        control, 
        handleSubmit,
        onSubmit,
        errors,
        disabledButton,
        errorMessage,
        isValid
    } = useRegisterController();
    

    return (
        <Delayed>
            <Container className="login ctn ctn--top ctn--height">
                <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                    <fieldset>
                        <Text headingType="h1" className="center title" textContent={ ["Register", "in", "J'D"] } />
                    </fieldset>

                    <fieldset>

                        <Controller
                            name="displayName"
                            control={ control }
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input 
                                    type="text"
                                    placeholder="Full name"
                                    onChange={ onChange }
                                    onBlur={ onBlur }
                                    value={ value }
                                    errorMessage={ errors.displayName?.message }
                                    delayAnimation={ 0.3 }
                                />
                            )}
                        />

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
                            Text="Register"
                            HoverText={`Register now`}
                            className="btn btn--primary h-text"
                            isLoading={ disabledButton }
                            isDisabled={ !isValid }
                            delayAnimation={ 0.45 }
                        />
                    </fieldset>
                    <Text className="center paragraph" delayAnimation={ 0.5 }>
                        ¿You have an acount? <Link className="link" to={'/login'}>login now</Link>
                    </Text>
                </form>
            </Container>

            <Modal 
                errorMessage={ errorMessage }
            />
        </Delayed>
    )
}

export { RegisterScreen }