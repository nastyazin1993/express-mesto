const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/read-file');

const cards = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/', (req, res) => {
  readFile(cards)
    .then((data) => res.send(data))
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    });
});

module.exports = router;
