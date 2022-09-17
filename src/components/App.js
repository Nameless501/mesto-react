import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {
  const [isEditProfilePopupOpen, setEditProfileState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceState] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({data: '', isOpen: false});

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
      <Main isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen}
      onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} onClose={closeAllPopups} 
      onCardClick={handleCardClick} selectedCard={selectedCard} />
      <Footer />
    </div>
  );
}

export default App;
