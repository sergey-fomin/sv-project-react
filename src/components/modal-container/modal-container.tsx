export const ModalContainer = (props) => {
    return (
        <div className="modal-container">
            <div className="modal-container__container">
                <div
                    id="modal-container-content-wrapper"
                    className="modal-container__content-wrapper"
                >
                    {props.children}
                    <button className="modal-container__close-btn" type="button">
                        <img
                            className="modal-container__edit-btn-icon"
                            src="/svg/close-icon.svg"
                            alt="edit"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}