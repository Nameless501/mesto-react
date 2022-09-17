import React from 'react';

function Card(props) {
    let isLiked = props.card.likes.some(item => item._id === props.myId);
    let isMyCard = props.card.owner._id === props.myId;

    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
        <li className='elements__card'>
            <figure className="elements__figure">
                <img src={props.card.link} alt={props.card.name} className="elements__image" onClick={handleClick} />
                <figcaption className="elements__caption">{props.card.name}</figcaption>
            </figure>
            <button type="button" className={isLiked ? "elements__like-button elements__like-button__active" : "elements__like-button"}>
                <p className="elements__like-counter">{props.card.likes.length}</p>
            </button>
            {isMyCard && <button type="button" className="elements__delete-button" />}
        </li>
    );
}

export default Card;