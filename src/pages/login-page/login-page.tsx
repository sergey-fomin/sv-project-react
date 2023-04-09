import { Footer } from "../../components/footer/footer";
import { Form } from "../../components/form/form";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";

const LoginPage = (props) => {
    return (
        <div>
            <Header isLoggedIn={props.isLoggedIn} route={props.route} profileEmail='' onStateChange={props.handleStateChange}/>
            <Main>
                LoginPage!!!!!!!!
                {/* <Form/> */}
            </Main>
            <Footer/>
        </div>
    );
};

export default LoginPage;