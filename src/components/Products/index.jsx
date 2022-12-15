import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/product/productSlice";
import Filter from "../Filter";
import ProductCard from "../ProductCard";
import { Container, Wrap } from "./style";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onSelect = (id) => {
    navigate(`/products/${id}`);
  };
  console.log(products);
  return (
    <Container>
      <Filter />
      <Wrap>
        {products?.products?.map((value) => (
          <ProductCard
            data={value}
            key={value._id}
            top
            onClick={() => onSelect(value._id)}
          />
        ))}
      </Wrap>
    </Container>
  );
};

export default Products;
