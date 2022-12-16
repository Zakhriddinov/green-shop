import { Dropdown } from "antd";
import { Container, MenuWrapper, MobileSearch, Section } from "./style";
import { Button, Input } from "../Generic";
import SearchIcon from "../../assets/icons/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import { useEffect, useRef } from "react";
import { uzeReplace } from "../../hooks/useReplace";

const Search = ({ icon }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();
  const searchRef = useRef();
  useEffect(() => {}, [location?.search]);

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const menu = (
    <MenuWrapper>
      <Section>
        <Input
          placeholder="Search"
          name="search"
          ref={searchRef}
          onChange={onChange}
          defaultValue={query.get("search")}
        />
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
