import styles from "./GroupMenuParticipant.module.css";

const GroupMenuParticipant = () => {
  return (
    <div className={styles.groupMenuParticipant}>
      <div className={styles.bar12} />
      <div className={styles.div}>참가자</div>
      <div className={styles.profileBox} />
      <img className={styles.navyBinkaniIcon} alt="" src="/navy-binkani.svg" />
    </div>
  );
};

export default GroupMenuParticipant;
