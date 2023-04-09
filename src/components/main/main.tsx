import classes from './main.module.scss';

export const Main = (props) => {
    return (
        <main>
            <div className={classes.container}>
                {props.children}
            </div>
        </main>
    );
}