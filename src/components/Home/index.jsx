import React from "react";
import Carusel from "../Carusel";
import Products from "../Products";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carusel />
        <Products />
    </Container>
  );
};

export default Home;
