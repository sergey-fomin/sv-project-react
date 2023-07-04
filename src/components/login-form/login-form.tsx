import classes from './../form/form.module.scss'; // Потом поправить!!!!
import { classNames } from '@helpers';
import { useCallback, useEffect, useState } from 'react';

// В отдельный файл, положить рядом с формой login-form.validators.ts
const LOGIN_VALIDATION_RULES = {
    loginEmail: {
        required: (value) => {
            if (value !== '') {
                return null;
            }
            return 'Поле "Email" обязательно для заполнения';
        },
        custom: (value) => {
            const regExp = /^\S+@\S+\.\S+$/;
            if (regExp.test(value)) {
                return null;
            }
            return 'Введите email в формате "name@mail.com"';
        }
    },
    loginPassword: {
        minLength: (value) => {
            const minLengthValue = 8;

            if (value.length > minLengthValue) {
                return null;
            }
            return `Минимальная длина поля - ${minLengthValue} символов`
        },
        required: (value) => {
            if (value !== '') {
                return null;
            }
            return 'Поле "Пароль" обязательно для заполнения';
        }
    }
}

export const LoginForm = (props) => {
    const [formValues, setFormValues] = useState({
        loginEmail: '',
        loginPassword: ''
    });

    const [formValidity, setFormValidity] = useState({
        loginEmailIsValid: false,
        loginPasswordIsValid: false
    });

    const [formErrors, setFormErrors] = useState({
        loginEmailErrors: {},
        loginPasswordErrors: {}
    });

    const {loginEmail, loginPassword} = formValues;
    const {loginEmailIsValid, loginPasswordIsValid} = formValidity;
    const {loginEmailErrors, loginPasswordErrors} = formErrors;
    let isSubmitDisabled = !loginEmailIsValid || !loginPasswordIsValid;
    // let loginEmailError: string = '';
    // let loginPasswordError: string = '';


    // Почему ошибка при типизации эвента? React.ChangeEvent<HTMLInputElement> Эвент реакта, смотреть в ончейндже элемента
    const handleInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evt.target;
        setFormValues(prevState => ({...prevState, [name]: value}));
    }, [setFormValues]);

    useEffect(
        function validateInputs() {
            // const {loginEmail, loginPassword} = formValues;
            // console.log(formValues);
            // console.log(loginEmailIsValid);
            const isLoginEmailValid = Object.keys(LOGIN_VALIDATION_RULES.loginEmail).map(
                (errorKey) => {
                    const errorResult = LOGIN_VALIDATION_RULES.loginEmail[errorKey](loginEmail);
                    setFormErrors(prevState => ({...prevState, loginEmailErrors: errorResult}));
                    // if (typeof errorResult === 'string') {
                    //     setFormErrors = errorResult;
                    // }

                    return {[errorKey]: errorResult};
                });

            const isLoginPasswordValid = Object.keys(LOGIN_VALIDATION_RULES.loginPassword).map(
                (errorKey) => {
                    const errorResult = LOGIN_VALIDATION_RULES.loginPassword[errorKey](loginPassword);
                    setFormErrors(prevState => ({...prevState, loginPasswordErrors: errorResult}));
                    // if (typeof errorResult === 'string') {
                    //     loginPasswordErrors = errorResult;
                    // }

                    return {[errorKey]: errorResult};
                });

                console.log(isLoginEmailValid, isLoginPasswordValid)
                console.log(formErrors, )

        },
        [formValues, setFormValidity]
    );

    console.log(classes);

    return (
        <form className={classNames(
            classes.form,
            {'isInversion': true},
            [classes.form['isInversion']]
            )}
        >
            <fieldset className={classes.fieldset}>
                <legend className={classes.title}>Вход</legend>
                <div className={classes.inputWrapper}>
                    <input
                        className={classNames(
                            classes.input,
                            {'isInvalid': !loginEmailIsValid},
                            []
                            )}
                        type="email"
                        name="loginEmail"
                        id="login-email"
                        placeholder="Email"
                        value={loginEmail}
                        onChange={handleInputChange}
                    />
                    <div className={classes.inputError}>{JSON.stringify(loginEmailErrors)}</div>
                </div>
                <div className={classes.inputWrapper}>
                    <input
                        className={classNames(
                            classes.input,
                            {'isInvalid': !loginPasswordIsValid},
                            []
                            )}
                        type="password"
                        name="loginPassword"
                        id="login-password"
                        placeholder="Пароль"
                        value={loginPassword}
                        onChange={handleInputChange}
                    />
                    <div className={classes.inputError}>{JSON.stringify(loginPasswordErrors)}</div>
                </div>
                <button
                    className={classes.submitBtn}
                    type="submit"
                    disabled={isSubmitDisabled}
                >
                    Войти
                </button>
            </fieldset>
        </form>
    );
}