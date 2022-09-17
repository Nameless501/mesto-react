import React from 'react';

function ImagePopup(props) {
    return(
        <section className={props.isOpen ? "popup popup_type_image popup_opened" : "popup popup_type_image"}>
            <div className="popup__wrapper">
                <figure className="popup__figure">
                    <img src={props.isOpen ? props.card.link : ''} alt={props.card.name} className="popup__image" />
                    <figcaption className="popup__caption">{props.card.name}</figcaption>
                </figure>
                <button type="button" className="popup__close-button" onClick={props.onClose} />
            </div>
        </section>
    )
}

export default ImagePopup;