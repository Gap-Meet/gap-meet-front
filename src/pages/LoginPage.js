import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/join");
  }, [navigate]);

  
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e && e.preventDefault(); // e가 존재할 경우에만 preventDefault를 실행
    setError(null); // 에러 초기화

    try {
      // 로그인 요청을 보냅니다.
      // 일단은 로컬서버로 요청
      const response = await axios.post('http://localhost:3000/login', {
        userid: userid, // 이메일을 userid로 사용하거나 필요에 따라 수정
        password: password,
      });

      // 토큰을 로컬 스토리지에 저장합니다.
      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        console.log('로그인 성공!');
        return true; // 로그인 성공 여부를 반환
        
        // 로그인 성공 후, 다음 페이지로 이동하거나 원하는 작업을 수행할 수 있습니다.
        // 예: navigate("/dashboard");
      }
    } catch (err) {
      // 로그인 실패
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('로그인 중 오류 발생');
      }
    }
    return false;
  };

  const onYesButtonClick = useCallback(async () => {
    const loginSuccess = await handleLogin(); // 로그인 요청 실행
    if (loginSuccess) {
        navigate("/schedule"); // 로그인이 성공적으로 완료되면 schedule 페이지로 이동
    }
  }, [navigate, handleLogin]);
  
  return (
    <div className={styles.loginPage}>
      <div className={styles.div}>로그인</div>
      <div className={styles.div1} onClick={onText1Click}>
        회원가입
      </div>
      <div className={styles.idBlank1} />
      <div className={styles.pwBlank1} />
      <div className={styles.id}>ID</div>
      <div className={styles.pw}>PW</div>
      <div className={styles.div2}>아이디가 없으신가요?</div>

      {/* 추가사항 */}
      <input className={styles.loginID}
        type="email"
        value={userid}  // 상태값과 연결
        onChange={(e) => setUserid(e.target.value)}  // 변경사항을 상태에 반영
      />
      <input className={styles.loginPW}
        type="password"
        value={password}  // 상태값과 연결
        onChange={(e) => setPassword(e.target.value)}  // 변경사항을 상태에 반영
      />

      <img
        className={styles.yesButtonIcon}
        alt=""
        src="/yes-button.svg"
        onClick={onYesButtonClick}
      />
    </div>
  );
};

export default LoginPage;

export const handleLogin = async () => {
  e && e.preventDefault(); // e가 존재할 경우에만 preventDefault를 실행
  setError(null); // 에러 초기화

  try {
    // 로그인 요청을 보냅니다.
    // 일단은 로컬서버로 요청
    const response = await axios.post('/login', {
      userid: userid, // 이메일을 userid로 사용하거나 필요에 따라 수정
      password: password,
    });

    // 토큰을 로컬 스토리지에 저장합니다.
    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token);
      console.log('로그인 성공!');
      return true; // 로그인 성공 여부를 반환
      
      // 로그인 성공 후, 다음 페이지로 이동하거나 원하는 작업을 수행할 수 있습니다.
      // 예: navigate("/dashboard");
    }
  } catch (err) {
    // 로그인 실패
    if (err.response && err.response.data && err.response.data.error) {
      setError(err.response.data.error);
    } else {
      setError('로그인 중 오류 발생');
    }
  }
  return false;
};
