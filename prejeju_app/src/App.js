import './App.css';
import logo from "./assets/img/logo.svg";
import wave from "./assets/img/wave.svg";
import surfingboard from "./assets/img/surfingboard.svg"
import surfingboard2 from "./assets/img/surfingboard2.svg"
import stone from "./assets/img/stone.svg"
import tree from "./assets/img/tree.svg"
import { Link } from "react-router-dom";


function App() {
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
        <Link to="/type/tour">
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
export default App;
