import {
  getGistsError,
  getGistsStart,
  getGistsSuccess,
  searchGistsError,
  searchGistsSuccess,
  searchGistsStart,
} from "./actions";

export const getGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsStart());

    const { data } = await api.getPublicApi(page);

    dispatch(getGistsSuccess(data));
  } catch (e) {
    dispatch(getGistsError(e));
  }
};

export const searchGists = (name) => async (dispatch, _, api) => {
  try {
    dispatch(searchGistsStart());

    const { data } = await api.getPublicApi(name);

    dispatch(searchGistsSuccess(data));
  } catch (e) {
    dispatch(searchGistsError(e));
  }
};
