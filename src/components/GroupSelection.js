import { useState, useCallback } from "react";
import CodePopup from "./CodePopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./GroupSelection.module.css";
import { closeGroupSelection } from "./TSWho";

const GroupSelection = ({ groupNames, onClose }) => {
  console.log("그룹이름디버깅:" + groupNames);
  const [isCodePopupOpen, setCodePopupOpen] = useState(false);
  const navigate = useNavigate();
  const handlecloseGroupSelection = () => {
    closeGroupSelection(onClose);
  };

  const onGroupBlankContainerClick = useCallback(() => {
    navigate("/group-page-master");
  }, [navigate]);

  const onGroupBlankContainer1Click = useCallback(() => {
    navigate("/group-page-participant");
  }, [navigate]);

  const openCodePopup = useCallback(() => {
    setCodePopupOpen(true);
  }, []);

  const closeCodePopup = useCallback(() => {
    setCodePopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.groupSelection}>
        <div className={styles.bar5} />
        <div className={styles.div}>모임 목록</div>
        <div className={styles.groupBlank} onClick={onGroupBlankContainerClick}>
          <div className={styles.groupBlank1} />
        </div>
        <div
          className={styles.groupBlank2}
          onClick={onGroupBlankContainer1Click}
        >
          <div className={styles.groupBlank11} />
        </div>
        <div className={styles.groupBlank3}>
          <div className={styles.groupBlank12} />
        </div>
        <div className={styles.backButton2} onClick={handlecloseGroupSelection}>
          <div className={styles.backButton2Child} />
          <img className={styles.backButton2Item} alt="" src="/arrow-1.svg" />
        </div>
        <img
          className={styles.participateCodeButton}
          alt=""
          src="/participate-code-button.svg"
          onClick={openCodePopup}
        />
        <div className={styles.groupBlank4}>
          <div className={styles.groupBlank13} />
        </div>
        <div className={styles.groupBlank5}>
          <div className={styles.groupBlank14} />
        </div>
        <div className={styles.groupBlank6}>
          <div className={styles.groupBlank15} />
        </div>
        <div className={styles.groupBlank7}>
          <div className={styles.groupBlank16} />
        </div>
        <div className={styles.groupBlank8}>
          <div className={styles.groupBlank17} />
        </div>
        <div className={styles.groupBlank9}>
          <div className={styles.groupBlank18} />
        </div>
        <img className={styles.crownIcon} alt="" src="/crown.svg" />
      </div>
      {isCodePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCodePopup}
        >
          <CodePopup onClose={closeCodePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default GroupSelection;