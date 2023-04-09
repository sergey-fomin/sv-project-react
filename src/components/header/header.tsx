import { classNames } from '../../helpers/class-names/class-names';
import classes from './header.module.scss';
import mestoLogo from './../../assets/svg/mesto-logo.svg'
import { useState } from 'react';

type THeaderProps = {
    route: string;
    isLoggedIn: boolean;
    profileEmail: string;
    onStateChange: ({}) => {};
}

export const Header = (props: THeaderProps) => {
    // const initialRoute = {route: props.route, isLoggedIn: props.isLoggedIn};
    // const [state, setState] = useState(initialRoute);

    // Почему при типизации события вылезает ошибка??????
    const handleLinkToLogin = (evt): void => {
        evt.preventDefault();
        // setState({route: 'login', isLoggedIn: false});
        props.onStateChange({route: 'login', isLoggedIn: false});
    }

    const handleLinkToRegistration = (evt): void => {
        evt.preventDefault();
        // setState({route: 'registration', isLoggedIn: false});
        props.onStateChange({route: 'registration', isLoggedIn: false});
    }

    const handleLinkToLogout = (evt): void => {
        evt.preventDefault();
        // setState({route: 'main-page', isLoggedIn: false});
        props.onStateChange({route: 'main-page', isLoggedIn: false});
    }

    const getLoginInfo = (route: string, isLoggedIn: boolean, profileEmail = '') => {
        switch(route) {
            case 'registration':
                return (
                    <div className={classes.loginInfo}>
                        <a href="#" onClick={handleLinkToLogin} className={classes.link}>Войти</a>
                    </div>
                );
            case 'login':
                return (
                    <div className={classes.loginInfo}>
                        <a href="#" onClick={handleLinkToRegistration} className={classes.link}>Регистрация</a>
                    </div>
                );
            default:
                if (isLoggedIn) {
                    return (
                        <div className={classes.loginInfo}>
                            <p className={classes.email}>{profileEmail}</p>
                            <a href="#" onClick={handleLinkToLogout} className={classes.link}>Выйти</a>
                        </div>
                    );
                }

                return (
                    <div className={classes.loginInfo} >
                        <a href="#" onClick={handleLinkToLogin} className={classes.link}>Войти</a>
                        <span>/</span>
                        <a href="#" onClick={handleLinkToRegistration} className={classes.link}>Регистрация</a>
                    </div>
                );
        }
    }

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img className={classes.logo} src={mestoLogo}/>
                {
                    getLoginInfo(
                        props.route,
                        props.isLoggedIn,
                        props.profileEmail
                    )
                }
            </div>
        </header>
    );
}