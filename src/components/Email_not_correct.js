import styles from "./Email_not_correct.module.css";

const Email_not_correct = () => {
  return (
    <div className={styles.Email_not_correct}>
      <div className={styles.div1}>이메일 형식이</div>
      <div className={styles.div2}>올바르지 않습니다.</div>
    </div>
  );
};

export default Email_not_correct;
