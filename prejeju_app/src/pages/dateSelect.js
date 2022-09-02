import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker"
//import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Checkbox, Grid } from '@nextui-org/react';
import { Icon } from '@iconify/react';


import "./dateSelect.css"


function DateSelect() {

  // ✅ a change in default state: { from: ..., to: ... }
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });

  const [selected, setSelected] = useState([]);
  console.log(selected)






  const pickData = ["운임료", "숙박/렌트카", "맛집", "카페", "관광지"]
  return (
    <div className="main">
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
                        <div key={i}>
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
            <div>
            </div>
          </div>
          <div className="directionCont">
            <div>
              다음
            </div>
            <Icon icon="carbon:next-filled" color="#1976d2" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default DateSelect;
