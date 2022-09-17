import React from 'react';
import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import api from '../utils/Api.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [userId, setUserId] = React.useState('');
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        Promise.all([api.getCardsData(), api.getUserData()])
            .then(allData => {
                const [cardsData, userData] = allData;
                return [cardsData, userData]
            })
            .then(([cardsData, userData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setUserId(userData._id);
                setCards(cardsData);
            })
            .catch(err => console.log(`Не удалость загрузить данные. Ошибка: ${err}`));
    }, []);

    return(
        <div className='content'>
            <section className="profile content__profile">
               <div style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" />
               <a src="#" className="profile__avatar-cover" onClick={props.onEditAvatar} />
               <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
                    <p className="profile__job">{userDescription}</p>
               </div>
               <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
            </section>
            <section className="elements content__elements">
                <ul className="elements__gallery">
                    {cards.map(currentCard => {
                        return (
                            <Card card={currentCard} myId={userId} key={currentCard._id} onCardClick={props.onCardClick} />
                        )
                    })}
                </ul>
            </section>
            <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isEditProfilePopupOpen} onClose={props.onClose}>
                <>
                    <input type="text" name="name" id="name-input" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
                    <span className="popup__error-message name-input-error" />
                    <input type="text" name="info" id="job-input" className="popup__input popup__input_type_job" required minLength="2" maxLength="200" />
                    <span className="popup__error-message job-input-error" />
                    <button type="submit" className="popup__submit-button">Сохранить</button>
                </>
            </PopupWithForm>
            <PopupWithForm name="add" title="Новое место" isOpen={props.isAddPlacePopupOpen} onClose={props.onClose}>
                <>
                    <input type="text" name="name" placeholder="Название" id="place-input" className="popup__input popup__input_type_place" required minLength="2" maxLength="30" />
                    <span className="popup__error-message place-input-error" />
                    <input type="url" name="link" placeholder="Ссылка на картинку" id="link-input" className="popup__input popup__input_type_link" required />
                    <span className="popup__error-message link-input-error" />
                    <button type="submit" className="popup__submit-button">Создать</button>
                </>
            </PopupWithForm>
            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose}>
                <>
                    <input type="url" name="avatar" placeholder="Ссылка на картинку" id="avatar-input" className="popup__input popup__input_type_link" required />
                    <span className="popup__error-message avatar-input-error" />
                    <button type="submit" className="popup__submit-button">Сохранить</button>
                </>
            </PopupWithForm>
            <ImagePopup isOpen={props.selectedCard.isOpen} onClose={props.onClose} card={props.selectedCard.data} />
        </div>
    );
}

export default Main;