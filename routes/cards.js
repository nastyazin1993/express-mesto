const router = require('express').Router();
const {
  getCards, createCard, deleteCard, addLikeCard, removeLikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:id', deleteCard);
router.put('/:id/likes', addLikeCard);
router.delete('/:id/likes', removeLikeCard);

module.exports = router;
