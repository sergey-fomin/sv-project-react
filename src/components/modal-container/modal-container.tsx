import classes from './modal-container.module.scss';

export const ModalContainer = (props) => {
    return (
        <div className={classes['modal-container']}>
            <div className={classes['modal-container__container']}>
                <div
                    className={classes['modal-container__content-wrapper']}
                >
                    {props.children}
                    <button className={classes['modal-container__close-btn']} type="button">
                        <img
                            className={classes['modal-container__edit-btn-icon']}
                            src="/svg/close-icon.svg"
                            alt="edit"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}