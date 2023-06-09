import { PropsWithChildren } from 'react';
import { Footer, Header, THeaderProps } from '@components';
import classes from './page-wrapper.module.scss';

export const PageWrapper = (props: PropsWithChildren<THeaderProps>) => {
    return (
        <div className={classes.pageWrapper}>
            <Header
                isLoggedIn={props.isLoggedIn}
                route={props.route}
                profileEmail={props.profileEmail}
                handleStateChange={props.handleStateChange}
            />
                <main className={classes.container}>
                    {props.children}
                </main>
            <Footer/>
        </div>
    );
}