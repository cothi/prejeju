import * as type from "./actionType"


export const pageSet = data => (
  {
    type: type.pageSet,
    payload: data,
  }
)

export const cafeAdd = data => (
  {
    type: type.cafeAdd,
    payload: data,
  }
);

export const cafeDel = data => (
  {
    type: type.cafeDel,
    payload: data,
  }
);

export const foodAdd = data => (
  {
    type: type.foodAdd,
    payload: data,
  }
);
export const foodDel = data => (
  {
    type: type.foodDel,
    payload: data,
  }
);

export const sportsAdd = data => (
  {
    type: type.sportsAdd,
    payload: data,
  }
);

export const sportsDel = data => (
  {
    type: type.sportsDel,
    payload: data,
  }
);

export const lodgeAdd = data => (
  {
    type: type.lodgeAdd,
    payload: data,
  }
);

export const lodgeDel = data => (
  {
    type: type.lodgeDel,
    payload: data,
  }
);

export const airplaneAdd = data => (
  {
    type: type.airplaneAdd,
    payload: data,
  }
)
