const jwt = require('jsonwebtoken'); //toketn 생성모듈
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
//경로 설정
const path = require('path');

// Body Parser 미들웨어 설정 - 파싱위함
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// MySQL 연결 모듈 가져오기
const mysqlConnection = require('./dbconnection');

// 로그인 요청을 처리하는 라우트
app.post('/login', (req, res) => {
    const { userid, password } = req.body;
    console.log(req.body);
    
    // 입력한 아이디와 패스워드를 사용하여 사용자 조회 쿼리
    const query = 'SELECT * FROM users WHERE user_id = ? AND password = ?';
    mysqlConnection.query(query,[userid, password], (err, results) => {
        if (err) {
            console.log(results);
            console.error('MySQL query error: ', err);
            res.status(500).json({ error: 'Internal Server Error' });
            
            //res.send('로그인 실패. 아이디 또는 비밀번호가 올바르지 않습니다.');
        } else {
            const user = results;
            console.log(user);
            if(user.length === 0){
                console.log('로그인 실패 - 해당정보 사용자없음');
                //res.sendFile(path.join(__dirname + '/src', 'login.html'));
            }else{
                console.log('유저 정보 조회 성공');

                // 사용자 정보를 기반으로 JWT 생성
                const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
                  expiresIn: '1h' // 토큰 만료 시간 설정 (예: 1시간)
                });
        
                // 토큰을 클라이언트로 반환
                res.json({ token });
                //res.sendFile(path.join(__dirname + '/tempfront', 'main.html'));
            }
        }
    });
});



app.post('/signup', (req, res) => {
    const { username, email, userid, password, password_check } = req.body;

    if(password !== password_check) {
        console.log('비밀번호가 일치하지 않습니다.')
        return res.status(400).json({error: '비밀번호가 일치하지 않습니다.'}); 
    }

    const checkQuery = 'SELECT * FROM users WHERE user_id = ? OR email = ?';
    mysqlConnection.query(checkQuery, [userid, email], (err, results) => {
        if (err) {
            console.error('MySQL query error: ', err);
            console.log('내부 서버 오류')
            return res.status(500).json({ error: '내부 서버 오류' });
        }

        for(let result of results){
            if(result.user_id === userid){
                console.log('이미 존재하는 사용자 ID입니다.')
                return res.status(409).json({error: '이미 존재하는 사용자 ID입니다.'});
            }
            if(result.email === email){
                console.log('이미 존재하는 이메일 주소입니다.')
                return res.status(409).json({error: '이미 존재하는 이메일 주소입니다.'});
            }
        }

        const insertQuery = 'INSERT INTO users (username, email, user_id, password) VALUES (?, ?, ?, ?)';
        // 패스워드 암호화 코드 추가 (예: bcrypt를 사용하여 패스워드 암호화)
        mysqlConnection.query(insertQuery, [username, email, userid, password], (insertErr, insertResults) => {
            if (insertErr) {
                console.error('MySQL query error: ', insertErr);
                return res.status(500).json({ error: '내부 서버 오류' });
            }
            console.log('회원가입 성공');
            res.status(201).json('회원가입 성공');
        });
    });
});


app.listen(3000, () => console.log('3000번 포트 대기'));