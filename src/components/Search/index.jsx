import { Dropdown } from "antd";
import { Container, MenuWrapper, Section } from "./style";
import { Button, Input } from "../Generic";
import { default as searchIcon } from "../../assets/icons/search.svg";

const Search = () => {
  const menu = (
    <MenuWrapper>
      <Section>
        <Input placeholder="Search" />
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        trigger="click"
      >
        <div>
          <Button width={"100%"}>
            <img src={searchIcon} alt="search icon" />
          </Button>
        </div>
      </Dropdown>
    </Container>
  );
};

export default Search;
