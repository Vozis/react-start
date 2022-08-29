import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counter";

export const ProfilePage = () => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(data);

  return (
    <div>
      <h1>Profile</h1>
      <h2>{data.count}</h2>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </div>
  );
};
