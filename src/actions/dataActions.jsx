import { dataActionTypes } from './ActionTypes';

export const setDataInitially = (banks) => {
  return (dispatch) => {
    dispatch({
      type: dataActionTypes.SET_INIT_DATA,
      payload: banks,
    });
  };
};

export const setSelectedBank = (bank) => {
  return (dispatch) => {
    dispatch({ type: dataActionTypes.SET_SELECTED, payload: bank });
  };
};

export const setFavorites = (bank) => {
  return (dispatch) => {
    dispatch({ type: dataActionTypes.SET_FAVORITES, payload: bank });
  };
};

export const markFavorite = (bank) => {
  return (dispatch) => {
    dispatch({ type: dataActionTypes.MARK_FAVORITE, payload: bank });
  };
};
