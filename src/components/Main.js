import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
          .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
          })
          .then(() => {
            api.getCardsFromServer()
                .then((res) => {
                    setCards(res);
                })
                .catch((err) => console.log(err))
          })
          .catch((err) => console.log(err))
      }, [])

    return (
        <main className="main">
          <section className="profile">
              <div className="avatar button-decor" style={{backgroundImage: `url(${userAvatar})`}}onClick={onEditAvatar}><div className="avatar__edit-pic"></div></div>
              <div className="profile__info">
                  <h1 className="profile__user-name">{userName}</h1>
                  <button type="button" aria-label="Изменить профиль" className="profile__edit-button button-decor hover-opacity" onClick={onEditProfile}></button>
                  <p className="profile__user-description">{userDescription}</p>
              </div>
              <button type="button" aria-label="Добавить фото" className="profile__add-button button-decor hover-opacity" onClick={onAddPlace}></button>
          </section>
          <section className="places">
            {cards.map((card) => (
                <Card key={card._id} item={card} onClick={onCardClick}/>
            ))}
          </section>
      </main>
    )
}

export default Main;