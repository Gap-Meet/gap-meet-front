import styles from "./CodePopup.module.css";

const CodePopup = () => {
  return (
    <div className={styles.codePopup}>
      <div className={styles.div}>모임 코드를 입력해주세요!</div>
      <div className={styles.urlBlank}>
        <div className={styles.groupBlank1} />
      </div>
      <img className={styles.yesButton2Icon} alt="" src="/yes-button21.svg" />
    </div>
  );
};

export default CodePopup;
