import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const ProtectedRoutes = ({ admin }) => {
   const token = localStorage.getItem("access_token");
   const isAuth = token && jwt_decode(`${token}`).email;

   if (isAuth === undefined) return <h1>Not foun</h1>
   return isAuth && admin && isAuth !== "admin" ? (
      <Navigate to="/login" />
   ) : isAuth && admin ? (
      <Outlet />
   ) : isAuth && !admin ? (
      <Outlet />
   ) : (
      <h1>Not foun</h1>
   )
}
export default ProtectedRoutes