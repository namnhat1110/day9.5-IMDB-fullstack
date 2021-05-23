import * as types from "../constants/user.constants";

import api from "../api";

const register = (email, password) => async (dispatch) => {
  console.log({ email, password })

  try {
    dispatch({ type: types.REGISTER_REQUEST });
    const { data: { data } } = await api.post("/users", { email, password });
    dispatch({ type: types.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE });
    console.log({ error });
  }
};

const signin = (user) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    const { data } = await api.post('/users/login', user);
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
    console.log({ error });
  }
};

const update = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_REQUEST });
    const { data } = await api.patch(`/users/${id}`, user);
    dispatch({ type: types.UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: types.UPDATE_FAILURE });
    console.log({ error });
  }
};

const destroy = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_REQUEST });
    const { data } = await api.delete(`/users/${id}`, user);
    dispatch({ type: types.DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: types.DELETE_FAILURE });
    console.log({ error });
  }
};
const signout = () => async (dispatch) => {
  dispatch({ type: types.SIGN_OUT });
};

const authActions = {
  register,
  signin,
  update,
  signout,
  destroy

};

export { authActions };
