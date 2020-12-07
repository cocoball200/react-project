const express = require('express')
//express모듈을 가져옴 
const app = express()
//새로운 앱을 만들고 
const port = 5000
//서버 포트를 5000번 

const mongoose = require('mongoose'); //비번써야함 mia:에.
mongoose.connect('mongodb+srv://mia:@cluster0.pawjo.mongodb.net/mia?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))

app.get('/', (req, res) => { // '/'는 루트 디렉토리.
    res.send('Hello World! 안녕하세요 react 공부중이에요! ')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
