import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  username: '',
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, errorMessage: '' };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true, username: action.payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;
