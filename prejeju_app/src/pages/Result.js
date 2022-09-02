import react, { useState } from "react"
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./result.css"

import logo from "../assets/img/logo.svg";

function Result() {
  const cookies = new Cookies();

  const cafeData = cookies.get("cafe")
  const airData = cookies.get("air")
  const pageData = cookies.get("page")
  const [addData, setAddData] = useState([]);
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");


  const onChange1 = (event) => {
    setText(event.target.value);
  }

  const onChange2 = (event) => {
    setPrice(event.target.value);
  }

  const addInputData = () => {
    if (text == null || price == null) {
      return
    }
    setAddData([...addData, { type: text, price: price }])
  }





  return (
    <div className="mainRoot">
      <a href="/" className="logoRe">
        <div>
          <img src={logo} className="logo" alt="로고" />
          <h1 className="mainTitleLogo">내 주머니</h1>
        </div>
      </a>
      <h1>총 제주 여행 경비</h1>
      <h2>추가하기</h2>

      <div className="content">
        <div className="main">
          <div>
            항공 운임료
          </div>

          {
            airData ?

              <div className="airLi">
                <div>
                  {airData.go["name"]}
                </div>
                <div>
                  {airData.go["start"]}
                </div>
                <div>
                  {airData.go["end"]}
                </div>
                <div>
                  가격: {airData.go["price"]}
                </div>
              </div>

              :
              null
          }



          <div className="titleCafe">
            카페
          </div>
          {
            cafeData ?
              Object.keys(cafeData).map((v, i) => (
                cafeData[v].map((k, j) => (
                  <div className={"itemList"} key={(j + 1)}>
                    {v}. {k}
                  </div>
                ))
              ))
              :
              null
          }
          <div className="titleCafe">
            추가
          </div>
          {

            addData.map((v, i) => {
              return (
                <div className="airLi" key={i}>
                  <div>
                    {v["type"]}.
                    {v["price"]}
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className="sub subcontent">
          <li>
            종류 : <input type="text" onChange={onChange1} className="subinput" />
          </li>
          <li>
            가격 : <input type="text" onChange={onChange2} className="subinput" />
          </li>
          <button className="subadd" onClick={() => { addInputData() }}>추가</button>
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
