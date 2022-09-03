import React, { useEffect, useState, useCallback } from "react"

import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk'
import cafe_data from "./cafe_data.json"
import "./set.css"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Checkbox, Grid } from '@nextui-org/react';
import { Cookies } from "react-cookie"
import { Link } from "react-router-dom"
// 1f7afd5b956dfb17cf04da6a826eb37d

function Cafe() {


  const [showCafe, setShowCafe] = useState({});
  const [nextPage, setNextPage] = useState("");

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const cookies = new Cookies();
  const data_json = cafe_data;

  const [level, setLevel] = useState(10);

  const [mapAxis, setMapAxis] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: true,
  })

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    )
  }

  function stateChange(name, selecetd) {
    let tmp = showCafe;
    tmp[name] = selecetd;
    setShowCafe(tmp);
    cookies.set("cafe", showCafe);
    forceUpdate();
  }

  useEffect(() => {
    nextTab();
  }, [])



  function nextTab() {
    let pageObj = cookies.get("page")

    if (pageObj.tailSelect.length === 0) {
      setNextPage("result")
    } else {
      setNextPage(pageObj.tailSelect[0]);
      pageObj.tailSelect = pageObj.tailSelect.slice(1, pageObj.tailSelect.length);
      cookies.set("page", pageObj);
    }
  };



  const Modal = (data) => {
    let split_menu = data.data["메뉴(가격)"].split(",")
    const [selected, setSelected] = useState([]);


    return (<Popup trigger={<div> 메뉴 선택 </div>} modal nested>
      {close =>
        <div className="modalMain">
          <Grid.Container gap={2}>
            <Grid>
              <Checkbox.Group
                label="-"
                value={selected}
                onChange={setSelected}
                color="secondary"
              >
                {
                  split_menu.map((v, i) => (
                    <div key={i}>
                      <Checkbox color="success" value={v}> {i + 1}. {v}</Checkbox>
                    </div>
                  ))
                }
              </Checkbox.Group>
            </Grid>
          </Grid.Container>
          <div onClick={() => {
            close();
            stateChange(data.data["카페이름"], selected)
          }} className="setModal">
            확인
          </div>
        </div>
      }
    </Popup>
    )
  };

  return (
    <>
      <div className="setRoot">
        <div className="setMain">
          <div className="setLeftPanel">
            <div>
              카페
            </div>
            <div>
              <Map
                center={mapAxis.center}
                isPanto="true"
                level={level}
                style={{ width: "100%", height: window.innerHeight / 2 }}
              >
                {
                  data_json.map((v, i) => {

                    return (

                      <EventMarkerContainer
                        key={`EventMarkerContainer-${v["위도"]}-${v["경도"]}`
                        }
                        position={{ lat: v["위도"], lng: v["경도"] }}
                        content={
                          <div className="cursorMap">
                            <div>
                              {v["카페이름"]}
                            </div>
                            <img width="100" src={v["이미지"]} alt="" />
                          </div>
                        }
                      />

                    )
                  })
                }

              </Map>
            </div>
            <div className="showList">
              {
                Object.keys(showCafe).map((v, i) => (
                  <div key={i}>
                    {showCafe[v].length >= 1 ? v + "." + showCafe[v] : null}
                  </div>
                ))
              }
            </div>
          </div>
          <div className="setRightPanel">
            {
              data_json.map((v, i) => {
                return (
                  <div className="itemMain" key={i}>
                    <div className="itemImgMain">
                      <img src={v["이미지"]} alt="" className="itemImg" />
                    </div>
                    <div className="itemExpMain" onClick={() => {
                      setLevel(6);
                      setMapAxis({
                        center: { lat: v["위도"], lng: v["경도"] },
                        isPanto: false,
                      });

                    }}>
                      <div>
                        {v["카페이름"]}
                        <div className="itemTag">
                          {v["대표"]}
                        </div>
                      </div>
                      <div className="itemRow">
                        <div>
                          {v["영업시간"]}
                        </div>
                        <div className="itemMenuBtn" >
                          <Modal data={v} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

      </div>

      <div className="footer">
        <Link to={nextPage} className="nextBtn" onClick={() => nextTab()}>
          <div>
            다음
          </div>
        </Link>
      </div>


    </>
  )
}

export default Cafe;
