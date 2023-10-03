import { useState, useCallback } from "react";
import JoinFinish1 from "../components/JoinFinish1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";

const Join = () => {
  const [isJoinFinishOpen, setJoinFinishOpen] = useState(false);
  const navigate = useNavigate();

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
        <img
          className={styles.yesButtonIcon}
          alt=""
          src="/yes-button.svg"
          onClick={openJoinFinish}
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
