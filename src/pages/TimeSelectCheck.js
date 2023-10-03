import styles from "./TimeSelectCheck.module.css";

const TimeSelectCheck = () => {
  return (
    <div className={styles.timeSelectCheck}>
      <div className={styles.div}>
        <p className={styles.p}>{`선택한 시간이 모임 시간표에 `}</p>
        <p className={styles.p}>기록됩니다!</p>
      </div>
      <img className={styles.yesButton2Icon} alt="" src="/yes-button2.svg" />
      <div className={styles.bar14} />
    </div>
  );
};

export default TimeSelectCheck;
