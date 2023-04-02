import { Footer } from "../../components/footer/footer";
import { Form } from "../../components/form/form";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";

const LoginPage = (props) => {
    return (
        <div>
            <Header isLoggedIn={true} route={'login'}/>
            <Main>
                <Form/>
            </Main>
            <Footer/>
        </div>
    );
};

export default LoginPage;