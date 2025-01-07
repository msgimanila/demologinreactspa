import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

// Define the shape of the state
interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  username: string;
  errorMessage: string;
}

// Define the action types for each action
interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string; // Payload is the username
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // Payload is the error message
}

// Combine the action types into a single union type
type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

// Initial state, typed
const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  username: '',
  errorMessage: '',
};

// Reducer function with typed state and action
const reducer = (state = initialState, action: AuthActionTypes): AuthState => {
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
