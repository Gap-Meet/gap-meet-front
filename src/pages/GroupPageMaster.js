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

  const myArray = [
    // Row 0
    [
      {"day": "월", "s_time": 0, "e_time": 24, "num":3}
    ],
    // Row 1
    [
      {"day": "화", "s_time": 13, "e_time": 17, "num":5}
    ],
    // Row 2
    [
      {"day": "목", "s_time": 16, "e_time": 18, "num":2}
    ]
  ];


  const getIndex = useCallback((option) => {
    const currentDay = myArray[option][0].day;
    let day, st, et;
    if (currentDay === "월") {
        day = 1;
    } else if (currentDay === "화") {
        day = 2;
    } else if (currentDay === "수") {
        day = 3;
    } else if (currentDay === "목") {
        day = 4;
    } else if (currentDay === "금") {
        day = 5;
    } else if (currentDay === "토") {
        day = 6;
    } else if (currentDay === "일") {
        day = 7;
    }
    else{
      day=-1;
    }

    for (let i = 0; i <= 24; i++) {
        if (myArray[option][0].s_time === i) {
            st = i+1;
        }
        if (myArray[option][0].e_time === i) {
            et = i+1;
            break;
        }
    }
    changeColors(day, st, et);
  });


  /* 색 바꾸기 함수 */
  const changeColors = useCallback((colIndex, rowIndex1, rowIndex2) => {
    const rows = document.querySelectorAll(`.${styles.Table} tr`);
  
    // Loop through each row
    rows.forEach((row, i) => {
      if (i === rowIndex1 || (rowIndex1<=i && i<rowIndex2)) {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, j) => {
          if (j === colIndex) {
            cell.style.backgroundColor = 'rgb(38, 66, 167)';
          }
        }); 
      }
    });
  }, []);

  // 요일과 시간에 따라 스케줄에 클래스를 추가하는 함수
  const getScheduleClass = (day, hour) => {
   
  };

  const text = [
    [ myArray[0][0].day + "요일 " + myArray[0][0].s_time+":00~"
       + myArray[0][0].e_time+":00"],
    [ myArray[1][0].day + "요일 " + myArray[1][0].s_time+":00~"
       + myArray[1][0].e_time+":00"],
    [ myArray[2][0].day + "요일 " + myArray[2][0].s_time+":00~"
       + myArray[2][0].e_time+":00"]
  ];

  const text2 = [
    [myArray[0][0].num + "명이 만날 수 있어요"],
    [myArray[1][0].num + "명이 만날 수 있어요"],
    [myArray[2][0].num + "명이 만날 수 있어요"]
  ];

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
        <div className={styles.div2}>{text[0]}</div>
        <div className={styles.div3}>{text[1]}</div>
        <div className={styles.div4}>{text[2]}</div>
        <div className={styles.timeSelectButton}>
          <div className={styles.timeSelectButtonChild} />
            <div className={styles.div5} onClick={() => getIndex(0)}>
              선택
            </div>
        </div>
              {/*div5가 아래 선택지버튼.
              sever 쪽은  src/algorithm   
              click 버튼 눌리면 -> 선택했다는 것을 백으로 넘겨주기.
              */}

        <div className={styles.timeSelectButton1}>
          <div className={styles.timeSelectButtonChild} />
          <div className={styles.div5} onClick={() => getIndex(1)}>
            선택</div>
        </div>

        <div className={styles.timeSelectButton2}>
          <div className={styles.timeSelectButtonChild} />
          <div className={styles.div5} onClick={() => getIndex(2)}>
            선택</div>
        </div>
        
        <div className={styles.div8}>{text2[0]}</div>
        <div className={styles.div9}>{text2[1]}</div>
        <div className={styles.div10}>{text2[2]}</div>
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
