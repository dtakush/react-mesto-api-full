require('dotenv').config();

const Card = require('../models/card');

const BadRequest = require('../errors/BadRequest');
const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');

// Запрос карточек
module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные при создании карточки');
      }
    })
    .catch(next);
};

// Создание карточки
module.exports.createCard = (req, res, next) => {
  const id = req.user._id;
  const { name, link } = req.body;

  Card.create({ name, link, owner: id })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные при создании карточки');
      }
    })
    .catch(next);
};

// Удаление карточки
module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .orFail(new Error('NotValidId'))
    // eslint-disable-next-line consistent-return
    .then((card) => {
      if (card.owner._id.toString() === req.user._id) {
        Card.findByIdAndRemove(req.params.cardId)
          .then(() => res.send(card))
          .catch(next);
      } else {
        throw new Forbidden('У вас нет прав на удаление этой карточки');
      }
    })
    .catch((err) => {
      if (err.message === 'NotValidId') {
        throw new NotFound('Карточка с указанным Id не найдена');
      } else if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные');
      }
    })
    .catch(next);
};

// Лайк карточки
module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new Error('NotValidId'))
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.message === 'NotValidId') {
        throw new NotFound('Карточка с указанным Id не найдена');
      } else if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные для снятия лайка');
      }
    })
    .catch(next);
};

// Дизлайк карточки
module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new Error('NotValidId'))
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.message === 'NotValidId') {
        throw new NotFound('Карточка с указанным Id не найдена');
      } else if (err.name === 'CastError') {
        throw new BadRequest('Переданы некорректные данные для снятия лайка');
      }
    })
    .catch(next);
};
