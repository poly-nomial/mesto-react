
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {

  function handleAvatarEditClick() {
    toggleEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    toggleEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
      toggleAddPlacePopup(true);
  }

  function closeAllPopups() {
    toggleEditProfilePopup(false);
    toggleAddPlacePopup(false);
    toggleEditAvatarPopup(false);
    handleCardClick(null);
  }

  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, toggleAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, toggleEditAvatarPopup] = React.useState(false);
  const [selectedCard, handleCardClick] = React.useState(null);

  return (
    <div className='page'>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleAvatarEditClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name='change-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="input-field">
            <input type="url" id="avatar-link" placeholder="Ссылка на аватар" className="popup__input popup__input_type_avatar-link" required />
            <span className="popup__input-error popup__avatar-link-error"></span>
        </div>
        <button type="submit" className="popup__save-btn hover-opacity" disabled>Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <div className="input-field">
            <input type="text" id="user-name" placeholder="Имя" className="popup__input popup__input_type_user-name" minLength="2" maxLength="40" required />
            <span className="popup__input-error popup__user-name-error"></span>
        </div>
        <div className="input-field">
            <input type="text" id="user-desc" placeholder="Описание" className="popup__input popup__input_type_user-desc" minLength="2" maxLength="200" required />
        <span className="popup__input-error popup__user-desc-error"></span>
        </div>
        <button type="submit" className="popup__save-btn hover-opacity" disabled>Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name='add-place' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="input-field">
            <input type="text" id="place-name" placeholder="Название" className="popup__input popup__input_type_place-name" minLength="2" maxLength="30" required />
            <span className="popup__input-error popup__place-name-error"></span>
        </div>
        <div className="input-field">
            <input type="url" id="place-link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-link" required /> 
            <span className="popup__input-error popup__place-link-error"></span>
        </div>   
        <button type="submit" className="popup__save-btn hover-opacity" disabled>Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name='confirmation' title='Вы уверены?'isOpen={false} onClose={closeAllPopups}>
        <button type="button" className="popup__save-btn hover-opacity">Да</button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  )
}

export default App;