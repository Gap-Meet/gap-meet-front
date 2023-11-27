import { useState, useCallback } from "react";
import OutPopup from "./OutPopup";
import PortalPopup from "./PortalPopup";
import styles from "./GroupMenuMasterEdit.module.css";
import {closeGroupMenuMasterEdit} from "./GroupMenuMaster"

const GroupMenuMasterEdit = ({onClose}) => {
  const [isOutPopupOpen, setOutPopupOpen] = useState(false);

  const openOutPopup = useCallback(() => {
    setOutPopupOpen(true);
  }, []);

  const closeOutPopup = useCallback(() => {
    setOutPopupOpen(false);
  }, []);

  const handlecloseGroupMenuMasterEdit = () => {
    closeGroupMenuMasterEdit(onClose);
  }

  return (
    <>
      <div className={styles.groupMenuMasterEdit}>
        <div className={styles.bar6} />
        <div className={styles.div}>참가자</div>
        <div className={styles.profileBox} />
        <img
          className={styles.navyBinkaniIcon}
          alt=""
          src="/navy-binkani.svg"
        />
        <div className={styles.div1} onClick={openOutPopup}>
          강퇴
        </div>
        <div className={styles.backButton2} onClick = {handlecloseGroupMenuMasterEdit}>
          <div className={styles.backButton2Child} />
          <img className={styles.backButton2Item} alt="" src="/arrow-1.svg" />
        </div>
      </div>
      {isOutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOutPopup}
        >
          <OutPopup onClose={closeOutPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default GroupMenuMasterEdit;
