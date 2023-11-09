import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StartPage.module.css";

const StartPage = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.startPage}>
      <div className={styles.div} onClick={onTextClick}>
        시작하기
      </div>
      <img className={styles.main1Icon} alt="" src="/main-1@2x.png" />
    </div>
  );
};

export default StartPage;
