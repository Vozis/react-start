import { Header } from "../components";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, userSlice } from "../store/reducers/userSlice";
import { useEffect } from "react";
import { fetchUsers } from "../store/reducers/ActionCreators";
import PostContainer from "../components/PostContainer/PostContainer";
import PostContainer2 from "../components/PostContainer/PostContainer2";

export const HomePage = () => {
  /*const { users, isLoading, error, count } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);*/

  return (
    <div>
      <h1>Home</h1>
      <div className={"flex gap-3"}>
        {/*  <PostContainer />
        <PostContainer2 />*/}
      </div>

      <hr />
      {/*   {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <pre>{JSON.stringify(users, null, 2)}</pre>
*/}
    </div>
  );
};
