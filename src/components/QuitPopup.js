import { useState, useCallback } from "react";
import QuitCheck from "./QuitCheck";
import PortalPopup from "./PortalPopup";
import styles from "./QuitPopup.module.css";

const QuitPopup = () => {
  const [isQuitCheckOpen, setQuitCheckOpen] = useState(false);

  const openQuitCheck = useCallback(() => {
    setQuitCheckOpen(true);
  }, []);

  const closeQuitCheck = useCallback(() => {
    setQuitCheckOpen(false);
  }, []);

  return (
    <>
      <div className={styles.quitPopup}>
        <div className={styles.div}>비밀번호를 입력해주세요.</div>
        <div className={styles.bar15} />
        <div className={styles.div1}>회원탈퇴</div>
        <img
          className={styles.yesButton2Icon}
          alt=""
          src="/yes-button2.svg"
          onClick={openQuitCheck}
        />
        <div className={styles.blank}>
          <div className={styles.groupBlank1} />
        </div>
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
