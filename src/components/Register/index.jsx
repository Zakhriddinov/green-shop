import React from "react";
import Signin from "../Signin";
import Signup from "../Signup";
import { AntTabs, Container, ModalAnt } from "./style";

const Modal = ({ isModalOpen, handleOk, handleCancel, setIsModalOpen }) => {
  const isSuccess = () => setIsModalOpen(false);
  return (
    <ModalAnt open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Container>
        <AntTabs
          centered
          defaultActiveKey="1"
          items={[
            {
              label: `Login`,
              key: "1",
              children: <Signin isSuccess={isSuccess} />,
            },

            {
              label: `Register`,
              key: "2",
              children: <Signup onOk={handleOk} isSuccess={isSuccess}/>,
            },
          ]}
        />
      </Container>
    </ModalAnt>
  );
};

export default Modal;
