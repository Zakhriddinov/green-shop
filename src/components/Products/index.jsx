import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/product/productSlice";
import Filter from "../Filter";
import Select from "../Generic/Select";
import Pagination from "../Pagination";
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

  return (
    <Container>
      <Filter />
      <Wrap>
        <div className="sort">
          <span>Short by:</span>
          <Select />
        </div>
        <div className="wrapper">
          {products?.products
            ?.map((value) => (
              <ProductCard
                data={value}
                key={value._id}
                top
                onClick={() => onSelect(value._id)}
              />
            ))
            .slice(2)}
        </div>
        <Pagination />
      </Wrap>
    </Container>
  );
};

export default Products;
