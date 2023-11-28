import styles from "./BinkaniSelect.module.css";

const BinkaniSelect = ({ onSelectImage }) => {
  const handleImageClick = (imageUrl) => {
    onSelectImage(imageUrl);
  };
  return (
    <div className={styles.binkaniSelect}>
      <div className={styles.bar10} />
      <div className={styles.div}>빈칸이 선택</div>
      <img
        className={styles.redBinkani1}
        alt=""
        src="/red-binkani-1@2x.png"
        onClick={() => handleImageClick('/red-binkani-1@2x.png')}
        role="button"
        tabIndex="0"
      />
      <img
        className={styles.yellowBinkani1}
        alt=""
        src="/yellow-binkani-1@2x.png"
        onClick={() => handleImageClick('/yellow-binkani-1@2x.png')}
        role="button"
        tabIndex="0"
      />
      <img
        className={styles.orangeBinkani1}
        alt=""
        src="/orange-binkani-1@2x.png"
        onClick={() => handleImageClick('/orange-binkani-1@2x.png')}
        role="button"
        tabIndex="0"
      />
      <img
        className={styles.navyBinkani2}
        alt=""
        src="/navy-binkani-2@2x.png"
        onClick={() => handleImageClick('/navy-binkani-2@2x.png')}
        role="button"
        tabIndex="0"
      />
      <img
        className={styles.blueBinkani1}
        alt=""
        src="/blue-binkani-1@2x.png"
        onClick={() => handleImageClick('/blue-binkani-1@2x.png')}
        role="button"
        tabIndex="0"
      />
      <img
        className={styles.greenBinkani1}
        alt=""
        src="/green-binkani-1@2x.png"
        onClick={() => handleImageClick('/green-binkani-1@2x.png')}
        role="button"
        tabIndex="0"
      />
      <img
        className={styles.purpleBinkani1}
        alt=""
        src="/purple-binkani-1@2x.png"
        onClick={() => handleImageClick('/purple-binkani-1@2x.png')}
        role="button"
        tabIndex="0"
      />
      <img
        className={styles.pinkBinkani1}
        alt=""
        src="/pink-binkani-1@2x.png"
        onClick={() => handleImageClick('/pink-binkani-1@2x.png')}
        role="button"
        tabIndex="0"
      />
    </div>
  );
};

export default BinkaniSelect;