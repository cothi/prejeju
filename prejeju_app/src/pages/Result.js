import react from "react"
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./result.css"

function Result() {
  const cookies = new Cookies;
  const cafeData = cookies.get("cafe")
  const airData = cookies.get("air")
  const pageData = cookies.get("page")

  return (
    <div className="mainRoot">
      <h1>총 제주 여행 경비</h1>
      <h2>추가하기</h2>
      <div className="content">
        <div className="main">


        </div>
        <div className="sub subcontent">
          <li>
            종류 : <input type="text" className="subinput" />
          </li>
          <li>
            가격 : <input type="text" className="subinput" />
          </li>
          <button className="subadd">추가</button>
        </div>
      </div>
      <div className="sum">

        <div className="buttons">
          <Link to="/"><button className="sumbutton">다시하기</button></Link>
          <button className="sumbutton" onClick={() => alert("준비중")} >링크복사</button>
          <button className="sumbutton" onClick={() => alert("준비중")} >내보내기</button>
        </div>
      </div>
    </div>



  )
}

export default Result;
