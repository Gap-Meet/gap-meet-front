import { useState, useCallback } from "react";
import BinkaniSelect from "./BinkaniSelect";
import PortalPopup from "./PortalPopup";
import MyProfile from "./MyProfile";
import MenuAlarm from "./MenuAlarm";
import LogoutPopup from "./LogoutPopup";
import styles from "./Menu.module.css";

const Menu = ({ onClose }) => {
  const [isBinkaniSelectOpen, setBinkaniSelectOpen] = useState(false);
  const [isMyProfileOpen, setMyProfileOpen] = useState(false);
  const [isMenuAlarmOpen, setMenuAlarmOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);

  const openBinkaniSelect = useCallback(() => {
    setBinkaniSelectOpen(true);
  }, []);

  const closeBinkaniSelect = useCallback(() => {
    setBinkaniSelectOpen(false);
  }, []);

  const openMyProfile = useCallback(() => {
    setMyProfileOpen(true);
  }, []);

  const closeMyProfile = useCallback(() => {
    setMyProfileOpen(false);
  }, []);

  const openMenuAlarm = useCallback(() => {
    setMenuAlarmOpen(true);
  }, []);

  const closeMenuAlarm = useCallback(() => {
    setMenuAlarmOpen(false);
  }, []);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.menu}>
        <div className={styles.bar2} />
        <div className={styles.div}>메뉴</div>
        <img className={styles.helloUser1} alt="" src="/hello-user-1@2x.png" />
        <img
          className={styles.navyBinkani1}
          alt=""
          src="/navy-binkani-2@2x.png"
          onClick={openBinkaniSelect}
        />
        <img
          className={styles.profile1Icon}
          alt=""
          src="/profile-1@2x.png"
          onClick={openMyProfile}
        />
        <img
          className={styles.alarmBlock1}
          alt=""
          src="/alarm-block-1@2x.png"
          onClick={openMenuAlarm}
        />
        <img
          className={styles.logout1Icon}
          alt=""
          src="/logout-1@2x.png"
          onClick={openLogoutPopup}
        />
      </div>
      {isBinkaniSelectOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBinkaniSelect}
        >
          <BinkaniSelect onClose={closeBinkaniSelect} />
        </PortalPopup>
      )}
      {isMyProfileOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMyProfile}
        >
          <MyProfile onClose={closeMyProfile} />
        </PortalPopup>
      )}
      {isMenuAlarmOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuAlarm}
        >
          <MenuAlarm onClose={closeMenuAlarm} />
        </PortalPopup>
      )}
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <LogoutPopup onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Menu;

export function closeMenuAlarm(setMenuAlarmOpen) {
  setMenuAlarmOpen(false);
}

export function closeMyProfile(setMyProfileOpen) {
  setMyProfileOpen(false);
}