import React from "react";
import { Container } from "./style";

const Paragraph = ({ children, type, color, style }) => {
  return (
    <Container type={type} color={color} style={style}>
      {children}
    </Container>
  );
};

export default Paragraph;
