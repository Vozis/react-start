import { Header } from "../components";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
