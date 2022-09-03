import React, { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker"
//import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Checkbox, Grid } from '@nextui-org/react';

import logo from "../assets/img/logo.svg";
//import { Link, useNavigate } from "react-router-dom"/* ; */

import { Icon } from '@iconify/react';


import "./dateSelect.css"
import { Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
//import { useDispatch } from "react-redux";



function DateSelect() {

  //const [nextTab, setNextTab] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  const pickData = ["운임료", "카페",];
  let setObj = {};

  const cookie = new Cookies();
  let navigate = useNavigate();




  const pageObj = {
    "운임료": "airplane",
    "숙박/렌트카": "carlod",
    "맛집": "food",
    "카페": "cafe",
    "관광지": "tour"
  }

  /*   useEffect(() => {
  
  
      setObj["select"] = selected;
      //const datess = JSON.parse(JSON.stringify(selectedDayRange))
      //cookie.set("page", setObj);
    }, [selected])
   */

  function nextCalc() {


    let page = cookie.get("page");
    let nextTab = pageObj[selected[0]]

    setObj["tailSelect"] = selected.slice(1, selected.length);
    cookie.set("page", page);
    cookie.set("date", selectedDayRange)
    console.log(nextTab)
    navigate("/" + nextTab)
  };

  return (
    <div className="selectRoot">
      <div>
        <img src={logo} className="logo" alt="로고" />
        <Link to="/">
          <h1 className="mainTitleLogo">내 주머니</h1>
        </Link>
      </div>
      <div className="mains">

        <div className="dateBody">

          <div className="bodyContent">

            <div className="leftPanel">
              <div className="headerTitle">
                여행 날짜 선택
              </div>
              <div>

                <Calendar
                  value={selectedDayRange}
                  onChange={setSelectedDayRange}
                  shouldHighlightWeekends
                />
              </div>
            </div>
            <div className="rightPanel">
              <div className="headerTitle">
                선택 카테고리
              </div>

              <div>
                <Grid.Container gap={2}>
                  <Grid>
                    <Checkbox.Group
                      label="-"
                      value={selected}
                      onChange={setSelected}
                      color="secondary"

                    >
                      {
                        pickData.map((v, i) => (
                          <div key={"airp" + i}>
                            <Checkbox color="success" value={v}> {i + 1}. {v}</Checkbox>
                          </div>
                        ))
                      }
                    </Checkbox.Group>
                  </Grid>
                </Grid.Container>
              </div>
            </div>
            <div>
              맛집 추가 준비중
            </div>
          </div>
          <div className="directionMain">
            <div className="directionCont">
              {
                selected.lenght < 1 || selectedDayRange.to == null || selectedDayRange.from == null ?
                  <a onClick={() => {
                    alert("날짜(출발, 오는 날)와 카테고리(1개 이상 선택)를 확인하세요!")
                  }}>
                    <div className="directionCont">
                      <div>
                        다음
                      </div>
                      <Icon icon="carbon:next-filled" color="#1976d2" />
                    </div>

                  </a>
                  :
                  <div onClick={() => nextCalc()}>
                    <div >
                      <div className="directionCont">
                        <div>
                          다음
                        </div>
                        <Icon icon="carbon:next-filled" color="#1976d2" />
                      </div>

                    </div>

                  </div>

              }
            </div>
          </div>

        </div>
      </div >
    </div>
  )
}


export default DateSelect;
