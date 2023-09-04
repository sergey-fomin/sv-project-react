import classes from './../form/form.module.scss'; // !!!!!!Потом поправить!!!!
import { api, classNames } from '@helpers';
import { Input } from '@components';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { REGISTRATION_VALIDATION_RULES } from './registration-validation-rules';
import { useNavigate } from 'react-router-dom';

type TRegistrationForm = {
    name: string;
    avatarUrl: string;
    email: string;
    password: string;
}

type TRegistrationFormProps = {
    handleAuthStateChange: (state: {isLoggedIn: boolean}) => void;
}

export const RegistrationForm = (props: TRegistrationFormProps) => {

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isDirty,
            isValid
        }
    } = useForm<TRegistrationForm>({
        mode: 'all'
    });

    const navigate = useNavigate();

    const isFormValid = isDirty && isValid;

    function onSubmit(data): SubmitHandler<TRegistrationForm> {
        console.log(data);

        api.register(data)
            .then((data) => {
                console.log(data)
                if (data.success) {
                    api.saveToken(data.token);
                    props.handleAuthStateChange({isLoggedIn: true});
                    navigate('/');
                } else {
                    // Добавить модалку с ошибкой
                }
            })

        return data;
    };

    function onError(data): SubmitErrorHandler<TRegistrationForm> {
        console.log('ERROR', data);

        return data;
    };

    const { ref: nameRef, ...nameProps } = register('name', REGISTRATION_VALIDATION_RULES.name);
    const { ref: avatarUrlRef, ...avatarUrlProps } = register('avatarUrl', REGISTRATION_VALIDATION_RULES.avatarUrl);
    const { ref: emailRef, ...emailProps } = register('email', REGISTRATION_VALIDATION_RULES.email);
    const { ref: passwordRef, ...passwordProps } = register('password', REGISTRATION_VALIDATION_RULES.password);

    return (
        <form
            className={classNames(
            classes.form,
            {'isInversion': true},
            [classes.form['isInversion']]
            )}
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <fieldset className={classes.fieldset}>
                <legend className={classes.title}>Регистрация</legend>
                <Input
                    placeholder="Hi, my name is..."
                    myRef={nameRef}
                    error={errors.name?.message}
                    {...nameProps}
                />
                <Input
                    name="profile-description"
                    placeholder="Genius, billionaire, playboy, philanthropist"
                />
                <Input
                    placeholder="http://myawesomeavatar.jpg"
                    myRef={avatarUrlRef}
                    error={errors.avatarUrl?.message}
                    {...avatarUrlProps}
                />
                <Input
                    type="email"
                    placeholder="Email@mail.com"
                    myRef={emailRef}
                    error={ errors.email?.message }
                    { ...emailProps }
                />
                <Input
                    type="password"
                    placeholder="Пароль"
                    myRef={passwordRef}
                    error={errors.password?.message}
                    {...passwordProps}
                />
                <button
                    className={classes.submitBtn}
                    type="submit"
                    disabled={!isFormValid}
                >
                    Зарегистрироваться
                </button>
            </fieldset>
        </form>
    );
}