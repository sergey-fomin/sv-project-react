import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/main-page/main-page.async';
import { Suspense } from 'react';
import MainPage from './pages/main-page/main-page';

export const App = () => {
    return (
        <MainPage/>
        // <Suspense fallback={<div>Loading...</div>}>
        //     <Routes>
        //         <Route path={'./'} element={ <MainPage/> } />
        //     </Routes>
        // </Suspense>
    );
}