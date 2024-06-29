const express = require('express');
const app = express();
// const session = require('express-session');
const cors = require('cors');
const port = 3500;
//몽고디비 관련 코드
const connect = require('backend/schemas');

connect();

//리액트에서도 이 코드를 작성해 보내니까 맞춰줌
const corsOptions={
    origin : true,
    credentials : true
}

//세션 사용위해 작성
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "hamletshu",
        cookie: {
        httpOnly: true,
        secure: false
        }
    })
)
app.use(cors(corsOptions));

app.listen(port, () => {
    console.log( `listening on port ${port}` )
})

app.use(express.json());//json 사용하기
app.use(express.urlencoded({extended:true}));

//(서버에서 라우터 설정)라우터로 url 나눠눔
// app.use("/member", require("backend/routes/member_router"))
// app.use("/quizlist", require("backend/routes/quiz_router"))
// app.use("/favorites", require("backend/routes/bookmark_router"))


app.get('/', (req, res) => {
    res. send('테스트 페이지, 성공')
})


