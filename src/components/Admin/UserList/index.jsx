import { Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  fetchUsers,
} from "../../../redux/admin/adminUserSlice";
import Table from "../../Generic/Table";
import BoldText from "../../Generic/Typography/BoldText";
import { Container } from "./style";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineUserDelete,
} from "react-icons/ai";
import UserModal from "./UserModal";
// import { Link } from "react-router-dom";

const AdminUserList = () => {
  const { userData, loading } = useSelector((state) => state.adminUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const columns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 250,
    },
    {
      title: "Is Admin",
      dataIndex: "isAdmin",
      render: (isAdmin) =>
        isAdmin ? (
          <AiOutlineCheck style={{ color: "green" }} />
        ) : (
          <AiOutlineClose style={{ color: "red" }} />
        ),
      width: 80,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 50,
      render: (data) => (
        <Space size={"middle"}>
          <a
            onClick={() => {
              showModal();
            }}
          >
            <AiOutlineEdit style={{ color: "primary" }} />
          </a>
          <a onClick={() => dispatch(deleteUser(data._id))}>
            <AiOutlineUserDelete style={{ color: "red" }} />
          </a>
        </Space>
      ),
    },
  ];
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <Container>
      <BoldText type="size16">Users List</BoldText>
      <UserModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        setIsModalOpen={setIsModalOpen}
      />
      <Table columns={columns} data={userData} />
    </Container>
  );
};

export default AdminUserList;
