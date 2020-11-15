const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();
const path = require('path');
const userRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', userRouter)
app.use('/', cardsRouter)
app.use('*', (res, req)=>{
  req.status(404).send({ "message": "Запрашиваемый ресурс не найден" })
})

app.listen(PORT, () => {

    console.log(`App listening on port ${PORT}`)
})
