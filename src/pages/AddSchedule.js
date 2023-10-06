import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddSchedule.module.css";

const AddSchedule = () => {
  const navigate = useNavigate();

  const onSavebuttonClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <div className={styles.addSchedule}>
      <div className={styles.div}>드래그하여 일정을 추가해주세요!</div>
      <img
        className={styles.savebuttonIcon}
        alt=""
        src="/savebutton.svg"
        onClick={onSavebuttonClick}
      />
      <div className={styles.blind} />
      <img className={styles.schedule2Icon} alt="" src="/schedule-4@2x.png" />
    </div>
  );
};

export default AddSchedule;
