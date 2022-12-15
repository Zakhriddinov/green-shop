import { Container, Content, SliderAnt } from "./style";
import { Button } from "../Generic";

const Filter = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Categories</Content.Title>
        <Content.List>
          {Array.from({ length: 9 }).map((_, idx) => (
            <Content.Item key={idx}>
              <p>House Plants</p>
              <p>(33)</p>
            </Content.Item>
          ))}
        </Content.List>
        <Content.Title>Price Range</Content.Title>
        <Content.List>
          <SliderAnt range defaultValue={[0, 1230]} />
          <p>
            Price: <span>$39 - $1200</span>
          </p>
          <Button type="success" width={90} height={35}>
            Filter
          </Button>
        </Content.List>
        <Content.Title>Size</Content.Title>
        <Content.List>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Content.Item key={idx}>
              <p>Small</p>
              <p>(33)</p>
            </Content.Item>
          ))}
        </Content.List>
      </Content>
    </Container>
  );
};

export default Filter;
