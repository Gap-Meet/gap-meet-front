import styles from "./MyProfile.module.css";
import { closeMyProfile } from "./Menu";

const MyProfile = ({onClose}) => {

  const handlecloseMyProfile = () => {
    closeMyProfile(onClose);
  }

  return (
    <div className={styles.myProfile}>
      <div className={styles.bar8} />
      <div className={styles.div}>내 정보</div>
      <div className={styles.div1}>아이디</div>
      <div className={styles.div2}>이름</div>
      <div className={styles.div3}>닉네임(선택사항)</div>
      <div className={styles.div4}>변경 비밀번호</div>
      <div className={styles.div5}>변경 비밀번호 재입력</div>
      <div className={styles.div6}>이메일</div>
      <div className={styles.blank}>
        <div className={styles.groupBlank1} />
      </div>
      <div className={styles.blank1}>
        <div className={styles.groupBlank1} />
      </div>
      <div className={styles.blank2}>
        <div className={styles.groupBlank12} />
      </div>
      <div className={styles.blank3}>
        <div className={styles.groupBlank12} />
      </div>
      <div className={styles.blank4}>
        <div className={styles.groupBlank1} />
      </div>
      <div className={styles.blank5}>
        <div className={styles.groupBlank12} />
      </div>
      <img className={styles.yesButton2Icon} alt="" src="/yes-button22.svg" />
      <img className={styles.saveButtonIcon} alt="" src="/save-button.svg" onClick={handlecloseMyProfile}/>
      <div className={styles.backButton2} onClick = {handlecloseMyProfile}>
        <div className={styles.backButton2Child} />
        <img className={styles.backButton2Item} alt="" src="/arrow-1.svg" />
      </div>
    </div>
  );
};

export default MyProfile;
