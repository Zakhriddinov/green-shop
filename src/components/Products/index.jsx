import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCategory } from "../../redux/category/categorySlice";
import { fetchProducts } from "../../redux/product/productSlice";
import Filter from "../Filter";
import { Button } from "../Generic";
import Select from "../Generic/Select";
import Pagination from "../Pagination";
import ProductCard from "../ProductCard";
import { Container, Wrap } from "./style";

const Products = () => {
  const { category } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onSelect = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <Container>
      <Filter category={category} />
      <Wrap>
        <div className="sort">
          <Button type="category" width={30} height={30}>
            <Wrap.Icon />
          </Button>
          <span className="span">Sort by:</span>
          <Select />
        </div>

        <div className="wrapper">
          {products?.products?.map((value) => (
            <ProductCard
              data={value}
              key={value._id}
              top
              onClick={() => onSelect(value._id)}
            />
          ))}
        </div>
        <Pagination />
      </Wrap>
    </Container>
  );
};

export default Products;
