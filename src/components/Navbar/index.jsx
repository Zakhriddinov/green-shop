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
import { useState } from "react";
import Modal from "../Register";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate(`/home`);
    } else {
      navigate(`${name}`);
    }
  };
  const menu = (
    <Menu>
      <Menu.Item data-name="profile" onClick={onClickProfile}>
        My Profile
      </Menu.Item>
      <Menu.Item data-name="favorites" onClick={onClickProfile}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log out
      </Menu.Item>
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
              {token ? (
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
              ) : (
                <Button
                  type="success"
                  width="100"
                  height="35"
                  onClick={showModal}
                >
                  <Icon.Login />
                  Login
                </Button>
              )}
            </div>

            <Modal
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={handleCancel}
              setIsModalOpen={setIsModalOpen}
            />
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
