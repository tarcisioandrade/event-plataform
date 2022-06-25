import { Navigate, Outlet } from "react-router-dom";
import { getLocalStore } from "../helper/useLocalStore";

const isAuth = getLocalStore("id");

const ProtectedRouter = () => {
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRouter;
