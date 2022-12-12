import { Dropdown } from "antd";
import { Container, MenuWrapper, MobileSearch, Section } from "./style";
import { Button, Input } from "../Generic";
import SearchIcon from "../../assets/icons/search.svg";

const Search = ({ icon }) => {
  const menu = (
    <MenuWrapper>
      <Section>
        <Input placeholder="Search" />
      </Section>
    </MenuWrapper>
  );
  return (
    <>
      <Container>
        <Dropdown
          overlay={menu}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          trigger="click"
          className="search"
        >
          <div>
            <Button width={"100%"}>
              <SearchIcon />
            </Button>
          </div>
        </Dropdown>
      </Container>
      <MobileSearch>
        <Input icon={icon} height={34} />
      </MobileSearch>
    </>
  );
};

export default Search;
