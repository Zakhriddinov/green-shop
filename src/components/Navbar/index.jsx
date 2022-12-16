import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Main,
  Section,
  Wrapper,
  Link,
  Basket,
  Icon,
  Mobile,
  MobileLink,
  Menu,
} from "./style";
import logo from "../../assets/images/logo.png";
import navbar from "../../utils/navbar";
import Footer from "../Footer";
import Search from "../Search";
import { Button } from "../Generic";
import { Dropdown } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item data-name="myprofile">My Profile</Menu.Item>
      <Menu.Item data-name="favourite">Favourites</Menu.Item>
      <Menu.Item data-name="logout">Log out</Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <img src={logo} alt="logo" />
          </Section>
          <Section>
            <Search icon={<Icon.Search />} />
            <Link to="/">
              <Basket>
                <Icon.Basket />
                <div className="count">99</div>
              </Basket>
            </Link>
            <div className="avatar">
              <Dropdown
                overlay={menu}
                placement="topRight"
                arrow={{ pointAtCenter: true }}
                trigger="click"
              >
                <Button type="dark" width="35" height="35">
                  <Icon.User />
                </Button>
              </Dropdown>
            </div>
            {/* <Button type="success" width="100" height="35">
                <Icon.Login />
                Login
              </Button> */}
          </Section>
        </Wrapper>
        <Mobile>
          {navbar.map(({ title, path, hidden, Icon, basket }, index) => {
            return (
              !hidden && (
                <>
                  <MobileLink
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {basket && (
                      <Basket>
                        <div className="count">99</div>
                      </Basket>
                    )}
                    <Icon />
                    {title}
                  </MobileLink>
                </>
              )
            );
          })}
        </Mobile>
      </Main>
      <div className="menu_line"></div>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
