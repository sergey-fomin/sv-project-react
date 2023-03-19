import { Footer } from "../components/footer/footer";
import { Form } from "../components/form/form";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";

export const RegistrationPage = (props) => {
    return (
        <div>
            <Header/>
            <Main>
                <Form/>
                <a href="#" >Уже зарегистрированы? Войти</a>
            </Main>
            <Footer/>
        </div>
    );
}