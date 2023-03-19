import { Footer } from "../components/footer/footer";
import { Form } from "../components/form/form";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";

export const LoginPage = (props) => {
    return (
        <div>
            <Header/>
            <Main>
                <Form/>
            </Main>
            <Footer/>
        </div>
    );
}