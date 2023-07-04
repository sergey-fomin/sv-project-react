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