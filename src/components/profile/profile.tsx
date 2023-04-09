import classes from './profile.module.scss';
import avatar from './../../assets/img/avatar@2x.jpg';
import plusIcon from './../../assets/svg/plus-icon.svg';
import editIcon from './../../assets/svg/edit-icon.svg';

export const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <img
                src={avatar}
                // КАК установить?????????
                srcSet="/img/avatar@2x.jpg 2x"
                alt="avatar"
                className={classes.avatar}
                width="120"
                height="120"
            />
            <div className={classes.info}>
                <div className={classes.nameWrapper}>
                    <p className={classes.name}>Жак-Ив Кусто</p>
                    <button className={classes.editBtn}>
                        <img
                            className={classes.editBtnIcon}
                            src={editIcon}
                            alt="edit"
                        />
                    </button>
                </div>
                <p className={classes.occupation}>Исследователь океана</p>
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