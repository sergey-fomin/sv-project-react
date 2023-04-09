import { classNames } from '../../helpers/class-names/class-names';
import classes from './header.module.scss';
import mestoLogo from './../../assets/svg/mesto-logo.svg'

type THeaderProps = {
    route: string;
    isLoggedIn: boolean;
}

const getLoginInfo = (route: string, isLoggedIn: boolean) => {
    switch(route) {
        case 'registration':
            return (
                <div className={classes.loginInfo}>
                    <a href="#" className={classes.link}>Войти</a>
                </div>
            );
        case 'login':
            return (
                <div className={classes.loginInfo}>
                    <a href="#" className={classes.link}>Регистрация</a>
                </div>
            );
        default:
            if (isLoggedIn) {
                return (
                    <div className={classes.loginInfo}>
                        <p className={classes.email}></p>
                        <a href="#" className={classes.link}>Выйти</a>
                    </div>
                );
            }

            return (
                <div className={classes.loginInfo} >
                    <a href="#" className={classes.link}>Войти</a>
                    <span>/</span>
                    <a href="#" className={classes.link}>Регистрация</a>
                </div>
            );
    }
}

export const Header = (props: THeaderProps) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img className={classes.logo} src={mestoLogo}/>
                { getLoginInfo(props.route, props.isLoggedIn) }
            </div>
        </header>
    );
}