import classes from './footer.module.scss';

export const Footer = () => {
    return(
        <footer className={classes.footer}>
            <div className={classes.container}>
                <p className={classes.copyright}>&copy; 2020 Mesto Russia</p>
            </div>
        </footer>
    );
}