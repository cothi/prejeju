import react from "react"

function Result() {

  return (
    <>
      <h1>총 제주 여행 경비</h1>
      <h2>추가하기</h2>
      <div class="content">
        <div class="main">
          <ol>
            <li>
              카페 : 30,000원 <button class="modify">수정하기</button>
            </li>
            <p>Lorem ipsum dolor sit amet.</p>
            <li>
              음식점 : 100,000원 <button class="modify">수정하기</button>
            </li>
            <p>Lorem ipsum dolor sit amet.</p>
            <li>
              항공 운임료 : 150,000원 <button class="modify">수정하기</button>
            </li>
            <p>Lorem ipsum dolor sit amet.</p>
            <li>
              추가 : 50,000원 <button class="modify">수정하기</button>
            </li>
            <p>Lorem ipsum dolor sit amet.</p>
          </ol>
        </div>
        <div class="sub subcontent">
          <li>
            종류 : <input type="text" class="subinput" />
          </li>
          <li>
            가격 : <input type="text" class="subinput" />
          </li>
          <button class="subadd">추가</button>
        </div>
      </div>
      <div class="sum">
        <h1>
          총 내역 : 500,000원
        </h1>
        <div class="buttons">
          <button class="sumbutton">다시하기</button>
          <button class="sumbutton" style="background-color: gray;">링크복사</button>
          <button class="sumbutton" style="background-color: gray;">내보내기</button>
        </div>
      </div>
    </>



  )
}

export default Result;
