import './App.css';
import logo from "./assets/img/logo.svg";
import wave from "./assets/img/wave.svg";
import surfingboard from "./assets/img/surfingboard.svg"
import surfingboard2 from "./assets/img/surfingboard2.svg"
import stone from "./assets/img/stone.svg"
import tree from "./assets/img/tree.svg"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import DateSelect from "./pages/dateSelect"
import Cafe from "./pages/Cafe"
import AirPrice from "./pages/AirPrice"
//import CarLod from "./pages/CarLod"
//import Food from "./pages/Food"
import Tour from "./pages/Tour"
import Result from "./pages/Result"


function Home() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="logo" alt="로고" />
        <h1 className="mainTitleLogo">내 주머니</h1>
      </div>
      <div>
        <Link to="/type">
          <div className="button">
            <button className="mainButton">여행 경비 추측하러 가기</button>
          </div>
        </Link>
        <Link to="/tour">
          <div className="button">
            <button className="mainButton2">관광지 보러가기</button>
          </div>
        </Link>
      </div>
      <img src={wave} className="wave" alt="파도" />
      <img src={surfingboard2} className="surfingboard2" alt="서핑보드2" />
      <img src={surfingboard} className="surfingboard" alt="서핑보드" />
      <img src={stone} className="stone" alt="돌하르방" />
      <img src={tree} className="tree" alt="야자수" />
    </div>
  );
}

function App() {

  return (
    <BrowserRouter basename="/prejeju" >

      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="로고" />
          <h1 className="mainTitleLogo">내 주머니</h1>
        </Link>
      </div>
      <Routes >
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="/airprice" element={<AirPrice />} > </Route>
        <Route path="/type" element={<DateSelect />} > </Route>
        <Route path="/cafe" element={<Cafe />} > </Route>
        <Route path="/tour" element={<Tour />} > </Route>
        <Route path="/result" element={<Result />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
