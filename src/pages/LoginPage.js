import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/join");
  }, [navigate]);

  const onYesButtonClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.div}>로그인</div>
      <div className={styles.div1} onClick={onText1Click}>
        회원가입
      </div>
      <div className={styles.idBlank1} />
      <div className={styles.pwBlank1} />
      <div className={styles.id}>ID</div>
      <div className={styles.pw}>PW</div>
      <div className={styles.div2}>아이디가 없으신가요?</div>
      <img
        className={styles.yesButtonIcon}
        alt=""
        src="/yes-button.svg"
        onClick={onYesButtonClick}
      />
    </div>
  );
};

export default LoginPage;
