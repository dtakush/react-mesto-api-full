import React from 'react';
import Entrance from './Entrance';


function Login(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    function handleChangeEmail(e) {
        setEmail(e.target.value);

      }
    
      function handleChangePassword(e) {
        setPassword(e.target.value);

      }

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin({ email, password });
    }

    return (
        <Entrance
            name="login"
            title="Вход"
            buttonTitle="Войти"
            onSubmit={handleSubmit}>

            <input
            className="entrance__input entrance__input_email"
            name="email"
            type="email"
            placeholder="Email"
            id="login__input_email"
            minLength="2"
            maxLength="40"
            onChange={handleChangeEmail}
            required />

            <span   
            className={`popup__error popup__error_email`}
            id="login__input_email-error"
            ></span>    

            <input
            className="entrance__input entrance__input_password"
            name="password"
            type="password"
            placeholder="Пароль"
            id="login__input_password"
            minLength="2"
            maxLength="40"
            onChange={handleChangePassword}
            required />

            <span   
            className={`popup__error popup__error_password`}
            id="login__input_password-error"
            ></span> 
        </Entrance>

    )
}

export default Login;

/*const [emailValid, setEmailValid] = React.useState(false);
    const [passwordValid, setPasswordValid] = React.useState(false);

    const [loginEmailError, setLoginEmailError] = React.useState("");
    const [loginPasswordError, setLoginPasswordError] = React.useState("");
    
    function validate() {
        setLoginEmailError(email.validationMessage);
        setLoginPasswordError(password.validationMessage);

        if(!email.validity.valid) {
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }

        if(!password.validity.valid) {
            setPasswordValid(false);
        } else {
            setPasswordValid(true);
        }
    }*/