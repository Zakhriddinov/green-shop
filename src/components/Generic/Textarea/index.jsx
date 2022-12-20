import React from "react";
import { Container } from "./style";

const Textarea = ({
  children,
  type,
  onChange,
  value,
  defaultValue,
  placeholder,
  name,
  width,
  height,
  style,
}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
      style={style}
    >
      {children}
    </Container>
  );
};

export default Textarea;
