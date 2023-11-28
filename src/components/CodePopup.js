import styles from "./CodePopup.module.css";

const CodePopup = () => {

  const [group_name, setGroup_name] = useState("");
  const [group_code, setGroup_code] = useState("");

  //입력한 정보에 맞는 모임에 참여시키기
  const handleYesButton = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/group/joinGroup", {
        group_name: group_name,
        group_code: group_code,
      });

      if (response.status === 200) {
        // 모임 참여 성공
        console.log("모임에 성공적으로 참여했습니다!");
        
      } else {
        // 모임 참여 실패
        console.log("모임 참여에 실패했습니다.");
        
      }
    } catch (error) {
      // 오류 처리
      console.error("모임 참여 중 오류 발생:", error);
    }
  }

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
            value={group_name}
            onChange={(e) => setGroup_name(e.target.value)}
		  		></input>   
          <input className ={styles.GroupPW}
				    type = "password"
            value={group_code}
            onChange={(e) => setGroup_code(e.target.value)}
				  ></input>   
		  </div>

    </div>
  );
};

export default CodePopup;