import { Carousel } from "antd";
import { Container, Wrapper } from "./style";
import { Button } from "../Generic";
import img from "../../assets/images/img.png";
const GetCarusel = () => {
  return (
    <Container>
      <Carousel effect="fade">
        <Wrapper>
          <Wrapper.Info>
            <h3>Welcome to GreenShop</h3>

            <h1>
              Let’s Make a Better{" "}
              <span style={{ color: "#46A358" }}>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.<span> Use our plants to create an unique Urban Jungle.
              Order your favorite plants!</span> 
            </p>
            <Button type="success" width={120} height={40}>
              SHOP NOW
            </Button>
          </Wrapper.Info>
          <Wrapper.Img>
            <img src={img} alt="" />
          </Wrapper.Img>
        </Wrapper>
        <Wrapper>
          <Wrapper.Info>
            <h3>Welcome to GreenShop</h3>

            <h1>
              Let’s Make a Better{" "}
              <span style={{ color: "#46A358" }}>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.<span> Use our plants to create an unique Urban Jungle.
              Order your favorite plants!</span> 
            </p>
            <Button type="success" width={120} height={40}>
              SHOP NOW
            </Button>
          </Wrapper.Info>
          <Wrapper.Img>
            <img src={img} alt="" />
          </Wrapper.Img>
        </Wrapper>
        <Wrapper>
          <Wrapper.Info>
            <h3>Welcome to GreenShop</h3>

            <h1>
              Let’s Make a Better{" "}
              <span style={{ color: "#46A358" }}>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.<span> Use our plants to create an unique Urban Jungle.
              Order your favorite plants!</span> 
            </p>
            <Button type="success" width={120} height={40}>
              SHOP NOW
            </Button>
          </Wrapper.Info>
          <Wrapper.Img>
            <img src={img} alt="" />
          </Wrapper.Img>
        </Wrapper>
      </Carousel>
    </Container>
  );
};

export default GetCarusel;
