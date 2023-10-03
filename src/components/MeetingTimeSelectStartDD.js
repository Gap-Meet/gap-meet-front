import styles from "./MeetingTimeSelectStartDD.module.css";

const MeetingTimeSelectStartDD = () => {
  return (
    <div className={styles.meetingTimeSelectStartDd}>
      <div className={styles.meetingTimeSelectStartDdChild} />
      <div className={styles.meetingTimeSelectStartDdItem} />
      <div className={styles.meetingTimeSelectStartDdInner} />
      <div className={styles.div}>00:00</div>
      <div className={styles.div1}>00:30</div>
      <div className={styles.div2}>01:00</div>
      <div className={styles.div3}>01:30</div>
    </div>
  );
};

export default MeetingTimeSelectStartDD;
