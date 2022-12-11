import { Container } from "./styled";

const Button = ({ children, type, onClick, width, height, disabled, icon }) => {
  return (
    <Container
      disabled={disabled}
      onClick={onClick}
      type={type}
      width={width}
      height={height}
      icon={icon}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
