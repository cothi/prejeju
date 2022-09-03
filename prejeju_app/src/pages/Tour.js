import React, { useState } from "react"
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk'
import tour_data from "./tour.json"
import "./set.css"

import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// 1f7afd5b956dfb17cf04da6a826eb37d

function Tour() {


  const data_json = tour_data;

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

  const Modal = () => (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
    </Popup>
  );

  return (
    <>

      <div className="setRoot">

        <div className="setMain">
          <div className="setLeftPanel">
            <div>
              관광지
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

                      < EventMarkerContainer
                        key={`EventMarkerContainer-${v["위도"]}-${v["경도"]}`
                        }
                        position={{ lat: v["위도"], lng: v["경도"] }}
                        content={
                          <div className="cursorMap">
                            <div>
                              {v["관광지"]}
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
                        {v["관광지"]}
                        <div className="itemTag">
                          {v["테그"]}
                        </div>
                      </div>
                      <div className="itemRow">
                        <div>
                          {v["영업시간"]}
                        </div>
                        <div className="itemMenuBtn" onClick={() => (<Modal />)}>
                          선택
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
    </>
  )
}

export default Tour;
