import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogoutPopup.module.css";

const LogoutPopup = () => {
  const navigate = useNavigate();

  const onYesButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.logoutPopup}>
      <div className={styles.div}>로그아웃하시겠습니까?</div>
      <img className={styles.yesButton2Icon}
        alt=""
        src="/yes-button2.svg"
        onClick={onYesButton2Click}
      />
      <div className={styles.bar11} />
    </div>
  );
};

export default LogoutPopup;
