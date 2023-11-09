import styles from "./LogoutPopup.module.css";

const LogoutPopup = () => {
  return (
    <div className={styles.logoutPopup}>
      <div className={styles.div}>로그아웃하시겠습니까?</div>
      <img className={styles.yesButton2Icon} alt="" src="/yes-button2.svg" />
      <div className={styles.bar11} />
    </div>
  );
};

export default LogoutPopup;
