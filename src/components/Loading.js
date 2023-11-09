import styles from "./Loading.module.css";
import { closeLoading } from "./MeetingOption";
import React, { useEffect } from "react";


const Loading = ({onClose}) => {

  const refreshPage = () => {
    window.location.reload();
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      refreshPage();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <img
          className={styles.selectBinkani1}
          alt=""
          src="/selectbinkani.gif"
        />
        <div className={styles.div}>빈칸이가 시간을 생성하고 있어요.</div>
      </div>
    </div>
  );
};

export default Loading;
