import { useState } from "react";
import instance from "../../../../axios";
import Button from "../../../Generic/Button";
import Modal from "../../../Generic/Modal";
import Textarea from "../../../Generic/Textarea";
import BoldText from "../../../Generic/Typography/BoldText";
import Paragraph from "../../../Generic/Typography/Paragraph";
import { Container, SelectAnt, UserInfo, Wrapper } from "./style";
import { Rating } from "react-simple-star-rating";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const WriteReview = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      comment: "",
      rating: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
      await instance
        .post(`/users/review/${product._id}`, { ...values }, config)
        .then((res) => {
          if (res) {
            console.log(res);
            navigate(`/products/${product._id}`);
            handleOk();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <Container>
      <div className="buttonStyle">
        <Button
          type={"success"}
          style={{ borderRadius: "0px" }}
          onClick={showModal}
        >
          Write a Review
        </Button>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
      >
        <BoldText
          type="size14"
          style={{ color: "var(--colorBlack)", textAlign: "center" }}
        >
          Write a Review
        </BoldText>
        <form onSubmit={formik.handleSubmit}>
          <Textarea
            placeholder="Description"
            style={{ margin: "10px" }}
            onChange={formik.handleChange}
            name="comment"
          />
          <SelectAnt
            bordered={false}
            onChange={(value) => formik.setFieldValue("rating", value)}
            name="rating"
            value={formik.values.rating}
            defaultValue="rating"
          >
            <SelectAnt.Option value="">Rating</SelectAnt.Option>
            <SelectAnt.Option value="5">5 (very good)</SelectAnt.Option>
            <SelectAnt.Option value="4">4 (good)</SelectAnt.Option>
            <SelectAnt.Option value="3">3 (average)</SelectAnt.Option>
            <SelectAnt.Option value="2">2 (bad)</SelectAnt.Option>
            <SelectAnt.Option value="1">1 (awful)</SelectAnt.Option>
          </SelectAnt>
          <Button
            type={"success"}
            style={{ borderRadius: "0px", marginTop: "20px" }}
          >
            Send
          </Button>
        </form>
      </Modal>
      {product?.reviews?.map((value, idx) => (
        <Wrapper key={idx}>
          <UserInfo>
            <div className="left">
              <div className="img">
                <UserInfo.Icon />
              </div>
              <div className="info">
                <BoldText type="size14" style={{ color: "var(--colorBlack)" }}>
                  {value?.user?.name}
                </BoldText>
                <Rating readonly size={15} initialValue={value?.rating} />
              </div>
            </div>
            <div className="right">
              <Paragraph type="col72" color="#727272">
                {value?.createdAt?.substring(0, 10)}
              </Paragraph>
            </div>
          </UserInfo>
          <Paragraph type="col72" color="#727272">
            {value?.comment}
          </Paragraph>
        </Wrapper>
      ))}
    </Container>
  );
};

export default WriteReview;
