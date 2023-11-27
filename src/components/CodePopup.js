import styles from "./CodePopup.module.css";

const CodePopup = () => {
  return (
    <div className={styles.codePopup}>
      <div className={styles.div1}>모임이름과 코드를 입력해주세요!</div>
      <div className={styles.div2}>모임이름</div>
      <div className={styles.div3}>비밀코드</div>
      <div className={styles.urlBlank}>
        <div className={styles.groupBlank1} />
        <div className={styles.groupBlank2} />
      </div>
      <img className={styles.yesButton2Icon} alt="" src="/yes-button21.svg" />

  		
      <div className={styles.Blank1} > 
	  			<input className ={styles.GroupName}
		  		  type = "name"
		  		></input>   
          <input className ={styles.GroupPW}
				    type = "password"
				  ></input>   
		  </div>

    </div>
  );
};

export default CodePopup;