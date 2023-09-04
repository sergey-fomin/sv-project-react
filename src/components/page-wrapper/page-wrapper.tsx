import { PropsWithChildren } from 'react';
import { Footer, Header } from '@components';
import classes from './page-wrapper.module.scss';

type TPageWrapperProps = {
    handleAuthStateChange: (state: {isLoggedIn: boolean}) => void;
}

export const PageWrapper = (props: PropsWithChildren<TPageWrapperProps>) => {
    return (
        <div className={classes.pageWrapper}>
            <Header handleAuthStateChange={props.handleAuthStateChange} />
                <main className={classes.container}>
                    {props.children}
                </main>
            <Footer/>
        </div>
    );
}