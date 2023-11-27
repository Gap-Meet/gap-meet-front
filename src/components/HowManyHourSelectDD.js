import styles from "./HowManyHourSelectDD.module.css";

const HowManyHourSelectDD = () => {
  return (
    <div className={styles.howManyHourSelectDd}>
      <div className={styles.howManyHourSelectDdChild} />
      <div className={styles.howManyHourSelectDdItem} />
      <div className={styles.howManyHourSelectDdInner} />
      <div className={styles.div}>30분</div>
      <div className={styles.div1}>1시간</div>
      <div className={styles.div2}>1시간 반</div>
      <div className={styles.div3}>2시간</div>
    </div>
  );
};

export default HowManyHourSelectDD;
