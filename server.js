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


// 회원가입 요청을 처리하는 라우트
app.post('/signup', (req, res) => {
    const { username, email, userid, password, password_check } = req.body; // password_check를 여기에 추가
    console.log(req.body);
    
    // 입력한 아이디를 사용하여 사용자 조회 쿼리
    const checkQuery = 'SELECT * FROM users WHERE user_id = ?';
    mysqlConnection.query(checkQuery, [userid], (err, results) => {
        if (err) {
            console.error('MySQL query error: ', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // 중복된 아이디가 이미 존재하는 경우
            if (results.length > 0) {
                console.log('아이디 중복');
                res.status(409).json({error: 'exist ID already'}); 
            } else {
                // 중복된 아이디가 없는 경우, 회원가입 쿼리 실행
                // 중요: password_check는 데이터베이스에 저장하지 않아야 합니다. 비밀번호와 비밀번호 확인이 일치하는지 검사만 하고 저장하지 않습니다.
                if(password !== password_check) {
                    return res.status(400).json({error: 'PW != PW_CHECK'}); // 비밀번호 확인
                }
                const insertQuery = 'INSERT INTO users (username, email, user_id, password) VALUES (?, ?, ?, ?)';
                mysqlConnection.query(insertQuery, [username, email, userid, password], (insertErr, insertResults) => {
                    if (insertErr) {
                        console.error('MySQL query error: ', insertErr);
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        console.log('회원가입 성공');
                        res.status(201).json('회원가입 성공');
                    }
                });
            }
        }
    });
});

app.listen(3000, () => console.log('3000번 포트 대기'));