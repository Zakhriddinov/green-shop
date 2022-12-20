import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import instance from '../axios'
import HomePage from '../pages/Home'
import Modal from './Register'

const ProtectedRoutes = ({ role }) => {
   const [isAuth, setIsAuth] = useState()
   useEffect(() => {
      instance.get("/get-token").then(data => {
         if (data.data.token) {
            setIsAuth(data.data.token)
         }
         return isAuth
      })
   }, [isAuth]);
   if (isAuth === "undefined") return <Modal />
   return isAuth && (role === "admin") && isAuth !== "admin" ? (
      <Navigate to={"/home"} />
   ) : isAuth && role === "admin" ? (
      <Outlet />
   ) : isAuth && role === "user" ? (
      <Outlet />
   ) : (
      <Navigate to="/home" />
   )
}
export default ProtectedRoutes