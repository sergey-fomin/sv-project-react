import classes from './card-item.module.scss';
import defaultImg from './../../assets/img/default-card-image.jpg';
import deleteIcon from './../../assets/svg/delete-icon.svg';

export type TCardItem = {
    imageSrc?: string;
    title: string;
}

export const CardItem = (props: TCardItem) => {
    return (
        <div className={classes.cardItem}>
            <img
                alt={props.title}
                src={props.imageSrc || defaultImg}
                className={classes.image}
            />
            <div className={classes.description}>
                <p className={classes.title}>{props.title}</p>
                <button className={classes.likeBtn}></button>
            </div>
            <button className={classes.deleteBtn}>
                <img
                    width="19"
                    height="22"
                    className={classes.deleteBtnIcon}
                    src={deleteIcon}
                    alt="delete icon"
                />
            </button>
        </div>
    );
}