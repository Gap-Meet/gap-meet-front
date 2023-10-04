import { useState, useCallback } from "react";
import MeetingTimeSelectStartDD from "./MeetingTimeSelectStartDD";
import PortalPopup from "./PortalPopup";
import MeetingTimeSelectEndDD from "./MeetingTimeSelectEndDD";
import HowManyHourSelectDD from "./HowManyHourSelectDD";
import Loading from "./Loading";
import styles from "./MeetingOption.module.css";

const MeetingOption = () => {
  const [isMeetingTimeSelectStartDDOpen, setMeetingTimeSelectStartDDOpen] =
    useState(false);
  const [isMeetingTimeSelectEndDDOpen, setMeetingTimeSelectEndDDOpen] =
    useState(false);
  const [isHowManyHourSelectDDOpen, setHowManyHourSelectDDOpen] =
    useState(false);
  const [isLoadingOpen, setLoadingOpen] = useState(false);

  const openMeetingTimeSelectStartDD = useCallback(() => {
    setMeetingTimeSelectStartDDOpen(true);
  }, []);

  const closeMeetingTimeSelectStartDD = useCallback(() => {
    setMeetingTimeSelectStartDDOpen(false);
  }, []);

  const openMeetingTimeSelectEndDD = useCallback(() => {
    setMeetingTimeSelectEndDDOpen(true);
  }, []);

  const closeMeetingTimeSelectEndDD = useCallback(() => {
    setMeetingTimeSelectEndDDOpen(false);
  }, []);

  const openHowManyHourSelectDD = useCallback(() => {
    setHowManyHourSelectDDOpen(true);
  }, []);

  const closeHowManyHourSelectDD = useCallback(() => {
    setHowManyHourSelectDDOpen(false);
  }, []);

  const openLoading = useCallback(() => {
    setLoadingOpen(true);
  }, []);

  const closeLoading = useCallback(() => {
    setLoadingOpen(false);
  }, []);

  return (
    <>
      <div className={styles.meetingOption}>
        <div className={styles.bar9} />
        <div className={styles.div}>모임 시간 정하기</div>
        <div className={styles.div1}>에</div>
        <div className={styles.div2}>부터</div>
        <div className={styles.div3}>사이에</div>
        <div className={styles.div4}>만큼 만나고 싶어요.</div>
        <div className={styles.optionSelectButton}>
          <div className={styles.optionSelectButtonChild} />
          <img
            className={styles.optionSelectButtonItem}
            alt=""
            src="/polygon-1.svg"
          />
        </div>
        <div
          className={styles.optionSelectButton1}
          onClick={openMeetingTimeSelectStartDD}
        >
          <div className={styles.optionSelectButtonChild} />
          <img
            className={styles.optionSelectButtonItem}
            alt=""
            src="/polygon-1.svg"
          />
        </div>
        <div
          className={styles.optionSelectButton2}
          onClick={openMeetingTimeSelectEndDD}
        >
          <div className={styles.optionSelectButtonChild} />
          <img
            className={styles.optionSelectButtonItem}
            alt=""
            src="/polygon-1.svg"
          />
        </div>
        <div
          className={styles.optionSelectButton3}
          onClick={openHowManyHourSelectDD}
        >
          <div className={styles.optionSelectButtonChild} />
          <img
            className={styles.optionSelectButtonItem}
            alt=""
            src="/polygon-1.svg"
          />
        </div>
        <img
          className={styles.yesButtonIcon}
          alt=""
          src="/yes-button.svg"
          onClick={openLoading}
        />
      </div>
      {isMeetingTimeSelectStartDDOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMeetingTimeSelectStartDD}
        >
          <MeetingTimeSelectStartDD onClose={closeMeetingTimeSelectStartDD} />
        </PortalPopup>
      )}
      {isMeetingTimeSelectEndDDOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMeetingTimeSelectEndDD}
        >
          <MeetingTimeSelectEndDD onClose={closeMeetingTimeSelectEndDD} />
        </PortalPopup>
      )}
      {isHowManyHourSelectDDOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeHowManyHourSelectDD}
        >
          <HowManyHourSelectDD onClose={closeHowManyHourSelectDD} />
        </PortalPopup>
      )}
      {isLoadingOpen && (
        <PortalPopup
          overlayColor="rgba(19, 43, 129, 0.4)"
          // placement="Centered"
          //onOutsideClick={closeLoading}
        >
          <Loading onClose={closeLoading} />
        </PortalPopup>
      )}
    </>
  );
};

export default MeetingOption;
export function closeLoading(setLoadingOpen){
  setLoadingOpen(false)
}
