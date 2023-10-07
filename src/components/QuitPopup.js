import { useState, useCallback } from "react";
import QuitCheck from "./QuitCheck";
import PortalPopup from "./PortalPopup";
import styles from "./QuitPopup.module.css";

import axios from "axios";

const jwt = require('jsonwebtoken');


const QuitPopup = () => {
  const [isQuitCheckOpen, setQuitCheckOpen] = useState(false);
  const [password, setPassword] = useState(""); // 사용자가 입력한 비밀번호 상태

  const openQuitCheck = useCallback(() => {
    setQuitCheckOpen(true);
  }, []);

  const closeQuitCheck = useCallback(() => {
    setQuitCheckOpen(false);
  }, []);

  const handlesamePW = async(e) =>{
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  
    // localStorage에서 토큰 가져오기
    const token = localStorage.getItem('userToken');
    console.log(token);
  
    // 토큰이 없다면 오류 처리
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }
  
    // 토큰 디코딩
    try {
      const decodedToken = jwt.decode(token);
      console.log(decodedToken);
      
      // 디코딩된 토큰에서 password 속성 찾기
      if (decodedToken && decodedToken.password) {
        console.log('디코딩된 비밀번호:', decodedToken.password);
      } else {
        console.error('디코딩된 비밀번호가 없습니다.');
      }
    } catch (error) {
      console.error('토큰 디코딩 오류:', error);
    }
    
  }

  const handleQuitUser = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    try {
      // 비밀번호를 서버로 전송하여 회원 탈퇴 요청
      const response = await axios.post("서버의/탈퇴/라우트", {
        password: password,
      });

      // 탈퇴 성공 시, 서버에서 반환한 응답에 따라 처리
      if (response.status === 200) {
        // 탈퇴 성공
        console.log("회원 탈퇴 성공");
        // 추가적인 처리나 메시지를 표시할 수 있습니다.
      }
    } catch (error) {
      // 탈퇴 실패 시, 서버에서 반환한 에러 메시지 처리
      console.error("회원 탈퇴 실패:", error.response.data.error);
        // 에러 메시지를 사용자에게 표시하거나 다른 처리를 수행할 수 있습니다.
    }
  };


  return (
    <>
      <div className={styles.quitPopup}>
        <div className={styles.div}>비밀번호를 입력해주세요.</div>
        <input className={styles.groupBlank1}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          
        />
        <div className={styles.bar15} />
        <div className={styles.div1}>회원탈퇴</div>
        <img
          className={styles.yesButton2Icon}
          alt=""
          src="/yes-button2.svg"
          onClick={handlesamePW}
        />

      </div>
      {isQuitCheckOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeQuitCheck}
        >
          <QuitCheck onClose={closeQuitCheck} />
        </PortalPopup>
      )}
    </>
  );
};

export default QuitPopup;
