const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const BadRequest = require('../errors/BadRequest');
const Unauthorized = require('../errors/Unauthorized');
const NotFound = require('../errors/NotFound');
const Conflict = require('../errors/Conflict');

const { JWT_SECRET = 'super-strong-secret' } = process.env;

// Запрос всех юзеров
module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

// Создание пользователя
module.exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar,
      password: hash,
    }))
    .then((user) => res.status(200)
      .send({
        email: user.email,
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        _id: user._id,
      }))
    .catch((err) => {
      if (err.name === 'MongoError' && err.code === 11000) {
        throw new Conflict('При регистрации указан email, который уже существует');
      } else if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные при создании пользователя');
      }
    })
    .catch(next);
};

// Найти пользователя по айди
module.exports.getIdUser = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(new Error('NotValidId'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'NotValidId') {
        throw new NotFound('Пользователь по указанному Id не найден');
      } else if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные при поиске пользователя по Id');
      }
    })
    .catch(next);
};

// Обновление профиля
module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true, upsert: true },
  )
    .orFail(new Error('NotValidId'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.message === 'NotValidId') {
        throw new NotFound('Пользователь по указанному Id не найден');
      } else if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные при обновлении профиля');
      }
    })
    .catch(next);
};

// Обновление аватара
module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true, upsert: true },
  )
    .orFail(new Error('NotValidId'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.message === 'NotValidId') {
        throw new NotFound('Пользователь по указанному Id не найден');
      } else if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные при обновлении аватара');
      }
    })
    .catch(next);
};

// Вход
module.exports.login = (req, res, next) => {
  // eslint-disable-next-line
  const { email, password } = req.body;

  User.findOne({ email }).select('+password')
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        JWT_SECRET,
        { expiresIn: '7d' },
      );
      return res
        .cookie('jwt', token, {
          maxAge: 604800000,
          httpOnly: true,
          sameSite: true,
        })
        .send({ message: 'Успешная авторизация' });
    })
    .catch(() => {
      throw new Unauthorized('Неверный логин либо пароль');
    })
    .catch(next);
};

// Найти информацию пользователя
module.exports.getUserInfo = (req, res, next) => {
  User.findOne({ _id: req.user._id })
    .orFail(new Error('NotValidId'))
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        throw new NotFound('Пользователя с таким Id не существует');
      }
    })
    .catch(next);
};
