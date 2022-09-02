/*
카페
맛집
레저스포츠
관광지
운임료
숙소
렌터카
*/

import * as type from "../actions/actionType"


const initialState = {
  page: {
    date: "",
    tailSelect: [],
    select: [],
  },
  cafe: {},
  food: {},
  tour: {},
  carlod: {},
  airplane: {},
  car: {},
}

const rootReducer = (state = initialState, action) => {
  //console.log(action, "action")
  //console.log(state, "state")
  switch (action.type) {
    case type.carAdd:
      return {
        ...state,
        cafe: action.payload
      }
    case type.airplaneAdd:
      return {
        ...state,
        airplane: action.payload,
      }
    case type.pageSet:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;
