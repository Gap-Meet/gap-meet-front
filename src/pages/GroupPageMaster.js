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


  /* 임시 색 바꾸기 함수 테스트. */
  const changeColors = useCallback((rowIndex, colIndex) => {
    // Get all table rows
    const rows = document.querySelectorAll(`.${styles.Table} tr`);
  
    // Loop through each row
    rows.forEach((row, i) => {
      // Check if it's the specified row
      if (i === rowIndex) {
        // Get all cells in the row
        const cells = row.querySelectorAll('td');
  
        // Loop through each cell
        cells.forEach((cell, j) => {
          // Check if it's the specified column
          if (j === colIndex) {
            // Apply the style change
            cell.style.backgroundColor = 'rgb(38, 66, 167)';
          }
        });
      }
    });
  }, []);

  // 요일과 시간에 따라 스케줄에 클래스를 추가하는 함수
  const getScheduleClass = (day, hour) => {
   
  };



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


        {/* 모임시간 정하기 버튼 : openMeetingOption */}
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
            <div className={styles.div5} onClick={() => changeColors(3, 4)}>
              선택
            </div>
        </div>
              {/*div5가 아래 선택지버튼.
              sever 쪽은  src/algorithm   
              click 버튼 눌리면 -> 선택했다는 것을 백으로 넘겨주기.
              */}


        <div className={styles.timeSelectButton1}>
          <div className={styles.timeSelectButtonChild} />
          <div className={styles.div5} onClick={openMeetingOption}>
            선택</div>
        </div>

        <div className={styles.timeSelectButton2}>
          <div className={styles.timeSelectButtonChild} />
          <div className={styles.div5} onClick={openMeetingOption}>
            선택</div>
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
          placement="Right"
          onOutsideClick={closeGroupMenuMaster}
        >
          <GroupMenuMaster onClose={closeGroupMenuMaster} />
        </PortalPopup>
      )}
      {isMeetingOptionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMeetingOption}
        >
          <MeetingOption onClose={closeMeetingOption} />
        </PortalPopup>
      )}


    </>
  );
};

export default GroupPageMaster;
