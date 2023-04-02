import classes from './footer.module.scss';

export const Footer = () => {
    return(
        <footer className={classes.footer}>
            <div className={classes.footer__container}>
                <p className={classes.footer__copyright}>&copy; 2020 Mesto Russia</p>
            </div>
        </footer>
    );
}