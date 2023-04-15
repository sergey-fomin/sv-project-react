import { Footer } from "../../components/footer/footer";
import { Form } from "../../components/form/form";
import { Header } from "../../components/header/header";
import { PageWrapper } from "../../components/page-wrapper/page-wrapper";

const RegistrationPage = (props) => {
    const handleClick = (evt) => {
        evt.preventDefault();
        props.handleStateChange({route: 'main-page', isLoggedIn: true})
    }
    return (
        <div>
            {/* <Form/> */}
            <a href="#" onClick={handleClick}>Уже зарегистрированы? Войти</a>
        </div>
    );
};

export default RegistrationPage;