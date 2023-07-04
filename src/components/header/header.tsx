import classes from './header.module.scss';
import mestoLogo from '@assets/svg/mesto-logo.svg'
import { useContext, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { AuthContext } from '../../app';

export type THeaderProps = {
    route: string;
    isLoggedIn: boolean;
    profileEmail: string;
    handleStateChange: (state: any) => void;
}

export const Header = (props: THeaderProps) => {
    const {pathname} = useLocation();
    const {isLoggedIn} = useContext(AuthContext);
    const currentRoute = pathname.split('/', 2).filter(string => string !== '').toString();

    console.log('isLoggedIn', isLoggedIn);

    // Почему при типизации события вылезает ошибка??????
    const handleLinkToLogin = (evt): void => {
        evt.preventDefault();
        props.handleStateChange({route: 'login', isLoggedIn: false});
    }

    const handleLinkToRegistration = (evt): void => {
        evt.preventDefault();
        props.handleStateChange({route: 'registration', isLoggedIn: false});
    }

    const handleLinkToLogout = (evt): void => {
        evt.preventDefault();
        props.handleStateChange({route: '/', isLoggedIn: false});
    }

    const getLoginInfo = (route: string, isLoggedIn: boolean, profileEmail = '') => {
        switch(route) {
            case 'registration':
                return (
                    <Link to={'/login'} className={classes.link}>Войти</Link>
                );
            case 'login':
                return (
                    <Link to={'/registration'} className={classes.link}>Регистрация</Link>
                );
            default:
                if (isLoggedIn) {
                    return (
                        <>
                            <p className={classes.email}>{profileEmail}</p>
                            <Link to={'/'} onClick={handleLinkToLogout} className={classes.link}>Выйти</Link>
                        </>
                    );
                }

                return (
                    <>
                        <Link to={'/login'} className={classes.link}>Войти</Link>
                        <span>/</span>
                        <Link to={'/registration'} className={classes.link}>Регистрация</Link>
                    </>
                );
        }
    }

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img className={classes.logo} src={mestoLogo}/>
                <div className={classes.loginInfo}>
                    <Routes>
                        {/* сам контекст в функцию не передавать! */}
                        {/* <Route path='/' element={<>getMainHeader(context.isLoggedIn)</>}></Route> */}
                        <Route path='/' element={<>main</>}></Route>
                        <Route path='/login' element={<>login</>}></Route>
                        <Route path='/registration' element={<>registration</>}></Route>
                    </Routes>
                    {/* {
                        (currentRoute !== 'login' || isLoggedIn === false) &&
                        <Link to={'/login'} className={classes.link}>Войти</Link>
                    } */}
                    {
                        getLoginInfo(
                            currentRoute,
                            isLoggedIn,
                            props.profileEmail
                        )
                    }
                </div>
            </div>
        </header>
    );
}