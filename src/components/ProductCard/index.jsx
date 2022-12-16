import React from "react";
import { Container, Content, HoverElement, ImageWrap, Links } from "./style";

const ProductCard = ({ data = {}, onClick, top }) => {
  const { title, price, images } = data;

  const Link = (
    <>
      <Links to="/shopping-cart">
        <Links.Basket />
      </Links>
      <Links to="/favorites">
        <Links.Heart />
      </Links>
      <Links to="/">
        <Links.Search />
      </Links>
    </>
  );
  return (
    <Container top={top}>
      <ImageWrap onClick={onClick}>
        <ImageWrap.Img src={images ? images[0]?.url : "noimage"} alt={title} />
      </ImageWrap>
      <HoverElement>{Link}</HoverElement>
      <Content>
        <Content.Title>{title}</Content.Title>
        <Content.Price>${price}</Content.Price>
      </Content>
    </Container>
  );
};

export default ProductCard;
