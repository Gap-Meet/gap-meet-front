import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupName.module.css";

const GroupName = () => {
  const navigate = useNavigate();

  const onYesButton2IconClick = useCallback(() => {
    navigate("/recruit-new-group");
  }, [navigate]);

  return (
    <div className={styles.groupName}>
      <div className={styles.div}>모임 이름을 정해주세요!</div>
      <div className={styles.urlBlank}>
        <div className={styles.groupBlank1} />
      </div>
      <img
        className={styles.yesButton2Icon}
        alt=""
        src="/yes-button21.svg"
        onClick={onYesButton2IconClick}
      />
    </div>
  );
};

export default GroupName;
