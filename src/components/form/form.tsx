import { InputList } from "../input-list/input-list";

export const Form = (props) => {
    return (
        <form className="form form--color-inversion form--registration">
            <fieldset className="form__fieldset">
                <legend className="form__title">Регистрация</legend>

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

                <button className="form__submit-btn" type="submit">
                    Зарегистрироваться
                </button>
            </fieldset>
        </form>
    );
}