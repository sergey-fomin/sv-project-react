import classes from './profile.module.scss';
import plusIcon from './../../assets/svg/plus-icon.svg';
import editIcon from './../../assets/svg/edit-icon.svg';

type TPorfileProps = {
    avatarSrc: string;
    name: string;
    occupation: string;
}

export const Profile = (props: TPorfileProps) => {
    return (
        <div className={classes.profile}>
            <img
                src={props.avatarSrc}
                // КАК установить?????????
                srcSet="/img/avatar@2x.jpg 2x"
                alt="avatar"
                className={classes.avatar}
                width="120"
                height="120"
            />
            <div className={classes.info}>
                <div className={classes.nameWrapper}>
                    <p className={classes.name}>{props.name}</p>
                    <button className={classes.editBtn}>
                        <img
                            className={classes.editBtnIcon}
                            src={editIcon}
                            alt="edit"
                        />
                    </button>
                </div>
                <p className={classes.occupation}>{props.occupation}</p>
            </div>
            <button className={classes.addCardBtn}>
                <img
                    className={classes.addCardBtnIcon}
                    src={plusIcon}
                    alt="add card icon"
                />
            </button>
        </div>
    );
}