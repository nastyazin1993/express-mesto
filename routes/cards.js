const router = require('express').Router();
const readFile = require('../utils/read-file');
const path = require('path');
const cards = path.join(__dirname, '..', 'data', 'cards.json')

router.get('/cards', (req, res)=>{
readFile(cards)
.then(data => res.send(data))
.catch(err => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" })
})

})



module.exports = router