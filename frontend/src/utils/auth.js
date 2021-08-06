import api from './api';
export const BASE_URL = 'https://api.dtakush.mesto.student.nomoredomains.club';

//Регистрация
export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password})
  })
  .then((res) => {
    try {
      if (res.status !== 400){
        return res.json();
      }
    } catch(e){
      return (e)
    }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};


//Авторизация
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password})
  })
    .then((res) => {
        if(res.status === 200) {
          return res.json();
        }
        if(res.status === 400) {
          console.log("Не передано одно из полей");
        }
        if(res.status === 401) {
          console.log("Пользователь с email не найден");
        }
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      })
      .then((res) => {
        if(res.token) {
            localStorage.setItem('token', res.token);
            api.updateHeaders();
            return res;
        }
    })  
    .catch((err) => console.log(err));
};


//Проверка токена
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res) => {
    if(res.status === 200) {
      return res.json();
    }
    if(res.status === 400) {
      console.log("Токен не передан или передан не в том формате");
    }
    if(res.status === 401) {
      console.log("Переданный токен некорректен");
    }
  })
  .then((data) => {
    return data;
  })
  .catch((err) => console.log(err));
}