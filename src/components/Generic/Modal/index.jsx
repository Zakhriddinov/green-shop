import { Container } from "./style";

const Modal = ({
  children,
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}) => {
  return (
    <Container open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {children}
    </Container>
  );
};

export default Modal;
