import { useState, useCallback, useEffect } from "react";
import GroupSelection from "./GroupSelection";
import PortalPopup from "./PortalPopup";
import styles from "./TSWho.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TSWho = ({ onClose }) => {
  const [groupNames, setGroupNames] = useState([]);
  const [isGroupSelectionOpen, setGroupSelectionOpen] = useState(false);

  const closeGroupSelection = useCallback(() => {
    setGroupSelectionOpen(false);
  }, []);

  const closeCodePopup = useCallback(() => {
    // closeCodePopup 로직 추가
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const selecteduser_id = localStorage.getItem("userToken");
      console.log("토큰찍기:", selecteduser_id);

      try {
        const response = await axios.get(
          "http://localhost:3000/api/group/grouplist",
          {
            headers: {
              Authorization: `Bearer ${selecteduser_id}`,
            },
          }
        );
        const groups = response.data.groups;
        console.log("그룹 이름들: ", groups);

        setGroupNames(groups);
        //setGroupSelectionOpen(true);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, []);

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
          onClick={() => setGroupSelectionOpen(true)}
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
          <GroupSelection
            groupNames={groupNames}
            onClose={closeGroupSelection}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default TSWho;
export function closeGroupSelection(setGroupSelectOpen) {
  setGroupSelectOpen(false);
}