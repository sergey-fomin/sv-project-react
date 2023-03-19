export const Profile = (props) => {
    return (
        <div className="profile">
            <img
                src="/img/avatar.jpg"
                srcSet="/img/avatar@2x.jpg 2x"
                alt="avatar"
                className="profile__avatar"
                width="120"
                height="120"
            />
            <div className="profile__info">
                <div className="profile__name-wrapper">
                    <p className="profile__name">Жак-Ив Кусто</p>
                    <button className="profile__edit-btn">
                        <img
                            className="profile__edit-btn-icon"
                            src="/svg/edit-icon.svg"
                            alt="edit"
                        />
                    </button>
                </div>
                <p className="profile__occupation">Исследователь океана</p>
            </div>
            <button className="profile__add-card-btn">
                <img
                    className="profile__add-card-btn-icon"
                    src="/svg/plus-icon.svg"
                    alt="mystery"
                />
            </button>
        </div>
    );
}