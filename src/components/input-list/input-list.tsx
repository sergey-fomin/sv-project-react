export const InputList = (props) => {
    return (
        <div>
            <input
                className="form__input"
                type="password"
                name="registrationPassword"
                id="registration-password"
                placeholder="Пароль"
            />
            <div className="form__input-error"></div>
        </div>
    );
}