import styles from "./MenuAlarm.module.css";
import { closeMenuAlarm } from "./Menu";

const MenuAlarm = ({onClose}) => {

  const handlecloseMenuAlarm = () => {
    closeMenuAlarm(onClose);
  }
 
  return (
    <div>
      
      <div className={styles.menuAlarm}>
        <div className={styles.bar2} />
        <div className={styles.div}>알림</div>
        <div className={styles.logout}>
          <div className={styles.groupBlank1} />
        </div>
        <div className={styles.alarm}>
          <div className={styles.groupBlank1} />
        </div>
        <div className={styles.myProfile}>
          <div className={styles.groupBlank1} />
        </div>
        <img className={styles.alarm2Icon} alt="" src="/alarm-2@2x.png" />
        <img className={styles.alarm3Icon} alt="" src="/alarm-2@2x.png" />
        <img className={styles.alarm4Icon} alt="" src="/alarm-2@2x.png" />
        
        <div className={styles.backButton2} onClick={handlecloseMenuAlarm}>
          <div className={styles.backButton2Child} />
          <img className={styles.backButton2Item} alt="" src="/arrow-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default MenuAlarm;
