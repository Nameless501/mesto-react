import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfileState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlaceState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({data: '', isOpen: false});

  function onEditProfile() {
    setEditProfileState(true)
  }

  function onAddPlace() {
    setAddPlaceState(true)
  }
  
  function onEditAvatar() {
    setEditAvatarState(true)
  }

  function closeAllPopups() {
    setEditProfileState(false);
    setAddPlaceState(false);
    setEditAvatarState(false);
    setSelectedCard({data: '', isOpen: false})
  }

  function handleCardClick(card) {
    setSelectedCard({data: card, isOpen: true});
  }

  return (
    <div className="App">
      <Header />
      <Main onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <>
                    <input type="text" name="name" id="name-input" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
                    <span className="popup__error-message name-input-error" />
                    <input type="text" name="info" id="job-input" className="popup__input popup__input_type_job" required minLength="2" maxLength="200" />
                    <span className="popup__error-message job-input-error" />
                </>
            </PopupWithForm>
            <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <>
                    <input type="text" name="name" placeholder="Название" id="place-input" className="popup__input popup__input_type_place" required minLength="2" maxLength="30" />
                    <span className="popup__error-message place-input-error" />
                    <input type="url" name="link" placeholder="Ссылка на картинку" id="link-input" className="popup__input popup__input_type_link" required />
                    <span className="popup__error-message link-input-error" />
                </>
            </PopupWithForm>
            <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <>
                    <input type="url" name="avatar" placeholder="Ссылка на картинку" id="avatar-input" className="popup__input popup__input_type_link" required />
                    <span className="popup__error-message avatar-input-error" />
                </>
            </PopupWithForm>
            <ImagePopup isOpen={selectedCard.isOpen} onClose={closeAllPopups} card={selectedCard.data} />
    </div>
  );
}

export default App;
