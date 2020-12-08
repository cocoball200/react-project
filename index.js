const express = require('express')
//express모듈을 가져옴 
const app = express()
//새로운 앱을 만들고 
const port = 5000
//서버 포트를 5000번
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');




mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))
//application/json

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => { // '/'는 루트 디렉토리.
    res.send('Hello World! 안녕하세요 react 공부중이에요! 오늘도 수업공부중')
})

app.post('/register', (req, res) => {
    //회원 가입할 때 필요한 정보를 클라이언트에서 가져오면, 데이터베이스에 넣어준다. 
    const user = new User(req.body);
    console.log('user값입니다' + user);
    user.save((err) => {
        if (err) return res.json({ Sucess: false, err });
        return res.status(200).json({
            Sucess: true
        })
    }); // user모델에 모델들이 저장된것 
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
