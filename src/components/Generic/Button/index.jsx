import { Container } from "./styled";

const Button = ({
  children,
  type,
  onClick,
  width,
  height,
  disabled,
  icon,
  size,
  style,
}) => {
  return (
    <Container
      disabled={disabled}
      onClick={onClick}
      type={type}
      width={width}
      height={height}
      icon={icon}
      size={size}
      style={style}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
