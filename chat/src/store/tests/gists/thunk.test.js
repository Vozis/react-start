import gistsSliceReducer, {
  fetchAsyncGists,
} from "../../gists/GistsSliceReducer";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

export class MyService {
  async fetchAsyncGists(page) {
    return ["real data"];
  }
}

describe("get gists thunk", () => {
  it("fulfilled", async () => {
    const dispatch = jest.fn();
    const getPublicApi = jest.fn().mockResolvedValue({ data: "ok" });

    jest
      .spyOn(getPublicApi, "fetchAsyncGists")
      .mockRejectedValueOnce(["mock data"]);

    const reducer = combineReducers({
      gistsSliceReducer,
    });
    const store = configureStore({ reducer });
    await store.dispatch(fetchAsyncGists({ gists: ["mock data"] }));
    expect(store.getState()).toEqual({ gists: ["mock data"] });

    /*const PAGE = 2;

    const dispatch = jest.fn();
    

    const thunk = fetchAsyncGists(PAGE);

    await thunk(dispatch, null, { getPublicApi });

    expect(getPublicApi).toBeCalledWith(PAGE);
    expect(getPublicApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith(1, fetchAsyncGists());*/
  });

  it("rejected", () => {});
});
