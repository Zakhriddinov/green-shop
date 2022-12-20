import React from "react";
import { Rating } from "react-simple-star-rating";
import Button from "../../Generic/Button";
import Paragraph from "../../Generic/Typography/Paragraph";
import { Content, Icon } from "./style";

const ProductInfo = ({ product }) => {
  console.log(product);
  return (
    <Content>
      <Content.Title>{product?.title}</Content.Title>
      <Content.Header>
        <div className="price">${product?.price}.00</div>
        <Paragraph type="size15" color={"var(--colorBlack)"}>
          <Rating readonly size={20} initialValue={product.rating} />{" "}
          {product?.reviewsNumber} Customer Review
        </Paragraph>
      </Content.Header>
      <Content.Info>
        <h3>Short Description</h3>
        <Paragraph type="col72" color="#727272">
          {product?.description}
        </Paragraph>
        <h3 style={{ marginTop: "24px" }}>Size:</h3>
        <div className="size">
          {product?.size?.map((item, idx) => (
            <Button key={idx} type="size" width={28} height={28}>
              {item.toUpperCase()}
            </Button>
          ))}
        </div>
        <div className="size">
          <Button type={"success"} width={33} height={38} size>
            -
          </Button>
          <Paragraph type="size15" color={"var(--colorBlack)"}>
            1
          </Paragraph>
          <Button type={"success"} width={33} height={38} size>
            +
          </Button>
          <Button type={"success"} width={130} height={40}>
            BUY NOW
          </Button>
          <Button type={"outline-cart"} width={130} height={40}>
            ADD TO CART
          </Button>
          <Button type={"outline-cart"} width={40} height={40}>
            <Icon.Heart />
          </Button>
        </div>
        <div className="info">
          <Paragraph type="size15" color={"#A5A5A5"}>
            SKU:{" "}
            <span style={{ color: "var(--colorBlack)" }}>{product?._id}</span>
          </Paragraph>
          <Paragraph
            type="size15"
            color={"#A5A5A5"}
            style={{ margin: "10px 0px 10px 0" }}
          >
            Categories:{" "}
            <span style={{ color: "var(--colorBlack)" }}>
              {product?.category}
            </span>
          </Paragraph>
          <Paragraph type="size15" color={"#A5A5A5"}>
            Tags:{" "}
            {product?.tags?.map((item, idx) => (
              <span style={{ color: "var(--colorBlack)" }} key={idx}>
                {item}
              </span>
            ))}
          </Paragraph>
        </div>
        <div className="size">
          <h3>Share this products: </h3>
          <a href="#">
            <Icon.Facebook />
          </a>
          <a href="#">
            <Icon.Twitter />
          </a>
          <a href="#">
            <Icon.Instagram />
          </a>
          <a href="#">
            <Icon.Linkedin />
          </a>
        </div>
      </Content.Info>
    </Content>
  );
};

export default ProductInfo;
