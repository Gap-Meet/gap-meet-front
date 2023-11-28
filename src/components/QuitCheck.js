import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuitCheck.module.css";

const QuitCheck = () => {
  const navigate = useNavigate();

  const onYesButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.quitCheck}>
      <div className={styles.div}>탈퇴하시겠습니까?</div>
      <img
        className={styles.yesButton2Icon}z1
        alt=""
        src="/yes-button2.svg"
        onClick={onYesButton2Click}
      />
      <div className={styles.bar16} />
      <div className={styles.div1}>회원탈퇴</div>
    </div>
  );
};

export default QuitCheck;
