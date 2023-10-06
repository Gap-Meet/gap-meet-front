import styles from "./HowTo.module.css";

const HowTo = ({ onClose }) => {
  return (
    <div className={styles.howTo}>
      <div className={styles.bar3} />
      <div className={styles.div}>어떻게 사용하나요?</div>
      <img className={styles.howto1Icon} alt="" src="/howto-1@2x.png" />
    </div>
  );
};

export default HowTo;
