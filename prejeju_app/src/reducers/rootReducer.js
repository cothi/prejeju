/*
카페
맛집
레저스포츠
관광지
운임료
숙소
렌터카
*/


const initialState = {
  cafe: {},
  food: {},
  tour: {},
  carlod: {},
  airplane: {},
  car: {},
}

const rootReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;
