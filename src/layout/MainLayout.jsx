import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import style from "./MainLayout.module.scss"
const MainLayout = () => {
  return (
    <div className={style.mainContainer}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
