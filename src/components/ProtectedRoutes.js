import { Outlet } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const ProtectedRoutes = ({ admin }) => {
   const token = localStorage.getItem("access_token");
   const isAuth = token && jwt_decode(`${token}`).email;
   console.log(isAuth);
   console.log(admin);
   if (isAuth === undefined) return <h1>Not found</h1>
   return isAuth && admin ? (
      <Outlet />
   ) : isAuth && !admin ? (
      <Outlet />
   ) : (
      <h1>Not found</h1>
   )
}
export default ProtectedRoutes