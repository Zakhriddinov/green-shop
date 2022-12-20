import { useState } from "react";
import Button from "../../../Generic/Button";
import Modal from "../../../Generic/Modal";
import Textarea from "../../../Generic/Textarea";
import BoldText from "../../../Generic/Typography/BoldText";
import Paragraph from "../../../Generic/Typography/Paragraph";
import { Container, SelectAnt, UserInfo, Wrapper } from "./style";

const WriteReview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
        <Textarea placeholder="Description" style={{ margin: "10px" }} />
        <SelectAnt defaultValue={"Your rating"} bordered={false}>
          <SelectAnt.Option>Your rating</SelectAnt.Option>
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
      </Modal>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Wrapper key={idx}>
          <UserInfo>
            <div className="left">
              <div className="img">
                <UserInfo.Icon />
              </div>
              <div className="info">
                <BoldText type="size14" style={{ color: "var(--colorBlack)" }}>
                  Sardor Zakhriddinov
                </BoldText>
                •••
              </div>
            </div>
            <div className="right">
              <Paragraph type="col72" color="#727272">
                30.12.2022
              </Paragraph>
            </div>
          </UserInfo>
          <Paragraph type="col72" color="#727272">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            repudiandae voluptates error minima? Blanditiis dolorem, asperiores,
            repellat maiores tenetur fugiat sint non dolor vitae exercitationem
            voluptatem itaque alias, reiciendis magnam!
          </Paragraph>
        </Wrapper>
      ))}
    </Container>
  );
};

export default WriteReview;
