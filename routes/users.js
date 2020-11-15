const router = require('express').Router();
const readFile = require('../utils/read-file');
const path = require('path');
const users = path.join(__dirname, '..', 'data', 'user.json')

router.get('/users', (req, res)=>{
readFile(users)
.then(data => res.send(data))
.catch(err => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" })
})

})

router.get('/users/:id', (req, res)=>{
  const {id} = req.params
  readFile(users)
.then(data =>{
  const user = data.find(item =>{
    return item._id === id
  })
  if (!user){
   return  res.status(404).send({ "message": "Нет пользователя с таким id" })
  }
  res.send(user)
})


})

module.exports = router

