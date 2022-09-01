import { Header } from "../components";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../store/reducers/userSlice";

export const HomePage = () => {
  /*const { count } = useSelector((state) => state.user);
  const { incrementCount } = userSlice.actions;
  const dispatch = useDispatch();*/
  return (
    <div>
      <h1>Home</h1>
      {/*<p>Count: {count}</p>*/}
      {/*<button onClick={() => dispatch(incrementCount(1))}>Increment</button>*/}
    </div>
  );
};
