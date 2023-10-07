import React, { useState, useCallback } from "react";
import JoinFinish1 from "../components/JoinFinish1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";
import ID_X from "../components/ID_X";
import ID_O from "../components/ID_O";
import PW_X from "../components/PW_X";
import PW_O from "../components/PW_O";
import Email_X from "../components/Email_X";
import Email_O from "../components/Email_O";

import axios from "axios";

const Join = () => {

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [password_check, setPasswordCheck] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const [isJoinFinishOpen, setJoinFinishOpen] = useState(false);
  const [isID_XOpen, setID_XOpen] = useState(false);
  const [isID_OOpen, setID_OOpen] = useState(false);
  const [isPW_XOpen, setPW_XOpen] = useState(false);
  const [isPW_OOpen, setPW_OOpen] = useState(false);
  const [isEmail_XOpen, setEmail_XOpen] = useState(false);
  const [isEmail_OOpen, setEmail_OOpen] = useState(false);
  const navigate = useNavigate();

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const openJoinFinish = useCallback(() => {
    setJoinFinishOpen(true);
  }, []);

  const closeJoinFinish = useCallback(() => {
    setJoinFinishOpen(false);
  }, []);

  const openID_X = useCallback(() => {
    setID_XOpen(true);
  }, []);

  const closeID_X = useCallback(() => {
    setID_XOpen(false);
  }, []);
  
  const openID_O = useCallback(() => {
    setID_OOpen(true);
  }, []);

  const closeID_O = useCallback(() => {
    setID_OOpen(false);
  }, []);

  const openPW_X = useCallback(() => {
    setPW_XOpen(true);
  }, []);

  const closePW_X = useCallback(() => {
    setPW_XOpen(false);
  }, []);
  
  const openPW_O = useCallback(() => {
    setPW_OOpen(true);
  }, []);

  const closePW_O = useCallback(() => {
    setPW_OOpen(false);
  }, []);
  const openEmail_X = useCallback(() => {
    setEmail_XOpen(true);
  }, []);

  const closeEmail_X = useCallback(() => {
    setEmail_XOpen(false);
  }, []);
  
  const openEmail_O = useCallback(() => {
    setEmail_OOpen(true);
  }, []);

  const closeEmail_O = useCallback(() => {
    setEmail_OOpen(false);
  }, []);

  const handleJoin = async () => {
    setError(null); // 에러 초기화

    try {
      const response = await axios.post('http://localhost:3000/signup', {  // 서버의 회원가입 endpoint로 POST 요청
        userid: userid,
        password: password,
        password_check: password_check,
        email: email,
        username: username,
      });

      if (response.data) {  // 응답 데이터가 있다면 회원가입이 성공한 것으로 간주
        localStorage.setItem('userToken', response.data.token);
        console.log('회원가입 성공:', response.data);
        setJoinFinishOpen(true);  // 회원가입 성공 팝업 표시
        return true;
      }
    } catch (err) {  // 오류 발생 시
      console.error('회원가입 실패:', err);
      
      if (err.response && err.response.data && err.response.data.error) {
        if(err.response.status === 409){
          setID_XOpen(true);
        }else{
          
          setError(err.response.data.error);  // 서버에서 전송된 에러 메시지 설정
        }
      } else {
        setError('회원가입 중 오류 발생');  // 일반 에러 메시지 설정
      }
    }
    return false;
  };

  const same_ID = async () => {
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/signup', {  // 서버의 회원가입 endpoint로 POST 요청
        userid: userid,
      });
    }
    catch (err) {  // 오류 발생 시
      console.error('회원가입 실패:', err);
      
      if (err.response && err.response.data && err.response.data.error) {
        if(err.response.status === 409){
          setID_XOpen(true);
        }else{
          setID_OOpen(true);
          setError(err.response.data.error);  // 서버에서 전송된 에러 메시지 설정
        }
      } else {
        setError('회원가입 중 오류 발생');  // 일반 에러 메시지 설정
      }
    }
    return false;
  }

  const same_PW = async () => {

    try{
      const response = await axios.post('http://localhost:3000/signup', {  // 서버의 회원가입 endpoint로 POST 요청
        password: password,
        password_check: password_check,
      });
    }
    
    catch(err) {

    if(err.response.status===400){
      setPW_XOpen(true);
    }else{
      setPW_OOpen(true);
    }
  }
    return false;
  
  }

  const same_Email = async () => {

    
    try{
      const response = await axios.post('http://localhost:3000/signup', {  // 서버의 회원가입 endpoint로 POST 요청
        email: email,
      });
    }
    catch(err) {
      console.error('회원가입 실패:', err);
      
      if (err.response && err.response.data && err.response.data.error) {
        if(err.response.status === 409){
          setEmail_XOpen(true);
        }else{
          setEmail_OOpen(true);
          setError(err.response.data.error);  // 서버에서 전송된 에러 메시지 설정
        }
      } else {
        setError('회원가입 중 오류 발생');  // 일반 에러 메시지 설정
      }
    }
  }

  const checkEmail = (e) => {
      var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
      // 형식에 맞는 경우 true 리턴
      console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));

      return regExp.test(e.target.value);
  }

  const onBackButtonContainerClick = useCallback(async () => {

      navigate("/login-page");

  });




  return (
    <>
      <div className={styles.join}>
        <div className={styles.div}>회원가입</div>
        <div className={styles.id}>ID</div>
        <div className={styles.pw}>PW</div>
        <div className={styles.div1}>
          사용할 비밀번호를 입력해주세요(숫자 6자리)
        </div>
        <div className={styles.div2}>비밀번호를 다시 입력해주세요</div>
        <div className={styles.div3}>사용할 아이디를 입력해주세요</div>
        <div className={styles.div4}>이름</div>
        <div className={styles.div5}>성함을 입력해주세요</div>
        <div className={styles.div6}>이메일</div>
        <div className={styles.div7}>이메일을 입력해주세요(중복불가)</div>


        {/* 추가사항 */}
        <input className={styles.joinID}
          type="userid"
          value={userid}  // 상태값과 연결
          onChange={(e) => setUserid(e.target.value)}  // 변경사항을 상태에 반영
        />
        <input className={styles.joinPW} 
          type="password" 
          value={password}  // 상태값과 연결 
          onChange={(e) => setPassword(e.target.value)}  // 변경사항을 상태에 반영
        />
        <input className={styles.checkPW}
          type="password_check" 
          value={password_check}  // 상태값과 연결 
          onChange={(e) => setPasswordCheck(e.target.value)}  // 변경사항을 상태에 반영
        />
        <input className={styles.joinName}
          type="name" 
          value={username}  // 상태값과 연결
          onChange={(e) => setUsername(e.target.value)}  // 변경사항을 상태에 반영
        />
         <input className={styles.joinEmail}
          type="email" 
          value={email}  // 상태값과 연결
          onChange={(e) => setEmail(e.target.value)}  // 변경사항을 상태에 반영
          onBlur={checkEmail} 
        />


        <img
          className={styles.yesButtonIcon}
          alt=""
          src="/yes-button.svg"
          onClick={handleJoin} // onClick 이벤트 핸들러로 handleJoin 연결
        />
        <img className={styles.yesButtonIcon1} alt="" src="/yes-button.svg" onClick={same_ID} />
        <img className={styles.yesButtonIcon2} alt="" src="/yes-button.svg" onClick={same_PW}/>
        <img className={styles.yesButtonIcon3} alt="" src="/yes-button.svg" onClick={same_Email}/>
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
      {isID_XOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeID_X}
        >
          <ID_X onClose={closeID_X} />
        </PortalPopup>
      )}
      {isID_OOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeID_O}
        >
          <ID_O onClose={closeID_O} />
        </PortalPopup>
      )}

      {isPW_XOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePW_X}
        >
          <PW_X onClose={closePW_X} />
        </PortalPopup>
      )}
      {isPW_OOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePW_O}
        >
          <PW_O onClose={closePW_O} />
        </PortalPopup>
      )}
      {isEmail_XOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEmail_X}
        >
          <Email_X onClose={closeEmail_X} />
        </PortalPopup>
      )}
      {isEmail_OOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEmail_O}
        >
          <Email_O onClose={closeEmail_O} />
        </PortalPopup>
      )}
    </>
  );
};

export default Join;



