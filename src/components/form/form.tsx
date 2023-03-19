import { InputList } from "../input-list/input-list";

export const Form = (props) => {
    return (
        <form className="form form--color-inversion form--registration">
            <fieldset className="form__fieldset">
                <legend className="form__title">Регистрация</legend>
                <InputList/>
                <button className="form__submit-btn" type="submit">
                    Зарегистрироваться
                </button>
            </fieldset>
        </form>
    );
}