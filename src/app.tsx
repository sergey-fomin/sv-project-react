import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Suspense, createContext, useState } from 'react';
import { PageWrapper } from '@components';
import { mockData } from '@mocks';
import { MainPageAsync, LoginPageAsync, RegistrationPageAsync } from '@pages';


export const AuthContext = createContext({ isLoggedIn: false });

export const App = () => {
    // const initialState = {route: 'main-page', isLoggedIn: true};
    const initialState = {route: 'login', isLoggedIn: true};
    const initialAuthState = { isLoggedIn: false };
    const [state, setState] = useState(initialState);
    const [authState, setAuthState] = useState(initialAuthState);
    const handleStateChange = (state) => setState(state);

    return (
        // <BrowserRouter>
            <AuthContext.Provider value={authState}>
                <PageWrapper
                    route={state.route}
                    isLoggedIn={state.isLoggedIn}
                    profileEmail={mockData.profileEmail}
                    handleStateChange={handleStateChange}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<MainPageAsync isLoggedIn={state.isLoggedIn}/>} />
                            <Route path="/login" element={<LoginPageAsync/>} />
                            <Route path="/registration" element={<RegistrationPageAsync handleStateChange={handleStateChange}/>} />
                        </Routes>
                    </Suspense>
                    {/* {(state.route === 'login') && <LoginPage/>}
                    {(state.route === 'registration') && <RegistrationPage handleStateChange={handleStateChange}/>}
                    {(state.route === 'main-page') && <MainPage isLoggedIn={state.isLoggedIn}/>} */}
                </PageWrapper>
            </AuthContext.Provider>
        // </BrowserRouter>
    );
}