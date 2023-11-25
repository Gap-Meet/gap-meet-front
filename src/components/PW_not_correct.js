import styles from "./PW_not_correct.module.css";

const PW_not_correct = () => {
  return (
    <div className={styles.PW_not_correct}>
      <div className={styles.div1}>비밀번호 형식이</div>
      <div className={styles.div2}>올바르지 않습니다.</div>
    </div>
  );
};

export default PW_not_correct;
