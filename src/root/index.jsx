import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProtectedRoutes from "../components/ProtectedRoutes";
import navbar from "../utils/navbar";
import userRoute from "../utils/user";

const Root = () => { 
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element, privat }) => (
            <Route path={path} key={id} element={element} private={privat} />
          ))}
          <Route element={<ProtectedRoutes admin={false} />}>
            <Route element={<Profile />}>
              {userRoute.map(({ id, path, element }) => (
                <Route path={path} key={id} element={element} />
              ))}
            </Route>
          </Route>
        </Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </>
  );
};

export default Root;
