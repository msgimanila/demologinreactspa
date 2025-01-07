// Define action types as constants
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Define the types for the actions
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

// Union type for the actions
export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

// Action creators with proper typing
export const loginRequest = (): LoginRequestAction => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (username: string): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: username,
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});
