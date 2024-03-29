import { Outlet } from "react-router-dom";
import userRoute from "../../utils/user";
import Sidebar from "../Generic/Sidebar";
import { Container } from "./style";

const Profile = () => {
  return (
    <Container>
      <Sidebar title="My account" navbar={userRoute} />
      <Outlet />
    </Container>
  );
};

export default Profile;
