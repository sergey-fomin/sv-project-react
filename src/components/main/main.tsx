import classes from './main.module.scss';

export const Main = (props) => {
    return (
        <main className={classes.main}>
            <div className={classes.main__container}>
                {props.children}
            </div>
        </main>
    );
}