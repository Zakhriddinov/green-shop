import { Space } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../Generic/Table";
import BoldText from "../../Generic/Typography/BoldText";
import { Container } from "./style";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import {
  deleteProducts,
  fetchProducts,
} from "../../../redux/admin/adminProductSlice";
import Button from "../../Generic/Button";
import { useNavigate } from "react-router-dom";

const AdminProductList = () => {
  const { products, loading } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const columns = [
    {
      title: "Product Name",
      dataIndex: "title",
      width: 200,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 100,
    },
    {
      title: "Category",
      dataIndex: "category",
      width: 80,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 50,
      render: (data) => (
        <Space size={"middle"}>
          <a>
            <AiOutlineEdit style={{ color: "primary" }} />
          </a>
          <a onClick={() => dispatch(deleteProducts(data._id))}>
            <AiOutlineDelete style={{ color: "red" }} />
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
      <div className="flex">
        <BoldText type="size16">Product List</BoldText>
        <Button
          type={"success"}
          width={30}
          height={30}
          onClick={() => navigate("/admin/addproduct")}
        >
          <BiAddToQueue />
        </Button>
      </div>
      <Table columns={columns} data={products} />
    </Container>
  );
};

export default AdminProductList;
