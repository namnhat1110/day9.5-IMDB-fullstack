import * as types from "../constants/movie.constants";

import api from "../api";

const getAll = () => async (dispatch) => {
  try {
    dispatch({ type: types.FETCH_START });
    const { data } = await api.get("/movies");
    console.log({ foo: 'bar', data })
    dispatch({ type: types.FETCH_SUCCESS, payload: data.data.movies });
  } catch (error) {
    dispatch({ type: types.FETCH_FAILURE });
    console.log({ error });
  }
};

const createMovie = (movie) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_START });
    const { data } = await api.post('/movies', movie);
    dispatch({ type: types.CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.CREATE_FAILURE });
  }
};

const updateMovie = (movie) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_START });
    const { data } = await api.patch(`/movies/${movie._id}`, movie);
    dispatch({ type: types.UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.UPDATE_FAILURE });
  }
};

const deleteMovie = (movie) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_START });
    const { data } = await api.delete(`/movies/${movie._id}`);
    dispatch({ type: types.DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.DELETE_FAILURE })
  }
};

const movieActions = {
  getAll,
  createMovie,
  updateMovie,
  deleteMovie
};

export { movieActions };
