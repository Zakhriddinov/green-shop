import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { getCategory } from "../../redux/category/categorySlice";
// import { getProducts } from "../../redux/product/productSlice";
import Filter from "../Filter";
import { Button } from "../Generic";
import Select from "../Generic/Select";
import Pagination from "../Pagination";
import ProductCard from "../ProductCard";
import { Container, Wrap } from "./style";

const Products = () => {
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.categories);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    request({ url: `/products${search}` }).then((res) => {
      setProducts(res || []);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  
  console.log(search);
  // useEffect(() => {
  //   dispatch(getProducts(search));
  // }, [dispatch, search]);
  // console.log(search);

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
