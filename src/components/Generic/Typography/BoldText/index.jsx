import { Container } from "./style";

const BoldText = ({ children, type, style }) => {
  return (
    <Container type={type} style={style}>
      {children}
    </Container>
  );
};

export default BoldText;
