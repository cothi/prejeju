import React, { useEffect, useState } from "react";
//import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Checkbox, Grid } from '@nextui-org/react';
import { addDays, getDate, format } from 'date-fns';

//import { Link, useNavigate } from "react-router-dom"/* ; */

import { Icon } from '@iconify/react';
import 'react-day-picker/dist/style.css';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



import "./dateSelect.css"
import { Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
//import { useDispatch } from "react-redux";


import { DateRangePicker } from 'react-date-range';



function DateSelect() {

  //const [nextTab, setNextTab] = useState("");
  const [selected, setSelected] = useState([]);

  const [range, setRange] = useState({});


  const pickData = ["운임료", "카페",];
  let setObj = {};
  const cookie = new Cookies();
  let navigate = useNavigate();





  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);




  const pageObj = {
    "운임료": "airprice",
    "숙박/렌트카": "carlod",
    "맛집": "food",
    "카페": "cafe",
    "관광지": "tour"
  }



  function nextCalc() {
    let nextTab = pageObj[selected[0]]
    setObj["select"] = selected;
    setObj["tailSelect"] = selected.slice(1, selected.length);

    cookie.set("page", setObj);
    cookie.set("date", {
      from: format(state[0].startDate, "yyyyMMdd"),
      to: format(state[0].endDate, "yyyyMMdd"),
    })
    navigate("/" + nextTab)
  };

  return (
    <div className="selectRoot">
      <div>
        맛집 추가 준비중
      </div>
      <div className="mains">


        <div className="dateBody">

          <div className="bodyContent">

            <div className="leftPanel">
              <div className="headerTitle">
                여행 날짜 선택
              </div>
              <div >
                <DateRangePicker
                  onChange={item => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={1}
                  ranges={state}
                  direction="horizontal"
                />;
              </div>
              <div>
                <div>
                  {
                    "출발: " + format(state[0].startDate, "yyyyMMdd")
                  }
                </div>
                <div>
                  {
                    "오는: " + format(state[0].endDate, "yyyyMMdd")
                  }
                </div>
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

          </div>
          <div className="directionMain">
            <div className="directionCont">
              {
                selected.lenght < 1 ?
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
