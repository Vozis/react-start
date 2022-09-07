import { Header } from "../components";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../store/reducers/userSlice";
import { useEffect } from "react";
import { fetchUsers } from "../store/reducers/ActionCreators";

export const HomePage = () => {
  const { users, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};
