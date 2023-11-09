import { useState, useCallback } from "react";
import MeetingTimeSelectStartDD from "./MeetingTimeSelectStartDD";
import PortalPopup from "./PortalPopup";
import MeetingTimeSelectEndDD from "./MeetingTimeSelectEndDD";
import HowManyHourSelectDD from "./HowManyHourSelectDD";
import Loading from "./Loading";
import styles from "./MeetingOption.module.css";

import axios from "axios";

const MeetingOption = () => {
  const [isMeetingTimeSelectStartDDOpen, setMeetingTimeSelectStartDDOpen] =
    useState(false);
  const [isMeetingTimeSelectEndDDOpen, setMeetingTimeSelectEndDDOpen] =
    useState(false);
  const [isHowManyHourSelectDDOpen, setHowManyHourSelectDDOpen] =
    useState(false);
  const [isLoadingOpen, setLoadingOpen] = useState(false);

  //------------------------------------
  const openLoading = useCallback(() => {
    // 평일? 주말?
    const selectedDayType = document.querySelector('select[name="weekday"]').value;

    // 몇 시부터 몇 시까지
    const selectedStartTime = document.querySelector('select.hour1').value;
    const selectedEndTime = document.querySelector('select[name="hour2"]').value;

    // 몇 시간 정도를?
    const selectedMeetingTime = document.querySelector('select.hour3').value;

    const StartTime = selectedStartTime + ":00:00";
    const EndTime = selectedEndTime + ":00:00";
    const MeetingTime = selectedMeetingTime + ":00:00";

    const Start_time = StartTime.replace("hour1", "");
    const End_time = EndTime.replace("hour2", "");
    const Meeting_time = MeetingTime.replace("hour3", "");

    const selectedOptions = {
      DayType: selectedDayType,
      Start_time: Start_time,
      End_time: End_time,
      Meeting_time: Meeting_time,
    };

    console.log(selectedOptions);

    axios
      .post("http://localhost:3000/api/group/groupoption", selectedOptions)
      .then((response) => {
        console.log("데이터 전송 성공", response.data);
        // 여기서 다른 로직 처리 또는 화면 업데이트
      })
      .catch((error) => {
        console.error("데이터 전송 실패", error);
      });

    // 로딩 닫기
    closeLoading();
  }, []);

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
        <div className={styles.div4}>시간 만나고 싶어요.</div>

        <div className={styles.optionSelectButton}>
          <div className={styles.optionSelectButtonChild}>
            <select className={styles.weekday}>
              <option value="day-item">평일</option>
              <option value="day-item">주말</option>
            </select>
          </div>
          <img
            className={styles.optionSelectButtonItem}
            alt=""
            src="/polygon-1.svg"
          />
        </div>

        <div className={styles.optionSelectButton1}>
          <div className={styles.optionSelectButtonChild}>
            <select className={styles.hour1}>
              {['-', ...Array(24).keys()].map((hour) => (
                <option key={hour} value={`hour-menu1-${hour}`}>
                  {hour < 10 ? `0${hour}` : hour}
                </option>
              ))}
            </select>
            <img
              className={styles.optionSelectButtonItem}
              alt=""
              src="/polygon-1.svg"
            />
          </div>
        </div>

        <div className={styles.optionSelectButton2}>
          <div className={styles.optionSelectButtonChild}>
            <select className={styles.hour2}>
              {['-', ...Array(25).keys()].map((hour) => (
                hour !== 0 && (
                <option key={hour} value={`hour-menu1-${hour}`}>
                  {hour < 10 ? `0${hour}` : hour}
                </option>
                )
              ))}
            </select>
            <img
              className={styles.optionSelectButtonItem}
              alt=""
              src="/polygon-1.svg"
            />
          </div>
        </div>

        <div className={styles.optionSelectButton3}>
          <div className={styles.optionSelectButtonChild}>
            <select className={styles.hour3}>
              {['-', ...Array(24).keys()].map((hour) => (
                <option key={hour} value={`hour-menu1-${hour}`}>
                  {hour < 10 ? `0${hour}` : hour}
                </option>
              ))}
            </select>
            <img
              className={styles.optionSelectButtonItem}
              alt=""
              src="/polygon-1.svg"
            />
          </div>
        </div>
        <img
          className={styles.yesButtonIcon}
          alt=""
          src="/yes-button.svg"
          onClick={openLoading}
        />
      </div>
    </>
  );
};

export default MeetingOption;