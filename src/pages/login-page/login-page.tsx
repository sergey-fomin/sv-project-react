import { LoginForm } from "@components";

type TLoginPageProps = {
    handleAuthStateChange: (state: {isLoggedIn: boolean}) => void;
}

const LoginPage = (props: TLoginPageProps) => {
    return (
        <LoginForm handleAuthStateChange={props.handleAuthStateChange}/>
    );
};

export default LoginPage;