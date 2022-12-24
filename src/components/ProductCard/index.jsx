import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { Container, Content, HoverElement, ImageWrap, Links } from "./style";

const ProductCard = ({ data = {}, onClick, top }) => {
  const { title, price, images } = data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const productItem = {
      productId: data._id,
      title: data.title,
      price: data.price,
      images: data.images[0].url ?? null,
    };
    dispatch(addToCart(productItem));
  };
  const Link = (
    <>
      <Links onClick={handleAddToCart}>
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
