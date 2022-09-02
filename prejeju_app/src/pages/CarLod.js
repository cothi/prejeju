import react from "react"
import "./carLod.css"

function CarLod({ carLodData }) {
  console.log(carLodData, "carData");


  return (
    <div className="carLodRoot">
      <div>
        <nav className="container">
          <h1>숙박 <a href="https://www.goodchoice.kr/"> 가격보러가기</a></h1>

          <h1>렌트카 <a href="https://www.jejurentcar.co.kr/">가격보러가기</a></h1>
        </nav>

        <div className="container box">
          <div>
            <h4>가격</h4>
            <input className="fleft" type="text" />
            <div className="fleft inputbox">원</div>
          </div>
          <div>
            <h4>가격</h4>
            <input className="fleft" type="text" />
            <div className="fleft inputbox">원</div>
          </div>
        </div>
      </div>

    </div >

  );
}


export default CarLod;
