import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
// import { MainPageAsync } from './pages/main-page/main-page.async';
import { Suspense, useState } from 'react';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import RegistrationPage from './pages/registration-page/registration-page';
import { PageWrapper } from './components/page-wrapper/page-wrapper';
import { mockData } from './helpers/mock-data/mock-data';

export const App = () => {
    const initialState = {route: 'main-page', isLoggedIn: true};
    const [state, setState] = useState(initialState);
    const handleStateChange = (state) => setState(state);

    return (
        <PageWrapper
            route={state.route}
            isLoggedIn={state.isLoggedIn}
            profileEmail={mockData.profileEmail}
            onStateChange={handleStateChange}
        >
            {(state.route === 'login') && <LoginPage/>}
            {(state.route === 'registration') && <RegistrationPage handleStateChange={handleStateChange}/>}
            {(state.route === 'main-page') && <MainPage isLoggedIn={state.isLoggedIn}/>}
        </PageWrapper>
    );
}