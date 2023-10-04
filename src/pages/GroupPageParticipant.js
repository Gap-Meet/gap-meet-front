import { useState, useCallback } from "react";
import GroupMenuParticipant from "../components/GroupMenuParticipant";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./GroupPageParticipant.module.css";

const GroupPageParticipant = () => {
  const [isGroupMenuParticipantOpen, setGroupMenuParticipantOpen] =
    useState(false);
  const navigate = useNavigate();

  const openGroupMenuParticipant = useCallback(() => {
    setGroupMenuParticipantOpen(true);
  }, []);

  const closeGroupMenuParticipant = useCallback(() => {
    setGroupMenuParticipantOpen(false);
  }, []);

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <>
      <div className={styles.groupPageParticipant}>
        <div className={styles.div}>모임 이름</div>
        <div className={styles.blind} />
        <img className={styles.schedule4Icon} alt="" src="/schedule-4@2x.png" />
        <div className={styles.menuButton} onClick={openGroupMenuParticipant}>
          <div className={styles.menuButtonBack} />
          <img
            className={styles.menuButtonIcon}
            alt=""
            src="/menu-button.svg"
          />
        </div>
        <div className={styles.div1}>
          <p className={styles.p}>
            결과는 ‘모임 시간 정하기’ 버튼을 누를 때마다 갱신됩니다!
          </p>
          <p className={styles.p}>모임장만 버튼을 누를 수 있습니다.</p>
        </div>
        <img
          className={styles.nothingResultBox}
          alt=""
          src="/nothing-result-box.svg"
        />
        <div className={styles.backButton} onClick={onBackButtonContainerClick}>
          <img
            className={styles.backArrow2Icon}
            alt=""
            src="/back-arrow2.svg"
          />
          <div className={styles.backButton2} />
        </div>
      </div>
      {isGroupMenuParticipantOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="TopRight"
          onOutsideClick={closeGroupMenuParticipant}
        >
          <GroupMenuParticipant onClose={closeGroupMenuParticipant} />
        </PortalPopup>
      )}
    </>
  );
};

export default GroupPageParticipant;
