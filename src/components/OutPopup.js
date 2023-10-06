import styles from "./OutPopup.module.css";

const OutPopup = () => {
  return (
    <div className={styles.outPopup}>
      <div className={styles.div}>강퇴하시겠습니까?</div>
      <img className={styles.yesButton2Icon} alt="" src="/yes-button2.svg" />
      <div className={styles.bar13} />
    </div>
  );
};

export default OutPopup;
