import { useState, useCallback } from "react";
import HowTo from "../components/HowTo";
import PortalPopup from "../components/PortalPopup";
import TSWho from "../components/TSWho";
import Menu from "../components/Menu";
import AddSDPopup from "../components/AddSDPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Schedule.module.css";

const Schedule = () => {
  const [isHowToOpen, setHowToOpen] = useState(false);
  const [isTSWhoOpen, setTSWhoOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAddSDPopupOpen, setAddSDPopupOpen] = useState(false);
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();

  const addSchedule = useCallback((newSchedule) => {
    setSchedules((prevSchedules) => [...prevSchedules, newSchedule]);
  }, []);

  // 요일과 시간에 따라 스케줄에 클래스를 추가하는 함수
  const getScheduleClass = (day, hour) => {
    // Convert the hour to a time string
    const timeString = `${hour.toString().padStart(2, '0')}:00:00`;
  
    // Check for active schedule
    const isActive = schedules.some(schedule =>
      schedule.day_of_week === day &&
      schedule.start_time <= timeString && // 해당 시간이 시작 시간 이후인지 확인
      timeString < schedule.end_time // 해당 시간이 종료 시간 이전인지 확인 (end_time을 포함하지 않음)
    );
    
  
    // Return the appropriate class
    return isActive ? styles.scheduleActive : "";
  };

  const openHowTo = useCallback(() => {
    setHowToOpen(true);
  }, []);

  const closeHowTo = useCallback(() => {
    setHowToOpen(false);
  }, []);

  const onAddButtonIconClick = useCallback(() => {
    navigate("/add-schedule");
  }, [navigate]);

  const openTSWho = useCallback(() => {
    setTSWhoOpen(true);
  }, []);

  const closeTSWho = useCallback(() => {
    setTSWhoOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const openAddSDPopup = useCallback(() => {
    setAddSDPopupOpen(true);
  }, []);

  const closeAddSDPopup = useCallback(() => {
    setAddSDPopupOpen(false);
  }, []);

  
  return (
    <>
      <div className={styles.schedule}>
        <div className={styles.div}>시간표</div>
        <img
          className={styles.howToButton}
          alt=""
          src="/how-to-button.svg"
          onClick={openHowTo}
        />
        <img
          className={styles.addButtonIcon}
          alt=""
          src="/add-button.svg"
          onClick={openAddSDPopup}
        />
        <img
          className={styles.timeSelector1}
          alt=""
          src="/time-selector-1@2x.png"
          onClick={openTSWho}
        />
        <img className={styles.schedule1Icon} alt="" src="/schedule-4@2x.png" />
        <img className={styles.alarm1Icon} alt="" src="/alarm-3@2x.png" />
        <div className={styles.menuButton} onClick={openMenu}>
          <div className={styles.menuButtonBack} />
          <img
            className={styles.menuButtonIcon}
            alt=""
            src="/menu-button.svg"
          />
        </div>
      </div>
      {isHowToOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeHowTo}
        >
          <HowTo onClose={closeHowTo} />
        </PortalPopup>
      )}
      {isTSWhoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTSWho}
        >
          <TSWho onClose={closeTSWho} />
        </PortalPopup>
      )}
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
      {isAddSDPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddSDPopup}
        >
          <AddSDPopup onClose={closeAddSDPopup} addSchedule={addSchedule} />
        </PortalPopup>
      )}


    
<table className={styles.Table}>
  <tr>
    <td></td>
    <td>월</td>
    <td>화</td>
    <td>수</td>
    <td>목</td>
    <td>금</td>
    <td>토</td>
    <td>일</td>
  </tr>

  {[...Array(24)].map((_, hour) => (
    <tr key={hour}>
      <td>{hour.toString().padStart(2, '0')}</td>
      {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
        <td key={index} className={getScheduleClass(day, hour)}>
          {/* 여기에 해당하는 스케줄의 데이터를 표시할 수 있음 */}
        </td>
      ))}
    </tr>
  ))}
</table>


    </>
  );
};

export default Schedule;