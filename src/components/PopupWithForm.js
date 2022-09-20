import React from 'react';

function PopupWithForm({ name, title, buttonText, isOpen, onClose, children }) {
    return(
        <section className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
            <form name={name} className="popup__form" noValidate>
                <fieldset className="popup__fieldset">
                    <legend className="popup__title">
                        {title}
                    </legend>
                    {children}
                    <button type="submit" className="popup__submit-button">{buttonText}</button>
                </fieldset>
              <button type="reset" className="popup__close-button" onClick={onClose} />
            </form>
        </section>
    );
}

export default PopupWithForm;