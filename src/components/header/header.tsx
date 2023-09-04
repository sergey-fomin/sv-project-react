import classes from './header.module.scss';
import mestoLogo from '@assets/svg/mesto-logo.svg'
import { AuthContext, ProfileContext } from '@context';
import { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

export type THeaderProps = {
    handleAuthStateChange: (state: {isLoggedIn: boolean}) => void;
}

export const Header = (props: THeaderProps) => {
    const { isLoggedIn } = useContext(AuthContext);
    const profileData = useContext(ProfileContext);

    const handleLinkToLogout = (): void => {
        props.handleAuthStateChange({isLoggedIn: false});
    }

    const loginHeaderContent = <Link to={'/registration'} className={classes.link}>Регистрация</Link>;
    const registrationHeaderContent = <Link to={'/login'} className={classes.link}>Войти</Link>;

    const getMainHeaderContent = () => {
        if (isLoggedIn) {
            return (
                <>
                    <p className={classes.email}>{profileData?.email}</p>
                    <button onClick={handleLinkToLogout} className={classes.link}>Выйти</button>
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

    };

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img className={classes.logo} src={mestoLogo}/>
                <div className={classes.loginInfo}>
                    <Routes>
                        <Route path='/' element={getMainHeaderContent()}></Route>
                        <Route path='/login' element={loginHeaderContent}></Route>
                        <Route path='/registration' element={registrationHeaderContent}></Route>
                    </Routes>
                </div>
            </div>
        </header>
    );
}