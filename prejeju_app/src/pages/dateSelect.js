import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker"
import Checkbox from '@mui/material/Checkbox';

import "./dateSelect.css"


function DateSelect() {

  // ✅ a change in default state: { from: ..., to: ... }
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  console.log(label)


  const pickData = ["숙박", "맛집", "카페", "관광지", "레저스포츠", "렌트카"]
  return (
    <div className="main">

      <div className="dateBody">
        <div>
          여행 날짜 선택
        </div>
        <div className="bodyContent">

          <div className="leftPanel">

            <div>
              <Calendar
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                shouldHighlightWeekends
              />
            </div>
          </div>
          <div>
            <div>
              카테고리
            </div>
            <div>
              {
                pickData.map((v, i) => (
                  <div>
                    <Checkbox label="Standard checkbox" defaultChecked color="default" />
                  </div>

                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default DateSelect;
