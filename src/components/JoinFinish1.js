import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JoinFinish1.module.css";

const JoinFinish1 = () => {
  const navigate = useNavigate();

  const onYesButton2Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.joinFinish}>
      <div className={styles.div}>회원가입이 완료되었습니다.</div>
      <div className={styles.bar1} />
      <img
        className={styles.yesButton2Icon}
        alt=""
        src="/yes-button2.svg"
        onClick={onYesButton2Click}
      />
    </div>
  );
};

export default JoinFinish1;
