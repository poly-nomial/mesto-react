import React from 'react';
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarLinkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarLinkRef.current.value);
        avatarLinkRef.current.value = '';
    }

    return (
        <PopupWithForm name='change-avatar' title='Обновить аватар' isOpen={isOpen} onClose={onClose} buttonText='Сохранить' onSubmit={handleSubmit}>
          <div className="input-field">
              <input ref={avatarLinkRef} type="url" id="avatar-link" placeholder="Ссылка на аватар" className="popup__input popup__input_type_avatar-link" required />
              <span className="popup__input-error popup__avatar-link-error"></span>
          </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;