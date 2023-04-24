export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const REMAKE_OPERATION = 'REMAKE_OPERATION';
export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const changeOperation = (number) => {
  return ({ type: CHANGE_OPERATION,
     payload: number });
}
export const applyNumber = (number) => {
  return ({
    type: APPLY_NUMBER,
    payload:  number
  });
};
export const remakenumber = (number) => {
  return ({
    type: REMAKE_OPERATION,
    payload:  number
  });
};