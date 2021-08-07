import React from 'react';
//Контекст
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    //Реф
    /* const userAvatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: userAvatarRef.current.value,
        });

        e.target.reset();
    } */

    //Подписываемся на контект
    const currentUser = React.useContext(CurrentUserContext);

    //Стейт-переменные
    const [avatar, setAvatar] = React.useState('');

    React.useEffect(() => {
        setAvatar(currentUser.avatar);
      }, [currentUser]);

    //Обработчики
    function handleChangeAvatar(e) {
        setAvatar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateAvatar({
          avatar: avatar,
        });
    }

    return (
        <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}>
            <input
            value={avatar || ''}
            name="link" type="url"
            placeholder="Ссылка"
            className="popup__input popup__input_link"
            id="avatar-popup__input_link"
            onChange={handleChangeAvatar}
            required />
            <span className="popup__error popup__error_link" id="avatar-popup__input_link-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;