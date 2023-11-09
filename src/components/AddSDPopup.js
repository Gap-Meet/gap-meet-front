import React from 'react'; // React import 추가
import { useNavigate } from "react-router-dom";
import styles from "./AddSDPopup.module.css";
import axios from "axios";

const AddSDPopup = (props) => { // props 매개변수 추가
  const navigate = useNavigate();

  const onYesButtonClick = () => {
    const selecteduser_id = localStorage.getItem("userToken");
    const selectedday = document.querySelector('select[name="day-menu"]').value;
    const selectedstarttime = document.getElementsByName("hour-menu1")[0].value;
    const selectedendtime = document.getElementsByName("hour-menu2")[0].value;
    console.log("토큰찍기:", selecteduser_id);
  
    // Ensure the hour is two digits
    const formatHour = (hourStr) => {
      const hour = hourStr.replace("hour-menu1-", ""); // remove the prefix first
      return hour.padStart(2, '0') + ":00:00"; // pad with 0 if necessary
    };
  
    const start_time = formatHour(selectedstarttime);
    const end_time = formatHour(selectedendtime);
  
    if (start_time >= end_time) {
      alert("시작 시간은 종료 시간보다 이전이어야 합니다.");
      return; // 함수를 여기서 종료하여 서버에 데이터 전송을 막습니다.
    }
    
    const selectedOptions = {
      day_of_week: selectedday,
      start_time: start_time,
      end_time: end_time,
    };
    console.log(selectedOptions);
  
    axios
      .post("http://localhost:3000/api/schedule/create", selectedOptions, {
        headers: {
          Authorization: `Bearer ${selecteduser_id}`,
        },
      })
      .then((response) => {
        console.log("New 일정 데이터 전송 성공", response.data);
        props.addSchedule(selectedOptions); // props를 통해 addSchedule 함수 호출
        navigate("/schedule"); // 성공 후 일정 페이지로 이동
      })
      .catch((error) => {
        console.error("New 일정 데이터 전송 실패", error);
      });
  };

  return (
    <div className={styles.addSdPopup}>
      <div className={styles.bar9} />
      <div className={styles.div}>일정 추가하기</div>
      <div className={styles.div1}>요일에</div>
      <div className={styles.div2}>부터</div>
      <div className={styles.div3}>이전에</div>
      <div className={styles.div4}>일정을 추가해요.</div>
      <div className={styles.optionSelectButton}>
        <div className={styles.optionSelectButtonChild} />
        <img
          className={styles.optionSelectButtonItem}
          alt=""
          src="/polygon-1.svg"
        />
      </div>
      <div className={styles.optionSelectButton1}>
        <div className={styles.optionSelectButtonChild} />
        <img
          className={styles.optionSelectButtonItem}
          alt=""
          src="/polygon-1.svg"
        />
      </div>
      <div className={styles.optionSelectButton2}>
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
        onClick={onYesButtonClick}
      />

      <div className={styles.SelectBox1}>
        <select name="day-menu">
          <option value="-">-</option>
          <option value="월">월</option>
          <option value="화">화</option>
          <option value="수">수</option>
          <option value="목">목</option>
          <option value="금">금</option>
          <option value="토">토</option>
          <option value="일">일</option>
        </select>
      </div>

      <div className={styles.SelectBox2}>
        <select name="hour-menu1">
          {["-", ...Array(24).keys()].map((hour) => (
            <option key={hour} value={`hour-menu1-${hour}`}>
              {hour < 10 ? `0${hour}` : hour}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.SelectBox3}>
        <select name="hour-menu2">
          {["-", ...Array(25).keys()].map((hour) => (
            hour !== 0 && (
            <option key={hour} value={`hour-menu1-${hour}`}>
              {hour < 10 ? `0${hour}` : hour}
            </option>
            )
          ))}
        </select>
    </div>
    </div>
  );
};

export default AddSDPopup;