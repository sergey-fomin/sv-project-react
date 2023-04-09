import { Footer } from "../../components/footer/footer";
import { Form } from "../../components/form/form";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";

const RegistrationPage = (props) => {
    const handleClick = (evt) => {
        evt.preventDefault();
        props.handleStateChange({route: 'main-page', isLoggedIn: true})
    }
    return (
        <div>
            <Header isLoggedIn={props.isLoggedIn} route={props.route} profileEmail='' onStateChange={props.handleStateChange}/>
            <Main>
                {/* <Form/> */}
                <a href="#" onClick={handleClick}>Уже зарегистрированы? Войти</a>
            </Main>
            <Footer/>
        </div>
    );
};

export default RegistrationPage;