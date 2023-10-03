import { useState, useCallback } from "react";
import GroupMenuMasterEdit from "./GroupMenuMasterEdit";
import PortalPopup from "./PortalPopup";
import styles from "./GroupMenuMaster.module.css";

const GroupMenuMaster = ({ onClose }) => {
  const [isGroupMenuMasterEditOpen, setGroupMenuMasterEditOpen] =
    useState(false);
 
  const openGroupMenuMasterEdit = useCallback(() => {
    setGroupMenuMasterEditOpen(true);
  }, []);

  const closeGroupMenuMasterEdit = useCallback(() => {
    setGroupMenuMasterEditOpen(false);
  }, []);

  return (
    <>
      <div className={styles.groupMenuMaster}>
        <div className={styles.urlBlank}>
          <div className={styles.groupBlank1} />
        </div>
        <div className={styles.copyButton}>
          <div className={styles.copyButtonChild} />
          <div className={styles.div}>복사</div>
        </div>
        <div className={styles.bar6} />
        <div className={styles.div1}>친구 초대 코드</div>
        <div className={styles.modifyButton} onClick={openGroupMenuMasterEdit}>
          <div className={styles.div2}>관리</div>
          <div className={styles.modifyButtonChild} />
        </div>
        <div className={styles.div3}>참가자</div>
        <div className={styles.profileBox} />
        <img
          className={styles.navyBinkaniIcon}
          alt=""
          src="/navy-binkani.svg"
        />
      </div>
      {isGroupMenuMasterEditOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGroupMenuMasterEdit}
        >
          <GroupMenuMasterEdit onClose={closeGroupMenuMasterEdit} />
        </PortalPopup>
      )}
    </>
  );
};

export default GroupMenuMaster;
export function closeGroupMenuMasterEdit(setGroupMenuMasterEditOpen){
  setGroupMenuMasterEditOpen(false);
}
