import React, { useEffect } from "react"
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

// 1f7afd5b956dfb17cf04da6a826eb37d

function Cafe() {


  return (
    <div>
      <div>
        <div>
          카페
        </div>
        <div>
          Map
        </div>
      </div>
      <div>
        <div>
          <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "100%", height: "360px" }}
          >
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
              <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
            <MapMarker position={{ lat: 33.55635, lng: 126.795750 }}>
              <div style={{ color: "#000" }}>Hello World!!</div>
            </MapMarker>
          </Map>

        </div>
        <div>map</div>
      </div>
    </div>
  )
}

export default Cafe;
