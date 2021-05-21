import * as types from "../constants/user.constants";

import api from "../api";

const register = (email, password) => async (dispatch) => {
  console.log({ email, password })

  try {
    dispatch({ type: types.REGISTER_REQUEST });
    const { data } = await api.post("/users", { email, password });
    dispatch({ type: types.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE });
    console.log({ error });
  }
};

const authActions = {
  register,
};

export { authActions };
