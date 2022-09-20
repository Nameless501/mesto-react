import { useState, useEffect } from 'react';
import Card from './Card.js';
import api from '../utils/Api.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [userId, setUserId] = useState('');
    const [cards, setCards] = useState([]);


    useEffect(() => {
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
               <a src="#" className="profile__avatar-cover" onClick={onEditAvatar} />
               <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile} />
                    <p className="profile__job">{userDescription}</p>
               </div>
               <button type="button" className="profile__add-button" onClick={onAddPlace} />
            </section>
            <section className="elements content__elements">
                <ul className="elements__gallery">
                    {cards.map(currentCard => {
                        return (
                            <Card card={currentCard} myId={userId} key={currentCard._id} onCardClick={onCardClick} />
                        )
                    })}
                </ul>
            </section>
        </div>
    );
}

export default Main;