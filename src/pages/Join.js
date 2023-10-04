import React, { useState, useCallback } from "react";
import JoinFinish1 from "../components/JoinFinish1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";

import axios from "axios";

const Join = () => {

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const [isJoinFinishOpen, setJoinFinishOpen] = useState(false);
  const navigate = useNavigate();

  const handleJoin = async () => {
    try {
      const response = await axios.post('/signup', {  // 서버의 회원가입 endpoint로 POST 요청
        userid: userid,
        password: password,
        email: email,
        username: username,
      });

      if (response.data) {  // 응답 데이터가 있다면 회원가입이 성공한 것으로 간주
        console.log('회원가입 성공:', response.data);
        setJoinFinishOpen(true);  // 회원가입 성공 팝업 표시
      }
    } catch (err) {  // 오류 발생 시
      console.error('회원가입 실패:', err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);  // 서버에서 전송된 에러 메시지 설정
      } else {
        setError('회원가입 중 오류 발생');  // 일반 에러 메시지 설정
      }
    }
  };

  const openJoinFinish = useCallback(() => {
    setJoinFinishOpen(true);
  }, []);

  const closeJoinFinish = useCallback(() => {
    setJoinFinishOpen(false);
  }, []);

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <>
      <div className={styles.join}>
        <div className={styles.div}>회원가입</div>
        <div className={styles.id}>ID
          <input 
            type="text"
            className="input_id"
            value={userid}  // 상태값과 연결
            onChange={(e) => setUserid(e.target.value)}  // 변경사항을 상태에 반영
          />
        </div>
        <div className={styles.pw}>PW
          <input 
            type="password" 
            className="input_pw"
            value={password}  // 상태값과 연결 
            onChange={(e) => setPassword(e.target.value)}  // 변경사항을 상태에 반영
          />
        </div>
        <div className={styles.div1}>
          사용할 비밀번호를 입력해주세요(숫자 6자리)
        </div>
        
        <div className={styles.div2}>비밀번호를 다시 입력해주세요</div>
        <div className={styles.div3}>사용할 아이디를 입력해주세요</div>
        <div className={styles.div4}>이름
          <input 
            type="name" 
            className="input_name"
            value={username}  // 상태값과 연결
            onChange={(e) => setUsername(e.target.value)}  // 변경사항을 상태에 반영
          />
        </div>
        <div className={styles.div5}>성함을 입력해주세요</div>
        <div className={styles.div6}>이메일
          <input 
            type="email" 
            className="input_email"
            value={email}  // 상태값과 연결
            onChange={(e) => setEmail(e.target.value)}  // 변경사항을 상태에 반영
          />
        </div>
        <div className={styles.div7}>이메일을 입력해주세요(중복불가)</div>
        <img
          className={styles.yesButtonIcon}
          alt=""
          src="/yes-button.svg"
          onClick={handleJoin} // {openJoinFinish}
        />
        <img className={styles.yesButtonIcon1} alt="" src="/yes-button.svg" />
        <img className={styles.yesButtonIcon2} alt="" src="/yes-button.svg" />
        <img className={styles.yesButtonIcon3} alt="" src="/yes-button.svg" />
        <div className={styles.joinBlank}>
          <div className={styles.idBlank2} />
        </div>
        <div className={styles.joinBlank1}>
          <div className={styles.idBlank2} />
        </div>
        <div className={styles.joinBlank2}>
          <div className={styles.idBlank2} />
        </div>
        <div className={styles.joinBlank3}>
          <div className={styles.idBlank2} />
        </div>
        <div className={styles.joinBlank4}>
          <div className={styles.idBlank2} />
        </div>
        <div className={styles.backButton} onClick={onBackButtonContainerClick}>
          <img
            className={styles.backArrow2Icon}
            alt=""
            src="/back-arrow2.svg"
          />
          <div className={styles.backButton2} />
        </div>
      </div>
      {isJoinFinishOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeJoinFinish}
        >
          <JoinFinish1 onClose={closeJoinFinish} />
        </PortalPopup>
      )}
    </>
  );
};

export default Join;
