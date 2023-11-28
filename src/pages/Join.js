import React, { useState, useCallback } from "react";
import JoinFinish1 from "../components/JoinFinish1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";
import ID_X from "../components/ID_X";
import ID_O from "../components/ID_O";
import PW_X from "../components/PW_X";
import PW_O from "../components/PW_O";
import Email_X from "../components/Email_X"
import Email_O from "../components/Email_O"

import axios from "axios";

const Join = () => {
  const [user_id, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [password_check, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const [isJoinFinish1Open, setJoinFinish1Open] = useState(false);
  /* 아이디 */
  const [isID_XOpen, setID_XOpen] = useState(false);
  const [isID_OOpen, setID_OOpen] = useState(false);

  /* 비밀번호 */
  const [isPW_XOpen, setPW_XOpen] = useState(false);
  const [isPW_OOpen, setPW_OOpen] = useState(false);

  /* 이메일 */
  const [isEmail_XOpen, setEmail_XOpen] = useState(false);
  const [isEmail_OOpen, setEmail_OOpen] = useState(false);

  const navigate = useNavigate();

  const openJoinFinish1 = useCallback(() => {
    setJoinFinish1Open(true);
  }, []);

  const closeJoinFinish1 = useCallback(() => {
    setJoinFinish1Open(false);
  }, []);

      /* 이메일 */
    // Email_X 오픈
    const openEmail_X = useCallback(() => {
      setEmail_XOpen(true);
    }, []);
  
    // Email_X 닫음
    const closeEmail_X = useCallback(() => {
      setEmail_XOpen(false);
    }, []);
  
    //Email_O 오픈
    const openEmail_O = useCallback(() => {
      setEmail_OOpen(true);
    }, []);
  
    //Email_O 닫음
    const closeEmail_O = useCallback(() => {
      setEmail_OOpen(false);
    }, []);
  

    /* 아이디 */
    // ID_X 오픈
    const openID_X = useCallback(() => {
      setID_XOpen(true);
    }, []);
  
    // ID_X 닫음
    const closeID_X = useCallback(() => {
      setID_XOpen(false);
    }, []);
  
    //ID_O 오픈
    const openID_O = useCallback(() => {
      setID_OOpen(true);
    }, []);
  
    //ID_O 닫음
    const closeID_O = useCallback(() => {
      setID_OOpen(false);
    }, []);
  

  /* 비밀번호 */

  // PW_X 오픈
  const openPW_X = useCallback(() => {
    setPW_XOpen(true);
  }, []);

  // PW_X 닫음
  const closePW_X = useCallback(() => {
    setPW_XOpen(false);
  }, []);

  //PW_O 오픈
  const openPW_O = useCallback(() => {
    setPW_OOpen(true);
  }, []);

  //PW_O 닫음
  const closePW_O = useCallback(() => {
    setPW_OOpen(false);
  }, []);

  //비밀번호 확인 버튼 눌렀을 때 -> 두 개 일치한지 일치하지 않은지 확인
  const handleYesButtonClick = () => {
    if (password === password_check) {
      setPW_OOpen(true); // 동일한 경우 setPW_OOpen 팝업 열기
      setPW_XOpen(false); // setPW_XOpen 팝업 닫기
    } else {
      setPW_OOpen(false); // setPW_OOpen 팝업 닫기
      setPW_XOpen(true); // 다른 경우 setPW_XOpen 팝업 열기
    }
  };

  //---------------------

  //마지막 확인 버튼 눌렀을 때 보내는 것.
  const handleJoin = async () => {
    setError(null); // 에러 초기화

    try {
      const response = await axios.post("http://localhost:3000/api/user/join", {
        // 서버의 회원가입 endpoint로 POST 요청
        user_id: user_id,
        password: password,
        email: email,
        username: username,
      });

      if (response.status === 200) {
        // 응답 데이터가 있다면 회원가입이 성공한 것으로 간주
        localStorage.setItem("userToken", response.AccessToken);
        localStorage.setItem("user_id", user_id); //아이디를 로컬 스토리지에 저장 1
        console.log("회원가입 성공:", response.data);
        setJoinFinish1Open(true); // 회원가입 성공 팝업 표시
        return true;
      }
    } catch (err) {  // 오류 발생 시
      console.error("회원가입 실패:", err);
      setError("회원가입 중 오류 발생"); // 일반 에러 메시지 설정
    }
    return false;
  };

  // 동일한 아이디 있는지 확인하기
  const same_ID = async () => {
    setError(null);

    try {
      const response2 = await axios.post(
        "http://localhost:3000/api/user/join_idcheck",
        {  // 서버의 회원가입 endpoint로 POST 요청
          user_id: user_id,
        }
      );

      if (response2.status === 409) {
        setID_XOpen(true);
      } else if (response2.status === 200) {
        setID_OOpen(true);
      }
    } catch (err) {
      // 오류 발생 시
      console.error("회원가입 실패:", err);
      setError("회원가입 중 오류 발생"); // 일반 에러 메시지 설정
      setID_OOpen(false); // setPW_OOpen 팝업 닫기
      setID_XOpen(true); // 다른 경우 setPW_XOpen 팝업 열기
    }
    return false;
  };

  // 동일한 이메일 있는지 확인하기
  const same_email = async () => {
    setError(null);

    try {
      const response3 = await axios.post(
        "http://localhost:3000/api/user/join_emailcheck",
        { // 서버의 회원가입 endpoint로 POST 요청
          email: email,
        }
      );
      if (response3.status === 409) {
        setEmail_XOpen(true);
      } else if (response3.status === 200) {
        setEmail_OOpen(true);
        setError(response3.data.error); // 서버에서 전송된 에러 메시지 설정
      }
    } catch (err) {
      // 오류 발생 시
      console.error("회원가입 실패:", err);
      setError("회원가입 중 오류 발생"); // 일반 에러 메시지 설정
      setEmail_OOpen(false); // 
      setEmail_XOpen(true); // 
    }
    return false;
  };
  // 200은 ok 409는 중복

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

        <form>
          {/* 추가사항 */}
          <input
            className={styles.joinID}
            type="text"
            value={user_id} // 상태값과 연결
            onChange={(e) => setUserid(e.target.value)} // 변경사항을 상태에 반영
          />
          <input
            className={styles.joinPW}
            type="password"
            value={password} // 상태값과 연결
            onChange={(e) => setPassword(e.target.value)} // 변경사항을 상태에 반영
          />
          <input
            className={styles.checkPW}
            type="password"
            value={password_check} // 상태값과 연결
            onChange={(e) => setPasswordCheck(e.target.value)} // 변경사항을 상태에 반영
          />
          <input
            className={styles.joinName}
            type="name"
            value={username} // 상태값과 연결
            onChange={(e) => setUsername(e.target.value)} // 변경사항을 상태에 반영
          />
          <input
            className={styles.joinEmail}
            type="email"
            value={email} // 상태값과 연결
            onChange={(e) => setEmail(e.target.value)} // 변경사항을 상태에 반영
          />
        </form>
        <img
          className={styles.yesButtonIcon}
          alt=""
          src="/yes-button.svg"
          onClick={handleJoin} // onClick 이벤트 핸들러로 handleJoin 연결
        />
        <img
          className={styles.yesButtonIcon1}
          alt=""
          src="/yes-button.svg"
          onClick={same_ID}
        />
        <img
          className={styles.yesButtonIcon2}
          alt=""
          src="/yes-button.svg"
          onClick={handleYesButtonClick}
        />
        <img
          className={styles.yesButtonIcon3}
          alt=""
          src="/yes-button.svg"
          onClick={same_email}
        />
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
      {isJoinFinish1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeJoinFinish1}
        >
          <JoinFinish1 onClose={closeJoinFinish1} />
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

/*
  회원가입 부분에서 바꿀 것은
  -> 비밀번호 확인 부분에서 서버에 요청하는 것이 아님 그냥
  두 개의 비밀번호가 동일한지 판단만 하면 된다.
  
  이메일 확인 부분에서 아이디 확인 눌렀을 때랑 똑같은 메커니즘으로
  데베에 요청해서 동일한 이메일이 있는지 확인하기

  그리고 마지막 확인 버튼을 눌렀을 때
  아이디, 비밀번호, 이름, 이메일을 변수로 해서 서버에 보내면 됨.

*/