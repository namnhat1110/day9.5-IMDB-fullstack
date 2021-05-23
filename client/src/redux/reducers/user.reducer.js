import * as types from "../constants/user.constants";

const token = localStorage.getItem("accessToken");

const initialState = {
  id: null,
  email: [],
  password: "",
  loading: false,
  isAuthenticated: !!token,
  redirectToHomePage: false
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST:
      return state
    case types.REGISTER_SUCCESS:
      console.log('HI YOU THERE', payload)
      const { accessToken, user: { email } } = payload
      localStorage.setItem("accessToken", accessToken)
      return { ...state, accessToken, email }
    case types.REGISTER_FAILURE:
      return state
    default:
      return state;
  }
};

export default userReducer;
