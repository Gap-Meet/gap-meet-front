import { useState, useCallback } from "react";
import JoinFinish from "../components/JoinFinish";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./RecruitNewGroup.module.css";

const RecruitNewGroup = () => {
  const [isJoinFinishOpen, setJoinFinishOpen] = useState(false);
  const navigate = useNavigate();

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const openJoinFinish = useCallback(() => {
    setJoinFinishOpen(true);
  }, []);

  const closeJoinFinish = useCallback(() => {
    setJoinFinishOpen(false);
  }, []);

  return (
    <>
      <div className={styles.recruitNewGroup}>
        <img
          className={styles.bincani}
          alt=""
          src="bincani.gif"
        />
        <div className={styles.div}>
          <p className={styles.p}>{`안녕하세요! `}</p>
          <p className={styles.p}>저는 빈칸만남 도우미, 빈칸이에요.</p>
        </div>
        <div className={styles.urlBlank}>
          <div className={styles.groupBlank1} />
        </div>
        <div className={styles.copyButton}>
          <div className={styles.copyButtonChild} />
          <div className={styles.div1}>복사</div>
        </div>
        <div className={styles.backButton} onClick={onBackButtonContainerClick}>
          <img
            className={styles.backArrow2Icon}
            alt=""
            src="/back-arrow2.svg"
          />
          <div className={styles.backButton2} />
        </div>
        <div className={styles.div2}>
          <span>초대코드</span>
          <span className={styles.span}>와</span>
          <span> 링크</span>
          <span className={styles.span}>
            를 복사하여 친구들을 초대해주세요!
          </span>
        </div>
        <div className={styles.div3}>모임은 총 8명까지 모일 수 있어요.</div>
        <img
          className={styles.finishRecruitIcon}
          alt=""
          src="/finish-recruit.svg"
          onClick={openJoinFinish}
        />
      </div>
      {isJoinFinishOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeJoinFinish}
        >
          <JoinFinish onClose={closeJoinFinish} />
        </PortalPopup>
      )}
    </>
  );
};

export default RecruitNewGroup;
