import { Container, Content, Icon, Info, Line, Wrapper } from "./style";
import accept from "../../assets/images/accept.png";
import logo from "../../assets/images/logo.png";
import graden from "../../assets/images/graden.png";
import plant from "../../assets/images/plant.png";
import { Input } from "../Generic";

const Why = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Top>
          <Content>
            <div className="circle">
              <img src={graden} alt="" />
            </div>
            <Content.Title>Garden Care</Content.Title>
            <Info.Item>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </Info.Item>
          </Content>
          <Line />
          <Content>
            <div className="circle">
              <img src={plant} alt="" />
            </div>
            <Content.Title>Plant Renovation</Content.Title>
            <Info.Item>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </Info.Item>
          </Content>
          <Line />
          <Content >
            <div className="circle">
              <img src={graden} alt="" />
            </div>
            <Content.Title>Watering Graden</Content.Title>
            <Info.Item>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </Info.Item>
          </Content>
          <Content className="input">
            <Content.Title>Would you like to join newsletters?</Content.Title>
            <Input placeholder="enter your email address..."/>
            <Info.Item>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </Info.Item>
          </Content>
        </Wrapper.Top>
        <Wrapper.Center>
          <img src={logo} alt="logoIcon" />
          <Info>
            <Icon.Map />
            <Info.Item>
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </Info.Item>
          </Info>
          <Info>
            <Icon.Mail />
            <Info.Item>contact@greenshop.com</Info.Item>
          </Info>
          <Info>
            <Icon.Phone />
            <Info.Item>+88 01911 717 490</Info.Item>
          </Info>
        </Wrapper.Center>
        <Wrapper.Bottom>
          <Content>
            <Content.Title>My Account</Content.Title>

            <Content.Item to="/">My Account</Content.Item>
            <Content.Item to="/">Our stores</Content.Item>
            <Content.Item to="/">Contact us</Content.Item>
            <Content.Item to="/">Career</Content.Item>
            <Content.Item to="/">Specials</Content.Item>
          </Content>
          <Content>
            <Content.Title>Help & Guide</Content.Title>

            <Content.Item to="/">My Account</Content.Item>
            <Content.Item to="/">Our stores</Content.Item>
            <Content.Item to="/">Contact us</Content.Item>
            <Content.Item to="/">Career</Content.Item>
            <Content.Item to="/">Specials</Content.Item>
          </Content>
          <Content>
            <Content.Title>Categories</Content.Title>

            <Content.Item to="/">My Account</Content.Item>
            <Content.Item to="/">Our stores</Content.Item>
            <Content.Item to="/">Contact us</Content.Item>
            <Content.Item to="/">Career</Content.Item>
            <Content.Item to="/">Specials</Content.Item>
          </Content>
          <Content>
            <Content.Title>Social Media</Content.Title>
            <Content.Title>We accept</Content.Title>
            <img src={accept} alt="acceptImg" />
          </Content>
        </Wrapper.Bottom>
        <Wrapper.Info>
          <Content.Item>© 2021 GreenShop. All Rights Reserved.</Content.Item>
        </Wrapper.Info>
      </Wrapper>
    </Container>
  );
};

export default Why;
