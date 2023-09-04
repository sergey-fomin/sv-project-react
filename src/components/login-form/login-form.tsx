import classes from './../form/form.module.scss'; // Потом поправить!!!!
import { api, classNames } from '@helpers';
import { Input } from '@components';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { LOGIN_VALIDATION_RULES } from './login-validation-rules';
import { useNavigate } from 'react-router-dom';

type TLoginForm = {
    email: string;
    password: string;
}

type TLoginFormProps = {
    handleAuthStateChange: (state: {isLoggedIn: boolean}) => void;
}

export const LoginForm = (props: TLoginFormProps) => {
    const handleAuthStateChange = (state: {isLoggedIn: boolean}) => {
        props.handleAuthStateChange(state)
    }
    // !!!!!!!!!!!!!!!!!!
    // console.log(classes);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid,
            isDirty
        },
    } = useForm<TLoginForm>({
        mode: 'all'
    });

    console.log('ERRORS', errors);

    const isFormValid = isDirty && isValid;

    function onSubmit(data): SubmitHandler<TLoginForm> {
        console.log('submitted data:', data);
        api.login(data)
            .then((data) => {
                console.log(data)
                if (data.success) {
                    api.saveToken(data.token);
                    handleAuthStateChange({ isLoggedIn: true });
                    navigate('/');
                } else {
                    throw new Error(`User ${ data.email } not found`);
                }
            })

        return data;
    };

    function onError(data): SubmitErrorHandler<TLoginForm> {
        console.log('ERROR', data);

        return data;
    };

    const { ref: emailRef, ...emailProps } = register('email', LOGIN_VALIDATION_RULES.email);
    const { ref: passwordRef, ...passwordProps } = register('password', LOGIN_VALIDATION_RULES.password);

    return (
        <form
            className={ classNames(
                classes.form,
                { 'isInversion': true },
                [classes.form['isInversion']]
            ) }
            onSubmit={ handleSubmit(onSubmit, onError) }
        >
            <fieldset className={ classes.fieldset }>
                <legend className={ classes.title }>Вход</legend>
                <Input
                    type="email"
                    placeholder="Email"
                    myRef={emailRef}
                    error={ errors.email?.message }
                    { ...emailProps }
                />
                <Input
                    type="password"
                    placeholder="Пароль"
                    myRef={passwordRef}
                    error={ errors.password?.message }
                    {...passwordProps}
                />
                <button
                    className={ classes.submitBtn }
                    type="submit"
                    disabled={ !isFormValid }
                >
                    Войти
                </button>
            </fieldset>
        </form>
    );
}