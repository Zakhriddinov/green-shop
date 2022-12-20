import { Container, Img, ImageWrapper } from "./style";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = ({ images }) => {
  return (
    <Container>
      <ImageWrapper>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          axis="vertical"
        >
          {images?.map((value, id) => (
            <Img key={id}>
              <img alt="image" src={value.url} />
            </Img>
          ))}
        </Carousel>
      </ImageWrapper>
    </Container>
  );
};

export default ImageCarousel;
