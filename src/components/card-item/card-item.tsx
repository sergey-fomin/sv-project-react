import classes from './card-item.module.scss';

type TCardItemProps = {
    imageSrc: string;
    title: string;
}

export const CardItem = (props: TCardItemProps) => {
    return (
        <div className={classes['card-item']}>
            <img
                alt={props.imageSrc || ""}
                src={props.imageSrc || "/img/default-card-image.jpg"}
                className={classes['card-item__image']}
            />
            <div className={classes['card-item__description']}>
                <p className={classes['card-item__title']}>{props.title}</p>
                <button className={classes['card-item__like-btn']}></button>
            </div>
            <button className={classes['card-item__delete-btn']} data-authorized>
                <img
                    width="19"
                    height="22"
                    className={classes['card-item__delete-btn-icon']}
                    src="/svg/delete-icon.svg"
                    alt="delete icon"
                />
            </button>
        </div>
    );
}