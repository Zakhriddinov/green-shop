import Button from "../../../Generic/Button";
import Modal from "../../../Generic/Modal";
import Textarea from "../../../Generic/Textarea";
import BoldText from "../../../Generic/Typography/BoldText";
import Paragraph from "../../../Generic/Typography/Paragraph";
import { Container, SelectAnt, UserInfo, Wrapper } from "./style";
import { Rating } from "react-simple-star-rating";

const WriteReview = ({
  product,
  formik,
  isModalOpen,
  showModal,
  handleOk,
  reviewCreated,
}) => {
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
        handleCancel={handleOk}
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
          <span
            style={{
              color: "red",
              fontFamily: "CeraPro-Medium,sans-serif",
            }}
          >
            {reviewCreated}
          </span>
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
