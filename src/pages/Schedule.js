import { useState, useCallback } from "react";
import HowTo from "../components/HowTo";
import PortalPopup from "../components/PortalPopup";
import TSWho from "../components/TSWho";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";
import styles from "./Schedule.module.css";

const Schedule = () => {
  const [isHowToOpen, setHowToOpen] = useState(false);
  const [isTSWhoOpen, setTSWhoOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
          onClick={onAddButtonIconClick}
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
    </>
  );
};

export default Schedule;
