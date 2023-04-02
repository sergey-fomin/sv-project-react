import { Footer } from "../../components/footer/footer";
import { Form } from "../../components/form/form";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";

const RegistrationPage = (props) => {
    return (
        <div>
            <Header isLoggedIn={true} route={'registration'}/>
            <Main>
                <Form/>
                <a href="#" >Уже зарегистрированы? Войти</a>
            </Main>
            <Footer/>
        </div>
    );
};

export default RegistrationPage;