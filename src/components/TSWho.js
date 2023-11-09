import { useState, useCallback } from "react";
import GroupSelection from "./GroupSelection";
import PortalPopup from "./PortalPopup";
import styles from "./TSWho.module.css";
import { useNavigate } from "react-router-dom";

const TSWho = ({ onClose }) => {
  const [isGroupSelectionOpen, setGroupSelectionOpen] = useState(false);
  const [isGroupNameOpen, setGroupNameOpen] = useState(false);

  const openGroupSelection = useCallback(() => {
    setGroupSelectionOpen(true);
  }, []);

  const closeGroupSelection = useCallback(() => {
    setGroupSelectionOpen(false);
  }, []);

  const navigate = useNavigate();
  const onnew_GroupClick = useCallback(() => {
    navigate("/recruit-new-group");
  }, [navigate]);
  

  return (
    <>
      <div className={styles.tsWho}>
        <div className={styles.bar4} />
        <div className={styles.div}>누구와 함께 하시나요?</div>
        <img
          className={styles.existingGroup1}
          alt=""
          src="/existing-group-1@2x.png"
          onClick={openGroupSelection}
        />
        <img
          className={styles.newGroup1}
          alt=""
          src="/new-group-1@2x.png"
          onClick={onnew_GroupClick}
        />
      </div>
      {isGroupSelectionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGroupSelection}
        >
          <GroupSelection onClose={closeGroupSelection} />
        </PortalPopup>
      )}
    </>
  );
};

export default TSWho;
export function closeGroupSelection(setGroupSelectOpen) {
  setGroupSelectOpen(false);
}