import React, { useState, useCallback } from "react";
import ChangePWX from "../pages/ChangePWX";
import PortalPopup from "./PortalPopup";
import QuitPopup from "./QuitPopup";
import styles from "./MyProfile.module.css";
import { closeMyProfile } from "./Menu";
import ChangePWO from "../pages/ChangePWO";
import axios from "axios"; // axios를 추가

const MyProfile = ({ onClose }) => {
  const [isChangePWXOpen, setChangePWXOpen] = useState(false);
  const [isChangePWOOpen, setChangePWOOpen] = useState(false);
  const [isQuitPopupOpen, setQuitPopupOpen] = useState(false);

  const [userPW, setUserPW] = useState(""); // 비밀번호 입력 상태
  const [userPWRe, setUserPWRe] = useState(""); // 비밀번호 재입력 상태

  const openChangePWO = useCallback(() => {
    setChangePWOOpen(true);
  }, []);

  const closeChangePWO = useCallback(() => {
    setChangePWOOpen(false);
  }, []);

  const openChangePWX = useCallback(() => {
    setChangePWXOpen(false);
  }, []);

  const closeChangePWX = useCallback(() => {
    setChangePWXOpen(false);
  }, []);

  const openQuitPopup = useCallback(() => {
    setQuitPopupOpen(true);
  }, []);

  const closeQuitPopup = useCallback(() => {
    setQuitPopupOpen(false);
  }, []);

  const handlecloseMyProfile = () => {
    closeMyProfile(onClose);
  };

  //currentPW , ChangePW, ChangePWRe 
  const handleYesButton2Click = () => {
    if (userPW === userPWRe) {
      setChangePWOOpen(true); // 동일한 경우 ChangePWO 팝업 열기
      setChangePWXOpen(false); // ChangePWX 팝업 닫기

    } else {
      setChangePWOOpen(false); // ChangePWO 팝업 닫기
      setChangePWXOpen(true); // 다른 경우 ChangePWX 팝업 열기
    }
  };
 
   // 서버에 변경된 비밀번호를 전송하고 업데이트하는 함수
   const handleSaveButtonClick = async () => {
    try {
      // 여기에 서버로 변경된 비밀번호를 전송하는 요청
      const response = await axios.post('http://localhost:3000/api/user/update', {
        newPassword: userPW, // 변경된 비밀번호
      });

      if (response.status === 200) {
        // 비밀번호 업데이트 성공
        console.log('비밀번호 업데이트 성공');
      }
    } catch (error) {
      // 비밀번호 업데이트 실패
      console.error('비밀번호 업데이트 실패:', error);
    }
  };

  return (
    <>
      <div className={styles.myProfile}>
        <div className={styles.bar8} />
        <div className={styles.div}>내 정보</div>

        <div className={styles.div1}>아이디</div>

        <div className={styles.div2}>이름</div>


        <div className={styles.div3}>닉네임(선택사항)</div>


        <div className={styles.div4}>변경 비밀번호</div> 


        <div className={styles.div5}>변경 비밀번호 재입력</div>


        <div className={styles.div6}>이메일</div>

 
        <div className={styles.blank}>
          <div className={styles.groupBlank1} > 
            <input className ={styles.ID}
                  type = "text"></input>   
          </div>
        </div>

        <div className={styles.blank1}>
          <div className={styles.groupBlank12} > 
            <input className ={styles.Name}
                  type = "text"></input>   
          </div>
        </div>

        <div className={styles.blank2}>
          <div className={styles.groupBlank12} > 
            <input className ={styles.PW1}
                  type = "password"
                  value={userPW}
                  onChange={(e) => setUserPW(e.target.value)}></input>   
          </div>
        </div>

        <div className={styles.blank3}>
          <div className={styles.groupBlank12} > 
            <input className ={styles.PW2}
                  type = "password"
                  value={userPWRe}
                  onChange={(e) => setUserPWRe(e.target.value)}></input>   
          </div>
        </div>

        <div className={styles.blank4}>
          <div className={styles.groupBlank12} />
	  			<input className ={styles.Email}
		  		  type = "email"
		  		></input>
        </div>

        <div className={styles.blank5}>
          <div className={styles.groupBlank12} />
	  			<input className ={styles.Nickname}
		  		  type = "name"
		  		></input>
        </div>

        <img
          className={styles.yesButton2Icon}
          alt=""
          src="/yes-button21.svg"
          onClick={handleYesButton2Click}
        />
        <img
          className={styles.saveButtonIcon}
          alt=""
          src="/save-button.svg"
          onClick={handleSaveButtonClick} // 변경된 비밀번호 저장
        />


        <div className={styles.backButton2} onClick={handlecloseMyProfile}>
          <div className={styles.backButton2Child} />
          <img className={styles.backButton2Item} alt="" src="/arrow-1.svg" />
        </div>
        <img
          className={styles.quitUserIcon}
          alt=""
          src="/quit-user.svg"
          onClick={openQuitPopup}
        />
      </div>
      {isChangePWXOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangePWX}
        >
          <ChangePWX onClose={closeChangePWX} />
        </PortalPopup>
      )}
      {isChangePWOOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangePWO}
        >
          <ChangePWO onClose={closeChangePWO} />
        </PortalPopup>
      )}

      {isQuitPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeQuitPopup}
        >
          <QuitPopup onClose={closeQuitPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyProfile;

/*
  아이디 비밀번호 이메일 보낼때 get으로 보낸다. -> 이렇게 요청을 보내서 서버에서 받아서 보일 수 있도록
  저장 버튼 누를땐 put으로 요청
  확인 버튼은 post 
*/