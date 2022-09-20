import React from 'react';

function Card({ card, myId, onCardClick }) {
    let isLiked = card.likes.some(item => item._id === myId);
    let isMyCard = card.owner._id === myId;

    function handleClick() {
        onCardClick(card);
    }

    return(
        <li className='elements__card'>
            <figure className="elements__figure">
                <img src={card.link} alt={card.name} className="elements__image" onClick={handleClick} />
                <figcaption className="elements__caption">{card.name}</figcaption>
            </figure>
            <button type="button" className={isLiked ? "elements__like-button elements__like-button__active" : "elements__like-button"}>
                <p className="elements__like-counter">{card.likes.length}</p>
            </button>
            {isMyCard && <button type="button" className="elements__delete-button" />}
        </li>
    );
}

export default Card;