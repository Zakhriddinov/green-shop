import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import instance from "../../axios";
import ProductCard from "../ProductCard";
import "slick-carousel/slick/slick.css";
import BoldText from "../Generic/Typography/BoldText";
import { Header } from "./style";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Carousel = ({ text }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const onSelect = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    const getAPis = async () => {
      instance.get("/products").then((res) => {
        setProducts(res?.data?.products);
      });
    };
    getAPis();
  }, []);
  return (
    <>
      <Header>
        <BoldText type="size18" style={{ color: "var(--colorGreen)" }}>
          {text}
        </BoldText>
        <div className="line"></div>
      </Header>
      <Slider {...settings}>
        {products?.map((value) => (
          <ProductCard
            data={value}
            key={value._id}
            top
            onClick={() => onSelect(value._id)}
          />
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
