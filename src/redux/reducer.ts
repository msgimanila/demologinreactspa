// Define the types for your state
interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  username: string;
  errorMessage: string;
}

// Define the types for your action
interface Action {
  type: string;
  payload?: string; // assuming payload is a string, adjust if necessary
}

const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  username: '',
  errorMessage: '',
};

// Reducer function with types
const reducer = (state = initialState, action: Action): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, errorMessage: '' };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true, username: action.payload || '' };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload || '' };
    default:
      return state;
  }
};

export default reducer;
