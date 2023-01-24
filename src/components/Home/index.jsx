import React from "react";
import Carusel from "../Carusel";
// import Posts from "../Posts";
import Products from "../Products";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carusel />
      <Products />
      {/* <Posts /> */}
    </Container>
  );
};

export default Home;
