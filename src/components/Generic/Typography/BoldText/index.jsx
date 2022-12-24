import { Container } from "./style";

const BoldText = ({ children, type, style, onClick }) => {
  return (
    <Container type={type} style={style} onClick={onClick}>
      {children}
    </Container>
  );
};

export default BoldText;
