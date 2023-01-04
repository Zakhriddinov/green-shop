import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { uzeReplace } from "../../hooks/useReplace";
import useSearch from "../../hooks/useSearch";
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
  const query = useSearch();
  const [value, setValue] = useState(30);

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

  const onChangeSort = (sort) => {
    navigate(`/home${uzeReplace("sort", sort)}`);
  };
  const onClickCategory = (category_name) => {
    console.log(category_name);
    navigate(`/home${uzeReplace("category", category_name)}`);
  };
  const rangeSelector = (event) => {
    setValue(event);
    navigate(`/home${uzeReplace("priceTo", event)}`);
  };
  return (
    <Container>
      <Filter
        category={category}
        onClickCategory={onClickCategory}
        rangeSelector={rangeSelector}
        value={value}
        query={query}
      />
      <Wrap>
        <div className="sort">
          <Button type="category" width={30} height={30}>
            <Wrap.Icon />
          </Button>
          <span className="span">Sort by:</span>
          <Select
            onChange={onChangeSort}
            defaultValue={query.get("sort") || "Default sorting"}
          />
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
        <Pagination data={products} />
      </Wrap>
    </Container>
  );
};

export default Products;
