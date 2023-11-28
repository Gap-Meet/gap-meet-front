import styles from "./Yes_Button.module.css";

const Yes_Button = () => {
  return (
    <div className={styles.Yes_Button}>
      <div className={styles.div1}>아이디 또는 비밀번호가</div>
      <div className={styles.div2}>올바르지 않습니다.</div>
    </div>
  );
};

export default Yes_Button;