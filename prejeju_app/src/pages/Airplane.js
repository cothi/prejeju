import axios from "axios"
import react, { useEffect, useState } from "react"
import "./airplane.css"

import { Icon } from '@iconify/react';
import "./dateSelect.css"
import { useDispatch } from "react-redux";
import { airplaneAdd } from "../actions/action"
import { Cookies } from "react-cookie"
import logo from "../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";


function Airplane({ airData, pageData }) {


  const [goData, setGoData] = useState(null);
  const [backData, setBackData] = useState(null);
  const [airPriData, setAirPriData] = useState({
    go: null,
    back: null,
  });
  const [goText, setGoText] = useState("");
  const [backText, setBackText] = useState("");

  const cookies = new Cookies();
  const setAirObj = {
    name: "",
    start: "",
    end: "",
    price: "",
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nextPage, setNextPage] = useState("");

  let port = {
    "무안": "NAARKJB", "광주": "NAARKJJ", "군산": "NAARKJK", "여수": "NAARKJY",
    "원주": "NAARKNW", "양양": "NAARKNY", "제주": "NAARKPC", "김해": "NAARKPK", "사천": "NAARKPS", "울산": "NAARKPU", "인천": "NAARKSI",
    "김포": "NAARKSS", "포항": "NAARKTH", "대구": "NAARKTN", "청주": "NAARKTU"
  };

  const airGet = async (department, arrive, ulList, date, pageData) => {
    let url =
      "http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList"; /*URL*/
    let queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      "vglSe6FWKCgpNfOr9lYIkRrN2Vbh7jxUVPVzLTNAKRfQoxmCXQ%2FchQ%2BNtajvXT3W052w0twfu1pEhHSy3gqwGg%3D%3D"; /*Service Key*/

    queryParams +=
      "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("depAirportId") +
      "=" +
      encodeURIComponent(port[department]); /**/
    queryParams +=
      "&" +
      encodeURIComponent("arrAirportId") +
      "=" +
      encodeURIComponent(port[arrive]); /**/
    queryParams +=
      "&" +
      encodeURIComponent("depPlandTime") +
      "=" +
      encodeURIComponent(date); /**/
    queryParams +=
      "&" +
      encodeURIComponent("numOfRows") +
      "=" +
      encodeURIComponent("15"); /**/
    //#xhr.oepn("GET", url + queryParams);

    if (ulList === "go") {
      await axios.get(url + queryParams)
        .then(res => {
          setGoData(res.data.response.body.items);
        });
    } else {
      await axios.get(url + queryParams)
        .then(res => {
          setBackData(res.data.response.body.items)
        });
    }
  }
  const setAir = (type, v) => {


    let startTime = v["depPlandTime"].toString().substr(8, 2) + " : " + v["depPlandTime"].toString().substr(10, 2);
    let endTime = v["arrPlandTime"].toString().substr(8, 2) + " : " + v["arrPlandTime"].toString().substr(10, 2);
    setAirObj.name = v["airlineNm"]
    setAirObj.start = startTime;
    setAirObj.end = endTime;
    setAirObj.price = v["economyCharge"];


    let data = setAirObj;

    if (type == "go") {
      setAirPriData({
        go: data,
        back: airPriData.back
      })
      setGoText(setAirObj.name + " " + startTime);
    } else {
      setAirPriData({
        go: airPriData.go,
        back: data
      })
      setBackText(setAirObj.name + " " + startTime);
    }
  }

  function getFullDate(y, m, d) {
    let year = y.toString();
    let month = m.toString();
    let day = d.toString();
    let ret = year

    if (month.length <= 1) {
      ret += "0" + m;
    } else {
      ret += m;
    }

    if (day.length <= 1) {
      ret += "0" + day;
    } else {
      ret += day;
    }

    return ret

  }


  useEffect(() => {
    let date = cookies.get("date");

    let goDate = getFullDate(date.from.year, date.from.month, date.from.day);
    let endDate = getFullDate(date.to.year, date.to.month, date.to.day);

    if (backData == null || goData == null) {
      airGet("김포", "제주", "go", goDate);
      airGet("제주", "김포", "back", endDate);
    } else {
      cookies.set("air", airPriData);
      dispatch(airplaneAdd(airPriData));
    }
  }, [airPriData])


  if (backData == null || goData == null) {
    return (
      <div className="loader">
        <Icon icon="fluent:airplane-take-off-16-regular" width="80" height="90" />
        loading...
      </div>
    )
  }
  const pageObjs = {
    "운임료": "airplane",
    "숙박/렌트카": "carlod",
    "맛집": "food",
    "카페": "cafe",
    "관광지": "tour"
  }
  function nextTab() {
    let pageObj = cookies.get("page")

    if (pageObj.tailSelect.length < 1) {
      setNextPage("result")
      pageObj.tailSelect = pageObj.tailSelect.slice(1, pageObj.tailSelect.length);
      cookies.set("page", pageObj);
      navigate("/type/result");
    } else {

      setNextPage(pageObjs[pageObj.tailSelect[0]]);
      pageObj.tailSelect = pageObj.tailSelect.slice(1, pageObj.tailSelect.length);
      cookies.set("page", pageObj);
      navigate("/type/cafe");
    }

  };


  return (
    <>
      <Link to="/">
        <div>
          <img src={logo} className="logo" alt="로고" />
          <h1 className="mainTitleLogo">내 주머니</h1>
        </div>
      </Link>
      <button className="datebutton">
        <div>
          출발, {" "}
          {
            goText
          }
        </div>
        <div>
          오는, {" "}
          {
            backText
          }
        </div>

      </button>
      <div className="airplaneRoot">

        <article >
          <div className="menu">
            <div >출발 운임료 선택</div>
            <div >출발 날짜</div>
          </div>
          <section className="menu">
            <h4>항공사</h4>
            <h4>출발</h4>
            <h4>도착</h4>
            <h4>가격</h4>
          </section>

          <ul id="go" className="ulList">

            {
              goData.item ? goData.item.map((v, i) => {
                if (v["economyCharge"] == null) {
                  return <></>
                }
                return (
                  <div className="liList" onClick={() => {
                    setAir("go", v);
                  }} key={i}>
                    <div>{v["airlineNm"]}
                    </div>
                    <div>
                      {
                        v["depPlandTime"].toString().substr(8, 2) + " : " +
                        v["depPlandTime"].toString().substr(10, 2)
                      }
                    </div>
                    <div>
                      {
                        v["arrPlandTime"].toString().substr(8, 2) + " : " +
                        v["arrPlandTime"].toString().substr(10, 2)
                      }
                    </div>
                    <div>{v["economyCharge"]}</div>
                  </div>
                )
              })
                :
                null
            }
          </ul>
        </article>
        <article>
          <div className="menu">
            <div >오는 운임료 선택</div>
            <div >오는 날짜</div>
          </div>
          <section className="menu">
            <h4>항공사</h4>
            <h4>출발</h4>
            <h4>도착</h4>
            <h4>가격</h4>
          </section>
          <ul id="back" className="ulList">
            {
              backData.item != null ? goData.item.map((v, i) => {
                if (v["economyCharge"] == null) {
                  return <></>
                }
                return (
                  <div className="liList" key={"aiir" + i} onClick={() => {
                    setAir("back", v);
                  }}>
                    <div>{v["airlineNm"]}
                    </div>
                    <div>
                      {
                        v["depPlandTime"].toString().substr(8, 2) + " : " +
                        v["depPlandTime"].toString().substr(10, 2)
                      }
                    </div>
                    <div>
                      {
                        v["arrPlandTime"].toString().substr(8, 2) + " : " +
                        v["arrPlandTime"].toString().substr(10, 2)
                      }

                    </div>
                    <div>{v["economyCharge"]}</div>
                  </div>
                )
              })
                :
                null
            }
          </ul>
        </article>
      </div>
      <div className="directionMain">
        <div className="directionCont">
          <div>
          </div>
        </div>
        <div onClick={() => nextTab()}>
          <div className="directionCont">
            <div>
              다음
            </div>
            <Icon icon="carbon:next-filled" color="#1976d2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Airplane;
