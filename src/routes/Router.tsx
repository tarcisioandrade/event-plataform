import { Route, Routes } from "react-router-dom";
import Subscribe from "../pages/Subscribe";
import { Event } from "../pages/Event";
import ProtectedRouter from "./ProtectedRouter";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route element={<ProtectedRouter />}>
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Route>
    </Routes>
  );
};

export default Router;
