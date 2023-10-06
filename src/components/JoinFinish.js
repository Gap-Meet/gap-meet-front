import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JoinFinish.module.css";

const JoinFinish = ({ onClose }) => {
  const navigate = useNavigate();

  const onYesButton2Click = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <div className={styles.joinFinish}>
      <div className={styles.div}>
        <p className={styles.p}>{`모임 목록에서 새로운 모임과 `}</p>
        <p className={styles.p}>친구들을 확인해주세요!</p>
      </div>
      <div className={styles.bar7} />
      <img
        className={styles.yesButton2Icon}
        alt=""
        src="/yes-button2.svg"
        onClick={onYesButton2Click}
      />
    </div>
  );
};

export default JoinFinish;
