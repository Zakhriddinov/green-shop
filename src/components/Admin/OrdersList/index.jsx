import { Space } from "antd";
import { useEffect } from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
} from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrder,
  fetchOrders,
} from "../../../redux/admin/adminOrdersSlice";
import Table from "../../Generic/Table";
import BoldText from "../../Generic/Typography/BoldText";
import { Container } from "./style";

const OrdersList = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.adminOrders);

  useEffect(() => {
    dispatch(fetchOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(orders);
  const columns = [
    {
      title: "User",
      dataIndex: "user",
      width: 150,
    },
    {
      title: "Date",
      dataIndex: "updatedAt",
      width: 250,
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      width: 100,
    },
    {
      title: "Delivered",
      dataIndex: "isDelivered",
      render: (isDelivered) =>
        isDelivered ? (
          <AiOutlineCheck style={{ color: "green" }} />
        ) : (
          <AiOutlineClose style={{ color: "red" }} />
        ),
      width: 85,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      width: 150,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 70,
      render: (data) => (
        <Space size={"middle"}>
          <a>
            <FaEye style={{ color: "primary" }} />
          </a>
          <a>
            <AiOutlineDelete
              style={{ color: "red" }}
              onClick={() => dispatch(deleteOrder(data._id))}
            />
          </a>
        </Space>
      ),
    },
  ];

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container>
      <BoldText type="size16">Orders List</BoldText>
      <Table columns={columns} data={orders} />
    </Container>
  );
};

export default OrdersList;
