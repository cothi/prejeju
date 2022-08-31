import { cafeType } from "./actionType"
export const setCafe = cafe => (
  {
    type: cafeType,
    payload: cafe,
  });
