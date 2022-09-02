import React, { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker"
//import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Checkbox, Grid } from '@nextui-org/react';

import logo from "../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Cookies } from 'react-cookie'

import { Icon } from '@iconify/react';


import "./dateSelect.css"
import { useDispatch } from "react-redux";

import { pageSet } from "../actions/action"


function DateSelect() {

  // ✅ a change in default state: { from: ..., to: ... }
  const navigate = useNavigate();



  const [nextTab, setNextTab] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  const dispatch = useDispatch();
  const pickData = ["운임료", "카페",];
  const setObj = {};

  const cookies = new Cookies;




  const pageObj = {
    "운임료": "airplane",
    "숙박/렌트카": "carlod",
    "맛집": "food",
    "카페": "cafe",
    "관광지": "tour"
  }

  const cookie = new Cookies();

  useEffect(() => {
    cookies.remove("cafe")
    cookies.remove("air")
    cookies.remove("page")


    setNextTab(pageObj[selected[0]]);
    setObj["tailSelect"] = selected.slice(1, selected.length);
    setObj["select"] = selected;
    cookie.set("page", setObj);


    if (selectedDayRange.to == null) {
      return
    }
    const datess = JSON.parse(JSON.stringify(selectedDayRange))
    setObj["dates"] = datess;
    cookie.set("page", setObj);
    cookie.set("date", selectedDayRange)


  }, [selected, selectedDayRange])





  return (
    <div className="selectRoot">
      <a href="/">
        <div>
          <img src={logo} className="logo" alt="로고" />
          <h1 className="mainTitleLogo">내 주머니</h1>
        </div>
      </a>
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
                selected.lenght < 1 ?
                  <a onClick={() => {
                    alert("카테고리를 선택하세요!")

                  }}>
                    <div className="directionCont">
                      <div>
                        다음
                      </div>
                      <Icon icon="carbon:next-filled" color="#1976d2" />
                    </div>

                  </a>
                  :
                  <a href={"/type/" + nextTab} >
                    <div className="directionCont">
                      <div>
                        다음
                      </div>
                      <Icon icon="carbon:next-filled" color="#1976d2" />
                    </div>

                  </a>

              }
            </div>
          </div>

        </div>
      </div >
    </div>
  )
}


export default DateSelect;
