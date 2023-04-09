import { classNames } from '../../helpers/class-names/class-names';
import classes from './header.module.scss';
import mestoLogo from './../../assets/svg/mesto-logo.svg'

type THeaderProps = {
    route: string;
    isLoggedIn: boolean;
}

export const Header = (props: THeaderProps) => {
    switch(props.route) {
        case 'registration':
            return (
                <header className={classes.header}>
                    <div className={classes.container}>
                        <img className={classes.logo} src={mestoLogo}/>
                        {/* <!-- Страница регистрации --> */}
                        <div className={classes.loginInfo} data-route="registration">
                            <a href="#" data-link="login" className={classes.link}>Войти</a>
                        </div>
                    </div>
                </header>
            );
        case 'login':
            return (
                <header className={classes.header}>
                    <div className={classes.container}>
                        <img className={classes.logo} src={mestoLogo}/>
                        {/* <!-- Страница логина --> */}
                        <div className={classes.loginInfo} data-route="login">
                            <a href="#" data-link="registration" className={classes.link}>Регистрация</a>
                        </div>
                    </div>
                </header>
            );
        default:
            return (
                <header className={classes.header}>
                    <div className={classes.container}>
                        <img className={classes.logo} src={mestoLogo}/>
                        {/* <!-- Главная страница --> */}
                        <div className={classes.loginInfo}>
                            {/* <!-- Авторизованная зона --> */}
                            <p data-authorized className={classes.email}></p>
                            <a href="#" data-authorized data-link="logout" className={classes.link}>Выйти</a>
                            {/* <!-- Неавторизованная зона --> */}
                            <a href="#" data-unauthorized data-link="login" className={classes.link}>Войти</a>
                            <span data-unauthorized>/</span>
                            <a href="#" data-unauthorized data-link="registration" className={classes.link}>Регистрация</a>
                        </div>
                    </div>
                </header>
            );
    }
}