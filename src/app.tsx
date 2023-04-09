import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
// import { MainPageAsync } from './pages/main-page/main-page.async';
import { Suspense, useState } from 'react';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import RegistrationPage from './pages/registration-page/registration-page';

export const App = () => {
    const initialState = {route: 'main-page', isLoggedIn: true};
    const [state, setState] = useState(initialState);

    const handleStateChange = (state) => {
        setState(state);
        console.log(state)
    }

    if (state.route === 'login') {
        return <LoginPage route={state.route} isLoggedIn={state.isLoggedIn} handleStateChange={handleStateChange}/>
    }

    if (state.route === 'registration') {
        return <RegistrationPage route={state.route} isLoggedIn={state.isLoggedIn} handleStateChange={handleStateChange}/>
    }
    return <MainPage route={state.route} isLoggedIn={state.isLoggedIn} handleStateChange={handleStateChange}/>
    // return (
        // <Suspense fallback={<div>Loading...</div>}>
        //     <Routes>
        //         <Route path={'./'} element={ <MainPage/> } />
        //     </Routes>
        // </Suspense>
    // );
}