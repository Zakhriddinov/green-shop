import { Advertising, Container, Content, SliderAnt } from "./style";
import { Button } from "../Generic";
import img from "../../assets/images/img.png";
import supers from "../../assets/images/supers.png";

const Filter = ({
  category = {},
  onClickCategory,
  rangeSelector,
  value,
  query,
}) => {
  return (
    <Container>
      <Content>
        <Content.Title>Categories</Content.Title>
        <Content.List>
          {category?.map((value) => (
            <Content.Item
              key={value._id}
              onClick={() => onClickCategory(value?.name)}
            >
              <p>{value.name}</p>
              <p>(33)</p>
            </Content.Item>
          ))}
        </Content.List>
        <Content.Title top>Price Range</Content.Title>
        <Content.List>
          <SliderAnt
            defaultValue={30}
            onChange={rangeSelector}
            max={1600}
            value={query.get("priceTo") || 30}
          />
          <p>
            Price: <span>${value}</span>
          </p>
          <Button
            type="success"
            width={90}
            height={35}
            style={{ display: "none" }}
          >
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
