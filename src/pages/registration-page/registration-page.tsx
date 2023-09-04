import { RegistrationForm } from "@components";
import { Link } from "react-router-dom";

type TRegistrationFormProps = {
    handleAuthStateChange: (state: {isLoggedIn: boolean}) => void;
}

const RegistrationPage = (props: TRegistrationFormProps) => {
    return (
        <>
            <RegistrationForm handleAuthStateChange={props.handleAuthStateChange} />
            <Link to={'/login'}>Уже зарегистрированы? Войти</Link>
        </>
    );
};

export default RegistrationPage;