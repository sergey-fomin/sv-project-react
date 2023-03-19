export const CardItem = (props) => {
    return (
        <div className="card-item">
            <img
                alt={props.image.src || ""}
                src={props.image.src || "/img/default-card-image.jpg"}
                className="card-item__image"
            />
            <div className="card-item__description">
                <p className="card-item__title">{props.title}</p>
                <button className="card-item__like-btn"></button>
            </div>
            <button className="card-item__delete-btn" data-authorized>
                <img
                    width="19"
                    height="22"
                    className="card-item__delete-btn-icon"
                    src="/svg/delete-icon.svg"
                    alt="delete icon"
                />
            </button>
        </div>
    );
}