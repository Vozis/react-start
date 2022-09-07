const createStore = (initialState, reducer) => {
  let currentState = initialState;
  const listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };
  // вызывается внутри useSelector, чтобы компонент подписался на данные из store
  const dispatch = (action) => {
    currentState = reducer(currentState, action);

    listeners.forEach((listener) => listener());

    return action;
  };
  // вызывает редусер для обновления store c переданными новыми данными
  const getState = () => {
    return currentState;
  };
  // возвращает текущее состояние
  return { subscribe, dispatch, getState };
};

const myReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const myStore = createStore({ count: 0 }, myReducer);
