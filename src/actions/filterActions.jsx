import { filterActionTypes, dataActionTypes } from './ActionTypes';
import { useSelector } from 'react-redux';
import { allbanks_dummyData } from '../data/dummyData';

export const searchBanks = (_filterQuery, filterType) => {
  return (dispatch, getState) => {
    const { banksList, specificSearch, specificQuery, _filteredList } =
      getState().dataReducer;

    console.log(banksList, _filteredList);
    if (_filterQuery && _filterQuery.trim()) {
      console.log(_filteredList.length);
      const filteredResults = banksList.filter((bank) => {
        if (filterType === 'search') {
          if (specificSearch) {
            console.log(':::', _filteredList);
            return bank[specificQuery]
              .toLowerCase()
              .includes(_filterQuery.toLowerCase());
          } else {
            return (
              bank.ifsc.toLowerCase().includes(_filterQuery.toLowerCase()) ||
              bank.branch.toLowerCase().includes(_filterQuery.toLowerCase()) ||
              bank.address.toLowerCase().includes(_filterQuery.toLowerCase()) ||
              bank.city.toLowerCase().includes(_filterQuery.toLowerCase()) ||
              bank.state.toLowerCase().includes(_filterQuery.toLowerCase()) ||
              bank.district
                .toLowerCase()
                .includes(_filterQuery.toLowerCase()) ||
              bank.bank_name
                .toLowerCase()
                .includes(_filterQuery.toLowerCase()) ||
              Number(bank.bank_id) === Number(_filterQuery)
            );
          }
        } else if (filterType === 'city') {
          return bank.city.toLowerCase() === _filterQuery.toLowerCase();
        }
      });
      console.log('//', filteredResults);
      if (filteredResults.length === 0) {
        dispatch({
          type: dataActionTypes.NOT_FOUND,
          payload: 'No matching results',
        });
      } else {
        console.log('err', filteredResults);

        dispatch({
          type: dataActionTypes.SET_INIT_DATA,
          payload: filteredResults,
        });
      }
    }
  };
};

export const setSpecificSearch = (_query) => {
  return (dispatch) => {
    dispatch({
      type: filterActionTypes.SET_SPECIFIC_SEARCH,
      payload: true,
    });
    dispatch({
      type: filterActionTypes.SET_SPECIFIC_QUERY,
      payload: _query,
    });
  };
};

export const clearFilters = () => {
  return (dispatch) => {
    dispatch({
      type: filterActionTypes.CLEAR_FILTERS,
      payload: allbanks_dummyData,
    });
  };
};
