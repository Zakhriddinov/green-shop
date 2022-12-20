import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/product/productSlice";
import { Container, Wrapper } from "./style";
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import DescriptionReviewTab from "./DescriptionReviewTab";

const ProductDetails = () => {
  const { product } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Container>
      <Wrapper>
        <ImageCarousel images={product?.images} />
        <ProductInfo product={product} />
      </Wrapper>
      <DescriptionReviewTab product={product} />
    </Container>
  );
};

export default ProductDetails;
