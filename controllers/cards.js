const Card = require('../models/card');

const createCard = (req, res) => {
  const { _id } = req.user;
  const { name, link } = req.body;
  Card.create({ name, link, owner: _id })
    .then((card) => {
      res.send({ data: card });
    })
    .catch(() => res.status(400).send({ message: 'Переданы некорректные данные' }));
};
const getCards = (req, res) => {
  Card.find()
    .then((data) => res.send(data))
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Нет карточки с таким id' });
        return;
      }
      res.send({ data: card });
    })
    .catch(() => res.status(400).send({ message: 'Переданы некорректные данные' }));
};

const addLikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Нет карточки с таким id' });
        return;
      }
      res.send({ data: card });
    })
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const removeLikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Нет карточки с таким id' });
        return;
      }
      res.send({ data: card });
    })
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  addLikeCard,
  removeLikeCard,
};
