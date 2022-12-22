import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../redux/product/productSlice";
import { Container, Wrapper } from "./style";
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import DescriptionReviewTab from "./DescriptionReviewTab";
import { useFormik } from "formik";
import instance from "../../axios";

const ProductDetails = () => {
  const { product } = useSelector((state) => state.products);
  const { id } = useParams();
  const [reviewCreated, setReviewCreated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      comment: "",
      rating: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await instance
        .post(`/users/review/${product._id}`, { ...values }, config)
        .then((res) => {
          if (res) {
            navigate(`/products/${product._id}`);
            handleOk();
            setReviewCreated(true);
          }
        })
        .catch((er) =>
          setReviewCreated(
            er.response.data.message
              ? er.response.data.message
              : er.response.data
          )
        );
    },
  });

  useEffect(() => {
    dispatch(getProduct(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, reviewCreated]);

  return (
    <Container>
      <Wrapper>
        <ImageCarousel images={product?.images} />
        <ProductInfo product={product} />
      </Wrapper>
      <DescriptionReviewTab
        product={product}
        formik={formik}
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        reviewCreated={reviewCreated}
      />
    </Container>
  );
};

export default ProductDetails;
