import { Advertising, Container, Content, SliderAnt } from "./style";
import { Button } from "../Generic";
import img from "../../assets/images/img.png";
import supers from "../../assets/images/supers.png";
const Filter = ({ category = {} }) => {
  return (
    <Container>
      <Content>
        <Content.Title>Categories</Content.Title>
        <Content.List>
          {category?.map((value, idx) => (
            <Content.Item key={idx}>
              <p>{value.name}</p>
              <p>(33)</p>
            </Content.Item>
          ))}
        </Content.List>
        <Content.Title top>Price Range</Content.Title>
        <Content.List>
          <SliderAnt range defaultValue={[0, 1230]} />
          <p>
            Price: <span>$39 - $1200</span>
          </p>
          <Button type="success" width={90} height={35}>
            Filter
          </Button>
        </Content.List>
        <Content.Title top>Size</Content.Title>
        <Content.List>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Content.Item key={idx}>
              <p>Small</p>
              <p>(33)</p>
            </Content.Item>
          ))}
        </Content.List>
      </Content>
      <Advertising>
        <img src={supers} alt="img" className="supers" />
        <Content.Title style={{ textAlign: "center" }}>
          UP TO 75% OFF
        </Content.Title>
        <img src={img} alt="img" className="adv" />
      </Advertising>
    </Container>
  );
};

export default Filter;
