export const REGISTRATION_VALIDATION_RULES = {
    name: {
        required: {
            value: true,
            message: "Поле 'Имя' обязательно для заполнения",
        },
        minLength: {
            value: 3,
            message: "Имя не может быть короче 3 символов",
        },
    },
    avatarUrl: {
        required: {
            value: true,
            message: "Поле 'Аватар' обязательно для заполнения",
        },
        validate: (value) => {
            const regExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
            if (regExp.test(value)) {
                return true;
            }
            return 'Введите url аватара в формате "http://path-to-my-awesome/avatar.jpg"';
        },
    },
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
            message: "Минимальная длина пароля - 8 символов",
        },
        required: {
            value: true,
            message: "Поле 'Пароль' обязательно для заполнения",
        }
    },
};

export default REGISTRATION_VALIDATION_RULES;
