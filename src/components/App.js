
import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {

  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, toggleAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, toggleEditAvatarPopup] = React.useState(false);
  const [selectedCard, handleCardClick] = React.useState(null);

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

  return (
    <div className='page'>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleAvatarEditClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name='change-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
        <div className="input-field">
            <input type="url" id="avatar-link" placeholder="Ссылка на аватар" className="popup__input popup__input_type_avatar-link" required />
            <span className="popup__input-error popup__avatar-link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
        <div className="input-field">
            <input type="text" id="user-name" placeholder="Имя" className="popup__input popup__input_type_user-name" minLength="2" maxLength="40" required />
            <span className="popup__input-error popup__user-name-error"></span>
        </div>
        <div className="input-field">
            <input type="text" id="user-desc" placeholder="Описание" className="popup__input popup__input_type_user-desc" minLength="2" maxLength="200" required />
        <span className="popup__input-error popup__user-desc-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name='add-place' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
        <div className="input-field">
            <input type="text" id="place-name" placeholder="Название" className="popup__input popup__input_type_place-name" minLength="2" maxLength="30" required />
            <span className="popup__input-error popup__place-name-error"></span>
        </div>
        <div className="input-field">
            <input type="url" id="place-link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-link" required /> 
            <span className="popup__input-error popup__place-link-error"></span>
        </div>   
      </PopupWithForm>
      <PopupWithForm name='confirmation' title='Вы уверены?'isOpen={false} onClose={closeAllPopups} buttonText='Да'>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  )
}

export default App;