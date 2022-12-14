import { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = useState({
        value: '',
        isValid: false,
        validationMsg: ''
    });

    const [description, setDescription] = useState({
        value: '',
        isValid: false,
        validationMsg: ''
    });

    const [formIsValid, setFormValidity] = useState(false);

    const currentUser = useContext(CurrentUserContext);

    function handleNameChange(evt) {
        if (evt.target.validity.valid) {
            setName({
                value: evt.target.value,
                isValid: true,
                validationMsg: ''
            });
        } else {
            setName({
                value: evt.target.value,
                isValid: false,
                validationMsg: evt.target.validationMessage
            });
        }
    }

    function handleDescriptionChange(evt) {
        if (evt.target.validity.valid) {
            setDescription({
                value: evt.target.value,
                isValid: true,
                validationMsg: ''
            });
        } else {
            setDescription({
                value: evt.target.value,
                isValid: false,
                validationMsg: evt.target.validationMessage
            });
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
            name: name.value,
            description: description.value
        });
    }

    function handleFormValidity() {
        name.isValid && description.isValid ? setFormValidity(true) : setFormValidity(false);
    }

    useEffect(() => {
        handleFormValidity();
    },
    [name, description])

    useEffect(() => {
        setName({
            value: currentUser.name,
            isValid: true,
            validationMsg: ''
        });
        setDescription({
            value: currentUser.about,
            isValid: true,
            validationMsg: ''
        });
    },
    [currentUser, isOpen])

    return(
        <PopupWithForm name="profile" title="?????????????????????????? ??????????????" buttonText="??????????????????" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isValid={formIsValid} >
            <>
                <input type="text" name="name" id="name-input" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" onChange={handleNameChange} value={name.value || ''} />
                <span className={`popup__error-message ${(!name.isValid && isOpen) ? "popup__error-message_visible" : "popup__error-message_hidden"}`} >
                    {name.validationMsg}
                </span>
                <input type="text" name="info" id="job-input" className="popup__input popup__input_type_job" required minLength="2" maxLength="200" onChange={handleDescriptionChange} value={description.value || ''} />
                <span className={`popup__error-message ${(!description.isValid && isOpen) ? "popup__error-message_visible" : "popup__error-message_hidden"}`} >
                    {description.validationMsg}
                </span>
            </>
        </PopupWithForm>
    )
}

export default EditProfilePopup;