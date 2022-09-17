import React from 'react';

function PopupWithForm(props) {
    return(
        <section className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
            <form name={props.name} className="popup__form" noValidate>
                <fieldset className="popup__fieldset">
                    <legend className="popup__title">
                        {props.title}
                    </legend>
                    {props.children}
                </fieldset>
              <button type="reset" className="popup__close-button" onClick={props.onClose} />
            </form>
        </section>
    );
}

export default PopupWithForm;