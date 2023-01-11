import { Outlet } from "react-router-dom";
import admin from "../../utils/admin";
// import userRoute from "../../utils/user";
import Sidebar from "../Generic/Sidebar";
import { Container } from "./style";

const Admin = () => {
  return (
    <Container>
      <Sidebar title="My account" navbar={admin} />
      <Outlet />
    </Container>
  );
};

export default Admin;
