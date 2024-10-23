import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import { Delayed, Container, Button, Input, Text } from "@/components";
import { useRegisterController } from "./Register.controller";


const RegisterScreen = ():JSX.Element => {

    const {
        control, 
        handleSubmit,
        onSubmit,
        errors,
        disabledButton,
    } = useRegisterController();
    

    return (
        <Delayed>
            <Container className="login ctn ctn--top ctn--height">
                <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                    <fieldset>
                        <Text headingType="h1" className="center">
                            Register in J'D
                        </Text>
                    </fieldset>

                    <fieldset>

                        <Controller
                            name="full_name"
                            control={ control }
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input 
                                    type="text"
                                    placeholder="Full name"
                                    onChange={ onChange }
                                    onBlur={ onBlur }
                                    value={ value }
                                    errorMessage={ errors.full_name?.message }
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
                                />
                            )}
                        />

                        <Button 
                            Text="Register"
                            HoverText={`Register now`}
                            className="btn btn--primary h-text"
                            isLoading={ disabledButton }
                        />
                    </fieldset>
                    <Text className="center">
                        ¿You have an acount? <Link className="link" to={'/login'}>login now</Link>
                    </Text>
                </form>
            </Container>
        </Delayed>
    )
}

export { RegisterScreen }