import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecruitNewGroup.module.css";
import { useState } from "react";
import PortalPopup from "../components/PortalPopup";
import JoinFinish from "../components/JoinFinish";

import CODE_X from "../components/CODE_X";
import CODE_O from "../components/CODE_O";
import NAME_X from "../components/NAME_X";
import NAME_O from "../components/NAME_O";

import axios from "axios";

const RecruitNewGroup = () => {
  const navigate = useNavigate();

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const [isJoinFinishOpen, setJoinFinishOpen] = useState(false);
  const openJoinFinish = useCallback(() => {
    setJoinFinishOpen(true);
  }, []);

  const closeJoinFinish = useCallback(() => {
    setJoinFinishOpen(false);
  }, []);

  //추가
  const [error, setError] = useState(null);

  const [isCODE_XOpen, setCODE_XOpen] = useState(false);
  const [isCODE_OOpen, setCODE_OOpen] = useState(false);
  const [isNAME_XOpen, setNAME_XOpen] = useState(false);
  const [isNAME_OOpen, setNAME_OOpen] = useState(false);

  const [group_name, setGroup_name] = useState("");
  const [group_code, setGroup_code] = useState("");
  const [group_Recode, setGroup_Recode] = useState("");

  // CODE_X 오픈
  const openCODE_X = useCallback(() => {
    setCODE_XOpen(true);
  }, []);

  // CODE_X 닫음
  const closeCODE_X = useCallback(() => {
    setCODE_XOpen(false);
  }, []);

  //CODE_O 오픈
  const openCODE_O = useCallback(() => {
    setCODE_OOpen(true);
  }, []);

  //CODE_O 닫음
  const closeCODE_O = useCallback(() => {
    setCODE_OOpen(false);
  }, []);

  //모임 이름 동일한지
  const openNAME_X = useCallback(() => {
    setNAME_XOpen(true);
  }, []);

  const closeNAME_X = useCallback(() => {
    setNAME_XOpen(false);
  }, []);

  const openNAME_O = useCallback(() => {
    setNAME_OOpen(true);
  }, []);

  const closeNAME_O = useCallback(() => {
    setNAME_OOpen(false);
  }, []);

  //두 개의 비밀 코드가 동일한지 얜 yesbutton2
  const handleYesButton = () => {
    console.log("잘 되나");
    if (group_code === group_Recode) {
      setCODE_OOpen(true); // 동일한 경우 setPW_OOpen 팝업 열기
      setCODE_XOpen(false); // setPW_XOpen 팝업 닫기
      console.log("맞음");
    } else {
      setCODE_OOpen(false); // setPW_OOpen 팝업 닫기
      setCODE_XOpen(true); // 다른 경우 setPW_XOpen 팝업 열기
      console.log("틀림");
    }
  };

  //동일한 모임 이름 있는지
  const same_group = async () => {
    setError(null); //에러 초기화

    try {
      const response = await axios.post(
        "http://localhost:3000/api/group/group_namecheck",
        {
          group_name: group_name,
        }
      );

      if (response.status === 409) {
        setNAME_XOpen(true);
      } else if (response.status === 200) {
        setNAME_OOpen(true);
        //setError(response.msg); // 서버에서 전송된 에러 메시지 설정
      }
    } catch (err) {
      //오류 발생시
      console.error("모임 생성 실패 : ", err);
      setError("모임생성 중 오류 발생"); // 일반 에러 메시지 설정
      setNAME_OOpen(true); // setPW_OOpen 팝업 닫기
      setNAME_XOpen(false); // 다른 경우 setPW_XOpen 팝업 열기
    }
    return false;
  };

  // 마지막 확인 -> 데이터 보낼 때
  const handlefinishbutton = async () => {
    setError(null); //에러 초기화
    const selecteduser_id = localStorage.getItem("userToken");
    console.log("토큰찍기:", selecteduser_id);

    try {
      const response2 = await axios.post(
        "http://localhost:3000/api/group/groupcreate",
        {
          // 서버의 회원가입 endpoint로 POST 요청
          group_name: group_name,
          groupcode: group_code,
        },
        {
          headers: {
            Authorization: `Bearer ${selecteduser_id}`,
          },
        }
      );
      if (response2.status === 200) {
        setJoinFinishOpen(true); }
      // } else if (response2.status === 200) {
      //   setNAME_OOpen(true);
      //   //setError(err.response.data.error); // 서버에서 전송된 에러 메시지 설정
      // }
    } catch (err) {
      //오류 발생시
      console.error("모임 생성 실패 : ", err);

      setError("모임생성 중 오류 발생"); // 일반 에러 메시지 설정
    }
    return false;
  };

  return (
    <div className={styles.recruitNewGroup}>
      <img className={styles.newGroupBincani} alt="" src="/bincani.gif" />
      <div className={styles.div}>
        <p className={styles.p}>{`안녕하세요! `}</p>
        <p className={styles.p}>저는 빈칸만남 도우미, 빈칸이에요.</p>
      </div>
      <div className={styles.backButton} onClick={onBackButtonContainerClick}>
        <img className={styles.backArrow2Icon} alt="" src="/back-arrow2.svg" />
        <div className={styles.backButton2} />
      </div>
      <div className={styles.div1}>
        <span>모임 이름과</span>
        <span className={styles.span}> 비밀코드</span>
        <span>를 입력하여 모임을 만들어주세요!</span>
      </div>
      <div className={styles.div2}>
        이름과 코드를 공유해 모임에 초대할 수 있어요.
      </div>

      {/* 모임이름 */}
      <div className={styles.blank}>
        <div className={styles.groupBlank1}>
          <input
            className={styles.name}
            type="text"
            value={group_name}
            onChange={(e) => setGroup_name(e.target.value)}
          />
        </div>
      </div>
      {/* 비밀 코드 */}
      <div className={styles.blank1}>
        <div className={styles.groupBlank1}>
          <input
            className={styles.code}
            type="password"
            value={group_code}
            onChange={(e) => setGroup_code(e.target.value)}
          />
        </div>
      </div>

      {/* 코드 재입력 */}
      <div className={styles.blank2}>
        <div className={styles.groupBlank1}>
          <input
            className={styles.recode}
            type="password"
            value={group_Recode}
            onChange={(e) => setGroup_Recode(e.target.value)}
          />
        </div>
      </div>

      {/*동일 아이디 체크 버튼*/}
      <img
        className={styles.yesButton2Icon}
        alt=""
        src="/yes-button2.svg"
        onClick={same_group}
      />

      {/*암호 동일한지 체크*/}
      <img
        className={styles.yesButton2Icon1}
        alt=""
        src="/yes-button2.svg"
        onClick={handleYesButton}
      />

      <div className={styles.div3}>모임 이름</div>
      <div className={styles.div4}>코드 재입력</div>
      <div className={styles.div5}>비밀 코드</div>
      <img
        className={styles.finishbuttonIcon}
        alt=""
        src="/finishbutton.svg"
        onClick={handlefinishbutton}
      />
      {isJoinFinishOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeJoinFinish}
        >
          <JoinFinish onClose={closeJoinFinish} />
        </PortalPopup>
      )}
      {isCODE_XOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCODE_X}
        >
          <CODE_X onClose={closeCODE_X} />
        </PortalPopup>
      )}
      {isCODE_OOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCODE_O}
        >
          <CODE_O onClose={closeCODE_O} />
        </PortalPopup>
      )}

      {isNAME_XOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNAME_X}
        >
          <NAME_X onClose={closeNAME_X} />
        </PortalPopup>
      )}

      {isNAME_OOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNAME_O}
        >
          <NAME_O onClose={closeNAME_O} />
        </PortalPopup>
      )}
    </div>
  );
};

export default RecruitNewGroup;