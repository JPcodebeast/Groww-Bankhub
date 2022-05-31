import { dataActionTypes, filterActionTypes } from '../actions/ActionTypes';

const initState = {
  banksList: [],
  _filteredList: [],
  specificSearch: false,
  specificQuery: '',
  selected: {},
  favorites: [],
  favBank: {},
  errorMsg: '',
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case dataActionTypes.SET_INIT_DATA:
      return { ...state, banksList: action.payload };
    case filterActionTypes.SEARCH_BANKS:
      return { ...state, _filteredList: action.payload };
    case filterActionTypes.SET_SPECIFIC_SEARCH:
      return { ...state, specificSearch: action.payload };
    case filterActionTypes.SET_SPECIFIC_QUERY:
      return { ...state, specificQuery: action.payload };
    case dataActionTypes.SET_SELECTED:
      return { ...state, selected: action.payload };
    case filterActionTypes.CLEAR_FILTERS:
      return { ...state, banksList: action.payload };
    case dataActionTypes.SET_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case dataActionTypes.MARK_FAVORITE:
      return { ...state, favBank: action.payload };
    case dataActionTypes.NOT_FOUND:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
