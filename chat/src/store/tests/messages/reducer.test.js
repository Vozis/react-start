import reducer, { getAsyncMessages } from "../../messages/messagesSliceReducer";

describe("message reducer", () => {
  describe("reducers", () => {
    const initialState = { messages: {}, pending: false, error: null };

    it("sets fetching true when getAsyncMessages is pending", () => {
      const action = { type: getAsyncMessages.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ messages: {}, pending: true, error: null });
    });

    it("sets the id and list when getAsyncMessages is fulfilled", () => {
      const action = {
        type: getAsyncMessages.fulfilled.type,
        payload: { room1: [{ message: "1", author: "a" }] },
      };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        messages: { room1: [{ message: "1", author: "a" }] },
        pending: false,
        error: null,
      });
    });

    it("sets fetching false when fetchList is rejected", () => {
      const action = {
        type: getAsyncMessages.rejected.type,
        payload: "some error",
      };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        messages: {},
        pending: false,
        error: "some error",
      });
    });
  });
});
