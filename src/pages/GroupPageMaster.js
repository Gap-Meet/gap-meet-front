import { useState, useCallback } from "react";
import GroupMenuMaster from "../components/GroupMenuMaster";
import PortalPopup from "../components/PortalPopup";
import MeetingOption from "../components/MeetingOption";
import { useNavigate } from "react-router-dom";
import styles from "./GroupPageMaster.module.css";

const GroupPageMaster = () => {
  const [isGroupMenuMasterOpen, setGroupMenuMasterOpen] = useState(false);
  const [isMeetingOptionOpen, setMeetingOptionOpen] = useState(false);
  const navigate = useNavigate();

  const openGroupMenuMaster = useCallback(() => {
    setGroupMenuMasterOpen(true);
  }, []);

  const closeGroupMenuMaster = useCallback(() => {
    setGroupMenuMasterOpen(false);
  }, []);

  const openMeetingOption = useCallback(() => {
    setMeetingOptionOpen(true);
  }, []);

  const closeMeetingOption = useCallback(() => {
    setMeetingOptionOpen(false);
  }, []);

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <>
      <div className={styles.groupPageMaster}>
        <div className={styles.div}>모임 이름</div>
        <div className={styles.blind} />
        <img className={styles.schedule3Icon} alt="" src="/schedule-4@2x.png" />
        <div className={styles.menuButton}>
          <div className={styles.menuButtonBack} />
          <img
            className={styles.menuButtonIcon}
            alt=""
            src="/menu-button.svg"
            onClick={openGroupMenuMaster}
          />
        </div>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={openMeetingOption}
        />
        <div className={styles.resultBox} />
        <div className={styles.div1}>
          <p className={styles.p}>
            결과는 ‘모임 시간 정하기’ 버튼을 누를 때마다 갱신됩니다!
          </p>
          <p className={styles.p}>모임장만 버튼을 누를 수 있습니다.</p>
        </div>
        <div className={styles.div2}>요일 00:00~00:00</div>
        <div className={styles.div3}>요일 00:00~00:00</div>
        <div className={styles.div4}>요일 00:00~00:00</div>
        <div className={styles.timeSelectButton}>
          <div className={styles.timeSelectButtonChild} />
          <div className={styles.div5}>선택</div>
        </div>
        <div className={styles.timeSelectButton1}>
          <div className={styles.timeSelectButtonChild} />
          <div className={styles.div5}>선택</div>
        </div>
        <div className={styles.timeSelectButton2}>
          <div className={styles.timeSelectButtonChild} />
          <div className={styles.div5}>선택</div>
        </div>
        <div className={styles.div8}>명이 만날 수 있어요</div>
        <div className={styles.div9}>명이 만날 수 있어요</div>
        <div className={styles.div10}>명이 만날 수 있어요</div>
        <img className={styles.stTime1} alt="" src="/1st-time-1@2x.png" />
        <img className={styles.ndTime1} alt="" src="/2nd-time-1@2x.png" />
        <img className={styles.rdTime1} alt="" src="/3rd-time-1@2x.png" />
        <div className={styles.backButton} onClick={onBackButtonContainerClick}>
          <img
            className={styles.backArrow2Icon}
            alt=""
            src="/back-arrow2.svg"
          />
          <div className={styles.backButton2} />
        </div>
      </div>
      {isGroupMenuMasterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          // placement="TopRight"
          onOutsideClick={closeGroupMenuMaster}
        >
          <GroupMenuMaster onClose={closeGroupMenuMaster} />
        </PortalPopup>
      )}
      {isMeetingOptionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          // placement="Centerd"
          onOutsideClick={closeMeetingOption}
        >
          <MeetingOption onClose={closeMeetingOption} />
        </PortalPopup>
      )}
    </>
  );
};

export default GroupPageMaster;
