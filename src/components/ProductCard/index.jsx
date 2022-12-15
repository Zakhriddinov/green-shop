import React from "react";
import { Container, Content, HoverElement, ImageWrap, Links } from "./style";

const ProductCard = ({ data = {}, onClick, top }) => {
  const { title, price, images } = data;

  const Link = (
    <>
      <Links to="/">
        <Links.Basket />
      </Links>
      <Links to="/">
        <Links.Heart />
      </Links>
      <Links to="/">
        <Links.Search />
      </Links>
    </>
  );
  return (
    <Container onClick={onClick} top={top}>
      <ImageWrap>
        <ImageWrap.Img src={images ? images[0]?.url : "noimage"} alt={title} />
        <HoverElement>{Link}</HoverElement>
      </ImageWrap>
      <Content>
        <Content.Title>{title}</Content.Title>
        <Content.Price>${price}</Content.Price>
      </Content>
    </Container>
  );
};

export default ProductCard;
