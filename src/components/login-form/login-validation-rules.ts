export const LOGIN_VALIDATION_RULES = {
    email: {
        required: {
            value: true,
            message: "Поле 'Email' обязательно для заполнения",
        },
        validate: (value) => {
            const regExp = /^\S+@\S+\.\S+$/;
            if (regExp.test(value)) {
                return true;
            }
            return 'Введите email в формате "name@mail.com"';
        },
    },
    password: {
        minLength: {
            value: 8,
            message: "Пароль не может быть короче 8 символов",
        },
        required: {
            value: true,
            message: "Поле 'Пароль' обязательно для заполнения",
        }
    },
}
